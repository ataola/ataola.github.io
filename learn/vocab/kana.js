(() => {
  "use strict";

  const KANA = window.KANA;
  const TIPS = window.KANA_TIPS;
  const STORE_KEY = "qinglong-kana-v1";
  const TABS = [
    ["basic", "清音"],
    ["daku", "浊音 / 半浊音"],
    ["yoon", "拗音"],
    ["tips", "要点"]
  ];

  const ICON = {
    back: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5 8 12l7 7"/></svg>',
    close: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    speaker: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5.5 6.6 9H3.8v6h2.8L11 18.5z"/><path d="M15.4 9.2a4 4 0 0 1 0 5.6"/><path d="M18 6.6a8 8 0 0 1 0 10.8"/></svg>',
    check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.6 4.6L19 7.5"/></svg>',
    x: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="m6.5 6.5 11 11M17.5 6.5l-11 11"/></svg>'
  };

  const app = document.getElementById("app");
  const $ = (s, r = document) => r.querySelector(s);

  let store = load();
  let script = store.ui.script || "hira";
  let tab = store.ui.tab || "basic";
  let detail = null;
  let quiz = null;

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return {
        known: parsed?.known || {},
        stats: parsed?.stats || { answered: 0, correct: 0 },
        ui: parsed?.ui || { script: "hira", tab: "basic" }
      };
    } catch (e) {
      return { known: {}, stats: { answered: 0, correct: 0 }, ui: { script: "hira", tab: "basic" } };
    }
  }
  function save() {
    store.ui = { script, tab };
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {}
  }

  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function charOf(cell) { return script === "hira" ? cell[0] : cell[1]; }
  function keyOf(cell) { return `${script}:${charOf(cell)}`; }
  function levelOf(cell) { return store.known[keyOf(cell)] || 0; }

  function allCells(which) {
    const out = [];
    (KANA[which] || []).forEach((row) => {
      row.cells.forEach((cell, i) => {
        if (cell) out.push({ ...{ row: row.row, idx: i }, cell });
      });
    });
    return out;
  }
  function pool() {
    return [...allCells("basic"), ...allCells("daku"), ...allCells("yoon")];
  }

  function stats() {
    const list = pool();
    const known = list.filter((x) => levelOf(x.cell) >= 3).length;
    return { total: list.length, known, pct: list.length ? Math.round((known / list.length) * 100) : 0 };
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ja-JP";
    u.rate = 0.85;
    const v = window.speechSynthesis.getVoices().find((x) => x.lang === "ja-JP");
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
  }

  function render() {
    const s = stats();
    app.innerHTML = `<div class="kana-shell">
      <header class="kana-top">
        <button class="icon-btn" data-action="back" aria-label="返回">${ICON.back}</button>
        <h1>五十音图</h1>
        <span class="sub">已掌握 ${s.known}/${s.total}</span>
      </header>

      <div class="kana-seg">
        <button class="${script === "hira" ? "active" : ""}" data-action="script" data-script="hira">平假名</button>
        <button class="${script === "kata" ? "active" : ""}" data-action="script" data-script="kata">片假名</button>
      </div>

      <div class="kana-tabs">
        ${TABS.map(([k, label]) => `<button class="${tab === k ? "active" : ""}" data-action="tab" data-tab="${k}">${label}</button>`).join("")}
      </div>

      <main class="kana-panel">${tab === "tips" ? tipsHTML() : gridHTML(tab)}</main>

      ${tab === "tips" ? "" : `<div class="kana-actions">
        <button class="btn primary" data-action="quiz">开始测试 · 10 题</button>
      </div>`}
      ${detail ? sheetHTML(detail) : ""}
      ${quiz ? quizHTML() : ""}
    </div>`;
  }

  function gridHTML(which) {
    const rows = KANA[which] || [];
    return `<div class="kana-grid-card">
      ${rows.map((row) => `
        <div class="kana-row">
          <div class="kana-row-label">${esc(row.row.replace("行", "").replace("（半浊）", ""))}</div>
          ${row.cells.map((cell) => {
            if (!cell) return `<div class="kana-cell empty"></div>`;
            const lv = levelOf(cell);
            const cls = lv >= 3 ? "known" : lv > 0 ? "learning" : "";
            return `<button class="kana-cell ${cls}" data-action="cell" data-key="${esc(keyOf(cell))}">
              <span class="k">${esc(charOf(cell))}</span>
              <span class="r">${esc(cell[2])}</span>
              <i class="dot"></i>
            </button>`;
          }).join("")}
        </div>`).join("")}
    </div>`;
  }

  function tipsHTML() {
    return `<div class="kana-notes">
      ${TIPS.map(([k, v]) => `<div class="kana-note"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join("")}
    </div>`;
  }

  function sheetHTML(found) {
    const cell = found.cell;
    const ch = charOf(cell);
    const other = script === "hira" ? cell[1] : cell[0];
    return `<div class="kana-sheet-backdrop" data-action="close-sheet">
      <div class="kana-sheet" data-stop="1">
        <div class="kana-big">
          <div class="k">${esc(ch)}</div>
          <div class="r">${esc(cell[2])}</div>
          <div class="pair">另一种写法：${esc(other)} · ${esc(found.row || "")}</div>
        </div>
        <div class="kana-ex">
          <div class="w">${esc(cell[3] || "")}</div>
          <div class="m">${esc(cell[4] || "")}</div>
        </div>
        <div class="kana-sheet-actions">
          <button class="btn ghost" data-action="speak" data-text="${esc(cell[3] || ch)}">${ICON.speaker} 朗读</button>
          <button class="btn soft" data-action="mark" data-mark="0">还不熟</button>
          <button class="btn primary" data-action="mark" data-mark="3">记住了</button>
        </div>
      </div>
    </div>`;
  }

  /* ---------- 测试 ---------- */

  function startQuiz() {
    const list = pool();
    const qs = [];
    const types = ["r2k", "k2r", "listen"];
    for (let i = 0; i < 10; i++) {
      const item = list[Math.floor(Math.random() * list.length)];
      qs.push({ item, type: types[i % types.length] });
    }
    quiz = { qs, idx: 0, correct: 0, picked: null, done: false, options: null };
    render();
    if (qs[0].type === "listen") setTimeout(() => speak(qs[0].item.cell[3] || charOf(qs[0].item.cell)), 300);
  }

  function buildOptions(item, type) {
    const poolList = pool().filter((x) => charOf(x.cell) !== charOf(item.cell));
    const picks = [];
    while (picks.length < 3 && poolList.length) {
      const p = poolList.splice(Math.floor(Math.random() * poolList.length), 1)[0];
      picks.push(p);
    }
    return [item, ...picks].sort(() => Math.random() - 0.5);
  }

  function quizHTML() {
    const q = quiz.qs[quiz.idx];
    const item = q.item;
    const ch = charOf(item.cell);
    if (!quiz.options) quiz.options = buildOptions(item, q.type);
    if (quiz.done) {
      const pct = Math.round((quiz.correct / quiz.qs.length) * 100);
      return `<div class="quiz-overlay">
        <div class="quiz-head">
          <button class="icon-btn" data-action="quiz-close">${ICON.close}</button>
          <div class="quiz-progress"><i style="width:100%"></i></div>
          <span class="quiz-count">${quiz.correct}/${quiz.qs.length}</span>
        </div>
        <div class="quiz-result">
          <div class="big">${pct}%</div>
          <p>本轮答对 ${quiz.correct} / ${quiz.qs.length} 题</p>
          <div class="btns">
            <button class="btn primary" data-action="quiz-again">再来一轮</button>
            <button class="btn ghost" data-action="quiz-close">回到图表</button>
          </div>
        </div>
      </div>`;
    }
    const prompt = q.type === "r2k" ? "选出对应的假名" : q.type === "k2r" ? "选出正确的读音" : "听发音，选出假名";
    return `<div class="quiz-overlay">
      <div class="quiz-head">
        <button class="icon-btn" data-action="quiz-close">${ICON.close}</button>
        <div class="quiz-progress"><i style="width:${Math.round((quiz.idx / quiz.qs.length) * 100)}%"></i></div>
        <span class="quiz-count">${quiz.idx + 1}/${quiz.qs.length}</span>
      </div>
      <div class="quiz-body">
        <div class="quiz-q">
          <div class="prompt">${prompt}</div>
          ${q.type === "r2k" ? `<div class="q-romaji">${esc(item.cell[2])}</div>` : ""}
          ${q.type === "k2r" ? `<div class="q-kana">${esc(ch)}</div>` : ""}
          ${q.type === "listen" ? `<button class="q-listen" data-action="speak" data-text="${esc(item.cell[3] || ch)}">${ICON.speaker}</button>` : ""}
        </div>
        <div class="quiz-opts">
          ${quiz.options.map((opt) => {
            const val = q.type === "k2r" ? opt.cell[2] : charOf(opt.cell);
            const isRight = charOf(opt.cell) === ch;
            let cls = "";
            if (quiz.picked) {
              cls = isRight ? "correct" : (val === quiz.picked ? "wrong" : "dim");
            }
            return `<button class="quiz-opt ${q.type === "k2r" ? "romaji" : ""} ${cls}"
              data-action="answer" data-val="${esc(val)}">${esc(val)}</button>`;
          }).join("")}
        </div>
        ${quiz.picked ? `<button class="btn primary block" data-action="quiz-next">${quiz.idx === quiz.qs.length - 1 ? "看结果" : "下一题"}</button>` : ""}
      </div>
    </div>`;
  }

  function answer(val) {
    if (!quiz || quiz.picked) return;
    const q = quiz.qs[quiz.idx];
    const ch = charOf(q.item.cell);
    const right = q.type === "k2r" ? q.item.cell[2] : ch;
    quiz.picked = val;
    const ok = val === right;
    if (ok) quiz.correct += 1;
    const key = keyOf(q.item.cell);
    const lv = store.known[key] || 0;
    store.known[key] = ok ? Math.min(3, lv + 1) : 0;
    store.stats.answered += 1;
    if (ok) store.stats.correct += 1;
    save();
    if (ok && navigator.vibrate) navigator.vibrate(8);
    render();
  }

  /* ---------- 事件 ---------- */

  document.addEventListener("click", (e) => {
    const stop = e.target.closest("[data-stop]");
    const el = e.target.closest("[data-action]");
    if (!el) return;
    if (el.dataset.action === "close-sheet" && stop) return;
    const a = el.dataset.action;
    switch (a) {
      case "back":
        location.href = "./";
        break;
      case "script":
        script = el.dataset.script;
        detail = null;
        save();
        render();
        break;
      case "tab":
        tab = el.dataset.tab;
        save();
        render();
        break;
      case "cell": {
        const key = el.dataset.key;
        const found = pool().find((x) => keyOf(x.cell) === key);
        if (found) { detail = found; render(); }
        break;
      }
      case "close-sheet":
        detail = null;
        render();
        break;
      case "speak":
        speak(el.dataset.text || "");
        break;
      case "mark": {
        if (!detail) break;
        store.known[keyOf(detail.cell)] = Number(el.dataset.mark);
        save();
        detail = null;
        render();
        break;
      }
      case "quiz":
        startQuiz();
        break;
      case "quiz-close":
        quiz = null;
        render();
        break;
      case "quiz-again":
        startQuiz();
        break;
      case "answer":
        answer(el.dataset.val);
        break;
      case "quiz-next":
        if (quiz.idx === quiz.qs.length - 1) {
          quiz.done = true;
        } else {
          quiz.idx += 1;
          quiz.picked = null;
          quiz.options = null;
          const nq = quiz.qs[quiz.idx];
          if (nq.type === "listen") setTimeout(() => speak(nq.item.cell[3] || charOf(nq.item.cell)), 260);
        }
        render();
        break;
      default:
        break;
    }
  });

  render();
})();
