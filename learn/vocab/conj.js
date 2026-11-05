(() => {
  "use strict";

  const DATA = {
    es: window.CONJ_ES,
    fr: window.CONJ_FR,
    de: window.CONJ_DE
  };
  const ORDER = ["es", "fr", "de"];
  const ACCENT = { es: "#b02a37", fr: "#4338ca", de: "#374151" };
  const SPEAK_LANG = { es: "es-ES", fr: "fr-FR", de: "de-DE" };
  const STORE_KEY = "qinglong-conj-v1";
  const MASTER = 2; // 同一动词同一时态答对 2 次算掌握
  const TENSE_TIPS = {
    fr: {
      pc: "复合过去时 = 助动词 avoir / être + 过去分词。用 être 时（aller、venir、sortir 等），过去分词要与主语性数一致：allé / allée / allés / allées。",
      imp: "未完成过去时表「当时的状态或习惯」，与复合过去时（一次性动作）对立。",
      fut: "简单将来时在不定式后加词尾 -ai / -as / -a / -ons / -ez / -ont，注意 -re 结尾动词要去掉 e。"
    },
    de: {
      perf: "现在完成时 = haben / sein + 过去分词。表示位置移动或状态变化的动词（gehen、kommen、sein、werden）用 sein。",
      prät: "过去时多用于书面叙述；口语里更常用现在完成时。",
      fut: "将来时 = werden + 不定式，口语中常直接用现在时加时间词代替。"
    },
    es: {
      pret: "简单过去时表已完成的动作，第一人称单数重音落在词尾（hablé / comí）。",
      imp: "未完成过去时表过去的习惯或背景，与简单过去时形成对照。",
      fut: "将来时直接在不定式后加 -é / -ás / -á / -emos / -éis / -án，所有变位组都一样。"
    }
  };

  const ICON = {
    back: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5 8 12l7 7"/></svg>',
    speaker: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5.5 6.6 9H3.8v6h2.8L11 18.5z"/><path d="M15.4 9.2a4 4 0 0 1 0 5.6"/><path d="M18 6.6a8 8 0 0 1 0 10.8"/></svg>'
  };

  const app = document.getElementById("app");
  const $ = (s, r = document) => r.querySelector(s);

  let store = load();
  let lang = store.ui.lang && DATA[store.ui.lang] ? store.ui.lang : "es";
  let tense = store.ui.tense || "";
  let verbIdx = 0;
  let quiz = null;

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return {
        known: parsed?.known || {},
        stats: parsed?.stats || { answered: 0, correct: 0 },
        ui: parsed?.ui || { lang: "es", tense: "" }
      };
    } catch (e) {
      return { known: {}, stats: { answered: 0, correct: 0 }, ui: { lang: "es", tense: "" } };
    }
  }
  function save() {
    store.ui = { lang, tense };
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {}
  }

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function deck() { return DATA[lang]; }
  function verbs() { return deck().verbs; }
  function currentVerb() { return verbs()[verbIdx] || verbs()[0]; }
  function tenses() { return deck().tenses; }
  function currentTense() {
    const list = tenses();
    return list.some(([k]) => k === tense) ? tense : list[0][0];
  }
  function tenseLabel(k) { return (tenses().find(([x]) => x === k) || [k, k])[1]; }

  function keyOf(inf, t) { return `${lang}:${inf}:${t}`; }
  function levelOf(inf, t) { return store.known[keyOf(inf, t)] || 0; }
  function verbDone(v) { return tenses().every(([t]) => levelOf(v.inf, t) >= MASTER); }
  function progress() {
    const total = verbs().length * tenses().length;
    let done = 0;
    verbs().forEach((v) => tenses().forEach(([t]) => { if (levelOf(v.inf, t) >= MASTER) done += 1; }));
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  /* 法语 je + 元音开头省音；人称单独一列显示，这里只输出动词部分 */
  function formText(person, form) {
    if (lang === "fr" && person === "je" && /^[aeiouâêéèîïôûùh]/i.test(form)) return `j'${form}`;
    return form;
  }
  function joinPerson(person, form) { return `${person} ${formText(person, form)}`; }

  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = SPEAK_LANG[lang];
    u.rate = 0.85;
    const v = window.speechSynthesis.getVoices().find((x) => x.lang === SPEAK_LANG[lang]);
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
  }

  /* ---------------- 视图 ---------------- */

  function render() {
    if (!deck()) {
      app.innerHTML = `<div class="conj-shell"><div class="empty-verb">该语言变位数据未加载</div></div>`;
      return;
    }
    const d = deck();
    const v = currentVerb();
    const t = currentTense();
    const p = progress();
    app.innerHTML = `<div class="conj-shell" style="--accent:${ACCENT[lang]}">
      <header class="conj-top">
        <a class="icon-btn" href="./index.html" aria-label="返回">${ICON.back}</a>
        <h1>动词变位</h1>
        <span class="sub">掌握 ${p.done}/${p.total}</span>
      </header>

      <div class="conj-seg">
        ${ORDER.filter((k) => DATA[k]).map((k) => `
          <button class="${lang === k ? "active" : ""}" data-action="lang" data-lang="${k}">${esc(DATA[k].label)}</button>`).join("")}
      </div>

      <div class="verb-strip">
        ${verbs().map((x, i) => `
          <button class="verb-chip ${i === verbIdx ? "active" : ""} ${verbDone(x) ? "done" : ""}"
                  data-action="verb" data-idx="${i}">${esc(x.inf)}${verbDone(x) ? '<span class="dot"></span>' : ""}</button>`).join("")}
      </div>

      <section class="verb-hero">
        <div class="inf">
          ${esc(v.inf)}
          <button data-action="say" data-text="${esc(v.inf)}" aria-label="朗读">${ICON.speaker}</button>
        </div>
        <div class="muted-row">
          <span class="pill">${esc(d.label)}</span>
          <span class="pill">${esc(v.group || "")}</span>
          <span>${esc(v.meaning)}</span>
        </div>
        ${v.note ? `<p class="note">${esc(v.note)}</p>` : ""}
      </section>

      <div class="tense-tabs">
        ${tenses().map(([k, label]) => `
          <button class="${k === t ? "active" : ""}" data-action="tense" data-tense="${k}">${esc(label)}</button>`).join("")}
      </div>

      <div class="conj-table">
        ${d.persons.map((person, i) => {
          const form = (v.forms[t] || [])[i] || "—";
          return `<div class="conj-row">
            <span class="who">${esc(person)}</span>
            <span class="form">${esc(formText(person, form))}</span>
            ${levelOf(v.inf, t) >= MASTER ? '<span class="mark">已掌握</span>' : ""}
          </div>`;
        }).join("")}
      </div>

      ${(TENSE_TIPS[lang] || {})[t] ? `<p class="conj-hint">${esc(TENSE_TIPS[lang][t])}</p>` : ""}

      <div class="conj-actions">
        <button class="btn primary" data-action="quiz">测试这个时态 · 8 题</button>
        <button class="btn ghost" data-action="say-tense">朗读整组变位</button>
      </div>
      <p class="conj-hint">${esc(d.persons.length)} 个人称 · ${esc(tenses().length)} 个时态 · 同一动词同一时态答对 ${MASTER} 次算掌握。变位表按人称纵向记，比横向抄写更容易形成语感。</p>
      ${quiz ? quizHTML() : ""}
    </div>`;

    const active = $(".verb-chip.active");
    if (active && active.scrollIntoView) active.scrollIntoView({ inline: "center", block: "nearest" });
  }

  /* ---------------- 测验 ---------------- */

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildQuiz(limit = 8) {
    const d = deck();
    const pool = [];
    verbs().forEach((v) => tenses().forEach(([t]) => pool.push({ v, t })));
    const picked = shuffle(pool).slice(0, limit);
    const questions = picked.map(({ v, t }) => {
      const forms = v.forms[t] || [];
      const personIdx = Math.floor(Math.random() * d.persons.length);
      const answer = forms[personIdx];
      const others = [...new Set(forms.filter((f, i) => i !== personIdx && f))];
      const opts = shuffle([answer, ...shuffle(others).slice(0, 3)]);
      return { inf: v.inf, meaning: v.meaning, t, person: d.persons[personIdx], personIdx, answer, opts };
    });
    return { questions, idx: 0, picked: null, correct: 0, done: false, lang };
  }

  function quizHTML() {
    const q = quiz.questions[quiz.idx];
    if (!q) return "";
    return `<div class="conj-quiz">
      <div class="quiz-card">
        <div class="q-tag">
          <span class="pill">${esc(deck().label)}</span>
          <span>${esc(tenseLabel(q.t))}</span>
          <span style="margin-left:auto">${quiz.idx + 1} / ${quiz.questions.length}</span>
        </div>
        <div class="q-inf">${esc(q.inf)}</div>
        <div class="q-ask">${esc(q.meaning)} · 人称「${esc(q.person)}」的变位是？</div>
        <div class="q-options">
          ${q.opts.map((o, i) => {
            const cls = quiz.picked == null ? "" : o === q.answer ? "right" : o === quiz.picked ? "wrong" : "";
            return `<button class="q-opt ${cls}" data-action="pick" data-i="${i}" ${quiz.picked != null ? "disabled" : ""}>${esc(o)}</button>`;
          }).join("")}
        </div>
        <div class="q-meta">
          <span>答对 ${quiz.correct}/${quiz.idx + (quiz.picked != null ? 1 : 0)}</span>
          <span class="grow"></span>
          <button class="icon-btn" data-action="close-quiz" aria-label="结束">结束</button>
        </div>
        ${quiz.picked != null ? `<div class="q-after">
          正确答案：<b>${esc(joinPerson(q.person, q.answer))}</b>
          ${quiz.picked === q.answer ? "" : " · 你再看看这一组其他人称，规律会清楚些。"}
        </div>
        <div class="conj-actions" style="padding:14px 0 0">
          <button class="btn primary" data-action="next-q">${quiz.idx + 1 >= quiz.questions.length ? "看结果" : "下一题"}</button>
        </div>` : ""}
      </div>
    </div>`;
  }

  function finishQuiz() {
    const pct = Math.round((quiz.correct / quiz.questions.length) * 100);
    app.innerHTML = `<div class="conj-shell" style="--accent:${ACCENT[lang]}">
      <header class="conj-top">
        <a class="icon-btn" href="./index.html" aria-label="返回">${ICON.back}</a>
        <h1>测验结果</h1>
      </header>
      <div class="conj-quiz"><div class="quiz-card" style="text-align:center;padding:36px 18px">
        <div style="font-size:44px;font-weight:700;letter-spacing:-0.03em">${quiz.correct} / ${quiz.questions.length}</div>
        <p class="q-ask" style="margin-top:8px">正确率 ${pct}%</p>
        <div class="conj-actions" style="padding:22px 0 0">
          <button class="btn primary" data-action="quiz">再来一组</button>
          <a class="btn ghost" href="./conj.html">返回变位表</a>
        </div>
      </div></div>
    </div>`;
  }

  function answer(i) {
    if (quiz.picked != null) return;
    const q = quiz.questions[quiz.idx];
    quiz.picked = q.opts[i];
    const ok = quiz.picked === q.answer;
    if (ok) quiz.correct += 1;
    store.stats.answered += 1;
    if (ok) store.stats.correct += 1;
    const k = keyOf(quiz.lang, q.inf, q.t);
    store.known[k] = Math.max(0, (store.known[k] || 0) + (ok ? 1 : -1));
    save();
    render();
  }

  function nextQuestion() {
    quiz.idx += 1;
    quiz.picked = null;
    if (quiz.idx >= quiz.questions.length) finishQuiz();
    else render();
  }

  /* ---------------- 事件 ---------------- */

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (!el) return;
    const action = el.dataset.action;
    switch (action) {
      case "lang":
        lang = el.dataset.lang;
        verbIdx = 0;
        tense = tenses()[0][0];
        quiz = null;
        save();
        render();
        break;
      case "verb":
        verbIdx = Number(el.dataset.idx) || 0;
        render();
        break;
      case "tense":
        tense = el.dataset.tense;
        save();
        render();
        break;
      case "say":
        speak(el.dataset.text);
        break;
      case "say-tense": {
        const v = currentVerb();
        const t = currentTense();
        speak([v.inf, ...(v.forms[t] || [])].join(", "));
        break;
      }
      case "quiz":
        quiz = buildQuiz(8);
        render();
        break;
      case "pick":
        answer(Number(el.dataset.i));
        break;
      case "next-q":
        nextQuestion();
        break;
      case "close-quiz":
        quiz = null;
        render();
        break;
    }
  });

  render();
})();
