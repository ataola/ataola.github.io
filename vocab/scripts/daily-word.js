#!/usr/bin/env node
/* 每日一词：按日期轮转，输出一条适合直接发送到微信的文本
 * 用法：node scripts/daily-word.js [YYYY-MM-DD]
 */
const path = require("path");

global.window = {};
const dir = path.join(__dirname, "..");
require(path.join(dir, "data.js"));
for (const l of ["en", "ja", "ko", "th", "ms", "id", "es", "fr", "de"]) {
  const f = path.join(dir, `data-${l}.js`);
  try { require(f); } catch (e) { /* 缺文件跳过 */ }
}
const extra = {
  en: window.VOCAB_EXTRA_EN, ja: window.VOCAB_EXTRA_JA, ko: window.VOCAB_EXTRA_KO,
  th: window.VOCAB_EXTRA_TH, ms: window.VOCAB_EXTRA_MS, id: window.VOCAB_EXTRA_ID,
  es: window.VOCAB_EXTRA_ES, fr: window.VOCAB_EXTRA_FR, de: window.VOCAB_EXTRA_DE
};
const LANGS = ["en", "ja", "ko", "th", "ms", "id", "es", "fr", "de"];
const NAMES = { en: "英语", ja: "日语", ko: "韩语", th: "泰语", ms: "马来语", id: "印尼语", es: "西班牙语", fr: "法语", de: "德语" };

for (const l of LANGS) {
  const d = window.VOCAB_DATA[l];
  if (extra[l] && extra[l].length) d.words = d.words.concat(extra[l].filter((x) => !x.kind || x.kind === "word"));
}

const date = process.argv[2] || new Date().toISOString().slice(0, 10);
// 日期 -> 稳定序号
const seed = Math.floor(new Date(date + "T00:00:00+08:00").getTime() / 86400000);

const lang = LANGS[seed % LANGS.length];
const words = window.VOCAB_DATA[lang].words;
const item = words[Math.floor(seed / LANGS.length) % words.length];

const lines = [
  `📖 每日一词 · ${date}`,
  "",
  `${NAMES[lang]}｜${item.term}${item.reading ? `（${item.reading}）` : ""}`,
  `${item.mean || item.meaning}`,
  "",
  `${item.example}`,
  `${item.exampleZh}`,
  "",
  `👉 https://zhengjiangtao.cn/vocab/`
];
process.stdout.write(lines.join("\n") + "\n");
