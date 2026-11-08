#!/usr/bin/env node
/* 把 data-en.js 里 tags 含 ielts 的条目抽到 data-en-ielts.js，并重编 id
 * 用法：node scripts/split-en-ielts.js   （幂等：已抽过会提示跳过）
 */
const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "..");
const SRC = path.join(DIR, "data-en.js");
const OUT = path.join(DIR, "data-en-ielts.js");

global.window = {};
require(SRC);
const all = window.VOCAB_EXTRA_EN || [];
const ielts = all.filter((x) => (x.tags || []).includes("ielts"));
const rest = all.filter((x) => !(x.tags || []).includes("ielts"));

if (!ielts.length) {
  console.log("没有待抽取的 ielts 条目，跳过");
  process.exit(0);
}
if (fs.existsSync(OUT)) {
  console.log(`${path.basename(OUT)} 已存在，跳过以免覆盖`);
  process.exit(0);
}

const fmt = (x) =>
  `  { id: ${JSON.stringify(x.id)}, term: ${JSON.stringify(x.term)}, reading: ${JSON.stringify(x.reading)}, ` +
  `meaning: ${JSON.stringify(x.meaning)}, pos: ${JSON.stringify(x.pos)}, ` +
  `example: ${JSON.stringify(x.example)}, exampleZh: ${JSON.stringify(x.exampleZh)}, ` +
  `tags: ${JSON.stringify(x.tags)}, level: ${x.level} }`;

const renumbered = ielts.map((x, i) => ({ ...x, id: `ielts-${String(i + 1).padStart(3, "0")}` }));

fs.writeFileSync(
  OUT,
  `/* 英语 · 雅思核心 ${renumbered.length} 词 */\nwindow.VOCAB_EN_IELTS = [\n` +
    renumbered.map(fmt).join(",\n") +
    `\n];\n`,
  "utf8"
);

fs.writeFileSync(
  SRC,
  `/* 英语 · 基础与场景扩展 ${rest.length} 词 */\nwindow.VOCAB_EXTRA_EN = [\n` +
    rest.map(fmt).join(",\n") +
    `\n];\n`,
  "utf8"
);

console.log(`抽出 ${renumbered.length} 条 → data-en-ielts.js；data-en.js 剩 ${rest.length} 条`);
