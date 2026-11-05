# 青龙词场 · 英日韩背单词

移动端优先的三语记忆应用。每天一小轮，按记忆曲线复习，支持错题重练与跨设备同步。

## 功能

- **九语词库**：共 4,840 词 + 60 句
  - 英语 **940**：基础与场景 300 + 雅思核心 200 + 托福核心 200 + 出国旅游 120 + 商务 120
  - 日语 **700**：基础 300 + JLPT N2 200 + N1 200
  - 韩语 **700**：基础 300 + TOPIK 3–4 200 + 5–6 200
  - 马来语 **800**：基础 400 + 中级进阶 200 + 高级/公文 200
  - 泰语 400 / 印尼语 400 / 西班牙语 300 / 法语 300 / 德语 300
  - 英日韩每语另含 20 个常用句
- **四种练习**：闪卡自评、四选一、听力（浏览器 TTS）、错题重练
- **五十音专题**：平假名 / 片假名对照，清音 46、浊音半浊音 25、拗音 33，带发音、例词与测试
- **学习路线**：每个语言分阶段目标（JLPT / TOPIK / CEFR 参考），从当前阶段一键开练
- **主题筛选**：日常 / 餐饮 / 交通旅行 / 职场 / 学习 / 健康 / 应急 / 科技
- **动词变位专题**：西 / 法 / 德各 20 个动词 × 4 个时态 × 6 人称，变位表 + 8 题测验（`/hub/vocab/conj.html`）
- **考试/分级词单**：英语（雅思核心 / 托福核心 / 出国旅游 / 商务英语）、日语（JLPT N2 / N1）、韩语（TOPIK 3–4 / 5–6）、马来语（中级进阶 / 高级公文），词库与练习都按词单过滤
- **间隔复习**：简化 SM-2，三级自评（忘记 / 模糊 / 记得）对应 10 分钟、1 天、1.3 倍间隔
- **错题本**：答错自动收录，答对逐次抵扣错误计数，归零移出；也可手动移出
- **学习统计**：每日目标环、连续天数、4 周热力图、分语言掌握度
- **跨设备同步**：同步码 + 本机 PostgreSQL（`vocab-api`），支持自动上传与云端合并
- **PWA**：可添加到主屏；导出 / 导入 JSON 做冷备份
- **浅色 / 深色**：跟随系统

## 目录

```
vocab-app/
├── kana.html         # 五十音图专题
├── kana.css
├── kana.js
├── kana-data.js
├── index.html
├── styles.css
├── app.js            # 全部交互逻辑
├── data.js           # 基础词库（各 50 词 + 20 句）
├── data-en.js        # 英语扩展 250 词
├── data-ja.js        # 日语扩展 250 词
├── data-ko.js        # 韩语扩展 250 词
├── data-th.js        # 泰语 400 词
├── data-ms.js        # 马来语 400 词
├── data-id.js        # 印尼语 400 词
├── data-es.js        # 西班牙语 300 词
├── data-fr.js        # 法语 300 词
├── data-de.js        # 德语 300 词
├── data-daily.js     # 每日一句：30 条九语对照场景句
├── manifest.json
├── sw.js
└── scripts/
    ├── validate-data.js   # 词库自检
    ├── daily-word.js      # 每日一词（单语文本）
    ├── daily-brief.js     # 每日一词九语 + 每日一句 + 海报
    └── poster-art.js      # 主题插画（Pollinations 免费额度）
```

## 本地校验

```bash
node scripts/validate-data.js
```

检查字段完整性、ID 连续、词条与释义是否重复（释义重复会让选择题出现两个正确答案）。

## 部署

Hub 的 `hub-live` 目录即站点根目录：

```bash
rsync -a --delete --exclude='.git' ./ /vol2/1000/storage2-dev/hub-live/vocab/
```

入口：`/hub/vocab/`。同步 API 走 `/vocab-api/` 反向代理，见 `../vocab-api/README.md`。

## 跨设备同步

1. 统计页 → 跨设备同步 → 点「生成」得到同步码（`ql-xxxxxxxx`）
2. 另一台设备填同一个码，点「云端合并」
3. 打开「自动同步」后，每次评分约 1.2 秒后自动上传

同步码即命名空间，不绑定账号；知道同步码即可读写对应进度。合并策略：卡片按最近学习日期取新，天数取最大值。

## 数据结构

```js
// 卡片
{ id: "en-w-101", term: "ability", reading: "/əˈbɪləti/", meaning: "能力",
  pos: "n.", example: "...", exampleZh: "...", tags: ["core"], level: 1 }

// 进度
{ cards: { [id]: { ease, interval, due, reps, lapses, correct, total, last, first } },
  days: { "2026-10-19": { reviewed, correct, newLearned } },
  streak: { current, best, last },
  settings: { dailyGoal, newPerDay, showReading, ttsRate },
  sync: { code, auto, lastAt } }
```

## 已知限制

- 语音走浏览器 `speechSynthesis`，音色取决于系统装的语言包
- PWA 的 Service Worker 在局域网 HTTP 下不注册（需要 HTTPS 或 localhost），不影响主功能
- 两台设备同时离线学同一张卡，合并时以较新记录为准

## 语言与字体

| 代码 | 语言 | 读音形式 | TTS |
|------|------|---------|-----|
| en | 英语 | 美式 IPA | en-US |
| ja | 日语 | 平假名 / 罗马字 | ja-JP |
| ko | 韩语 | 罗马字 | ko-KR |
| th | 泰语 | RTGS 罗马字 | th-TH |
| ms | 马来语 | 音节分隔 | ms-MY |
| id | 印尼语 | 音节分隔 | id-ID |

泰文额外内置 `fonts/noto-sans-thai-*.woff2`（约 17KB），避免部分 Linux/Windows 缺泰文字库显示方框。

## 每日一词 / 每日一句

```bash
# 九语同主题每日一词 + 每日一句 + 海报（推荐）
NODE_PATH=../scripts/node_modules node scripts/daily-brief.js [YYYY-MM-DD]

# 老的单语版纯文本
node scripts/daily-word.js [YYYY-MM-DD]
```

- `daily-brief.js` 每天换一个**主题**（日常/餐饮/出行/职场/学习/健康/情绪/科技），九语各取一条同主题词，横向对照记忆
- 「每日一句」从 `data-daily.js` 的 30 条场景句中轮转，九语并列，附读音与用法提示
- 海报由 Playwright 渲染 CSS 卡片（1080 宽，2 倍图）；顶部插画走 **Pollinations 免费额度**（无需 API Key），文字全部由 CSS 画，不受 AI 图片乱码影响
- 取图失败自动降级为无插画版本；`NO_ART=1` 可强制关闭插画（`scripts/poster-art.js` 单独跑可预览当天的图）
- 对应 cron 任务「青龙词场 · 每日一词九语」每天 08:00 推送到微信（文本 + 海报）

## 界面参考

对齐主流背单词 App 的交互约定：底部四栏导航（学习 / 词库 / 错题本 / 统计）、
今日任务环形进度、点卡片显示答案、三级自评、底部弹出式详情、深浅色跟随系统。
设计令牌集中在 `styles.css` 顶部（颜色、圆角、阴影、间距），改一处即可换肤。
