#!/usr/bin/env node
/* 海报配图：用 Pollinations（免费、无需 API Key）按主题取一张插画
 * 只做背景/头图，文字一律由 CSS 渲染，避免 AI 图里出现乱码文字
 * 用法：node scripts/poster-art.js <theme> [YYYY-MM-DD]
 * 输出：stdout 打印本地图片路径；失败退出码 1
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const OUT_DIR = "/tmp/vocab-daily";
const PROXY = process.env.HTTP_PROXY || process.env.http_proxy || "http://127.0.0.1:7890";

/* 主题 → 画面描述（英文，模型更吃这个）+ 主色倾向 */
const SCENES = {
  daily: "a calm morning at home, cup of coffee and an open notebook on a wooden desk, soft morning sunlight through the window",
  food: "a cozy street food stall at dusk, steam rising from bowls, warm hanging lights, appetite-appealing",
  travel: "a quiet train platform in the early morning, empty rails leading to the horizon, soft mist",
  work: "a tidy desk with a laptop, a plant and a cup of tea, calm office light, no people",
  study: "a library table with stacked books, a reading lamp glowing, dust motes in the light beam",
  health: "a bright airy room with a green plant, a glass of water and fresh fruit, soft daylight",
  emotion: "a quiet park bench under a large tree, warm afternoon light, gentle breeze, peaceful mood",
  tech: "a minimal desk with a glowing screen and abstract circuit shapes, cool blue light, futuristic calm"
};

const STYLE = "flat vector illustration, editorial poster art, muted warm palette, generous negative space, soft grain, no text, no letters, no words, no watermark, clean simple shapes";

const theme = process.argv[2] || "daily";
const date = process.argv[3] || new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Shanghai" });
const scene = SCENES[theme] || SCENES.daily;

fs.mkdirSync(OUT_DIR, { recursive: true });
const out = path.join(OUT_DIR, `art-${date}-${theme}.jpg`);
if (fs.existsSync(out) && fs.statSync(out).size > 20000) {
  process.stdout.write(out + "\n");
  process.exit(0);
}

const seed = Number(String(date).replace(/\D/g, "")) % 100000;
const prompt = encodeURIComponent(`${scene}. ${STYLE}`);
const urls = [
  `https://image.pollinations.ai/prompt/${prompt}?width=1080&height=520&model=flux&nologo=true&seed=${seed}`,
  `https://image.pollinations.ai/prompt/${prompt}?width=1080&height=520&nologo=true&seed=${seed}`
];

for (const url of urls) {
  try {
    execFileSync(
      "curl",
      ["-sL", "--max-time", "90", "-x", PROXY, "-o", out, "-w", "%{http_code}", url],
      { stdio: ["ignore", "pipe", "ignore"] }
    );
    const size = fs.existsSync(out) ? fs.statSync(out).size : 0;
    const head = size ? fs.readFileSync(out).subarray(0, 3).toString("hex") : "";
    if (size > 20000 && (head === "ffd8ff" || head === "89504e")) {
      process.stdout.write(out + "\n");
      process.exit(0);
    }
    try { fs.unlinkSync(out); } catch (e) {}
  } catch (e) { /* 换下一个 URL */ }
}

process.stderr.write("poster-art: 取图失败，海报将不带配图\n");
process.exit(1);
