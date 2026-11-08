(() => {
  "use strict";

  const DATA = window.VOCAB_DATA;
  const LANGS = ["en", "ja", "ko", "th", "ms", "id", "es", "fr", "de"];
  const STORE_KEY = "qinglong-vocab-v2";

  // 追加词库（data-<lang>.js → window.VOCAB_EXTRA_<LANG>）
  const EXTRA = {
    en: window.VOCAB_EXTRA_EN,
    ja: window.VOCAB_EXTRA_JA,
    ko: window.VOCAB_EXTRA_KO,
    th: window.VOCAB_EXTRA_TH,
    ms: window.VOCAB_EXTRA_MS,
    id: window.VOCAB_EXTRA_ID,
    es: window.VOCAB_EXTRA_ES,
    fr: window.VOCAB_EXTRA_FR,
    de: window.VOCAB_EXTRA_DE
  };

  EXTRA.ms = (EXTRA.ms || []).concat(window.VOCAB_MS_ADV || []);
  EXTRA.id = (EXTRA.id || []).concat(window.VOCAB_ID_ADV || [], window.VOCAB_ID_EXTRA || []);
  EXTRA.ja = (EXTRA.ja || []).concat(window.VOCAB_JA_JLPT || []);
  EXTRA.ko = (EXTRA.ko || []).concat(window.VOCAB_KO_TOPIK || []);

  // 英语专题词单（考试 / 场景），独立文件，便于单独扩充
  EXTRA.en = (EXTRA.en || []).concat(
    window.VOCAB_EN_IELTS || [],
    window.VOCAB_EN_TOEFL || [],
    window.VOCAB_EN_TRIP || [],
    window.VOCAB_EN_BIZ || []
  );
  LANGS.forEach((lang) => {
    if (!DATA[lang]) return;
    const extra = EXTRA[lang];
    if (!Array.isArray(extra) || !extra.length) return;
    const words = extra.filter((x) => !x.kind || x.kind === "word");
    const sentences = extra.filter((x) => x.kind === "sentence");
    DATA[lang].words = (DATA[lang].words || []).concat(words);
    if (sentences.length) DATA[lang].sentences = (DATA[lang].sentences || []).concat(sentences);
  });

  const MODES = {
    flash: { label: "闪卡", desc: "看词回忆，自评掌握程度" },
    choice: { label: "四选一", desc: "看词选释义，快速辨认" },
    listen: { label: "听力", desc: "听发音选释义，练耳朵" },
    wrong: { label: "错题重练", desc: "只练错过的卡片" }
  };
  const STATUS_LABEL = { new: "未学", learning: "学习中", mastered: "已掌握" };
  const TOPICS = [
    ["all", "全部主题"],
    ["daily", "日常"],
    ["food", "餐饮"],
    ["travel", "交通旅行"],
    ["work", "职场"],
    ["study", "学习"],
    ["health", "健康"],
    ["emergency", "应急"],
    ["tech", "科技"]
  ];
  const ROADMAP = {
    en: {
      note: "词汇量不是线性换算分数，但每个分数段都有公认的底线量级。先打基础，再按目标分流：留学考雅思/托福，出差看商务，出游看旅游词单。",
      stages: [
        { t: "基础生存", n: "1,500–2,000 词", d: "吃住行、购物、就医、约时间——CEFR A2–B1 的地基", go: "flash" },
        { t: "雅思 5.5–6.5", n: "4,000–6,000 词", d: "四科通用核心词 + 听力场景词；能读懂中等难度文章" },
        { t: "雅思 7 / 托福 90+", n: "6,000–8,000 词", d: "学术动词与抽象名词，写作能论证、口语能展开" },
        { t: "托福 100+ / 雅思 7.5+", n: "10,000+ 词", d: "学科词汇广度（生物/地质/天文/历史）+ 同义替换敏感度" }
      ]
    },
    ja: {
      note: "五十音是门槛，先做到看到假名能读出来，再进 N5 词汇。",
      stages: [
        { t: "五十音", n: "46 清音 + 浊音 + 拗音", d: "平假名 / 片假名对照，听音选字", kana: true },
        { t: "JLPT N5", n: "约 800 词 / 100 汉字", d: "问候、自我介绍、日常动词" },
        { t: "JLPT N4", n: "约 1,500 词 / 300 汉字", d: "日常会话、简单阅读" },
        { t: "JLPT N3", n: "约 3,700 词 / 650 汉字", d: "新闻标题、日剧对白" },
        { t: "JLPT N2", n: "约 6,000 词 / 1,000 汉字", d: "日企就职门槛，能读工作文档与新闻正文" },
        { t: "JLPT N1", n: "约 10,000 词 / 2,000 汉字", d: "社论、文学作品、正式商务文书" }
      ]
    },
    ko: {
      note: "谚文 24 个字母一天能认全，难点在收音和敬语，建议早点跟读。",
      stages: [
        { t: "谚文与发音", n: "24 字母 + 收音", d: "先解决拼读，再背词" },
        { t: "TOPIK 1", n: "约 800 词", d: "问候、购物、点餐、交通" },
        { t: "TOPIK 2", n: "约 1,500–2,000 词", d: "日常叙述、简单议论" },
        { t: "敬语与职场", n: "场景表达", d: "합쇼체 / 해요체 切换" },
        { t: "TOPIK 3–4", n: "约 3,000 词", d: "汉字词与抽象概念，能叙述与简单议论" },
        { t: "TOPIK 5–6", n: "约 6,000 词", d: "新闻社论、成语、正式书面语" }
      ]
    },
    th: {
      note: "泰语有 5 个声调，先记声调规则再堆词；跟读比默写更有效。",
      stages: [
        { t: "字母与声调", n: "44 辅音 + 5 声调", d: "中/高/低辅音与声调符号" },
        { t: "生存泰语", n: "约 500 词", d: "问候、点餐、交通、购物" },
        { t: "日常 1,500 词", n: "生活对话", d: "礼貌尾词 ครับ / ค่ะ 的使用" },
        { t: "职场与阅读", n: "新闻与公文", d: "书面语与口语差异大" }
      ]
    },
    ms: {
      note: "拼写即读音，入门快；难点在词缀（me- / ber- / -kan）和口语缩写。",
      stages: [
        { t: "拼读规则", n: "见词能读", d: "元音、ng/ny、重音位置" },
        { t: "生存马来语", n: "约 500 词", d: "问候、点餐、交通、购物" },
        { t: "日常 1,500 词", n: "生活对话", d: "词缀派生与常用短语" },
        { t: "职场马来语", n: "正式书信", d: "书面语与口语差异" },
        { t: "中级进阶", n: "约 3,000 词 · B1–B2", d: "词缀派生规律、抽象名词、书面连接词" },
        { t: "高级 / 公文", n: "约 6,000 词 · C1", d: "政策与法律用语、社论、simpulan bahasa" }
      ]
    },
    id: {
      note: "和马来语同源，但用词与缩写不同；先打通拼读，再积累场景词。",
      stages: [
        { t: "拼读规则", n: "见词能读", d: "元音、c/j、ng/ny" },
        { t: "生存印尼语", n: "约 500 词", d: "问候、点餐、交通、购物" },
        { t: "日常 1,500 词", n: "生活对话", d: "口语缩写（nggak / udah）" },
        { t: "职场印尼语", n: "正式书信", d: "书面语与口语差异" },
        { t: "中级进阶", n: "约 3,000 词 · B1–B2", d: "词缀派生、抽象名词、书面连接词" },
        { t: "高级 / 公文", n: "约 6,000 词 · C1", d: "政策法律用语、荷兰语遗留词、印尼特有表达" }
      ]
    },
    es: {
      note: "拼写和读音高度一致，动词变位是最大门槛；先把现在时常用六个人称练熟。",
      stages: [
        { t: "发音与拼读", n: "见词能读", d: "五个元音、ñ/ll/rr、重音规则" },
        { t: "DELE A1", n: "约 700 词", d: "问候、点餐、问路、购物" },
        { t: "DELE A2", n: "约 1,500 词", d: "过去时叙事、日常安排" },
        { t: "DELE B1", n: "约 3,000 词", d: "虚拟式入门、观点表达" }
      ]
    },
    fr: {
      note: "读音和拼写差得远，先建立「字母组合→音」的直觉；连诵是听懂的关键。",
      stages: [
        { t: "拼读与连诵", n: "字母组合 → 音", d: "鼻化元音、词尾不发音、liaison" },
        { t: "DELF A1", n: "约 700 词", d: "问候、点餐、问路、购物" },
        { t: "DELF A2", n: "约 1,500 词", d: "复合过去时、日常叙述" },
        { t: "DELF B1", n: "约 3,000 词", d: "观点表达、条件式" }
      ]
    },
    de: {
      note: "名词务必带冠词一起记（der/die/das）；格变化和语序是主要难点。",
      stages: [
        { t: "发音与拼读", n: "见词能读", d: "ch/ß/ü/ö、复合词拆解" },
        { t: "歌德 A1", n: "约 650 词", d: "问候、点餐、问路、购物" },
        { t: "歌德 A2", n: "约 1,300 词", d: "完成时、从句语序、四格" },
        { t: "歌德 B1", n: "约 2,400 词", d: "被动语态、职场邮件" }
      ]
    }
  };

  /* 词单：按考试/场景拆分，只有配置了的语言才显示这一排 */
  const WORDLISTS = {
    en: [
      ["all", "全部",
        "先打基础，再按目标分流：留学考雅思/托福，出差看商务，出游看旅游。"],
      ["ielts", "雅思核心",
        "雅思 5.5–6.5 约需 4000–6000 词，7 分以上 6000–8000。这批是听说读写四科通用核心词。"],
      ["toefl", "托福核心",
        "托福 80 分约 8000 词，100 分以上 10000+。这批偏学术场景：生物、地质、天文、历史、心理。"],
      ["trip", "出国旅游",
        "机场、海关、酒店、点餐、问路、退税、就医——以词组为主，背完能直接开口。"],
      ["biz", "商务英语",
        "会议、邮件、谈判、汇报、合同与财务，覆盖职场书面与口头表达。"]
    ],
    ja: [
      ["all", "全部",
        "先五十音，再 N5/N4 打底；考级或读日文资料就从 N2/N1 专项练。"],
      ["jlptn2", "JLPT N2",
        "汉字词与复合动词为主，N2 约需 6,000 词，是日企就职与读日文资料的门槛。"],
      ["jlptn1", "JLPT N1",
        "书面语、新闻社论与惯用表达，N1 约需 10,000 词。"],
    ],
    ms: [
      ["all", "全部",
        "拼读简单，难点在词缀。基础词打通后，中级看派生规律，高级看公文与惯用语。"],
      ["msmid", "中级进阶",
        "带词缀的派生词为主（meN- / ber- / -kan / ke-…-an），CEFR B1–B2，能读新闻标题与短文。"],
      ["msadv", "高级 / 公文",
        "政策、法律、学术与 simpulan bahasa，CEFR C1，对应官方文书与社论阅读。"],
    ],
    id: [
      ["all", "全部",
        "口语缩写先混个脸熟，再上中级派生词；高级词表挑的是印尼特有说法，不是马来语的副本。"],
      ["idmid", "中级进阶",
        "词缀派生与抽象名词，CEFR B1–B2，能读新闻标题与说明文。"],
      ["idadv", "高级 / 公文",
        "政策法律、学术用语、荷兰语遗留词与印尼特有表达，CEFR C1。"],
    ],
    ko: [
      ["all", "全部",
        "谚文拼读解决后，先用基础词打通生活场景，再按 TOPIK 分级。"],
      ["topik3", "TOPIK 3–4",
        "汉字词与抽象概念，能应付日常叙述与简单议论，TOPIK 4 约需 3,000 词。"],
      ["topik5", "TOPIK 5–6",
        "新闻、社论、成语与正式书面语，TOPIK 6 约需 6,000 词。"],
    ]
  };
  let wordlist = "all";

  const RESOURCES = {
    en: [["剑桥词典（英英）", "https://dictionary.cambridge.org/"], ["BBC Learning English", "https://www.bbc.co.uk/learningenglish/"], ["IELTS 官方备考", "https://ielts.org/take-a-test/preparation"], ["TOEFL 官方备考", "https://www.ets.org/toefl/test-takers/ibt/prepare.html"]],
    ja: [["NHK 简明日语", "https://www.nhk.or.jp/lesson/zh/"], ["Jisho 词典", "https://jisho.org/"], ["Tae Kim 语法指南", "https://guidetojapanese.org/learn/"]],
    ko: [["Talk To Me In Korean", "https://talktomeinkorean.com/"], ["国立国语院 学习词典", "https://krdict.korean.go.kr/"]],
    th: [["ThaiPod101", "https://www.thaipod101.com/"], ["Longdo 泰英词典", "https://dict.longdo.com/"]],
    ms: [["Dewan Bahasa 词典", "https://prpm.dbp.gov.my/"], ["Wiktionary 马来语", "https://ms.wiktionary.org/"]],
    id: [["Sederet 词典", "https://www.sederet.com/"], ["SEAsite 印尼语", "https://www.seasite.niu.edu/indonesian/"]],
    es: [["SpanishDict 变位词典", "https://www.spanishdict.com/"], ["RTVE 慢速新闻", "https://www.rtve.es/"]],
    fr: [["TV5MONDE 学法语", "https://apprendre.tv5monde.com/fr"], ["Le Conjugueur 变位", "https://leconjugueur.lefigaro.fr/"]],
    de: [["DW 学德语", "https://learngerman.dw.com/zh/overview"], ["Leo 词典", "https://dict.leo.org/"]]
  };

  const TAG_TOPIC = {
    daily: "daily", core: "daily", emotion: "daily",
    food: "food", restaurant: "food", drink: "food",
    travel: "travel", transport: "travel", hotel: "travel", shopping: "travel",
    work: "work", business: "work", office: "work",
    study: "study", school: "study",
    health: "health", medical: "health",
    emergency: "emergency",
    tech: "tech", internet: "tech"
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const app = $("#app");

  const ITEMS = {};
  LANGS.forEach((lang) => {
    ITEMS[lang] = [
      ...DATA[lang].words.map((x) => ({ ...x, lang, kind: "word" })),
      ...DATA[lang].sentences.map((x) => ({ ...x, lang, kind: "sentence" }))
    ];
  });
  const ITEM_MAP = {};
  Object.values(ITEMS).flat().forEach((item) => { ITEM_MAP[item.id] = item; });

  /* ---------------- 工具 ---------------- */

  function todayStr(d = new Date()) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  function addDays(dateStr, n) {
    const d = new Date(dateStr + "T12:00:00");
    d.setDate(d.getDate() + n);
    return todayStr(d);
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }
  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  const langAttr = (item) => (item.lang === "th" ? ' lang="th"' : "");

  const ICON = {
    home: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 10.6 12 3.6l8.5 7v8.3a1.6 1.6 0 0 1-1.6 1.6h-4.3v-6.2H9.4v6.2H5.1a1.6 1.6 0 0 1-1.6-1.6z"/></svg>',
    book: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.2A1.7 1.7 0 0 1 5.7 3.5H19a1 1 0 0 1 1 1v13.2H6a2 2 0 0 0-2 2z"/><path d="M4 19.7A1.7 1.7 0 0 1 5.7 18H20"/></svg>',
    chart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M5 20V11M12 20V4.5M19 20v-6"/></svg>',
    refresh: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 5.2V11h-5.6"/></svg>',
    settings: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.2"/><circle cx="9" cy="17" r="2.2"/></svg>',
    flame: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13 2.2c.6 3-1.3 4.2-2.5 5.6C9.2 9.3 8 10.6 8 13a4.6 4.6 0 0 0 1.4 3.3c-.2-1.9.6-3.3 1.8-4.6.2 2 .9 3.2 2 4 1 .8 1.6 1.6 1.6 2.7 0 .9-.4 1.7-1 2.2A5 5 0 0 0 18 16c0-5.6-3.7-8.3-5-13.8z"/></svg>',
    speaker: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5.5 6.6 9H3.8v6h2.8L11 18.5z"/><path d="M15.4 9.2a4 4 0 0 1 0 5.6"/><path d="M18 6.6a8 8 0 0 1 0 10.8"/></svg>',
    close: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    chev: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg>',
    chevDown: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 9 7 7 7-7"/></svg>',
    cards: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.2" y="7.4" width="12.6" height="13.2" rx="2.4"/><path d="M7.4 4.4h11a2 2 0 0 1 2 2v11"/></svg>',
    target: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="3.4"/></svg>',
    headphones: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2.8" y="13.6" width="4.4" height="6.6" rx="2.2"/><rect x="16.8" y="13.6" width="4.4" height="6.6" rx="2.2"/></svg>',
    alert: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.6 21 20H3z"/><path d="M12 9.4v4.6M12 17.2h.01"/></svg>',
    check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.6 4.6L19 7.5"/></svg>',
    x: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="m6.5 6.5 11 11M17.5 6.5l-11 11"/></svg>',
    spark: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5l2.1 5.4 5.4 2.1-5.4 2.1L12 18.5l-2.1-5.4-5.4-2.1 5.4-2.1z"/></svg>',
    cloud: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18.5a4 4 0 0 1-.4-8A5.6 5.6 0 0 1 17.4 10a3.9 3.9 0 0 1 .3 8.5z"/></svg>',
    tray: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v10M8 10.5l4 4 4-4"/><path d="M4.5 17.5v1.2a1.8 1.8 0 0 0 1.8 1.8h11.4a1.8 1.8 0 0 0 1.8-1.8v-1.2"/></svg>'
  };

  /* ---------------- 数据模型 ---------------- */

  const DEFAULTS = {
    version: 3,
    settings: { dailyGoal: 20, newPerDay: 10, showReading: true, ttsRate: 0.9 },
    cards: {},
    days: {},
    streak: { current: 0, best: 0, last: null },
    ui: { lang: "en", view: "home" },
    sync: { code: "", auto: true, lastAt: 0 },
    updatedAt: 0
  };

  function clone(obj) { return JSON.parse(JSON.stringify(obj)); }

  function loadStore() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return clone(DEFAULTS);
      const parsed = JSON.parse(raw);
      return {
        ...clone(DEFAULTS),
        ...parsed,
        settings: { ...DEFAULTS.settings, ...(parsed.settings || {}) },
        streak: { ...DEFAULTS.streak, ...(parsed.streak || {}) },
        ui: { ...DEFAULTS.ui, ...(parsed.ui || {}) },
        sync: { ...DEFAULTS.sync, ...(parsed.sync || {}) },
        updatedAt: Number(parsed.updatedAt) || 0,
        cards: parsed.cards || {},
        days: parsed.days || {}
      };
    } catch (e) {
      console.warn("load store failed", e);
      return clone(DEFAULTS);
    }
  }

  let store = loadStore();
  let session = null;
  let browseQuery = "";
  let browseFilter = "all";
  let topicFilter = "all";
  let currentDetail = null;
  let syncState = { status: "off", busy: false, lastAt: 0, error: "" };
  let syncTimer = null;

  function save(opts = {}) {
    store.updatedAt = Date.now();
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch (e) {
      toast("本地存储写入失败，请导出备份");
    }
    if (!opts.skipSync && store.sync.auto && store.sync.code) scheduleSync();
  }

  /* ---------------- 同步 ---------------- */

  function scheduleSync() {
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => { syncPush({ silent: true }); }, 1200);
  }

  function syncUrl() {
    return `/vocab-api/state?key=${encodeURIComponent(store.sync.code)}`;
  }

  function syncStatusText() {
    if (!store.sync.code) return "未启用";
    if (syncState.busy) return "同步中…";
    if (syncState.status === "error") return "同步失败";
    if (syncState.status === "stale") return "云端有更新";
    if (syncState.lastAt) {
      const d = new Date(syncState.lastAt);
      return `已同步 ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
    }
    return "已启用";
  }

  function mergeStates(local, remote) {
    const out = clone(local);
    const ids = new Set([...Object.keys(remote.cards || {}), ...Object.keys(local.cards || {})]);
    out.cards = {};
    ids.forEach((id) => {
      const a = local.cards?.[id];
      const b = remote.cards?.[id];
      if (!a) { out.cards[id] = b; return; }
      if (!b) { out.cards[id] = a; return; }
      const la = a.last || "";
      const lb = b.last || "";
      if (la !== lb) out.cards[id] = la > lb ? a : b;
      else out.cards[id] = (a.total || 0) >= (b.total || 0) ? a : b;
    });

    out.days = { ...(remote.days || {}) };
    Object.entries(local.days || {}).forEach(([date, v]) => {
      const r = out.days[date];
      out.days[date] = r ? {
        reviewed: Math.max(r.reviewed || 0, v.reviewed || 0),
        correct: Math.max(r.correct || 0, v.correct || 0),
        newLearned: Math.max(r.newLearned || 0, v.newLearned || 0)
      } : v;
    });

    const ls = local.streak || {};
    const rs = remote.streak || {};
    const later = (ls.last || "") >= (rs.last || "") ? ls : rs;
    out.streak = {
      current: Math.max(ls.current || 0, rs.current || 0),
      best: Math.max(ls.best || 0, rs.best || 0),
      last: later.last || null
    };

    out.settings = local.settings;
    out.ui = local.ui;
    out.sync = local.sync;
    return out;
  }

  function payloadState() {
    const copy = clone(store);
    delete copy.sync;
    return copy;
  }

  async function syncPull(opts = {}) {
    if (!store.sync.code) { if (!opts.silent) toast("先填写同步码"); return false; }
    if (syncState.busy) return false;
    syncState.busy = true;
    syncState.status = "busy";
    rerenderIfStats();
    try {
      const res = await fetch(syncUrl(), { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "拉取失败");
      if (!data.state) {
        syncState.busy = false;
        if (!opts.silent) toast("云端暂无进度，已上传本地");
        return syncPush({ silent: true });
      }
      store = mergeStates(store, data.state);
      store.updatedAt = Date.now();
      save({ skipSync: true });
      syncState.busy = false;
      syncState.status = "ok";
      syncState.lastAt = Date.now();
      syncState.error = "";
      rerenderIfStats();
      if (!opts.silent) toast("已合并云端进度");
      await syncPush({ silent: true });
      return true;
    } catch (e) {
      syncState.busy = false;
      syncState.status = "error";
      syncState.error = e.message || String(e);
      rerenderIfStats();
      if (!opts.silent) toast("同步失败：" + syncState.error);
      return false;
    }
  }

  async function syncPush(opts = {}) {
    if (!store.sync.code) { if (!opts.silent) toast("先填写同步码"); return false; }
    if (syncState.busy) return false;
    syncState.busy = true;
    syncState.status = "busy";
    rerenderIfStats();
    try {
      const res = await fetch(syncUrl(), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state: payloadState(), clientUpdatedAt: store.updatedAt || Date.now() })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "上传失败");
      syncState.busy = false;
      if (data.saved === false) {
        syncState.status = "stale";
        if (!opts.silent) toast("云端版本更新，请点「从云端合并」");
      } else {
        store.sync.lastAt = Date.now();
        syncState.status = "ok";
        syncState.lastAt = Date.now();
        syncState.error = "";
        try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {}
      }
      rerenderIfStats();
      if (!opts.silent) toast(data.saved === false ? "云端有更新" : "已上传");
      return true;
    } catch (e) {
      syncState.busy = false;
      syncState.status = "error";
      syncState.error = e.message || String(e);
      rerenderIfStats();
      if (!opts.silent) toast("上传失败：" + syncState.error);
      return false;
    }
  }

  function rerenderIfStats() {
    if (store.ui.view === "stats" && !session) renderApp();
  }

  /* ---------------- 学习状态 ---------------- */

  function dayStat(date = todayStr()) {
    if (!store.days[date]) store.days[date] = { reviewed: 0, correct: 0, newLearned: 0 };
    return store.days[date];
  }
  function cardState(id) { return store.cards[id] || null; }

  function ensureCard(id) {
    if (!store.cards[id]) {
      store.cards[id] = {
        ease: 2.5, interval: 0, due: todayStr(), reps: 0, lapses: 0,
        correct: 0, total: 0, last: null, first: null
      };
    }
    return store.cards[id];
  }

  function isDue(card) { return !card || card.due <= todayStr(); }
  function isMastered(card) { return !!card && card.interval >= 21; }

  function itemStatus(item) {
    const c = cardState(item.id);
    if (!c) return "new";
    if (isMastered(c)) return "mastered";
    return "learning";
  }

  function deckStats(lang) {
    const items = ITEMS[lang];
    let due = 0, fresh = 0, learning = 0, mastered = 0;
    items.forEach((item) => {
      const c = cardState(item.id);
      if (!c) { fresh++; return; }
      if (isDue(c)) due++;
      if (isMastered(c)) mastered++;
      else learning++;
    });
    return { total: items.length, due, fresh, learning, mastered };
  }

  function globalStats() {
    const all = Object.values(ITEM_MAP);
    let studied = 0, mastered = 0, due = 0, reviews = 0, correct = 0;
    all.forEach((item) => {
      const c = cardState(item.id);
      if (!c) return;
      studied++;
      if (isMastered(c)) mastered++;
      if (isDue(c)) due++;
      reviews += c.total || 0;
      correct += c.correct || 0;
    });
    return {
      total: all.length, studied, mastered, due, reviews, correct,
      accuracy: reviews ? Math.round((correct / reviews) * 100) : 0
    };
  }

  function wrongItems(lang = null) {
    const langs = lang ? [lang] : LANGS;
    const out = [];
    langs.forEach((l) => {
      ITEMS[l].forEach((item) => {
        const c = cardState(item.id);
        if (c && c.lapses > 0) out.push(item);
      });
    });
    return out.sort((a, b) => {
      const ca = cardState(a.id);
      const cb = cardState(b.id);
      return (cb.lapses - ca.lapses) || String(ca.last || "").localeCompare(String(cb.last || ""));
    });
  }

  function todayDone() { return dayStat().reviewed; }
  function goalProgress() { return clamp(todayDone() / Math.max(1, store.settings.dailyGoal), 0, 1); }

  function updateStreak() {
    const today = todayStr();
    if (store.streak.last === today) return;
    if (!store.streak.last) store.streak.current = 1;
    else if (store.streak.last === addDays(today, -1)) store.streak.current = (store.streak.current || 0) + 1;
    else store.streak.current = 1;
    store.streak.last = today;
    store.streak.best = Math.max(store.streak.best || 0, store.streak.current);
  }

  function previewInterval(id, q) {
    const c = cardState(id) || { ease: 2.5, interval: 0, reps: 0 };
    if (q < 3) return "10 分钟";
    let interval;
    if (c.reps === 0) interval = 1;
    else if (c.reps === 1) interval = 3;
    else interval = Math.max(1, Math.round(c.interval * c.ease));
    if (q === 3) interval = Math.max(1, Math.round(interval * 0.7));
    if (q === 5) interval = Math.round(interval * 1.3);
    return interval <= 1 ? "明天" : `${interval} 天后`;
  }

  function reviewCard(id, q, opts = {}) {
    const c = ensureCard(id);
    const today = todayStr();
    const wasNew = c.total === 0;
    c.total += 1;
    if (q >= 3) c.correct += 1;
    if (wasNew) c.first = today;

    if (q < 3) {
      c.lapses += 1;
      c.reps = 0;
      c.interval = 0;
      c.due = today;
      c.ease = Math.max(1.3, c.ease - 0.2);
    } else {
      c.reps += 1;
      if (c.reps === 1) c.interval = 1;
      else if (c.reps === 2) c.interval = 3;
      else c.interval = Math.max(1, Math.round(c.interval * c.ease));
      c.ease = clamp(c.ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)), 1.3, 2.8);
      if (q === 3) c.interval = Math.max(1, Math.round(c.interval * 0.7));
      if (q === 5) c.interval = Math.round(c.interval * 1.3);
      c.due = addDays(today, c.interval);
      if (opts.fromWrong) c.lapses = Math.max(0, c.lapses - 1);
    }
    c.last = today;

    const d = dayStat(today);
    d.reviewed += 1;
    if (q >= 3) d.correct += 1;
    if (wasNew) d.newLearned += 1;
    updateStreak();
    save();
  }

  function listFilter(lang, items) {
    if (wordlist === "all") return items;
    const picked = items.filter((i) => (i.tags || []).includes(wordlist));
    return picked.length ? picked : items;
  }

  function buildQueue(lang, limit = 30) {
    const items = listFilter(lang, ITEMS[lang]);
    const due = items.filter((item) => {
      const c = cardState(item.id);
      return c && c.due <= todayStr();
    }).sort((a, b) => (cardState(a.id).due < cardState(b.id).due ? -1 : 1));
    const remainingNew = Math.max(0, store.settings.newPerDay - (dayStat().newLearned || 0));
    const fresh = items.filter((item) => !cardState(item.id)).slice(0, remainingNew);
    let queue = [...due, ...shuffle(fresh)];
    if (!queue.length) {
      const weak = items.filter((item) => cardState(item.id))
        .sort((a, b) => (cardState(a.id).interval - cardState(b.id).interval));
      queue = weak.slice(0, 10);
    }
    return queue.slice(0, limit);
  }

  function startSession(lang, mode) {
    let queue;
    if (mode === "wrong") {
      queue = wrongItems(lang).slice(0, 30);
      if (!queue.length) { toast("这个语言还没有错题"); return; }
    } else {
      queue = buildQueue(lang);
    }
    if (!queue.length) { toast("这个词库还没有卡片"); return; }
    session = {
      lang, mode, queue, idx: 0, reviewed: 0, correct: 0,
      revealed: false, options: null, picked: null, choiceDone: false, started: Date.now()
    };
    store.ui.lang = lang;
    save({ skipSync: true });
    renderStudy();
  }

  function currentItem() { return session ? session.queue[session.idx] : null; }

  function advance() {
    if (!session) return;
    session.idx += 1;
    session.revealed = false;
    session.options = null;
    session.picked = null;
    session.choiceDone = false;
    if (session.idx >= session.queue.length) renderSummary();
    else renderStudy();
  }

  function answerFlash(q) {
    const item = currentItem();
    if (!item) return;
    if (!session.revealed) { session.revealed = true; renderStudy(); return; }
    reviewCard(item.id, q, { fromWrong: session.mode === "wrong" });
    session.reviewed += 1;
    if (q >= 3) session.correct += 1;
    if (q < 3) session.queue.push(item);
    if (navigator.vibrate) navigator.vibrate(8);
    advance();
  }

  function makeOptions(item) {
    const pool = ITEMS[item.lang].filter((x) => x.meaning !== item.meaning);
    return shuffle([item, ...shuffle(pool).slice(0, 3)]);
  }

  function answerChoice(optionMeaning) {
    const item = currentItem();
    if (!item || session.choiceDone) return;
    const correct = optionMeaning === item.meaning;
    session.picked = optionMeaning;
    session.choiceDone = true;
    session.revealed = true;
    reviewCard(item.id, correct ? 4 : 1);
    session.reviewed += 1;
    if (correct) session.correct += 1;
    if (!correct) session.queue.push(item);
    if (navigator.vibrate) navigator.vibrate(correct ? 8 : [12, 40, 12]);
    renderStudy();
  }

  function speak(text, lang) {
    if (!("speechSynthesis" in window)) { toast("当前浏览器不支持朗读"); return; }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const target = DATA[lang]?.voice || "en-US";
    u.lang = target;
    u.rate = Number(store.settings.ttsRate) || 0.9;
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find((v) => v.lang === target) || voices.find((v) => v.lang.startsWith(target.slice(0, 2)));
    if (voice) u.voice = voice;
    window.speechSynthesis.speak(u);
  }

  function toast(msg) {
    let el = $("#toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 2200);
  }

  /* ---------------- 视图：公共 ---------------- */

  function ringHTML(progress, inner) {
    const r = 32;
    const c = 2 * Math.PI * r;
    const off = c * (1 - clamp(progress, 0, 1));
    return `<div class="ring">
      <svg viewBox="0 0 76 76" aria-hidden="true">
        <circle class="track" cx="38" cy="38" r="${r}" fill="none" stroke-width="7"/>
        <circle class="bar" cx="38" cy="38" r="${r}" fill="none" stroke-width="7"
          stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}"/>
      </svg>
      <div class="ring-label">${inner}</div>
    </div>`;
  }

  function headerHTML() {
    return `<header class="app-header">
      <div class="app-title"><span class="logo-mark">龙</span>青龙词场</div>
      <div class="header-actions">
        <div class="streak-pill" title="连续学习天数">${ICON.flame}${store.streak.current || 0} 天</div>
        <a class="icon-btn" href="./daily/" title="每日一词归档" aria-label="每日一词归档" style="text-decoration:none;">📅</a>
        <button class="icon-btn" data-action="open-settings" aria-label="设置">${ICON.settings}</button>
      </div>
    </header>`;
  }

  function navHTML(active) {
    const wrongCount = wrongItems().length;
    const items = [
      ["home", "学习", ICON.home],
      ["browse", "词库", ICON.book],
      ["wrong", "错题本", ICON.refresh],
      ["stats", "统计", ICON.chart]
    ];
    return `<nav class="bottom-nav">
      ${items.map(([key, label, icon]) => `
        <button class="nav-item ${active === key ? "active" : ""}" data-action="go-${key}">
          ${icon}<span>${label}</span>
          ${key === "wrong" && wrongCount ? `<i class="dot">${wrongCount > 99 ? "99" : wrongCount}</i>` : ""}
        </button>`).join("")}
    </nav>`;
  }

  function langSegmentHTML(sticky = false) {
    return `<div class="lang-scroll ${sticky ? "sticky" : ""}">
      ${LANGS.map((lang) => {
        const meta = DATA[lang];
        const total = ITEMS[lang].length;
        return `<button class="lang-chip ${store.ui.lang === lang ? "active" : ""}"
          style="--accent:${meta.accent}" data-action="switch-lang" data-lang="${lang}">
          <span class="code">${lang.toUpperCase()}</span>${meta.native}
          <span class="count">${total}</span>
        </button>`;
      }).join("")}
    </div>`;
  }

  /* ---------------- 视图：首页 ---------------- */

  function homeHTML() {
    const lang = store.ui.lang;
    const meta = DATA[lang];
    const st = deckStats(lang);
    const s = globalStats();
    const goal = Math.max(1, store.settings.dailyGoal);
    const done = todayDone();
    const left = Math.max(0, goal - done);
    const todayLeft = st.due + Math.min(st.fresh, Math.max(0, store.settings.newPerDay - (dayStat().newLearned || 0)));
    const d = new Date();
    const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][d.getDay()];

    return `
      ${headerHTML()}
      <div class="hero-date">${d.getMonth() + 1} 月 ${d.getDate()} 日 · ${weekday}</div>
      <h1 class="hero-title">今日学习</h1>

      ${langSegmentHTML()}

      <section class="today" style="--accent:${meta.accent}">
        <div class="today-top">
          ${ringHTML(goalProgress(), `<div>${done}<em>/${goal}</em></div>`)}
          <div class="today-copy">
            <span class="label">今日目标</span>
            <strong>${left > 0 ? `还差 <em>${left}</em> 张达标` : "目标已完成"}</strong>
            <div class="mini-stats">
              <span>待复习 <b>${st.due}</b></span>
              <span>未学 <b>${st.fresh}</b></span>
            </div>
          </div>
        </div>
        ${st.total ? `<button class="btn primary block" data-action="start" data-mode="flash">
          ${todayLeft > 0 ? "开始学习" : "再过一轮"}
        </button>` : `<button class="btn primary block" disabled>词库准备中</button>`}
        <div class="today-foot">
          <div><b>${st.due}</b><span>待复习</span></div>
          <div><b>${Math.min(st.fresh, store.settings.newPerDay)}</b><span>今日新词</span></div>
          <div><b>${st.mastered}</b><span>已掌握</span></div>
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2>练习方式</h2><span>${meta.native} · ${st.total} 张</span></div>
        <div class="rows">
          ${[["flash", ICON.cards], ["choice", ICON.target], ["listen", ICON.headphones]].map(([key, icon]) => `
            <button class="row" data-action="start" data-mode="${key}">
              <span class="row-icon">${icon}</span>
              <span class="row-text"><b>${MODES[key].label}</b><small>${MODES[key].desc}</small></span>
              <span class="row-trail">${ICON.chev}</span>
            </button>`).join("")}
        </div>
      </section>

      ${(WORDLISTS[lang] || []).length > 1 ? `
      <section class="section">
        <div class="section-head"><h2>词单</h2><span>${(WORDLISTS[lang].find(([k]) => k === wordlist) || WORDLISTS[lang][0])[1]}</span></div>
        <div class="chips sub" style="padding:0 20px 4px">
          ${WORDLISTS[lang].map(([k, l]) => `
            <button class="chip ${wordlist === k ? "active" : ""}" data-action="wordlist" data-list="${k}">${l}</button>`).join("")}
        </div>
        <p class="list-note" style="padding:0 20px 10px">${esc((WORDLISTS[lang].find(([k]) => k === wordlist) || WORDLISTS[lang][0])[2])}</p>
      </section>` : ""}
      <section class="section">
        <div class="section-head"><h2>专题</h2><span>五十音 · 变位 · 路线</span></div>
        <div class="quick-grid">
          <a class="quick-card" href="./kana.html" style="--q:#cf4520">
            <span class="qi">あ</span>
            <b>五十音图</b>
            <small>假名 · 发音 · 测试</small>
          </a>
          <a class="quick-card" href="./conj.html" style="--q:#4338ca">
            <span class="qi">变</span>
            <b>动词变位</b>
            <small>西 / 法 / 德 · 测验</small>
          </a>
          <button class="quick-card" data-action="go-road" style="--q:${meta.accent}">
            <span class="qi">路</span>
            <b>学习路线</b>
            <small>${meta.native}分阶段目标</small>
          </button>
        </div>
      </section>
      ${navHTML("home")}`;
  }

  /* ---------------- 视图：学习 ---------------- */

  function studyHeaderHTML() {
    const pctDone = session.queue.length ? Math.round((session.idx / session.queue.length) * 100) : 0;
    return `<header class="study-top">
      <button class="icon-btn" data-action="quit-study" aria-label="退出">${ICON.close}</button>
      <div class="study-progress">
        <div class="track"><i style="width:${pctDone}%"></i></div>
        <span>${session.idx + 1} / ${session.queue.length}</span>
      </div>
      <div class="study-mode">${MODES[session.mode].label}</div>
    </header>`;
  }

  function cardFaceHTML(item) {
    const meta = DATA[item.lang];
    const isSentence = item.kind === "sentence";
    const showReading = store.settings.showReading && item.reading;
    const isNew = !cardState(item.id);
    return `<div class="card-tags">
        <span class="pill plain">${isNew ? "新词" : "复习"}</span>
        <span class="pill" style="--accent:${meta.accent}">${isSentence ? "句子" : esc(item.pos || "词")}</span>
      </div>
      <div class="term-wrap">
        <div class="term ${isSentence ? "sentence" : ""}"${langAttr(item)}>${esc(item.term)}</div>
        ${showReading ? `<div class="reading"${langAttr(item)}>${esc(item.reading)}</div>` : ""}
        <button class="speak-inline" data-action="speak" data-id="${item.id}">${ICON.speaker} 朗读</button>
      </div>`;
  }

  function answerHTML(item) {
    return `<div class="answer">
      <div class="answer-label">释义</div>
      <div class="answer-meaning" style="color:var(--accent)">${esc(item.meaning)}</div>
      <div class="answer-example">
        <p${langAttr(item)}>${esc(item.example)}</p>
        <span>${esc(item.exampleZh)}</span>
      </div>
    </div>`;
  }

  function renderStudy() {
    if (!session) return;
    const item = currentItem();
    if (!item) { renderSummary(); return; }
    const meta = DATA[session.lang];
    let body = "";

    if (session.mode === "flash" || session.mode === "wrong") {
      body = `<div class="flashcard" data-action="reveal" style="--accent:${meta.accent}">
          ${cardFaceHTML(item)}
          ${session.revealed ? answerHTML(item) : `
            <div class="reveal-hint">点击卡片显示答案 · <kbd>空格</kbd></div>`}
        </div>
        ${session.revealed ? `
          <div class="rating-row">
            <button class="rate again" data-action="rate" data-q="1"><b>忘记</b><small>${previewInterval(item.id, 1)}</small></button>
            <button class="rate hard" data-action="rate" data-q="3"><b>模糊</b><small>${previewInterval(item.id, 3)}</small></button>
            <button class="rate good" data-action="rate" data-q="5"><b>记得</b><small>${previewInterval(item.id, 5)}</small></button>
          </div>` : `
          <div class="study-actions">
            <button class="btn primary block" data-action="reveal">显示答案</button>
          </div>`}`;
    } else {
      const isListen = session.mode === "listen";
      if (!session.options) {
        session.options = makeOptions(item);
        if (isListen) setTimeout(() => speak(item.term, item.lang), 260);
      }
      body = `<div class="quiz-card" style="--accent:${meta.accent}">
          <div class="quiz-prompt">${isListen ? "听发音，选出释义" : "选出正确释义"}</div>
          ${isListen
            ? `<button class="listen-orb" data-action="speak" data-id="${item.id}" aria-label="重听">${ICON.speaker}</button>
               <div class="listen-hint">点喇叭重听</div>`
            : `<div class="quiz-term"${langAttr(item)}>${esc(item.term)}</div>`}
          <div class="options">
            ${session.options.map((opt) => {
              const state = !session.choiceDone ? "" : opt.meaning === item.meaning ? "correct" : (opt.meaning === session.picked ? "wrong" : "dim");
              return `<button class="option ${state}" data-action="choose" data-meaning="${esc(opt.meaning)}">${esc(opt.meaning)}</button>`;
            }).join("")}
          </div>
        </div>
        ${session.choiceDone ? `
          <div class="quiz-feedback ${session.picked === item.meaning ? "ok" : "bad"}">
            ${session.picked === item.meaning ? ICON.check : ICON.x}
            <span>${session.picked === item.meaning ? "回答正确" : "正确答案：" + esc(item.meaning)}</span>
          </div>
          <div class="quiz-answer">
            <div class="t"${langAttr(item)}>${esc(item.term)}${item.reading ? ` · ${esc(item.reading)}` : ""}</div>
            <div class="m">${esc(item.pos || "")} ${esc(item.meaning)}</div>
            <div class="ex"${langAttr(item)}>${esc(item.example)}<span>${esc(item.exampleZh)}</span></div>
          </div>
          <div class="study-actions"><button class="btn primary block" data-action="next">下一张</button></div>` : ""}`;
    }
    app.innerHTML = `<div class="study-shell">${studyHeaderHTML()}<main class="study-main">${body}</main></div>`;
    window.scrollTo(0, 0);
  }

  function renderSummary() {
    const total = session.reviewed;
    const acc = total ? Math.round((session.correct / total) * 100) : 0;
    const mins = Math.max(1, Math.round((Date.now() - session.started) / 60000));
    const c = 2 * Math.PI * 56;
    app.innerHTML = `
      <div class="study-shell summary-shell" style="--accent:${DATA[session.lang].accent}">
        <main class="summary">
          <div class="summary-ring">
            <svg viewBox="0 0 132 132" aria-hidden="true">
              <circle cx="66" cy="66" r="56" fill="none" stroke="var(--surface-3)" stroke-width="9"/>
              <circle cx="66" cy="66" r="56" fill="none" stroke="var(--accent)" stroke-width="9" stroke-linecap="round"
                stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - acc / 100)).toFixed(1)}"/>
            </svg>
            <div class="ring-label">${acc}%</div>
          </div>
          <h1>本轮完成</h1>
          <p class="sub">${DATA[session.lang].native} · ${MODES[session.mode].label} · 用时 ${mins} 分钟</p>
          <div class="summary-grid">
            <div><b>${total}</b><span>复习卡片</span></div>
            <div><b>${mins}</b><span>用时（分）</span></div>
            <div><b>${store.streak.current}</b><span>连续天数</span></div>
          </div>
          <div class="summary-actions">
            ${session.mode !== "wrong" || wrongItems(session.lang).length ? `<button class="btn primary block" data-action="start" data-mode="${session.mode}">再来一轮</button>` : ""}
            <button class="btn ghost block" data-action="go-home">回到首页</button>
          </div>
        </main>
      </div>`;
    window.scrollTo(0, 0);
  }

  /* ---------------- 视图：词库 ---------------- */

  function itemRowHTML(item) {
    const st = itemStatus(item);
    const c = cardState(item.id);
    const wrong = c && c.lapses > 0;
    return `<button class="word-row" data-action="detail" data-id="${item.id}">
      <div class="word-main">
        <b${langAttr(item)}>${esc(item.term)}</b>
        <small${langAttr(item)}>${store.settings.showReading && item.reading ? esc(item.reading) : esc(item.exampleZh || "")}</small>
      </div>
      <div class="word-side">
        <span class="m">${esc(item.meaning)}</span>
        <span class="s"><i class="status-dot ${wrong ? "wrong" : st}"></i>${wrong ? "错 " + c.lapses + " 次" : STATUS_LABEL[st]}</span>
      </div>
    </button>`;
  }

  function browseGrouped(items) {
    const groups = [1, 2, 3].map((lv) => ({ lv, list: items.filter((i) => (i.level || 1) === lv) }));
    return groups.filter((g) => g.list.length).map((g) => `
      <div class="list-group">Lv.${g.lv} · ${["基础", "进阶", "拓展"][g.lv - 1]}<span>${g.list.length}</span></div>
      ${g.list.map(itemRowHTML).join("")}`).join("");
  }

  function browseHTML() {
    const lang = store.ui.lang;
    const meta = DATA[lang];
    let items = ITEMS[lang];
    if (browseQuery) {
      const q = browseQuery.toLowerCase();
      items = items.filter((item) =>
        item.term.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        (item.reading || "").toLowerCase().includes(q) ||
        (item.example || "").toLowerCase().includes(q)
      );
    }
    if (browseFilter !== "all") items = items.filter((item) => itemStatus(item) === browseFilter);
    if (topicFilter !== "all") {
      items = items.filter((item) => (item.tags || []).some((t) => TAG_TOPIC[t] === topicFilter));
    }
    if (wordlist !== "all") items = items.filter((item) => (item.tags || []).includes(wordlist));

    return `
      ${headerHTML()}
      <div class="page-head">
        <h1>词库</h1>
        <p>${meta.native} · 共 ${ITEMS[lang].length} 张 · 已掌握 ${deckStats(lang).mastered}</p>
      </div>
      ${langSegmentHTML(true)}
      <div class="search-wrap">
        <input class="search" id="browse-search" placeholder="搜索单词、释义、读音" value="${esc(browseQuery)}" autocomplete="off" />
      </div>
      <div class="chips">
        ${[["all", "全部"], ["new", "未学"], ["learning", "学习中"], ["mastered", "已掌握"]].map(([k, l]) => `
          <button class="chip ${browseFilter === k ? "active" : ""}" data-action="filter" data-filter="${k}">${l}</button>`).join("")}
      </div>
      ${(WORDLISTS[lang] || []).length > 1 ? `
        <div class="chips sub">
          ${WORDLISTS[lang].map(([k, l]) => `
            <button class="chip ${wordlist === k ? "active" : ""}" data-action="wordlist" data-list="${k}">${l}</button>`).join("")}
        </div>` : ""}
      <div class="chips sub">
        ${TOPICS.map(([k, l]) => `
          <button class="chip ${topicFilter === k ? "active" : ""}" data-action="topic" data-topic="${k}">${l}</button>`).join("")}
      </div>
      <div class="list">
        <div class="list-note">${items.length} 张</div>
        ${items.length ? browseGrouped(items) : `
          <div class="empty">
            <div class="ico">${ICON.book}</div>
            <b>没有匹配的卡片</b>
            <span>换个关键词或筛选条件试试</span>
          </div>`}
      </div>
      ${navHTML("browse")}`;
  }

  /* ---------------- 视图：错题本 ---------------- */

  function wrongHTML() {
    const lang = store.ui.lang;
    const meta = DATA[lang];
    const items = wrongItems(lang);
    const allCount = wrongItems().length;
    const scope = allCount > items.length ? `${meta.native} ${items.length} 张 · 全部 ${allCount} 张` : `${meta.native} ${items.length} 张`;
    return `
      ${headerHTML()}
      <div class="page-head">
        <h1>错题本</h1>
        <p>答错或标记「忘记」的卡片会自动收录</p>
      </div>
      ${langSegmentHTML(true)}
      <div class="wrong-hero">
        <b>${items.length ? "待巩固 " + scope : meta.native + "没有错题"}</b>
        <p>${items.length ? "答对一次减少一次错误计数，归零自动移出。" : "继续学习，答错的卡片会自动记录在这里。"}</p>
        ${items.length ? `<button class="btn primary block" data-action="start" data-mode="wrong">开始重练</button>` : ""}
      </div>
      <div class="list">
        ${items.length ? items.map((item) => {
          const c = cardState(item.id);
          return `<button class="word-row" data-action="detail" data-id="${item.id}">
            <div class="word-main">
              <b${langAttr(item)}>${esc(item.term)}</b>
              <small${langAttr(item)}>${esc(item.reading || item.exampleZh || "")}</small>
            </div>
            <div class="word-side">
              <span class="m">${esc(item.meaning)}</span>
              <span class="s" style="color:var(--bad)"><i class="status-dot wrong"></i>错 ${c.lapses} 次</span>
            </div>
          </button>`;
        }).join("") : `
          <div class="empty">
            <div class="ico">${ICON.check}</div>
            <b>干净的错题本</b>
            <span>学完一轮再来看看</span>
          </div>`}
      </div>
      ${navHTML("wrong")}`;
  }

  /* ---------------- 视图：统计 ---------------- */

  function roadHTML() {
    const lang = store.ui.lang;
    const meta = DATA[lang];
    const st = deckStats(lang);
    const road = ROADMAP[lang] || ROADMAP.en;
    return `
      ${headerHTML()}
      <div class="page-head">
        <h1>学习路线</h1>
        <p>${meta.native} · 分阶段目标与当前进度</p>
      </div>
      ${langSegmentHTML(true)}
      <section class="panel" style="--accent:${meta.accent}">
        <div class="panel-head"><h2>${meta.native}进度</h2><span>已掌握 ${st.mastered} / ${st.total}</span></div>
        <div class="progress"><i style="width:${pct(st.mastered, st.total)}%"></i></div>
        <p class="fold-note" style="margin:12px 0 0">${esc(road.note)}</p>
      </section>
      <div class="road">
        ${road.stages.map((s, i) => `
          <div class="road-item ${i === 0 ? "current" : ""}">
            <div class="road-dot">${i + 1}</div>
            <div class="road-body">
              <div class="road-head"><b>${esc(s.t)}</b><span>${esc(s.n)}</span></div>
              <p>${esc(s.d)}</p>
              ${s.kana ? `<a class="road-link" href="./kana.html">去练五十音</a>` : ""}
              ${i === 0 && !s.kana ? `<button class="road-link" data-action="start" data-mode="flash">从这一阶段开始</button>` : ""}
            </div>
          </div>`).join("")}
      </div>
      <div class="road-res">
        <div class="road-res-head">推荐资源</div>
        ${(RESOURCES[lang] || []).map(([n, u]) => `
          <a class="road-res-item" href="${u}" target="_blank" rel="noopener">
            <span>${esc(n)}</span>${ICON.chev}
          </a>`).join("")}
      </div>
      <p class="road-foot">词量参考 JLPT / TOPIK / CEFR 公开标准，实际进度以掌握度为准。</p>
      ${navHTML("home")}`;
  }

  function heatmapHTML() {
    const today = new Date();
    const dow = (today.getDay() + 6) % 7; // 周一 = 0
    const weekStart = addDays(todayStr(), -dow);
    const start = addDays(weekStart, -77);
    const cells = [];
    let activeDays = 0;
    for (let i = 0; i < 84; i++) {
      const date = addDays(start, i);
      const n = store.days[date]?.reviewed || 0;
      if (n > 0 && date <= todayStr()) activeDays++;
      const future = date > todayStr();
      const level = n === 0 ? 0 : n < 8 ? 1 : n < 20 ? 2 : 3;
      cells.push(`<div class="heat-cell" title="${date} · ${n} 张"
        style="${future ? "opacity:.35;" : ""}${level ? `background:color-mix(in srgb, var(--accent) ${level * 28 + 16}%, var(--surface-3))` : ""}"></div>`);
    }
    return `<section class="panel">
      <div class="panel-head"><h2>最近 12 周</h2><span>${activeDays} 天有学习</span></div>
      <div class="heat">
        <div class="heat-days"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div>
        <div class="heat-grid">${cells.join("")}</div>
      </div>
      <div class="heat-legend"><span>少</span><i></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><span>多</span></div>
    </section>`;
  }

  function statsHTML() {
    const s = globalStats();
    const langRows = LANGS.map((lang) => {
      const st = deckStats(lang);
      const p = pct(st.mastered, st.total);
      return `<div class="lang-stat" style="--accent:${DATA[lang].accent}">
        <div class="lang-stat-head"><span>${DATA[lang].native}</span><b>${st.mastered} / ${st.total}</b></div>
        <div class="progress"><i style="width:${p}%"></i></div>
        <small>学习中 ${st.learning} · 待复习 ${st.due} · 未学 ${st.fresh}</small>
      </div>`;
    }).join("");

    return `
      ${headerHTML()}
      <div class="page-head">
        <h1>统计</h1>
        <p>共复习 ${s.reviews} 次 · 学过 ${s.studied} 张</p>
      </div>
      <div class="stat-tiles">
        <div class="stat-tile"><span>${ICON.flame} 连续天数</span><b>${store.streak.current}<em>天</em></b></div>
        <div class="stat-tile"><span>${ICON.spark} 最长连续</span><b>${store.streak.best}<em>天</em></b></div>
        <div class="stat-tile"><span>${ICON.check} 已掌握</span><b>${s.mastered}<em>张</em></b></div>
        <div class="stat-tile"><span>${ICON.target} 正确率</span><b>${s.accuracy}<em>%</em></b></div>
      </div>
      ${heatmapHTML()}
      <section class="panel">
        <div class="panel-head"><h2>分语言进度</h2><span>掌握 = 间隔 ≥ 21 天</span></div>
        ${langRows}
      </section>

      <details class="fold">
        <summary>
          <span>${ICON.cloud} 跨设备同步</span>
          <span class="right">${syncStatusText()}<span class="chev">${ICON.chev}</span></span>
        </summary>
        <div class="fold-body">
          <p class="fold-note">同步码相当于钥匙。另一台设备填同一个码，点「从云端合并」即可接上进度。数据存在本机 PostgreSQL。</p>
          <div class="sync-row">
            <input class="search" id="sync-code" placeholder="同步码，如 ql-a3k9m2" value="${esc(store.sync.code)}" autocomplete="off" />
            <button class="btn soft" data-action="sync-gen">生成</button>
          </div>
          <label class="field">
            <span>自动同步</span>
            <span class="switch"><input type="checkbox" id="sync-auto" ${store.sync.auto ? "checked" : ""} /><i></i></span>
          </label>
          <div class="modal-actions">
            <button class="btn primary" data-action="sync-save">保存并同步</button>
            <button class="btn ghost" data-action="sync-pull">云端合并</button>
          </div>
          <div class="sync-state ${syncState.status === "ok" ? "ok" : syncState.status === "error" ? "error" : ""}">
            <i class="dot"></i>${syncStatusText()}
          </div>
          ${syncState.error ? `<p class="sync-error">${esc(syncState.error)}</p>` : ""}
        </div>
      </details>

      <details class="fold">
        <summary>
          <span>${ICON.tray} 数据与备份</span>
          <span class="right"><span class="chev">${ICON.chev}</span></span>
        </summary>
        <div class="fold-body">
          <p class="fold-note">进度同时存在本机浏览器。导出 JSON 可做冷备份，也可迁移到别的设备。</p>
          <div class="modal-actions">
            <button class="btn ghost" data-action="export">导出</button>
            <button class="btn ghost" data-action="import">导入</button>
          </div>
          <div class="modal-actions">
            <button class="btn danger" data-action="reset">清空全部进度</button>
          </div>
        </div>
      </details>
      ${navHTML("stats")}`;
  }

  function centerActiveLang() {
    const wrap = document.querySelector(".lang-scroll");
    const el = wrap?.querySelector(".lang-chip.active");
    if (!wrap || !el) return;
    const target = el.offsetLeft - (wrap.clientWidth - el.offsetWidth) / 2;
    wrap.scrollLeft = Math.max(0, target);
  }

  function renderApp() {
    if (store.ui.view === "browse") app.innerHTML = browseHTML();
    else if (store.ui.view === "wrong") app.innerHTML = wrongHTML();
    else if (store.ui.view === "stats") app.innerHTML = statsHTML();
    else if (store.ui.view === "road") app.innerHTML = roadHTML();
    else app.innerHTML = homeHTML();
    centerActiveLang();
    window.scrollTo(0, 0);
  }

  /* ---------------- 弹层 ---------------- */

  function openSettings() {
    const s = store.settings;
    const modal = document.createElement("div");
    modal.className = "modal-backdrop";
    modal.innerHTML = `<div class="modal">
      <div class="modal-head"><h2>设置</h2><button class="icon-btn" data-action="close-modal" aria-label="关闭">${ICON.close}</button></div>
      <label class="field"><span>每日目标（张）</span><input type="number" id="set-goal" min="5" max="100" value="${s.dailyGoal}" /></label>
      <label class="field"><span>每天新词上限</span><input type="number" id="set-new" min="0" max="50" value="${s.newPerDay}" /></label>
      <label class="field"><span>朗读速度</span><input type="range" id="set-rate" min="0.5" max="1.5" step="0.1" value="${s.ttsRate}" /><b id="rate-value">${s.ttsRate}</b></label>
      <label class="field">
        <span>显示读音（IPA / 假名）</span>
        <span class="switch"><input type="checkbox" id="set-reading" ${s.showReading ? "checked" : ""} /><i></i></span>
      </label>
      <div class="modal-actions"><button class="btn primary" data-action="save-settings">保存</button></div>
    </div>`;
    document.body.appendChild(modal);
  }

  function openDetail(id) {
    const item = ITEM_MAP[id];
    if (!item) return;
    const c = cardState(id);
    const st = itemStatus(item);
    const modal = document.createElement("div");
    modal.className = "modal-backdrop";
    modal.innerHTML = `<div class="modal" style="--accent:${DATA[item.lang].accent}">
      <div class="modal-head">
        <span class="pill">${DATA[item.lang].native} · ${STATUS_LABEL[st]}</span>
        <button class="icon-btn" data-action="close-modal" aria-label="关闭">${ICON.close}</button>
      </div>
      <div class="detail-term"${langAttr(item)}>${esc(item.term)}</div>
      ${item.reading ? `<div class="detail-reading"${langAttr(item)}>${esc(item.reading)}</div>` : ""}
      <div class="detail-meaning">${esc(item.meaning)}</div>
      <div class="detail-example">
        <p${langAttr(item)}>${esc(item.example)}</p>
        <span>${esc(item.exampleZh)}</span>
      </div>
      <div class="detail-meta">
        ${c ? `<span>复习 ${c.total} 次 · 正确 ${c.correct} 次</span><span>${c.lapses ? "错 " + c.lapses + " 次" : "无错题"}</span><span>下次 ${c.due}</span>` : `<span>还没学过</span>`}
      </div>
      <div class="modal-actions">
        <button class="btn ghost" data-action="speak" data-id="${item.id}">${ICON.speaker} 朗读</button>
        ${c && c.lapses > 0 ? `<button class="btn soft" data-action="forgive" data-id="${item.id}">移出错题本</button>` : ""}
        <button class="btn primary" data-action="study-one" data-id="${item.id}">学这一张</button>
      </div>
    </div>`;
    document.body.appendChild(modal);
  }

  function studyOne(id) {
    const item = ITEM_MAP[id];
    if (!item) return;
    document.querySelectorAll(".modal-backdrop").forEach((m) => m.remove());
    session = {
      lang: item.lang, mode: "flash", queue: [item], idx: 0, reviewed: 0,
      correct: 0, revealed: false, options: null, picked: null, choiceDone: false, started: Date.now()
    };
    store.ui.lang = item.lang;
    save({ skipSync: true });
    renderStudy();
  }

  /* ---------------- 导入导出 ---------------- */

  function exportData() {
    const blob = new Blob([JSON.stringify(store, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `qinglong-vocab-${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast("已导出进度文件");
  }

  function importData() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = () => {
      const file = input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result);
          if (!parsed || typeof parsed !== "object" || !parsed.cards) throw new Error("格式不对");
          store = {
            ...clone(DEFAULTS),
            ...parsed,
            settings: { ...DEFAULTS.settings, ...(parsed.settings || {}) },
            streak: { ...DEFAULTS.streak, ...(parsed.streak || {}) },
            sync: store.sync,
            ui: store.ui
          };
          save();
          renderApp();
          toast("进度已导入");
        } catch (e) {
          toast("导入失败：不是有效的进度文件");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  function resetAll() {
    if (!confirm("确定清空所有学习进度？此操作不可撤销，建议先导出备份。")) return;
    store.cards = {};
    store.days = {};
    store.streak = { current: 0, best: 0, last: null };
    save();
    renderApp();
    toast("已重置");
  }

  function readSyncInputs() {
    const code = ($("#sync-code")?.value || "").trim();
    if (code && !/^[A-Za-z0-9_-]{6,64}$/.test(code)) {
      toast("同步码只能用字母、数字、下划线、连字符，6–64 位");
      return false;
    }
    store.sync.code = code;
    store.sync.auto = !!$("#sync-auto")?.checked;
    return true;
  }

  function generateSyncCode() {
    const bytes = new Uint8Array(6);
    crypto.getRandomValues(bytes);
    const alphabet = "abcdefghjkmnpqrstuvwxyz23456789";
    let out = "ql-";
    bytes.forEach((b) => { out += alphabet[b % alphabet.length]; });
    return out;
  }

  /* ---------------- 事件 ---------------- */

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (!el) {
      if (e.target.classList.contains("modal-backdrop")) e.target.remove();
      return;
    }
    const action = el.dataset.action;
    switch (action) {
      case "switch-lang":
        store.ui.lang = el.dataset.lang;
        wordlist = "all";
        save({ skipSync: true });
        renderApp();
        break;
      case "start":
        startSession(store.ui.lang, el.dataset.mode || "flash");
        break;
      case "reveal":
        if (!session) break;
        if (!session.revealed) { session.revealed = true; renderStudy(); }
        break;
      case "rate":
        answerFlash(Number(el.dataset.q));
        break;
      case "choose":
        answerChoice(el.dataset.meaning);
        break;
      case "next":
        advance();
        break;
      case "speak": {
        const item = ITEM_MAP[el.dataset.id];
        if (item) speak(item.term, item.lang);
        break;
      }
      case "quit-study":
        if (confirm("退出本轮学习？已复习的进度会保留。")) {
          session = null;
          store.ui.view = "home";
          renderApp();
        }
        break;
      case "go-home":
      case "go-home-nav":
        session = null;
        store.ui.view = "home";
        save({ skipSync: true });
        renderApp();
        break;
      case "go-browse":
        session = null;
        store.ui.view = "browse";
        save({ skipSync: true });
        renderApp();
        break;
      case "go-wrong":
        session = null;
        store.ui.view = "wrong";
        save({ skipSync: true });
        renderApp();
        break;
      case "go-road":
        session = null;
        store.ui.view = "road";
        save({ skipSync: true });
        renderApp();
        break;
      case "go-stats":
        session = null;
        store.ui.view = "stats";
        save({ skipSync: true });
        renderApp();
        break;
      case "filter":
        browseFilter = el.dataset.filter;
        renderApp();
        break;
      case "wordlist":
        wordlist = el.dataset.list;
        renderApp();
        break;
      case "topic":
        topicFilter = el.dataset.topic;
        renderApp();
        break;
      case "detail":
        openDetail(el.dataset.id);
        break;
      case "study-one":
        studyOne(el.dataset.id);
        break;
      case "forgive": {
        const c = store.cards[el.dataset.id];
        if (c) {
          c.lapses = 0;
          save();
          document.querySelectorAll(".modal-backdrop").forEach((m) => m.remove());
          renderApp();
          toast("已移出错题本");
        }
        break;
      }
      case "open-settings":
        openSettings();
        break;
      case "close-modal":
        el.closest(".modal-backdrop")?.remove();
        break;
      case "save-settings": {
        store.settings.dailyGoal = clamp(Number($("#set-goal").value) || 20, 5, 100);
        store.settings.newPerDay = clamp(Number($("#set-new").value) || 0, 0, 50);
        store.settings.ttsRate = clamp(Number($("#set-rate").value) || 0.9, 0.5, 1.5);
        store.settings.showReading = $("#set-reading").checked;
        save();
        document.querySelectorAll(".modal-backdrop").forEach((m) => m.remove());
        renderApp();
        toast("设置已保存");
        break;
      }
      case "sync-gen":
        store.sync.code = generateSyncCode();
        save({ skipSync: true });
        renderApp();
        document.querySelector("details.fold")?.setAttribute("open", "");
        toast("已生成同步码");
        break;
      case "sync-save":
        if (readSyncInputs()) {
          save({ skipSync: true });
          renderApp();
          syncPush();
        }
        break;
      case "sync-pull":
        if (readSyncInputs()) {
          save({ skipSync: true });
          syncPull();
        }
        break;
      case "export":
        exportData();
        break;
      case "import":
        importData();
        break;
      case "reset":
        resetAll();
        break;
      default:
        break;
    }
  });

  document.addEventListener("input", (e) => {
    if (e.target.id === "browse-search") {
      browseQuery = e.target.value;
      const pos = e.target.selectionStart;
      renderApp();
      const input = $("#browse-search");
      if (input) {
        input.focus();
        input.setSelectionRange(pos, pos);
      }
    }
    if (e.target.id === "set-rate") {
      const label = $("#rate-value");
      if (label) label.textContent = e.target.value;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!session) return;
    if (e.target.matches("input, textarea")) return;
    const isFlash = session.mode === "flash" || session.mode === "wrong";
    if (isFlash) {
      if (e.code === "Space" || e.key === "Enter") {
        e.preventDefault();
        if (!session.revealed) { session.revealed = true; renderStudy(); }
        else answerFlash(5);
      }
      if (session.revealed && ["1", "2", "3"].includes(e.key)) {
        e.preventDefault();
        answerFlash([1, 3, 5][Number(e.key) - 1]);
      }
    } else if (e.code === "Space") {
      e.preventDefault();
      if (!session.choiceDone) speak(currentItem().term, session.lang);
      else advance();
    }
  });

  renderApp();
  if (store.sync.code && store.sync.auto) {
    setTimeout(() => { syncPull({ silent: true }); }, 900);
  }
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
})();
