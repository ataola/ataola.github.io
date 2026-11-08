/* 词库自检：字段完整、ID 连续、词条/释义不重复
 * 用法：node scripts/validate-data.js
 */
const path = require("path");
const fs = require("fs");

global.window = {};
const dir = path.join(__dirname, "..");
require(path.join(dir, "data.js"));

const langs = ["en", "ja", "ko", "th", "ms", "id", "es", "fr", "de"];
const extraVar = { en: "VOCAB_EXTRA_EN", ja: "VOCAB_EXTRA_JA", ko: "VOCAB_EXTRA_KO", th: "VOCAB_EXTRA_TH", ms: "VOCAB_EXTRA_MS", id: "VOCAB_EXTRA_ID", es: "VOCAB_EXTRA_ES", fr: "VOCAB_EXTRA_FR", de: "VOCAB_EXTRA_DE" };
/* 英语专题词单：独立文件，单独校验 */
const EN_LISTS = [
  ["data-en-ielts.js", "VOCAB_EN_IELTS", "ielts", "ielts", 200],
  ["data-en-toefl.js", "VOCAB_EN_TOEFL", "tfl", "toefl", 200],
  ["data-en-trip.js", "VOCAB_EN_TRIP", "trip", "trip", 120],
  ["data-en-biz.js", "VOCAB_EN_BIZ", "biz", "biz", 120],
  ["data-ja-jlpt.js", "VOCAB_JA_JLPT", "ja-n2", "jlptn2", 400],
  ["data-ko-topik.js", "VOCAB_KO_TOPIK", "ko-t3", "topik3", 400],
  ["data-ms-adv.js", "VOCAB_MS_ADV", "ms-mid", "msmid", 400],
  ["data-id-adv.js", "VOCAB_ID_ADV", "id-mid", "idmid", 400]
];
let failed = 0;

for (const [file, varName, prefix, tag, expect] of EN_LISTS) {
  const second = prefix === "ja-n2" ? ["ja-n1", "jlptn1"]
    : prefix === "ko-t3" ? ["ko-t5", "topik5"]
    : prefix === "ms-mid" ? ["ms-adv", "msadv"]
    : prefix === "id-mid" ? ["id-adv", "idadv"] : null;
  const fp = path.join(dir, file);
  if (!fs.existsSync(fp)) { console.log(`- ${file}: 缺失`); failed++; continue; }
  require(fp);
  const list = window[varName] || [];
  const problems = [];
  const seen = new Map();
  list.forEach((x, i) => {
    if (!x.id || !x.term || !x.reading || !x.meaning || !x.pos || !x.example || !x.exampleZh) {
      problems.push(`${prefix}#${i} 字段缺失`);
    }
    const isSecond = second && (x.tags || []).includes(second[1]);
    const pfx = isSecond ? second[0] : prefix;
    const off = isSecond ? i - list.findIndex((y) => (y.tags || []).includes(second[1])) : i;
    if (x.id !== `${pfx}-${String(off + 1).padStart(3, "0")}`) problems.push(`${pfx}#${i} id 断号：${x.id}`);
    if (!(x.tags || []).includes(tag) && !isSecond) problems.push(`${prefix}#${i} 缺标签 ${tag}`);
    if (isSecond && !(x.tags || []).includes(second[1])) problems.push(`${prefix}#${i} 缺标签 ${second[1]}`);
    if (seen.has(x.meaning)) problems.push(`${prefix}#${i} 释义重复：${x.meaning}`);
    seen.set(x.meaning, x.id);
    if (![1, 2, 3].includes(x.level)) problems.push(`${prefix}#${i} level 非法`);
  });
  if (list.length !== expect) problems.push(`条数 ${list.length}，应为 ${expect}`);
  const lv = {};
  list.forEach((x) => (lv[x.level] = (lv[x.level] || 0) + 1));
  if (problems.length) {
    failed++;
    console.log(`✗ ${file}: ${list.length} 词 · level ${JSON.stringify(lv)}`);
    problems.slice(0, 8).forEach((p) => console.log(`   - ${p}`));
    if (problems.length > 8) console.log(`   …还有 ${problems.length - 8} 条`);
  } else {
    console.log(`✓ ${file}: ${list.length} 词 · level ${JSON.stringify(lv)}`);
  }
}

/* 印尼语补遗：条数与 id 分段独立，只校验字段/标签/释义唯一 */
{
  const fp = path.join(dir, "data-id-extra.js");
  if (fs.existsSync(fp)) {
    require(fp);
    const list = window.VOCAB_ID_EXTRA || [];
    const problems = [];
    const seen = new Set();
    list.forEach((x, i) => {
      if (x.id !== `id-x-${String(i + 1).padStart(3, "0")}`) problems.push(`id-x#${i} id 断号：${x.id}`);
      if (!(x.tags || []).includes("idadv")) problems.push(`id-x#${i} 缺标签 idadv`);
      if (seen.has(x.meaning)) problems.push(`id-x#${i} 释义重复：${x.meaning}`);
      seen.add(x.meaning);
      if (!x.term || !x.reading || !x.pos || !x.example || !x.exampleZh) problems.push(`id-x#${i} 字段缺失`);
    });
    if (problems.length) { failed++; console.log(`✗ data-id-extra.js`); problems.slice(0, 6).forEach((p) => console.log(`   - ${p}`)); }
    else console.log(`✓ data-id-extra.js: ${list.length} 词（印尼特有表达）`);
  }
}

for (const lang of langs) {
  const file = path.join(dir, `data-${lang}.js`);
  if (!fs.existsSync(file)) {
    console.log(`- ${lang}: 无扩展文件，跳过`);
    continue;
  }
  require(file);
  const extra = window[extraVar[lang]] || [];
  const base = window.VOCAB_DATA[lang].words || [];
  const all = [...base, ...extra];
  const problems = [];

  const terms = new Map();
  const meanings = new Map();
  const ids = new Set();

  all.forEach((x, i) => {
    const where = `${lang}#${i} ${x.term || "?"}`;
    if (!x.id || !x.term || !x.reading || !x.meaning || !x.pos || !x.example || !x.exampleZh) {
      problems.push(`${where} 字段缺失`);
    }
    if (![1, 2, 3].includes(x.level)) problems.push(`${where} level 非法：${x.level}`);
    if (terms.has(x.term)) problems.push(`${where} 词条重复（同 ${terms.get(x.term)}）`);
    if (meanings.has(x.meaning)) problems.push(`${where} 释义重复：${x.meaning}`);
    if (ids.has(x.id)) problems.push(`${where} id 重复`);
    terms.set(x.term, x.id);
    meanings.set(x.meaning, x.id);
    ids.add(x.id);
  });

  // ID 连续性（仅检查扩展段）
  const startNum = ["en", "ja", "ko"].includes(lang) ? 101 : 1;
  const pad = startNum === 1 ? 3 : 0;
  extra.forEach((x, i) => {
    const num = String(startNum + i).padStart(pad, "0");
    const want = `${lang}-w-${num}`;
    if (x.id !== want) problems.push(`ID 不连续：期望 ${want}，实际 ${x.id}`);
  });

  const lv = all.reduce((acc, x) => ((acc[x.level] = (acc[x.level] || 0) + 1), acc), {});
  console.log(
    `${problems.length ? "✗" : "✓"} ${lang}: 共 ${all.length} 词（扩展 ${extra.length}）· level ${JSON.stringify(lv)}`
  );
  problems.slice(0, 12).forEach((p) => console.log("   - " + p));
  if (problems.length > 12) console.log(`   - …还有 ${problems.length - 12} 条`);
  failed += problems.length;
}

process.exit(failed ? 1 : 0);
