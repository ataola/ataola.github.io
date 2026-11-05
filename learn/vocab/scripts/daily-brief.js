#!/usr/bin/env node
/* 每日简报：六语各一词 + 每日一句，输出微信文本 + 一张海报
 * 用法：node scripts/daily-brief.js [YYYY-MM-DD]
 * 依赖：Playwright（NODE_PATH 指向 workspace/scripts/node_modules）
 */
const fs = require("fs");
const { execFileSync } = require("child_process");
const path = require("path");

const DIR = path.join(__dirname, "..");
const OUT = "/tmp/vocab-daily";

global.window = {};
require(path.join(DIR, "data.js"));
const LANGS = ["en", "ja", "ko", "th", "ms", "id", "es", "fr", "de"];
for (const l of LANGS) {
  const f = path.join(DIR, `data-${l}.js`);
  if (fs.existsSync(f)) require(f);
}
try { require(path.join(DIR, "data-daily.js")); } catch (e) { /* 可选 */ }

const EXTRA = {
  en: window.VOCAB_EXTRA_EN, ja: window.VOCAB_EXTRA_JA, ko: window.VOCAB_EXTRA_KO,
  th: window.VOCAB_EXTRA_TH, ms: window.VOCAB_EXTRA_MS, id: window.VOCAB_EXTRA_ID,
  es: window.VOCAB_EXTRA_ES, fr: window.VOCAB_EXTRA_FR, de: window.VOCAB_EXTRA_DE
};
for (const l of LANGS) {
  const d = window.VOCAB_DATA[l];
  const ex = EXTRA[l];
  if (ex && ex.length) d.words = d.words.concat(ex.filter((x) => !x.kind || x.kind === "word"));
}

const META = {
  en: { name: "英语", native: "English", flag: "🇬🇧", mark: "EN", accent: "#1d4ed8" },
  ja: { name: "日语", native: "日本語", flag: "🇯🇵", mark: "あ", accent: "#cf4520" },
  ko: { name: "韩语", native: "한국어", flag: "🇰🇷", mark: "한", accent: "#0a7d5e" },
  th: { name: "泰语", native: "ไทย", flag: "🇹🇭", mark: "ก", accent: "#6d28d9" },
  ms: { name: "马来语", native: "Melayu", flag: "🇲🇾", mark: "M", accent: "#0e7490" },
  id: { name: "印尼语", native: "Indonesia", flag: "🇮🇩", mark: "I", accent: "#b45309" },
  es: { name: "西班牙语", native: "Español", flag: "🇪🇸", mark: "ES", accent: "#b02a37" },
  fr: { name: "法语", native: "Français", flag: "🇫🇷", mark: "FR", accent: "#4338ca" },
  de: { name: "德语", native: "Deutsch", flag: "🇩🇪", mark: "DE", accent: "#374151" }
};

const date = process.argv[2] || new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Shanghai" });
const seed = Math.floor(new Date(date + "T00:00:00+08:00").getTime() / 86400000);

function pick(arr, n) { return arr[((n % arr.length) + arr.length) % arr.length]; }
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

/* 今日主题：同一天六语共用同一主题，语义互相对应，便于横向记忆 */
const THEMES = [
  ["daily", "日常"], ["food", "餐饮"], ["travel", "出行"], ["work", "职场"],
  ["study", "学习"], ["health", "健康"], ["emotion", "情绪"], ["tech", "科技"]
];
const theme = pick(THEMES, seed);

/* 六个词：主题内按日期错开索引，同一词不会连续多天重复 */
const words = LANGS.map((l, i) => {
  const all = window.VOCAB_DATA[l].words;
  const pool = all.filter((w) => (w.tags || []).includes(theme[0]));
  const list = pool.length >= 8 ? pool : all;
  const w = pick(list, seed * 7 + i * 53);
  return { lang: l, ...w };
});

/* 每日一句：轮转一条，六语并列 */
const SENTS = window.DAILY_SENTENCES || [];
/* 印尼语在句库里键名是 idn（避免和记录 id 冲突） */
const sentOf = (o, l) => (o ? o[l === "id" ? "idn" : l] : null);
const sent = SENTS.length ? pick(SENTS, seed) : null;
const sentLang = sent ? pick(LANGS, seed) : null;

function fmtWord(x) {
  const m = META[x.lang];
  return {
    ...m,
    lang: x.lang,
    term: x.term,
    reading: x.reading || "",
    meaning: x.meaning || x.mean || "",
    pos: x.pos || "",
    example: x.example || "",
    exampleZh: x.exampleZh || ""
  };
}
const rows = words.map(fmtWord);

/* ---------- 文本 ---------- */
const lines = [];
lines.push(`📖 每日一词 · ${date}　主题：${theme[1]}`);
lines.push("");
for (const r of rows) {
  lines.push(`${r.flag} ${r.name}｜${r.term}${r.reading ? `（${r.reading}）` : ""}`);
  lines.push(`　${r.pos ? r.pos + " · " : ""}${r.meaning}`);
  if (r.example) lines.push(`　${r.example}`);
  if (r.exampleZh) lines.push(`　${r.exampleZh}`);
  lines.push("");
}
if (sent) {
  lines.push(`✍️ 每日一句 · ${sent.zh}`);
  lines.push("");
  for (const l of LANGS) {
    const s = sentOf(sent, l);
    if (!s) continue;
    lines.push(`${META[l].flag} ${s.text}`);
    const sub = [s.reading, s.note].filter(Boolean).join("　");
    if (sub) lines.push(`　${sub}`);
  }
  lines.push("");
}
lines.push(`👉 http://192.168.31.39:9098/hub/vocab/`);

/* ---------- 海报配图（Pollinations 免费额度） ---------- */
function posterArt() {
  if (process.env.NO_ART) return null;
  try {
    const out = execFileSync("node", [path.join(__dirname, "poster-art.js"), theme[0], date], {
      encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 120000
    }).trim();
    return out && fs.existsSync(out) ? out : null;
  } catch (e) { return null; }
}
const artPath = posterArt();
const artB64 = artPath ? fs.readFileSync(artPath).toString("base64") : null;

/* ---------- 海报 ---------- */
function fontFace(file, weight, family) {
  try {
    const b = fs.readFileSync(path.join(DIR, "fonts", file)).toString("base64");
    return `@font-face{font-family:'${family || "NotoThai"}';src:url(data:font/woff2;base64,${b}) format('woff2');font-weight:${weight};font-display:block}`;
  } catch (e) { return ""; }
}

function posterHTML() {
  const cards = rows.map((r, i) => `
    <div class="row" style="--a:${r.accent}">
      <div class="lang"><span class="mk">${esc(r.mark)}</span><span>${esc(r.name)}</span><span class="nat">${esc(r.native)}</span></div>
      <div class="body">
        <div class="term"${r.lang === "th" ? ' style="font-family:NotoThai,inherit"' : ""}>${esc(r.term)}</div>
        ${r.reading ? `<div class="reading">${esc(r.reading)}</div>` : ""}
        <div class="meaning">${r.pos ? `<i class="pos">${esc(r.pos)}</i>` : ""}${esc(r.meaning)}</div>
      </div>
      <div class="idx">${String(i + 1).padStart(2, "0")}</div>
    </div>`).join("");

  const sentBlock = sent ? `
    <div class="sent">
      <div class="sent-head">每日一句</div>
      <div class="sent-zh">${esc(sent.zh)}</div>
      ${LANGS.map((l) => sentOf(sent, l) ? `
        <div class="sent-row">
          <span class="sl">${esc(META[l].name)}</span>
          <span class="st"${l === "th" ? ' style="font-family:NotoThai,inherit"' : ""}>${esc(sentOf(sent, l).text)}</span>
        </div>` : "").join("")}
    </div>` : "";

  const head = artB64
    ? `<div class="hero">
        <img class="hero-img" src="data:image/jpeg;base64,${artB64}" alt="">
        <div class="hero-veil"></div>
        <div class="head">
          <div class="title">每日一词<small>今日主题 · ${esc(theme[1])}</small></div>
          <div class="date">${esc(date)}<b>${["周日","周一","周二","周三","周四","周五","周六"][new Date(date + "T00:00:00+08:00").getDay()]}</b></div>
        </div>
      </div>`
    : `<div class="head">
      <div class="title">每日一词<small>今日主题 · ${esc(theme[1])}</small></div>
      <div class="date">${esc(date)}<b>${["周日","周一","周二","周三","周四","周五","周六"][new Date(date + "T00:00:00+08:00").getDay()]}</b></div>
    </div>`;

  return `<!doctype html><html><head><meta charset="utf-8"><style>
    ${fontFace("noto-sans-thai-400.woff2", 400)}
    ${fontFace("noto-sans-thai-600.woff2", 600)}
    ${fontFace("noto-sans-kr-400.woff2", 400, "NotoKR")}
    ${fontFace("noto-sans-kr-700.woff2", 700, "NotoKR")}
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1080px;font-family:"PingFang SC","Noto Sans CJK SC","Source Han Sans SC","Noto Sans SC","Noto Sans JP","Noto Sans KR","Microsoft YaHei",-apple-system,NotoThai,NotoKR,sans-serif;
      background:#f3f0e9;color:#1b1b1f;-webkit-font-smoothing:antialiased}
    .wrap{width:1080px;padding:64px 60px 56px;background:
      radial-gradient(900px 420px at 88% -12%, #e7e0cf 0%, transparent 60%),
      radial-gradient(700px 380px at -8% 106%, #dfe6dd 0%, transparent 58%), #f3f0e9}
    .hero{position:relative;margin:-64px -60px 30px;height:392px;overflow:hidden;
      border-bottom-left-radius:40px;border-bottom-right-radius:40px}
    .hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
    .hero-veil{position:absolute;inset:0;background:
      linear-gradient(0deg,rgba(243,240,233,.97) 0%,rgba(243,240,233,.9) 24%,rgba(243,240,233,.5) 52%,rgba(243,240,233,.1) 100%)}
    .hero .head{position:absolute;left:60px;right:60px;bottom:28px;margin-bottom:0}
    .head{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:34px}
    .title{font-size:52px;font-weight:700;letter-spacing:.02em}
    .title small{display:block;font-size:20px;font-weight:500;color:#6b6a63;letter-spacing:.22em;margin-top:12px}
    .date{text-align:right;font-size:22px;color:#6b6a63;line-height:1.5}
    .date b{display:block;font-size:40px;color:#1b1b1f;font-weight:700;letter-spacing:.01em}
    .rows{border-top:2px solid #1b1b1f}
    .row{display:flex;align-items:center;gap:24px;padding:17px 4px;border-bottom:1px solid rgba(27,27,31,.14)}
    .lang{width:112px;flex:0 0 112px;display:flex;flex-direction:column;align-items:center;gap:6px;
      font-size:19px;color:#6b6a63;font-weight:600}
    .mk{width:44px;height:44px;border-radius:12px;background:var(--a);color:#fff;display:flex;
      align-items:center;justify-content:center;font-size:21px;font-weight:700}
    .nat{font-size:13px;color:#a8a59b;font-weight:500;letter-spacing:.02em;margin-top:-2px}
    .pos{font-style:normal;font-size:16px;color:#8a8880;border:1px solid rgba(27,27,31,.22);
      border-radius:6px;padding:1px 7px;margin-right:9px;vertical-align:2px;font-weight:500}
    .body{flex:1;min-width:0}
    .term{font-size:37px;font-weight:700;line-height:1.24;letter-spacing:.01em;word-break:break-word}
    .reading{font-size:19px;color:#8a8880;margin-top:5px;letter-spacing:.02em}
    .meaning{font-size:23px;color:#33333a;margin-top:7px;font-weight:500}
    .idx{font-size:16px;color:#b5b2a8;font-variant-numeric:tabular-nums;align-self:flex-start;padding-top:6px}
    .sent{margin-top:34px;background:#1b1b1f;color:#f3f0e9;border-radius:26px;padding:30px 32px 28px}
    .sent-head{font-size:17px;letter-spacing:.28em;color:#a5a29a;margin-bottom:14px}
    .sent-zh{font-size:28px;font-weight:700;line-height:1.4;margin-bottom:20px}
    .sent-row{display:flex;gap:14px;padding:7px 0;border-top:1px solid rgba(243,240,233,.13);align-items:baseline}
    .sl{flex:0 0 74px;font-size:17px;color:#a5a29a}
    .st{flex:1;font-size:21px;line-height:1.45;word-break:break-word}
    .foot{display:flex;justify-content:space-between;align-items:center;margin-top:26px;font-size:18px;color:#8a8880}
    .foot b{color:#1b1b1f}
  </style></head><body><div class="wrap">
    ${head}
    <div class="rows">${cards}</div>
    ${sentBlock}
    <div class="foot"><span>青龙词场 · <b>六语背单词</b></span><span>192.168.31.39:9098/hub/vocab</span></div>
  </div></body></html>`;
}

async function renderPoster() {
  fs.mkdirSync(OUT, { recursive: true });
  const out = path.join(OUT, `daily-${date}.png`);
  const { chromium } = require("playwright");
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1080, height: 800 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  const html = posterHTML();
  if (process.env.DUMP_HTML) fs.writeFileSync(process.env.DUMP_HTML, html);
  await page.setContent(html, { waitUntil: "load" });
  await page.waitForTimeout(300);

  // 字库守卫：检测渲染后仍落到 .notdef 的字符（缺字会显示成方框）
  const missing = await page.evaluate(() => {
    const cvs = document.createElement("canvas");
    cvs.width = 48; cvs.height = 48;
    const c = cvs.getContext("2d");
    const sig = (ch, fam) => {
      c.clearRect(0, 0, 48, 48);
      c.font = "32px " + fam; c.textBaseline = "middle"; c.fillStyle = "#000";
      c.fillText(ch, 4, 24);
      const d = c.getImageData(0, 0, 48, 48).data;
      let h = 0;
      for (let i = 3; i < d.length; i += 4) if (d[i] > 8) h = (h * 31 + i + 1) >>> 0;
      return h;
    };
    const seen = new Set();
    let bad = [];
    const walk = (el) => {
      const fam = getComputedStyle(el).fontFamily;
      const tofu = sig("\uE123", fam);
      for (const node of el.childNodes) {
        if (node.nodeType === 3) {
          for (const ch of node.textContent) {
            if (!ch.trim() || seen.has(ch)) continue;
            seen.add(ch);
            if (sig(ch, fam) === tofu) bad.push(ch);
          }
        } else if (node.nodeType === 1) walk(node);
      }
    };
    walk(document.body);
    return bad;
  });
  if (missing.length) {
    process.stderr.write("海报缺字（会显示方框）：" + missing.join(" ") +
      " ｜ 处理：把对应字体的 woff2 放进 fonts/ 并在 posterHTML 的 @font-face 与字体栈里注册\n");
  }
  await page.screenshot({ path: out, fullPage: true });
  await browser.close();
  return out;
}

(async () => {
  let poster = null;
  if (!process.env.NO_POSTER) {
    try { poster = await renderPoster(); }
    catch (e) { process.stderr.write("poster failed: " + e.message + "\n"); }
  }
  const text = lines.join("\n").replace(/\n{3,}/g, "\n\n");
  if (poster) process.stdout.write(text + "\n\nMEDIA:" + poster + "\n");
  else process.stdout.write(text + "\n");
})();
