/* English Pearls of Kuwait —  interactive book engine. Plain JS, no libraries. */
(function () {
  "use strict";

  /* ───────────── helpers ───────────── */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  function h(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class") e.className = v;
      else if (k === "html") e.innerHTML = v;
      else if (k === "text") e.textContent = v;
      else if (k.startsWith("on") && typeof v === "function") e.addEventListener(k.slice(2), v);
      else if (k === "style" && typeof v === "object") Object.assign(e.style, v);
      else e.setAttribute(k, v === true ? "" : v);
    }
    const flat = (arr, out) => { arr.forEach((x) => Array.isArray(x) ? flat(x, out) : out.push(x)); return out; };
    for (const k of flat(kids, [])) { if (k == null || k === false) continue; e.append(k.nodeType ? k : document.createTextNode(String(k))); }
    return e;
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const norm = (s) => String(s || "").toLowerCase().replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").replace(/^[\s"']+|[\s.,!?;:"']+$/g, "").trim();
  const normSentence = (s) => String(s || "").toLowerCase().replace(/[’‘`]/g, "'").replace(/\s+([.,!?;:])/g, "$1").replace(/\s+/g, " ").trim();
  function hashStr(s) { let x = 2166136261; for (let i = 0; i < s.length; i++) { x ^= s.charCodeAt(i); x = Math.imul(x, 16777619); } return x >>> 0; }
  function seededShuffle(arr, seed) {
    const a = arr.slice(); let s = hashStr(String(seed)) || 1;
    for (let i = a.length - 1; i > 0; i--) { s = (Math.imul(s, 1103515245) + 12345) >>> 0; const j = s % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function shuffleNotSame(arr, seed) { // shuffle but avoid identical order when possible
    let a = seededShuffle(arr, seed); if (arr.length > 1 && a.every((x, i) => x === arr[i])) a = a.slice(1).concat(a[0]); return a;
  }
  const plain = (s) => String(s).replace(/\[\[|\]\]/g, "").replace(/\*/g, "");
  const ICON = {
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    full: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
    sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11" stroke-linecap="round"/></svg>',
    mute: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="m17 9 5 6M22 9l-5 6" stroke-linecap="round"/></svg>',
    speak: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6" stroke-linecap="round"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
    replay: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 12a8 8 0 1 0 2.3-5.6M4 4v4h4"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M8 7h7"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5V14M12 17.5v.01"/></svg>',
    motion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12h4l3-7 4 14 3-7h4"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    text: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 18 9 6l5 12M5.8 14h6.4M15 18l3-7 3 7M15.9 16h4.2"/></svg>',
    timer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/></svg>'
  };
  const icon = (n) => { const s = h("span", { "aria-hidden": "true", style: { display: "inline-flex" } }); s.innerHTML = ICON[n]; return s; };

  /* ───────────── storage (local, per device) ───────────── */
  const KEY = BOOK.storeKey || "pearls7a.v1";
  const defaults = () => ({
    settings: { ar: false, mode: "student", sound: true, motion: true, timer: false, rate: 0.9, text: 0, showAns: false },
    items: {}, parts: {}, points: 0, streak: 0, badges: {}, drafts: {}, flips: 0, games: {}, recordings: 0, lastLesson: null
  });
  let S = defaults();
  let storageOK = true;
  try { const raw = localStorage.getItem(KEY); if (raw) { const o = JSON.parse(raw); S = Object.assign(defaults(), o); S.settings = Object.assign(defaults().settings, o.settings || {}); } }
  catch (e) { storageOK = false; }
  let saveT = 0;
  function save() { clearTimeout(saveT); saveT = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { storageOK = false; } }, 150); }

  /* ───────────── sound effects (WebAudio, soft) ───────────── */
  let actx = null;
  function tone(freqs, dur) {
    if (!S.settings.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      let t = actx.currentTime;
      freqs.forEach((f) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = "sine"; o.frequency.value = f; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        o.connect(g).connect(actx.destination); o.start(t); o.stop(t + dur + 0.02); t += dur * 0.8;
      });
    } catch (e) {}
  }
  const sfx = { good: () => tone([660, 880], 0.14), bad: () => tone([300], 0.22), win: () => tone([523, 659, 784, 1046], 0.13), tap: () => tone([520], 0.05) };

  /* ───────────── speech (generated voice) ───────────── */
  const TTS = {
    ok: "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined",
    voice: null, cur: null,
    pick() {
      if (!this.ok) return null;
      const vs = speechSynthesis.getVoices().filter((v) => /^en[-_]/i.test(v.lang) || /^en$/i.test(v.lang));
      const pref = ["en-GB", "en-US", "en-AU", "en-IE", "en-CA"];
      for (const p of pref) { const v = vs.find((x) => x.lang.replace("_", "-") === p && /natural|google|samantha|daniel|serena|libby|sonia|aria|jenny/i.test(x.name)) || vs.find((x) => x.lang.replace("_", "-") === p); if (v) return (this.voice = v); }
      return (this.voice = vs[0] || null);
    },
    speak(text, opt) {
      opt = opt || {};
      if (!this.ok) { toast("Your browser has no speech voice."); opt.onend && opt.onend(); return null; }
      this.cur = null; try { speechSynthesis.cancel(); } catch (e) {}
      const u = new SpeechSynthesisUtterance(plain(text));
      const v = this.voice || this.pick(); if (v) u.voice = v; u.lang = v ? v.lang : "en-GB";
      u.rate = opt.rate || S.settings.rate || 0.9;
      if (opt.onboundary) u.onboundary = opt.onboundary;
      u.onend = () => { if (this.cur === u) this.cur = null; opt.onend && opt.onend(); };
      u.onerror = () => { if (this.cur === u) this.cur = null; opt.onend && opt.onend(); };
      this.cur = u; speechSynthesis.speak(u); return u;
    },
    stop() { if (this.ok) { this.cur = null; try { speechSynthesis.cancel(); } catch (e) {} } $$(".icon-btn.speaking").forEach((b) => b.classList.remove("speaking")); },
    pause() { if (this.ok) speechSynthesis.pause(); }, resume() { if (this.ok) speechSynthesis.resume(); }
  };
  if (TTS.ok) { TTS.pick(); speechSynthesis.onvoiceschanged = () => TTS.pick(); }
  function sayBtn(text, label) {
    const b = h("button", { class: "icon-btn", type: "button", title: label || "Listen", "aria-label": (label || "Listen") + ": " + plain(text).slice(0, 60) }, icon("speak"));
    b.addEventListener("click", (ev) => { ev.stopPropagation(); if (b.classList.contains("speaking")) { TTS.stop(); return; } TTS.stop(); b.classList.add("speaking"); TTS.speak(text, { onend: () => b.classList.remove("speaking") }); });
    return b;
  }

  /* ───────────── toast ───────────── */
  let toastT;
  function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2200); }

  /* ───────────── data model ───────────── */
  // Grammar lessons: keep book order, but place practice as worked → guided → independent → speaking/writing.
  BOOK.units.forEach((u) => u.lessons.forEach((l) => {
    if (l.skill !== "Grammar") return;
    const rank = (s) => s.type === "grammar" ? 0 : s.type === "activity" ? (s.stage === "independent" ? 2 : 1) : 3;
    l.sections = l.sections.map((s, i) => ({ s, i })).sort((a, b) => rank(a.s) - rank(b.s) || (a.s.source === "extra") - (b.s.source === "extra") || a.i - b.i).map((x) => x.s);
  }));
  const units = () => BOOK.toc.map((t) => { const u = BOOK.units.find((x) => x.id === t.id); return Object.assign({}, t, u || {}, { built: !!u, lessonsTOC: t.lessons }); });
  function allLessons() { const out = []; units().forEach((u) => { if (u.built) u.lessons.forEach((l) => out.push({ u, l })); }); return out; }
  function findLesson(id) { return allLessons().find((x) => x.l.id === id); }
  const SKILL_ICON = { Reading: "📖", Grammar: "🧩", Listening: "🎧", Speaking: "🗣️", Writing: "✍️" };
  const SKILL_AR = { Reading: "القراءة", Grammar: "القواعد", Listening: "الاستماع", Speaking: "التحدث", Writing: "الكتابة" };

  // parts of a lesson
  function lessonParts(l) {
    const parts = [{ key: "start", label: "Start", ico: "🚀" }];
    if (l.vocab && l.vocab.length) parts.push({ key: "words", label: "Words", ico: "🃏" });
    const lab = { reading: "Read", grammar: "Rule", activity: "Practice", discuss: "Talk", speak: "Speak", write: "Write", listen: "Listen" };
    const ico = { reading: "📖", grammar: "🧩", activity: "✏️", discuss: "💬", speak: "🗣️", write: "✍️", listen: "🎧" };
    const counts = {};
    l.sections.forEach((s, i) => {
      const base = s.source === "extra" ? "Extra" : lab[s.type] || "Part";
      counts[base] = (counts[base] || 0) + 1;
      parts.push({ key: "s" + i, sec: i, base, label: base, ico: s.source === "extra" ? "⭐" : ico[s.type] || "•" });
    });
    // number duplicate labels
    const seen = {}; parts.forEach((p) => { if (p.base && counts[p.base] > 1) { seen[p.base] = (seen[p.base] || 0) + 1; p.label = p.base + " " + seen[p.base]; } });
    if (l.game) parts.push({ key: "game", label: "Game", ico: "🎮" });
    parts.push({ key: "finish", label: "Finish", ico: "🏁" });
    parts.push({ key: "teacher", label: "Teacher", ico: "🧑‍🏫", teacher: true });
    return parts;
  }
  // items that count toward progress
  function lessonItemKeys(l) {
    const keys = [];
    l.sections.forEach((s, si) => {
      if (s.items) s.items.forEach((it, ii) => keys.push(l.id + ":" + si + ":" + ii));
      if (s.type === "write") keys.push(l.id + ":" + si + ":w");
    });
    if (l.vocab && l.vocab.length >= 4) keys.push(l.id + ":vocab:meaning");
    if (l.game) keys.push(l.id + ":game");
    return keys;
  }
  function lessonPct(l) {
    const keys = lessonItemKeys(l), parts = lessonParts(l).filter((p) => !p.teacher);
    const seen = S.parts[l.id] || [];
    const done = keys.filter((k) => S.items[k] && S.items[k].done).length + parts.filter((p) => seen.includes(p.key)).length;
    const total = keys.length + parts.length;
    return total ? Math.round((done / total) * 100) : 0;
  }
  function unitPct(u) { if (!u.built) return 0; const ps = u.lessons.map(lessonPct); return Math.round(ps.reduce((a, b) => a + b, 0) / ps.length); }

  /* ───────────── points & badges ───────────── */
  const BADGES = [
    { id: "first", ico: "🦪", name: "First Pearl", desc: "Get your first answer right." },
    { id: "streak5", ico: "🔥", name: "On Fire", desc: "5 right answers in a row." },
    { id: "cards", ico: "🃏", name: "Word Collector", desc: "Flip 20 word cards." },
    { id: "speaker", ico: "🎤", name: "Brave Speaker", desc: "Record your voice once." },
    { id: "writer", ico: "✍️", name: "Young Writer", desc: "Check one writing task." },
    { id: "gamer", ico: "🏆", name: "Game Champ", desc: "Finish 3 lesson games." },
    { id: "lesson", ico: "⭐", name: "Lesson Star", desc: "Finish a lesson 100%." },
    { id: "unit", ico: "👑", name: "Unit Master", desc: "Finish every lesson in a unit." },
    { id: "p200", ico: "💎", name: "200 Points", desc: "Collect 200 points." }
  ];
  function award(id) { if (S.badges[id]) return; S.badges[id] = Date.now(); const b = BADGES.find((x) => x.id === id); save(); if (b) { setTimeout(() => toast("New badge: " + b.ico + " " + b.name), 400); sfx.win(); } }
  function addPoints(n) { S.points += n; if (S.points >= 200) award("p200"); updatePointsUI(); save(); }
  function updatePointsUI() { const p = $("#pts"); if (p) p.textContent = S.points; }
  function markItem(key, ok, opt) {
    const rec = S.items[key] || { tries: 0, done: false, ok: false };
    const was = rec.done;
    rec.tries++;
    if (ok) {
      if (!rec.ok) { addPoints(rec.tries === 1 ? 10 : 5); award("first"); }
      rec.ok = true; rec.done = true;
      S.streak = rec.tries === 1 ? S.streak + 1 : 0; if (S.streak >= 5) award("streak5");
    } else if (opt && opt.open) { if (!was) addPoints(5); rec.done = true; }
    else { S.streak = 0; }
    S.items[key] = rec; save(); afterProgress(); return rec;
  }
  function afterProgress() {
    if (!CUR) return;
    const pct = lessonPct(CUR.l);
    if (pct >= 100) award("lesson");
    if (CUR.u.built && CUR.u.lessons.every((l) => lessonPct(l) >= 100)) award("unit");
    const r = $("#lessonPct"); if (r) { r.style.setProperty("--p", pct); r.dataset.v = pct + "%"; }
    renderDrawer();
  }
  const praise = ["Well done!", "Great job!", "Excellent!", "Brilliant!", "Super!"];
  const retry = ["Try again!", "Almost! Try again.", "Good try! Look again."];
  const pick = (a) => a[Math.floor(Math.random() * a.length)];

  /* ───────────── Arabic help for common instructions ───────────── */
  const AR_INSTR = [
    [/choose the correct answer/i, "اختر الإجابة الصحيحة."], [/answer the (following )?questions/i, "أجب عن الأسئلة."], [/match/i, "صِل كل عنصر بما يناسبه: اضغط على عنصر ثم على ما يطابقه."],
    [/correct the underlined/i, "صحّح الكلمات التي تحتها خط."], [/fill in|complete the sentences|complete the table|complete/i, "أكمل الفراغات."], [/put the words in order|order|build/i, "رتّب الكلمات لتكوين جملة صحيحة."],
    [/underline/i, "اختر الكلمة الصحيحة."], [/discuss/i, "ناقش مع زميلك."], [/listen/i, "استمع ثم أجب."], [/write/i, "اكتب."], [/interview|ask/i, "اسأل زميلك وأجب عن أسئلته."], [/read/i, "اقرأ."], [/tap/i, "اضغط على الإجابة."]
  ];
  function arFor(s) { if (!s) return null; for (const [re, ar] of AR_INSTR) if (re.test(s)) return ar; return null; }

  /* ───────────── inline markup ───────────── */
  // grammar tokens: "{s:She} {v:brushes} her teeth"
  function tokensHTML(str) {
    return esc(str).replace(/\{([svaotcnqp]):([^}]+)\}/g, (m, k, t) => '<span class="tk tk-' + k + '">' + t + "</span>");
  }
  function inlineHTML(str) { // *italic*  [[underline]]
    return esc(str).replace(/\[\[(.+?)\]\]/g, '<span class="ul">$1</span>').replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/\n/g, "<br>");
  }
  const LEGEND = { s: "subject", v: "verb", a: "helping verb / modal", o: "object", t: "time / key word", c: "connector", n: "negative", q: "question word", p: "purpose" };

  /* ───────────── shell ───────────── */
  let CUR = null; // {u,l}
  let PART = 0;
  function applySettings() {
    const st = S.settings, b = document.body;
    b.classList.toggle("mode-teacher", st.mode === "teacher");
    b.classList.toggle("no-motion", !st.motion);
    document.documentElement.classList.toggle("big-text", st.text === 1);
    document.documentElement.classList.toggle("huge-text", st.text === 2);
    $("#btnAr").setAttribute("aria-pressed", st.ar);
    $("#btnSound").setAttribute("aria-pressed", st.sound); $("#btnSound").innerHTML = ""; $("#btnSound").append(icon(st.sound ? "sound" : "mute"));
    $("#btnSound").setAttribute("aria-label", st.sound ? "Sounds on" : "Sounds off");
    $("#mStudent").setAttribute("aria-pressed", st.mode === "student"); $("#mTeacher").setAttribute("aria-pressed", st.mode === "teacher");
    const ans = $("#btnAns"); ans.hidden = st.mode !== "teacher"; ans.setAttribute("aria-pressed", !!st.showAns);
  }

  function renderDrawer() {
    const body = $("#drawerBody"); if (!body) return; body.innerHTML = "";
    if (BOOK.libraryUrl) body.append(h("a", { class: "toc-extra", href: BOOK.libraryUrl }, "📚 All books"));
    body.append(h("a", { class: "toc-extra", href: "#home" }, "🏠 Home"));
    units().forEach((u) => {
      const box = h("div", { class: "toc-unit" });
      box.append(h("button", { type: "button", onclick: () => { location.hash = "#" + u.id + "l1"; closeDrawer(); } }, h("span", { class: "dot", style: { background: "var(--" + u.color + ")" } }), "Unit " + u.num + " · " + u.title));
      u.lessonsTOC.forEach((t, i) => {
        const id = u.id + "l" + (i + 1), l = u.built ? u.lessons[i] : null;
        const a = h("a", { class: "toc-lesson" + (CUR && CUR.l.id === id ? " active" : ""), href: "#" + id },
          h("span", { class: "skill" }, t[0]), h("span", { class: "ttl" }, t[1]), h("span", { class: "pct" }, l ? lessonPct(l) + "%" : "not built"));
        box.append(a);
      });
      body.append(box);
    });
    body.append(h("hr", { style: { border: 0, borderTop: "1px solid var(--line)", margin: "12px 8px" } }));
    body.append(h("a", { class: "toc-extra", href: "#glossary" }, "🔤 Glossary (pages " + BOOK.pagesInfo.glossary + ")"));
    body.append(h("a", { class: "toc-extra", href: "#project" }, "🧑‍🤝‍🧑 Group Project (page " + BOOK.pagesInfo.project + ")"));
    body.append(h("a", { class: "toc-extra", href: "#search" }, "🔎 Search the book"));
    body.append(h("a", { class: "toc-extra", href: "#settings" }, "⚙️ Settings & progress"));
  }
  function openDrawer() { $("#drawer").classList.add("open"); $("#scrim").classList.add("open"); $("#drawer").removeAttribute("inert"); setTimeout(() => { const a = $(".toc-lesson.active") || $("#drawer a"); a && a.focus(); }, 50); }
  function closeDrawer() { $("#drawer").classList.remove("open"); $("#scrim").classList.remove("open"); $("#drawer").setAttribute("inert", ""); }

  function footer() {
    return h("footer", { class: "footer" }, h("b", null, BOOK.credit), h("span", null, BOOK.title + " · " + BOOK.level), h("span", null, BOOK.copyright));
  }

  /* ───────────── router ───────────── */
  function route() {
    TTS.stop(); stopRec(); stopAudio(); closeDrawer(); closePop();
    const hsh = (location.hash || "#home").slice(1);
    const m = hsh.match(/^(u\d)l(\d)$/);
    const main = $("#main"); main.innerHTML = "";
    CUR = null;
    if (m) {
      const f = findLesson(hsh);
      if (f) { CUR = f; S.lastLesson = hsh; save(); renderLesson(main); }
      else renderNotBuilt(main, m[1], +m[2]);
    } else if (hsh === "glossary") renderGlossary(main);
    else if (hsh === "project") renderProject(main);
    else if (hsh === "search") renderSearch(main);
    else if (hsh === "settings") renderSettings(main);
    else renderHome(main);
    renderDrawer();
    window.scrollTo(0, 0);
  }

  /* ───────────── HOME ───────────── */
  function renderHome(main) {
    const w = h("div", { class: "wrap" });
    const all = allLessons(), done = all.filter((x) => lessonPct(x.l) >= 100).length;
    const overall = all.length ? Math.round(all.reduce((a, x) => a + lessonPct(x.l), 0) / all.length) : 0;
    const hero = h("section", { class: "hero" },
      h("div", { style: { position: "relative", zIndex: 1 } },
        h("div", { class: "row", style: { marginBottom: "6px" } }, h("span", { class: "tag page" }, BOOK.level), h("span", { class: "tag book" }, "Kuwait MOE curriculum")),
        h("h1", { html: "English <em>Pearls</em> of Kuwait" }),
        h("p", { class: "muted", style: { maxWidth: "52ch", marginTop: "6px" } }, "Read, listen, speak, write and play. Every lesson follows the book, page by page."),
        h("p", { class: "credit" }, BOOK.credit),
        h("div", { class: "stats" },
          h("div", { class: "stat" }, h("b", null, overall + "%"), h("span", null, "book progress")),
          h("div", { class: "stat" }, h("b", null, done + " / " + all.length), h("span", null, "lessons finished")),
          h("div", { class: "stat" }, h("b", null, String(S.points)), h("span", null, "points")),
          h("div", { class: "stat" }, h("b", null, Object.keys(S.badges).length + " / " + BADGES.length), h("span", null, "badges"))),
        h("div", { class: "row", style: { marginTop: "16px" } },
          S.lastLesson && findLesson(S.lastLesson) ? h("a", { class: "btn primary", href: "#" + S.lastLesson }, "Continue: " + findLesson(S.lastLesson).l.title, icon("right")) : h("a", { class: "btn primary", href: "#u1l1" }, "Start Unit 1", icon("right")),
          h("a", { class: "btn", href: "#search" }, icon("search"), "Search"))),
      h("img", { src: "img/covers/book.jpg", alt: "Cover of English Pearls of Kuwait " + BOOK.code }));
    w.append(hero);
    if (!storageOK) w.append(h("div", { class: "notice" }, "This browser is not saving progress (private mode or blocked storage). Your work stays until you close the page."));
    const grid = h("section", { class: "units", "aria-label": "Units" });
    units().forEach((u) => {
      const pct = unitPct(u);
      const card = h("article", { class: "unit-card", style: { "--uc": "var(--" + u.color + ")" } },
        h("a", { class: "unit-cover", href: "#" + u.id + "l1", "aria-label": "Open Unit " + u.num },
          h("img", { src: "img/covers/" + u.id + ".jpg", alt: "", loading: "lazy" }),
          h("div", { class: "band" }, h("small", null, "Learning Unit " + u.num), h("b", null, u.title))),
        h("div", { class: "unit-body" },
          h("div", { class: "row" }, h("div", { class: "bar grow", role: "progressbar", "aria-valuenow": pct, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Unit " + u.num + " progress" }, h("i", { style: { width: pct + "%", background: "var(--" + u.color + ")" } })), h("b", { class: "small" }, pct + "%")),
          S.settings.ar ? h("p", { class: "ar muted small" }, u.titleAr) : null,
          h("div", { class: "lesson-list" }, u.lessonsTOC.map((t, i) => {
            const l = u.built ? u.lessons[i] : null, p = l ? lessonPct(l) : 0;
            return h("a", { class: "lesson-link", href: "#" + u.id + "l" + (i + 1) },
              h("span", { class: "n" + (p >= 100 ? " full" : "") }, p >= 100 ? "✓" : String(i + 1)),
              h("span", null, t[1], h("span", { class: "meta" }, SKILL_ICON[t[0]] + " " + t[0] + " · p. " + t[2] + (l ? "" : " · not built yet"))),
              l ? h("span", { class: "ring", style: { "--p": p }, "data-v": p + "%" }) : h("span", { class: "tag todo" }, "soon"));
          }))));
      grid.append(card);
    });
    w.append(grid);
    // badges
    w.append(h("section", { class: "card" }, h("div", { class: "sec-head" }, h("h2", null, "My badges"), h("span", { class: "muted small" }, "Saved on this device only")),
      h("div", { class: "badges" }, BADGES.map((b) => h("div", { class: "badge" + (S.badges[b.id] ? " got" : "") }, h("span", { class: "b-ico" }, b.ico), h("div", null, h("b", null, b.name), h("div", { class: "small muted" }, b.desc)))))));
    w.append(footer());
    main.append(w);
  }

  function renderNotBuilt(main, uid, n) {
    const u = units().find((x) => x.id === uid); const t = u && u.lessonsTOC[n - 1];
    main.append(h("div", { class: "wrap" }, h("div", { class: "card stack" }, h("span", { class: "tag todo" }, "Not built yet"),
      h("h1", null, t ? t[1] : "Lesson not found"), t ? h("p", null, "Unit " + u.num + " · " + t[0] + " · book page " + t[2]) : null,
      h("p", { class: "muted" }, "This lesson has not been made interactive yet. You can still open the book page."),
      h("div", { class: "row" }, t ? h("button", { class: "btn primary", onclick: () => openPage(parseInt(t[2], 10)) }, icon("book"), "Open book page " + t[2]) : null, h("a", { class: "btn", href: "#home" }, icon("home"), "Home"))), footer()));
  }

  /* ───────────── LESSON ───────────── */
  function renderLesson(main) {
    const { u, l } = CUR; const parts = lessonParts(l);
    const visible = parts.filter((p) => !p.teacher || S.settings.mode === "teacher");
    if (PART >= visible.length) PART = 0;
    const w = h("div", { class: "wrap", style: { "--uc": "var(--" + u.color + ")" } });
    const pct = lessonPct(l);
    const pg = Array.from(new Set(l.pages)); const pagesTxt = pg.length > 1 ? "pages " + pg[0] + "–" + pg[pg.length - 1] : "page " + pg[0];
    w.append(h("header", { class: "lesson-head" },
      h("nav", { class: "crumbs", "aria-label": "Breadcrumb" }, h("a", { href: "#home" }, "Home"), "›", h("span", null, "Unit " + u.num + ": " + u.title), "›", h("span", null, "Lesson " + l.num)),
      h("div", { class: "unit-stripe" }),
      h("div", { class: "row", style: { alignItems: "flex-start" } },
        h("div", { class: "grow" },
          h("div", { class: "row", style: { marginBottom: "6px" } }, h("span", { class: "tag book" }, SKILL_ICON[l.skill] + " " + l.skill), h("span", { class: "tag page" }, "📄 Book " + pagesTxt), S.settings.ar ? h("span", { class: "tag ar" }, SKILL_AR[l.skill]) : null),
          h("h1", null, l.title)),
        h("span", { class: "ring", id: "lessonPct", style: { "--p": pct, width: "54px", height: "54px" }, "data-v": pct + "%", title: "Lesson progress" })),
      h("div", { class: "row" }, h("button", { class: "btn small", onclick: () => openPage(l.pages[0]) }, icon("book"), "Open book " + pagesTxt))));
    const partsBar = h("nav", { class: "parts", "aria-label": "Lesson steps" });
    visible.forEach((p, i) => {
      const seen = (S.parts[l.id] || []).includes(p.key);
      partsBar.append(h("button", { type: "button", class: seen ? "seen" : "", "aria-current": i === PART ? "step" : null, onclick: () => goPart(i) }, h("span", { "aria-hidden": "true" }, p.ico), p.label));
    });
    w.append(h("div", { class: "parts-wrap" }, partsBar));
    const host = h("div", { class: "stack", id: "partHost" });
    w.append(host);
    const p = visible[PART];
    markPartSeen(l, p.key);
    renderPart(host, p, l, u);
    // nav
    const prevLesson = neighbourLesson(-1), nextLesson = neighbourLesson(1);
    w.append(h("div", { class: "navrow" },
      PART > 0 ? h("button", { class: "btn", onclick: () => goPart(PART - 1) }, icon("left"), "Back: " + visible[PART - 1].label)
        : prevLesson ? h("a", { class: "btn", href: "#" + prevLesson.l.id }, icon("left"), "Previous lesson") : h("a", { class: "btn", href: "#home" }, icon("home"), "Home"),
      PART < visible.length - 1 ? h("button", { class: "btn primary", onclick: () => goPart(PART + 1) }, "Next: " + visible[PART + 1].label, icon("right"))
        : nextLesson ? h("a", { class: "btn primary", href: "#" + nextLesson.l.id, onclick: () => { PART = 0; } }, "Next lesson", icon("right")) : h("a", { class: "btn primary", href: "#home" }, icon("home"), "Home")));
    w.append(footer());
    main.append(w);
    setTimeout(() => { const c = $(".parts button[aria-current]"); c && c.scrollIntoView({ block: "nearest", inline: "center", behavior: "auto" }); }, 0);
  }
  function neighbourLesson(d) { const all = allLessons(); const i = all.findIndex((x) => x.l.id === CUR.l.id); return all[i + d] || null; }
  function markPartSeen(l, key) { const a = S.parts[l.id] || (S.parts[l.id] = []); if (!a.includes(key) && key !== "teacher") { a.push(key); save(); setTimeout(afterProgress, 0); } }
  function goPart(i) { TTS.stop(); stopRec(); stopAudio(); closePop(); PART = i; const main = $("#main"); main.innerHTML = ""; renderLesson(main); const pw = $(".parts-wrap"); if (pw) window.scrollTo({ top: Math.max(0, pw.offsetTop - 70), behavior: "auto" }); }
  window.addEventListener("hashchange", () => { PART = 0; route(); });

  function secHead(title, s, extraTags) {
    const tags = [];
    if (s && s.source === "extra") tags.push(h("span", { class: "tag extra" }, "⭐ Extra Practice"));
    else if (s && s.source === "book") tags.push(h("span", { class: "tag book" }, "From the book"));
    if (s && s.page) tags.push(h("button", { class: "tag page", type: "button", onclick: () => openPage(s.page), title: "Open this book page" }, "📄 p. " + s.page));
    if (extraTags) tags.push(...extraTags);
    return h("div", { class: "sec-head" }, h("h2", null, title), h("div", { class: "row" }, tags));
  }
  function instrBlock(text, arText) {
    if (!text) return null;
    const ar = S.settings.ar ? (arText || arFor(text)) : null;
    return h("div", { class: "instr" }, h("div", { class: "row", style: { flexWrap: "nowrap", alignItems: "flex-start" } }, h("span", { class: "grow" }, text), sayBtn(text, "Listen to the instructions")), ar ? h("div", { class: "instr-ar ar" }, ar) : null);
  }

  function renderPart(host, p, l, u) {
    if (p.key === "start") return renderStart(host, l, u);
    if (p.key === "words") return renderWords(host, l);
    if (p.key === "game") return renderGame(host, l);
    if (p.key === "finish") return renderFinish(host, l, u);
    if (p.key === "teacher") return renderTeacher(host, l, u);
    const s = l.sections[p.sec];
    const card = h("section", { class: "card stack" });
    host.append(card);
    const R = { reading: renderReading, grammar: renderGrammar, activity: renderActivity, discuss: renderDiscuss, speak: renderSpeak, write: renderWrite, listen: renderListen }[s.type];
    if (R) R(card, s, p.sec, l); else card.append(h("p", null, "Unknown section."));
    if (S.settings.mode === "teacher" && s.items && s.items.length) card.append(teacherAnswers(s, p.sec, l));
  }

  /* START */
  function renderStart(host, l, u) {
    const c = h("section", { class: "card stack" });
    c.append(h("div", { class: "sec-head" }, h("h2", null, "Today’s goals"), h("span", { class: "tag" }, SKILL_ICON[l.skill] + " " + l.skill)));
    c.append(h("ul", { class: "goals" }, l.goals.map((g, i) => h("li", null, h("span", null, g, S.settings.ar && l.goalsAr && l.goalsAr[i] ? h("span", { class: "ar muted", style: { display: "block" } }, l.goalsAr[i]) : null)))));
    c.append(h("p", { class: "cando" }, l.canDo.join(" ")));
    if (l.linkers && l.linkers.length) c.append(h("div", { class: "stack" }, h("h4", null, "Linkers Bank"), h("div", { class: "bank" }, l.linkers.map((x) => h("span", { class: "chip", style: { cursor: "default" } }, x)))));
    host.append(c);
    const wu = l.warmup;
    if (wu) {
      const wc = h("section", { class: "card stack" });
      wc.append(h("div", { class: "sec-head" }, h("h2", null, wu.title || "Warm-up"), h("div", { class: "row" }, wu.source === "extra" ? h("span", { class: "tag extra" }, "⭐ Extra") : null, h("span", { class: "tag" }, "⏱ " + Math.round((wu.seconds || 90) / 60 * 10) / 10 + " min"), h("button", { class: "tag page", type: "button", onclick: () => openPage(l.pages[0]) }, "📄 p. " + l.pages[0]))));
      if (wu.instructions) wc.append(instrBlock(wu.instructions));
      const pic = wu.image ? h("img", { src: "img/" + wu.image, alt: "Picture from the book page " + l.pages[0], class: "pic" }) : h("div", { class: "emoji-pic", "aria-hidden": "true" }, wu.emoji || "💬");
      wc.append(h("div", { class: "warm" }, pic, h("div", { class: "stack" }, h("ol", { class: "prompts" }, (wu.prompts || []).map((q) => h("li", null, h("span", { class: "grow" }, q), sayBtn(q)))), timerWidget(wu.seconds || 90))));
      host.append(wc);
    }
  }
  function timerWidget(secs) {
    let left = secs, t = null;
    const fmt = (s) => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
    const label = h("span", null, fmt(left)), bar = h("i"), barBox = h("span", { class: "t-bar" }, bar);
    const btn = h("button", { class: "btn small", type: "button" }, icon("timer"), "Start timer");
    const reset = h("button", { class: "btn small ghost", type: "button" }, "Reset");
    function tick() { left--; label.textContent = fmt(Math.max(0, left)); bar.style.width = (Math.max(0, left) / secs) * 100 + "%"; if (left <= 0) { clearInterval(t); t = null; btn.lastChild.textContent = "Start timer"; sfx.win(); toast("Time’s up! Share your ideas."); } }
    btn.onclick = () => { if (t) { clearInterval(t); t = null; btn.lastChild.textContent = "Start timer"; } else { if (left <= 0) left = secs; t = setInterval(() => { if (!document.body.contains(btn)) { clearInterval(t); return; } tick(); }, 1000); btn.lastChild.textContent = "Pause"; } };
    reset.onclick = () => { clearInterval(t); t = null; left = secs; label.textContent = fmt(left); bar.style.width = "100%"; btn.lastChild.textContent = "Start timer"; };
    return h("div", { class: "row" }, h("span", { class: "timer" }, label, barBox), btn, reset);
  }

  /* WORDS */
  function renderWords(host, l) {
    const c = h("section", { class: "card stack" });
    c.append(h("div", { class: "sec-head" }, h("h2", null, "New words"), h("span", { class: "tag book" }, "Vocabulary list from p. " + l.pages[0])));
    c.append(instrBlock("Tap a card to turn it. Listen to the word and the sentence.", "اضغط على البطاقة لقلبها، واستمع إلى الكلمة والجملة."));
    const grid = h("div", { class: "cards" });
    l.vocab.forEach((v) => {
      const f = h("div", { class: "flip" });
      const hit = h("button", { class: "flip-hit", type: "button", "aria-label": "Turn card: " + v.w });
      const front = h("div", { class: "face front" }, h("div", { class: "big-emoji", "aria-hidden": "true" }, v.emoji || "🔤"), h("div", { class: "word" }, v.w), h("div", { class: "pos" }, v.pos || ""), v.ipa ? h("div", { class: "ipa" }, v.ipa) : null,
        h("div", { class: "actions" }, sayBtn(v.w, "Listen to the word")), h("div", { class: "tap" }, "Tap to turn ↻"));
      const back = h("div", { class: "face back" }, h("div", { class: "row", style: { justifyContent: "space-between", flexWrap: "nowrap" } }, h("b", null, v.w), h("span", { "aria-hidden": "true" }, v.emoji || "")),
        h("p", { class: "ex" }, v.ex), v.exFromBook ? h("span", { class: "small muted" }, "Sentence from the book") : null, h("p", { class: "def" }, v.def),
        S.settings.ar && v.ar ? h("p", { class: "ar-mean" }, v.ar) : null,
        h("div", { class: "actions" }, sayBtn(v.w, "Listen to the word"), sayBtn(v.ex, "Listen to the sentence")));
      hit.onclick = () => { f.classList.toggle("flipped"); if (f.classList.contains("flipped")) { S.flips++; if (S.flips >= 20) award("cards"); save(); } sfx.tap(); };
      f.append(hit, h("div", { class: "flip-inner" }, front, back));
      grid.append(f);
    });
    c.append(grid);
    if (!S.settings.ar) c.append(h("p", { class: "small muted" }, "Tip: turn on “عربي” in the top bar to see the Arabic meaning on the back of each card."));
    host.append(c);
    if (l.vocab.length >= 4) {
      // Choose the meaning
      const q = h("section", { class: "card stack" });
      q.append(secHead("Choose the meaning", { source: "extra" }));
      q.append(instrBlock("Read the word. Choose the correct meaning."));
      const items = seededShuffle(l.vocab, l.id + "m").slice(0, Math.min(6, l.vocab.length)).map((v) => {
        const others = seededShuffle(l.vocab.filter((x) => x.w !== v.w), v.w).slice(0, 2).map((x) => x.def);
        const opts = seededShuffle([v.def].concat(others), v.w + "o");
        return { t: "mcq", q: v.emoji + "  " + v.w, options: opts, answer: opts.indexOf(v.def), why: v.w + " = " + v.def + (S.settings.ar && v.ar ? " (" + v.ar + ")" : ""), hint: "Look at the picture and think of the sentence: “" + v.ex + "”" };
      });
      const list = h("div", { class: "stack" }); let okCount = 0;
      items.forEach((it, i) => list.append(renderItem(it, l.id + ":vocab:m" + i, { onCorrect: () => { okCount++; if (okCount === items.length) markItem(l.id + ":vocab:meaning", true); } })));
      q.append(list); host.append(q);
      // Complete the word
      const sp = h("section", { class: "card stack" });
      sp.append(secHead("Complete the word", { source: "extra" }));
      sp.append(spellGame(l.vocab.slice(0, 6), l.id + ":vocab:spell"));
      host.append(sp);
    }
  }

  /* READING */
  function vocabMatcher(l) {
    const words = (l.vocab || []).map((v) => v.w).sort((a, b) => b.length - a.length);
    if (!words.length) return null;
    const pat = words.map((w) => w.includes(" ") ? w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : w.replace(/e$/, "e?") + "(?:s|es|d|ed|ing|ly)?").join("|");
    return new RegExp("\\b(" + pat + ")\\b", "gi");
  }
  function findVocab(l, token) { const t = token.toLowerCase(); return (l.vocab || []).slice().sort((a, b) => b.w.length - a.w.length).find((v) => t === v.w.toLowerCase() || t.startsWith(v.w.toLowerCase().replace(/e$/, ""))); }
  function paraNode(text, l) {
    // returns {node, plainText, spans:[{start,end,el}]}
    const node = h("p");
    const segs = []; let re = /(\[\[.+?\]\]|\*.+?\*)/g, last = 0, m;
    while ((m = re.exec(text))) { if (m.index > last) segs.push({ t: text.slice(last, m.index) }); const raw = m[0]; segs.push(raw.startsWith("[[") ? { t: raw.slice(2, -2), ul: 1 } : { t: raw.slice(1, -1), it: 1 }); last = m.index + raw.length; }
    if (last < text.length) segs.push({ t: text.slice(last) });
    const vm = vocabMatcher(l); let plainTxt = ""; const spans = [];
    segs.forEach((sg) => {
      const wrap = sg.ul ? h("span", { class: "ul" }) : sg.it ? h("em") : null;
      const target = wrap || node; if (wrap) node.append(wrap);
      // split into vocab-matched pieces and words
      let pieces = [];
      if (vm && !sg.ul) { let lm = 0, mm; vm.lastIndex = 0; while ((mm = vm.exec(sg.t))) { if (mm.index > lm) pieces.push({ t: sg.t.slice(lm, mm.index) }); pieces.push({ t: mm[0], v: 1 }); lm = mm.index + mm[0].length; } if (lm < sg.t.length) pieces.push({ t: sg.t.slice(lm) }); }
      else pieces = [{ t: sg.t }];
      pieces.forEach((pc) => {
        if (pc.v) {
          const v = findVocab(l, pc.t);
          const b = h("button", { class: "tw", type: "button", "aria-label": pc.t + ": show meaning" }, pc.t);
          b.onclick = (ev) => { ev.stopPropagation(); showPop(b, v, pc.t); };
          spans.push({ start: plainTxt.length, end: plainTxt.length + pc.t.length, el: b });
          target.append(b); plainTxt += pc.t;
        } else {
          pc.t.split(/(\s+)/).forEach((tok) => {
            if (!tok) return;
            if (/^\s+$/.test(tok)) { target.append(document.createTextNode(tok)); plainTxt += tok; return; }
            const sp = h("span", null, tok); spans.push({ start: plainTxt.length, end: plainTxt.length + tok.length, el: sp }); target.append(sp); plainTxt += tok;
          });
        }
      });
    });
    return { node, plainTxt, spans };
  }
  let popEl = null;
  function closePop() { if (popEl) { popEl.remove(); popEl = null; } }
  document.addEventListener("click", (e) => { if (popEl && !popEl.contains(e.target)) closePop(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closePop(); closeDrawer(); closeModal(); } });
  function showPop(anchor, v, shown) {
    closePop(); if (!v) return;
    popEl = h("div", { class: "pop", role: "dialog", "aria-label": "Meaning of " + v.w },
      h("div", { class: "row", style: { justifyContent: "space-between", flexWrap: "nowrap" } }, h("span", { class: "w" }, (v.emoji || "") + " " + v.w), h("div", { class: "row", style: { flexWrap: "nowrap" } }, sayBtn(v.w, "Listen"), h("button", { class: "icon-btn", type: "button", "aria-label": "Close", onclick: closePop }, icon("close")))),
      h("span", { class: "small muted" }, (v.pos || "") + (v.ipa ? "  " + v.ipa : "")), h("p", null, v.def), S.settings.ar && v.ar ? h("p", { class: "ar", style: { color: "var(--brand)", fontWeight: 700 } }, v.ar) : h("button", { class: "btn small ghost", type: "button", onclick: (e) => { e.stopPropagation(); S.settings.ar = true; save(); applySettings(); showPop(anchor, v, shown); } }, "Show Arabic meaning"));
    document.body.append(popEl);
    const r = anchor.getBoundingClientRect(); const pw = popEl.offsetWidth, ph = popEl.offsetHeight;
    let x = Math.min(Math.max(16, r.left), window.innerWidth - pw - 16), y = r.bottom + 8; if (y + ph > window.innerHeight - 10) y = Math.max(10, r.top - ph - 8);
    popEl.style.left = x + "px"; popEl.style.top = y + "px";
  }
  function readAloudPlayer(paraObjs, label) {
    // paraObjs: [{plainTxt, spans, node, box}]
    let idx = 0, playing = false, paused = false;
    const speedSel = h("select", { "aria-label": "Speed" }, [["0.7", "Slow"], ["0.85", "Normal"], ["1", "Fast"]].map(([v, t]) => h("option", { value: v, selected: Math.abs(S.settings.rate - +v) < 0.08 ? true : null }, t)));
    speedSel.onchange = () => { S.settings.rate = +speedSel.value; save(); };
    const playB = h("button", { class: "btn small primary", type: "button" }, icon("play"), "Read aloud");
    const stopB = h("button", { class: "btn small", type: "button", disabled: true }, icon("stop"), "Stop");
    const clear = () => { paraObjs.forEach((p) => { p.box.classList.remove("reading-now"); p.spans.forEach((s) => s.el.classList.remove("w-on")); }); };
    function playPara(i) {
      clear(); if (i >= paraObjs.length) { stop(); return; }
      idx = i; const p = paraObjs[i]; p.box.classList.add("reading-now");
      let lastOn = null;
      TTS.speak(p.plainTxt, { rate: S.settings.rate, onboundary: (e) => { if (e.name && e.name !== "word") return; const sp = p.spans.find((s) => e.charIndex >= s.start && e.charIndex < s.end) || p.spans.find((s) => s.start >= e.charIndex); if (sp) { lastOn && lastOn.classList.remove("w-on"); sp.el.classList.add("w-on"); lastOn = sp.el; } },
        onend: () => { if (playing && !paused && TTS.cur === null) playPara(i + 1); } });
    }
    function stop() { playing = false; paused = false; TTS.stop(); clear(); playB.lastChild.textContent = "Read aloud"; playB.firstChild.replaceWith(icon("play")); stopB.disabled = true; }
    playB.onclick = () => {
      if (!TTS.ok) { toast("Speech is not available in this browser."); return; }
      if (!playing) { playing = true; paused = false; stopB.disabled = false; playB.lastChild.textContent = "Pause"; playB.firstChild.replaceWith(icon("pause")); playPara(0); }
      else if (!paused) { paused = true; TTS.pause(); playB.lastChild.textContent = "Resume"; playB.firstChild.replaceWith(icon("play")); }
      else { paused = false; TTS.resume(); playB.lastChild.textContent = "Pause"; playB.firstChild.replaceWith(icon("pause")); }
    };
    stopB.onclick = stop;
    paraObjs.forEach((p, i) => { p.box.addEventListener("dblclick", () => { if (!TTS.ok) return; playing = true; paused = false; stopB.disabled = false; playB.lastChild.textContent = "Pause"; playPara(i); }); });
    return h("div", { class: "player" }, playB, stopB, h("label", { class: "small muted" }, "Speed ", speedSel), h("span", { class: "small muted" }, label || "Generated voice – not the book recording."));
  }
  function renderReading(card, s, si, l) {
    card.append(secHead(s.title, Object.assign({ source: "book" }, s)));
    if (s.instructions) card.append(instrBlock(s.instructions));
    if (s.speaker) card.append(h("p", { class: "small muted" }, "🌐 " + s.speaker));
    const paraObjs = [];
    const body = h("div", { class: "reading" });
    if (s.blocks) {
      s.blocks.forEach((b) => {
        const box = h("div", { class: "email" }, h("div", { class: "e-head" }, b.head));
        const eb = h("div", { class: "e-body" });
        b.paras.forEach((t) => { const p = paraNode(t, l); p.node.style.whiteSpace = "pre-line"; eb.append(p.node); paraObjs.push(Object.assign(p, { box: p.node })); });
        box.append(eb); body.append(box);
      });
    } else {
      s.paras.forEach((t, i) => {
        const p = paraNode(t, l); const box = h("div", { class: "para" }, h("span", { class: "pn", "aria-hidden": "true" }, String(i + 1)), p.node);
        body.append(box); paraObjs.push(Object.assign(p, { box }));
      });
    }
    card.append(readAloudPlayer(paraObjs));
    if (l.vocab && l.vocab.length) card.append(h("p", { class: "small muted" }, "Tap a ", h("span", { class: "tw", style: { cursor: "default" } }, "blue word"), " to see its meaning and hear it. Double-tap a paragraph to read it aloud."));
    card.append(body);
    if (s.image) card.append(h("div", { class: "pic-wrap" }, h("img", { class: "pic", src: "img/" + s.image, alt: "Picture from the book page " + s.page })));
    if (s.note) card.append(h("p", { class: "small muted" }, "Note: " + s.note));
  }

  /* GRAMMAR */
  function renderGrammar(card, s, si, l) {
    card.append(secHead(s.title, Object.assign({}, s, { source: s.source || "book" })));
    const used = new Set(); (s.steps || []).forEach((st) => (st.examples || []).forEach((e) => { (e.match(/\{([svaotcnqp]):/g) || []).forEach((m) => used.add(m[1])); }));
    if (s.worked && s.worked.a) (s.worked.a.match(/\{([svaotcnqp]):/g) || []).forEach((m) => used.add(m[1]));
    if (used.size) card.append(h("div", { class: "legend", "aria-label": "Colour key" }, Array.from(used).map((k) => h("span", null, h("span", { class: "tk tk-" + k }, LEGEND[k])))));
    const steps = s.steps || []; let shown = S.settings.mode === "teacher" ? steps.length : Math.min(1, steps.length);
    const list = h("div", { class: "stack" });
    const moreBtn = h("button", { class: "btn primary", type: "button" }, "Next step", icon("right"));
    const allBtn = h("button", { class: "btn ghost small", type: "button" }, "Show all steps");
    function draw() {
      list.innerHTML = "";
      steps.slice(0, shown).forEach((st, i) => {
        list.append(h("div", { class: "gstep" }, h("h4", null, h("span", { class: "num" }, String(i + 1)), h("span", { class: "grow" }, st.title), st.source === "extra" ? h("span", { class: "tag extra" }, "⭐ Extra example") : null),
          h("div", { class: "row", style: { flexWrap: "nowrap", alignItems: "flex-start" } }, h("p", { class: "grow" }, st.text), sayBtn(st.text)),
          S.settings.ar && st.textAr ? h("p", { class: "ar muted" }, st.textAr) : null,
          (st.examples || []).map((e) => h("div", { class: "ex-line" }, h("span", { class: "s", html: tokensHTML(e) }), sayBtn(e.replace(/\{[a-z]:([^}]+)\}/g, "$1")))),
          st.tip ? h("div", { class: "tip" }, "💡 " + st.tip) : null));
      });
      moreBtn.hidden = shown >= steps.length; allBtn.hidden = shown >= steps.length;
    }
    moreBtn.onclick = () => { shown++; draw(); sfx.tap(); };
    allBtn.onclick = () => { shown = steps.length; draw(); };
    draw();
    card.append(list, h("div", { class: "row" }, moreBtn, allBtn));
    if (s.table) card.append(h("div", { class: "stack" }, h("h3", null, "The book’s table"), bookTable(s.table)));
    if (s.worked) {
      const w = s.worked; let k = 0;
      const ol = h("ol");
      const ans = h("p", { hidden: true }, h("b", null, "Answer: "), h("span", { html: tokensHTML(w.a) }));
      const nb = h("button", { class: "btn small good", type: "button" }, "Show the next step");
      nb.onclick = () => { if (k < w.steps.length) { ol.append(h("li", null, w.steps[k])); k++; } if (k >= w.steps.length) { ans.hidden = false; nb.hidden = true; } };
      card.append(h("div", { class: "worked" }, h("h3", null, "✅ Worked example"), h("p", null, h("b", null, w.q)), ol, ans, nb));
    }
    (s.notes || []).forEach((n) => card.append(h("div", { class: "tip" }, "💡 " + n)));
  }
  function bookTable(t) {
    return h("div", { class: "tablewrap" }, h("table", { class: "bt" }, h("thead", null, h("tr", null, t.head.map((c) => h("th", { html: tokensHTML(c) })))), h("tbody", null, t.rows.map((r) => h("tr", null, r.map((c) => h("td", { html: tokensHTML(c) })))))));
  }

  /* ACTIVITY */
  const HELP = {
    mcq: "Read the question. Tap one answer. If it is wrong, read the hint and try again.",
    choose: "Tap the correct word or words.",
    fill: "Write the missing word in the box, or tap a word chip. Then tap Check.",
    fix: "The underlined word is wrong. Write the correct word. Then tap Check.",
    match: "Tap an item on the left. Then tap its match on the right.",
    order: "Tap the words in the correct order. Tap a word again to remove it.",
    short: "Write your answer. Tap Check. Then compare with the suggested answer.",
    table: "Write in the empty boxes. Then tap Check or Save."
  };
  function renderActivity(card, s, si, l) {
    card.append(secHead(s.title, s));
    if (s.stage) card.append(h("span", { class: "stage" }, { guided: "Step 2 · Guided practice (with help)", independent: "Step 3 · On your own", worked: "Step 1 · Worked example" }[s.stage] || s.stage));
    if (s.instructions && s.instructions !== s.title) card.append(instrBlock(s.instructions, s.instructionsAr));
    else if (S.settings.ar && arFor(s.title)) card.append(h("p", { class: "ar muted" }, s.instructionsAr || arFor(s.title)));
    const types = Array.from(new Set((s.items || []).map((i) => i.t)));
    const helpBox = h("div", { class: "hintbox", hidden: true }, types.map((t) => h("p", null, "🛟 " + HELP[t])));
    card.append(h("div", { class: "row" }, h("button", { class: "btn small", type: "button", onclick: () => { helpBox.hidden = !helpBox.hidden; } }, icon("help"), "Help")), helpBox);
    if (s.image) card.append(h("div", { class: "pic-wrap" }, h("img", { class: "pic", src: "img/" + s.image, alt: "Picture from the book" })));
    const list = h("div", { class: "stack" });
    (s.items || []).forEach((it, ii) => list.append(renderItem(it, l.id + ":" + si + ":" + ii)));
    card.append(list);
  }

  // ITEM renderer: returns element. key used for progress.
  function renderItem(it, key, opt) {
    opt = opt || {};
    const box = h("div", { class: "item" });
    const rec = S.items[key];
    if (rec && rec.ok) box.classList.add("correct");
    const fb = h("div", { "aria-live": "polite" });
    const showAns = S.settings.mode === "teacher" && S.settings.showAns;
    let wrongs = 0;
    function feedback(kind, title, msg) { fb.innerHTML = ""; fb.append(h("div", { class: "feedback " + kind }, h("b", null, title), msg ? h("span", null, msg) : null)); }
    function good(why) { box.classList.add("correct"); box.classList.remove("tried"); feedback("good", pick(praise), why || ""); sfx.good(); markItem(key, true); opt.onCorrect && opt.onCorrect(); }
    function bad(hint, revealFn) {
      wrongs++; box.classList.add("tried"); sfx.bad(); markItem(key, false);
      feedback("bad", pick(retry), hint ? "Hint: " + hint : "Read the question again.");
      if (wrongs >= 2 && revealFn) { const b = h("button", { class: "btn small", type: "button", onclick: () => { revealFn(); b.remove(); } }, "Show the answer"); fb.firstChild.append(h("div", null, b)); }
    }
    const qText = (txt) => h("div", { class: "row", style: { flexWrap: "nowrap", alignItems: "flex-start" } }, h("div", { class: "q grow", html: inlineHTML(txt) }), sayBtn(txt.replace(/_{3,}/g, "blank").replace(/[{}]/g, "")));
    const t = it.t;

    if (t === "mcq" || t === "choose") {
      const answers = [].concat(it.answer);
      if (t === "choose" && /_{3,}/.test(it.q)) box.append(qText(it.q)); else box.append(qText(it.q));
      const opts = h("div", { class: "opts" + (t === "choose" ? " inline" : "") });
      const letters = "abcdefgh";
      it.options.forEach((o, i) => {
        const b = h("button", { class: "opt", type: "button" }, t === "mcq" ? h("span", { class: "letter" }, letters[i]) : null, h("span", { html: inlineHTML(o) }));
        b.onclick = () => {
          if (box.classList.contains("correct") && !opt.replay) return;
          if (answers.includes(i)) {
            b.classList.add("right");
            let why = it.why || "";
            if (answers.length > 1) why = "Both " + answers.map((a) => "“" + plain(it.options[a]) + "”").join(" and ") + " are correct here. " + why;
            good(why); $$(".opt", opts).forEach((x) => x.disabled = true);
          } else { b.classList.add("wrong"); b.disabled = true; bad(it.hint, () => { answers.forEach((a) => opts.children[a].classList.add("right")); feedback("info", "The answer", it.why || ""); }); }
        };
        if (showAns && answers.includes(i)) b.classList.add("picked");
        opts.append(b);
      });
      box.append(opts);
      if (rec && rec.ok) { answers.forEach((a) => opts.children[a].classList.add("right")); $$(".opt", opts).forEach((x) => x.disabled = true); }
    }

    else if (t === "fill" || t === "fix") {
      const inp = h("input", { class: "blank-in", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "Your answer", id: "in-" + key.replace(/[^a-z0-9]/gi, "-") });
      const qd = h("div", { class: "q" });
      if (t === "fill") {
        const [a, b] = it.q.split(/_{3,}/);
        qd.append(h("span", { html: inlineHTML(a) }), inp, h("span", { html: inlineHTML(b || "") }));
      } else {
        qd.innerHTML = inlineHTML(it.q).replace(/\{([^}]+)\}/, '<span class="fixword">$1</span>');
        qd.append(h("div", { style: { marginTop: "8px" } }, h("label", { class: "small muted", for: inp.id }, "Correct word: "), inp));
      }
      box.append(h("div", { class: "row", style: { flexWrap: "nowrap", alignItems: "flex-start" } }, h("div", { class: "grow" }, qd), sayBtn(it.q.replace(/_{3,}/g, "blank").replace(/[{}]/g, ""))));
      if (it.bank) box.append(h("div", { class: "bank" }, it.bank.map((w) => h("button", { class: "chip", type: "button", onclick: () => { inp.value = w; inp.focus(); } }, w))));
      const check = h("button", { class: "btn small primary", type: "button" }, "Check");
      const acc = (it.answer || []).map(norm);
      const doCheck = () => {
        const v = norm(inp.value); if (!v) { feedback("info", "Write your answer first.", ""); return; }
        if (acc.includes(v)) { inp.value = inp.value.trim(); inp.readOnly = true; good((it.answer.length > 1 && acc.length > 1 && it.acceptNote) ? it.acceptNote + " " + (it.why || "") : it.why); check.disabled = true; }
        else bad(it.hint, () => { feedback("info", "The answer: " + it.answer[0], (it.answer.length > 1 ? "Also correct: " + it.answer.slice(1).filter((x) => !/[’']/.test(x) || x === it.answer[1]).join(", ") + ". " : "") + (it.why || "")); });
      };
      check.onclick = doCheck; inp.addEventListener("keydown", (e) => { if (e.key === "Enter") doCheck(); });
      box.append(h("div", { class: "item-actions" }, check));
      if (rec && rec.ok) { inp.value = it.answer[0]; inp.readOnly = true; check.disabled = true; }
    }

    else if (t === "match") {
      if (it.q) box.append(qText(it.q));
      const left = it.pairs.map((p, i) => ({ i, t: p[0] })), right = shuffleNotSame(it.pairs.map((p, i) => ({ i, t: p[1] })), key);
      const L = h("div", { class: "mcol" }), R = h("div", { class: "mcol" });
      let sel = null, matched = 0, n = 0;
      const lBtns = left.map((x) => { const b = h("button", { class: "mcard", type: "button" }, h("span", { html: inlineHTML(x.t) })); b.dataset.i = x.i; b.onclick = () => { if (b.classList.contains("done")) return; $$(".mcard.sel", L).forEach((y) => y.classList.remove("sel")); b.classList.add("sel"); sel = x.i; sfx.tap(); }; L.append(b); return b; });
      const rBtns = right.map((x) => { const b = h("button", { class: "mcard", type: "button" }, h("span", { html: inlineHTML(x.t) })); b.dataset.i = x.i; b.onclick = () => {
        if (b.classList.contains("done")) return;
        if (sel === null) { toast("First tap an item on the left."); return; }
        if (sel === x.i) {
          n++; const lb = lBtns.find((y) => +y.dataset.i === sel);
          [lb, b].forEach((y) => { y.classList.remove("sel"); y.classList.add("done"); y.prepend(h("span", { class: "pair-n" }, String(n))); });
          sel = null; matched++; sfx.good();
          if (matched === it.pairs.length) good(it.why);
        } else { b.classList.add("shake"); setTimeout(() => b.classList.remove("shake"), 400); wrongs++; sfx.bad(); feedback("bad", pick(retry), it.hint ? "Hint: " + it.hint : ""); if (wrongs === 1) markItem(key, false); }
      }; R.append(b); return b; });
      box.append(h("div", { class: "match" }, L, R));
      const resetAll = () => { lBtns.concat(rBtns).forEach((b) => { b.classList.remove("done", "sel"); const pn = $(".pair-n", b); pn && pn.remove(); }); matched = 0; n = 0; sel = null; fb.innerHTML = ""; };
      box.append(h("div", { class: "item-actions" }, h("button", { class: "btn small ghost", type: "button", onclick: resetAll }, icon("replay"), "Start again")));
      if ((rec && rec.ok) || showAns) { it.pairs.forEach((p, i) => { n++; const lb = lBtns.find((y) => +y.dataset.i === i), rb = rBtns.find((y) => +y.dataset.i === i); [lb, rb].forEach((y) => { y.classList.add("done"); y.prepend(h("span", { class: "pair-n" }, String(n))); }); }); matched = it.pairs.length; }
    }

    else if (t === "order") {
      if (it.q) box.append(qText(it.q));
      const tiles = shuffleNotSame(it.words.map((w, i) => ({ w, i })), key);
      const build = h("div", { class: "build", "aria-label": "Your sentence" }), pool = h("div", { class: "bank" });
      const chosen = [];
      const draw = () => {
        build.innerHTML = ""; pool.innerHTML = "";
        chosen.forEach((x, k) => build.append(h("button", { class: "chip sel", type: "button", onclick: () => { chosen.splice(k, 1); draw(); } }, x.w)));
        tiles.forEach((x) => { const used = chosen.includes(x); pool.append(h("button", { class: "chip" + (used ? " used" : ""), type: "button", disabled: used ? true : null, onclick: () => { chosen.push(x); sfx.tap(); draw(); } }, x.w)); });
      };
      draw();
      const check = h("button", { class: "btn small primary", type: "button" }, "Check");
      check.onclick = () => {
        if (chosen.length < tiles.length) { feedback("info", "Use all the words.", chosen.length + " of " + tiles.length + " words used."); return; }
        const s = normSentence(chosen.map((x) => x.w).join(" "));
        if (it.answer.map(normSentence).includes(s)) { good(it.why); check.disabled = true; }
        else bad(it.hint || "Start with the subject (who?). Then the verb.", () => { feedback("info", "The answer", it.answer[0] + (it.why ? " — " + it.why : "")); });
      };
      box.append(build, pool, h("div", { class: "item-actions" }, check, h("button", { class: "btn small ghost", type: "button", onclick: () => { chosen.length = 0; draw(); fb.innerHTML = ""; } }, icon("replay"), "Clear"), sayBtnLazy(() => chosen.map((x) => x.w).join(" "))));
      if (rec && rec.ok) { chosen.length = 0; it.answer[0].split(/\s+/).forEach((w) => { const x = tiles.find((y) => y.w === w && !chosen.includes(y)); if (x) chosen.push(x); }); draw(); check.disabled = true; }
    }

    else if (t === "short") {
      box.append(qText(it.q));
      const dk = "d:" + key;
      const ta = h("textarea", { class: "txt", rows: 2, "aria-label": "Your answer", id: "ta-" + key.replace(/[^a-z0-9]/gi, "-") });
      ta.value = S.drafts[dk] || ""; ta.oninput = () => { S.drafts[dk] = ta.value; save(); };
      box.append(ta);
      const check = h("button", { class: "btn small primary", type: "button" }, it.open ? "Save" : "Check");
      const hintB = it.hint ? h("button", { class: "btn small", type: "button", onclick: () => { feedback("info", "Hint", it.hint); } }, icon("help"), "Hint") : null;
      check.onclick = () => {
        const v = ta.value.trim();
        if (v.split(/\s+/).filter(Boolean).length < 1) { feedback("info", "Write your answer first.", "Then tap " + (it.open ? "Save" : "Check") + "."); return; }
        if (it.open) {
          markItem(key, false, { open: true }); box.classList.add("correct");
          feedback("good", "Saved. Great effort!", it.needsAudio || !it.model ? "Your teacher will check this answer with the class." : "");
          if (it.model) fb.append(modelBox(it.model, "Suggested answer"));
          return;
        }
        const nv = norm(v);
        const hit = !it.keywords || it.keywords.every((grp) => grp.some((k) => nv.includes(k.toLowerCase())));
        if (it.keywords && hit) { good(""); fb.append(modelBox(it.model, "Suggested answer (from the text)")); }
        else { markItem(key, false, { open: true }); box.classList.add("tried"); feedback("info", "Good try! Compare your answer.", "Your answer may still be right. Check it with the suggested answer."); fb.append(modelBox(it.model, "Suggested answer (from the text)")); }
      };
      box.append(h("div", { class: "item-actions" }, check, hintB));
      if (rec && rec.done && it.model) fb.append(modelBox(it.model, it.open ? "Suggested answer" : "Suggested answer (from the text)"));
    }

    else if (t === "table") {
      if (it.q) box.append(qText(it.q));
      const inputs = [];
      const tbl = h("table", { class: "bt" }, h("thead", null, h("tr", null, it.head.map((c) => h("th", null, c)))), h("tbody", null, it.rows.map((r, ri) => h("tr", null, r.map((c, ci) => {
        if (typeof c === "string") return h("td", { html: inlineHTML(c) });
        const dk = "d:" + key + ":" + ri + ":" + ci;
        const inp = h("input", { class: "txt", type: "text", "aria-label": it.head[ci] + " row " + (ri + 1), id: "tb-" + dk.replace(/[^a-z0-9]/gi, "-") });
        inp.value = S.drafts[dk] || ""; inp.oninput = () => { S.drafts[dk] = inp.value; save(); };
        inputs.push({ inp, c }); return h("td", null, inp);
      })))));
      box.append(h("div", { class: "tablewrap" }, tbl));
      if (it.note) box.append(h("p", { class: "small muted" }, it.note));
      const checkable = inputs.some((x) => x.c.answer);
      const check = h("button", { class: "btn small primary", type: "button" }, checkable && !it.open ? "Check" : "Save");
      check.onclick = () => {
        if (inputs.every((x) => !x.inp.value.trim())) { feedback("info", "Write in the empty boxes first.", ""); return; }
        if (!checkable || it.open) {
          markItem(key, false, { open: true }); box.classList.add("correct"); feedback("good", "Saved. Great effort!", it.needsAudio ? "Your teacher will check the answers with the recording." : "");
          const models = inputs.filter((x) => x.c.model); if (models.length) fb.append(modelBox(models.map((x) => x.c.model).join(" · "), "Suggested answers"));
          return;
        }
        let allOk = true;
        inputs.forEach((x) => { if (!x.c.answer) return; const ok = x.c.answer.map(norm).includes(norm(x.inp.value)); x.inp.style.borderColor = ok ? "var(--good)" : "var(--warn)"; if (!ok) allOk = false; });
        if (allOk) good(it.why); else bad(it.hint || "Look at the text again for the orange boxes.", () => { inputs.forEach((x) => { if (x.c.model && !x.c.answer.map(norm).includes(norm(x.inp.value))) x.inp.value = x.c.model; }); feedback("info", "The answers are filled in.", ""); });
      };
      box.append(h("div", { class: "item-actions" }, check));
    }

    if (showAns) box.append(answerReveal(it));
    box.append(fb);
    return box;
  }
  function sayBtnLazy(getText) { const b = h("button", { class: "btn small ghost", type: "button", "aria-label": "Listen to my sentence" }, icon("speak"), "Listen"); b.onclick = () => { const t = getText(); if (t) TTS.speak(t); }; return b; }
  function modelBox(text, label) { return h("div", { class: "ans-reveal" }, h("span", { class: "lbl" }, label), h("span", { html: inlineHTML(text) })); }
  function answerText(it) {
    if ((it.t === "mcq" || it.t === "choose" || it.t === "fill" || it.t === "fix" || it.t === "order") && it.answer == null) return it.model || "Open answer";
    if (it.t === "mcq" || it.t === "choose") return [].concat(it.answer).map((a) => plain(it.options[a])).join("  /  ");
    if (it.t === "fill" || it.t === "fix") return it.answer.filter((x, i, a) => a.findIndex((y) => norm(y) === norm(x)) === i).join("  /  ");
    if (it.t === "order") return it.answer.join("  /  ");
    if (it.t === "match") return it.pairs.map((p) => plain(p[0]) + " → " + plain(p[1])).join(";  ");
    if (it.t === "short") return it.model || (it.open ? "Open answer" : "");
    if (it.t === "table") return it.rows.map((r) => r.map((c) => typeof c === "string" ? c : c.model || (c.answer ? c.answer[0] : "…")).join(" | ")).join(" ;  ");
    return "";
  }
  function answerReveal(it) {
    const a = answerText(it);
    const needs = it.needsAudio || (it.open && !it.model);
    return h("div", { class: "ans-reveal only-teacher" }, h("span", { class: "lbl" }, "Answer (teacher view)"), needs ? "Depends on students / the recording." : a, it.why ? h("div", { class: "small muted" }, "Why: " + it.why) : null);
  }
  function teacherAnswers(s, si, l) {
    return h("details", { class: "only-teacher" }, h("summary", null, "🧑‍🏫 All answers for this part"), h("ol", null, s.items.map((it) => h("li", null, h("span", { html: inlineHTML(plain(it.q || "")) }), " — ", h("span", { class: "t-ans" }, (it.needsAudio || s.needsAudio) ? "check with the book recording" : answerText(it))))));
  }

  /* DISCUSS */
  function renderDiscuss(card, s, si, l) {
    card.append(secHead(s.title, s));
    if (s.instructions) card.append(instrBlock(s.instructions));
    const pic = s.image ? h("img", { class: "pic", src: "img/" + s.image, alt: "Picture from the book" }) : h("div", { class: "emoji-pic", "aria-hidden": "true" }, s.emoji || "💬");
    card.append(h("div", { class: "warm" }, pic, h("div", { class: "stack" }, h("ol", { class: "prompts" }, (s.prompts || []).map((q) => h("li", null, h("span", { class: "grow" }, q), sayBtn(q)))), timerWidget(s.seconds || 120))));
    if (s.example) card.append(h("div", { class: "tip" }, "Example: " + s.example));
    if (s.starters) card.append(startersBlock(s.starters));
    const key = l.id + ":" + si + ":d";
    card.append(h("div", { class: "row" }, h("button", { class: "btn small good", type: "button", onclick: (e) => { if (!(S.parts[l.id] || []).includes("talk" + si)) { (S.parts[l.id] = S.parts[l.id] || []).push("talk" + si); addPoints(5); } e.target.disabled = true; e.target.textContent = "✓ Done. Great effort!"; sfx.good(); } }, "We discussed it")));
  }
  function startersBlock(list) {
    const box = h("div", { class: "stack", hidden: true }, h("div", { class: "bank" }, list.map((x) => h("span", { class: "chip", style: { cursor: "default" } }, x))));
    const b = h("button", { class: "btn small", type: "button", "aria-expanded": "false" }, icon("help"), "Need help? Sentence starters");
    b.onclick = () => { box.hidden = !box.hidden; b.setAttribute("aria-expanded", String(!box.hidden)); };
    return h("div", { class: "stack" }, h("div", { class: "row" }, b), box);
  }

  /* SPEAK */
  function renderSpeak(card, s, si, l) {
    card.append(secHead(s.title, s));
    if (s.instructions) card.append(instrBlock(s.instructions));
    if (s.steps) card.append(h("ul", { class: "steps-list" }, s.steps.map((x) => h("li", null, x))));
    const grid = h("div", { class: s.image ? "warm" : "stack" });
    const dlg = h("div", { class: "dialogue" });
    (s.dialogue || []).forEach((d) => {
      const you = !d.text;
      dlg.append(h("div", { class: "bubble" + (you ? " you" : "") }, h("span", { class: "who" }, d.who), h("div", { class: "say" }, h("span", null, you ? "Your turn… (speak)" : d.text), you ? null : sayBtn(d.text))));
    });
    if (s.image) grid.append(h("img", { class: "pic", src: "img/" + s.image, alt: "Picture from the book" }));
    grid.append(dlg);
    card.append(grid);
    if (s.example) card.append(h("div", { class: "tip" }, "Example from the book: " + s.example));
    if (s.note) card.append(h("div", { class: "tip" }, "💡 " + s.note));
    if (s.starters) card.append(startersBlock(s.starters));
    if (s.record !== false) card.append(recorder(l.id + ":" + si));
    card.append(h("p", { class: "small muted" }, "This app does not mark pronunciation. Listen to your recording and ask your partner or teacher for feedback."));
  }
  let REC = null;
  function stopRec() { if (REC && REC.mr && REC.mr.state === "recording") { try { REC.mr.stop(); } catch (e) {} } if (REC && REC.stream) REC.stream.getTracks().forEach((t) => t.stop()); REC = null; }
  function recorder(key) {
    const box = h("div", { class: "rec" });
    const status = h("span", { class: "small muted" }, "Record yourself, then listen.");
    const audio = h("audio", { controls: true, hidden: true });
    const recB = h("button", { class: "btn small primary", type: "button" }, icon("mic"), "Record");
    const fileIn = h("input", { type: "file", accept: "audio/*", capture: "user", hidden: true });
    const fileB = h("button", { class: "btn small", type: "button", hidden: true }, icon("mic"), "Use my phone’s recorder");
    fileB.onclick = () => fileIn.click();
    fileIn.onchange = () => { const f = fileIn.files && fileIn.files[0]; if (f) { audio.src = URL.createObjectURL(f); audio.hidden = false; status.textContent = "Listen to your recording."; S.recordings++; award("speaker"); save(); } };
    const fallback = (msg) => { status.textContent = msg; fileB.hidden = false; recB.hidden = true; };
    recB.onclick = async () => {
      if (REC && REC.mr && REC.mr.state === "recording") { REC.mr.stop(); return; }
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || typeof MediaRecorder === "undefined") { fallback("The microphone is not available here. You can record with your device instead."); return; }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mr = new MediaRecorder(stream); const chunks = [];
        REC = { mr, stream };
        mr.ondataavailable = (e) => e.data && e.data.size && chunks.push(e.data);
        mr.onstop = () => { stream.getTracks().forEach((t) => t.stop()); const blob = new Blob(chunks, { type: mr.mimeType || "audio/webm" }); audio.src = URL.createObjectURL(blob); audio.hidden = false; recB.lastChild.textContent = "Record again"; recB.firstChild.replaceWith(icon("mic")); status.textContent = "Listen to yourself. Is it clear? Try again if you like."; S.recordings++; award("speaker"); save(); REC = null; };
        mr.start(); recB.lastChild.textContent = "Stop"; recB.firstChild.replaceWith(icon("stop")); status.innerHTML = ""; status.append(h("span", { class: "dot" }), " Recording… speak now.");
      } catch (e) { fallback("The microphone was not allowed. You can record with your device instead, or just practise with your partner."); }
    };
    box.append(h("div", { class: "row" }, recB, fileB, fileIn, status), audio, h("span", { class: "small muted" }, "Your recording stays on this device. It is not saved or sent."));
    return box;
  }

  /* WRITE */
  function wordCount(s) { return (s.match(/[A-Za-z’']+/g) || []).length; }
  function renderWrite(card, s, si, l) {
    card.append(secHead(s.title, s));
    if (s.instructions) card.append(instrBlock(s.instructions));
    if (s.image) card.append(h("div", { class: "pic-wrap" }, h("img", { class: "pic", src: "img/" + s.image, alt: "Picture from the book" })));
    if (s.example) card.append(h("div", { class: "tip" }, "Example from the book: " + s.example));
    (s.notes || []).concat(s.note ? [s.note] : []).forEach((n) => card.append(h("div", { class: "tip" }, "💡 " + n)));
    const key = l.id + ":" + si + ":w";
    let lastFocus = null;
    if (s.wordBank && s.wordBank.length) card.append(h("div", { class: "stack" }, h("h4", null, s.wordBankLabel || "Word bank"), h("div", { class: "bank" }, s.wordBank.map((w) => h("button", { class: "chip", type: "button", onclick: () => insertWord(w) }, w))), h("span", { class: "small muted" }, "Tap a word to add it to your writing.")));
    function insertWord(w) { const ta = lastFocus || $$(".frame textarea", card)[0]; if (!ta) return; const st = ta.selectionStart != null ? ta.selectionStart : ta.value.length, en = ta.selectionEnd != null ? ta.selectionEnd : ta.value.length; const before = ta.value.slice(0, st), after = ta.value.slice(en); const pad = before && !/\s$/.test(before) ? " " : ""; ta.value = before + pad + w + " " + after; ta.focus(); const pos = (before + pad + w + " ").length; ta.setSelectionRange(pos, pos); ta.dispatchEvent(new Event("input")); }
    const frame = h("div", { class: "frame" });
    const tas = (s.frame && s.frame.length ? s.frame : [{ label: "Your writing", hint: "" }]).map((f, fi) => {
      const dk = "d:" + key + ":" + fi; const id = "w-" + dk.replace(/[^a-z0-9]/gi, "-");
      const ta = h("textarea", { class: "txt", id, rows: f.lines || 2, placeholder: f.hint || "" });
      ta.value = S.drafts[dk] || ""; ta.oninput = () => { S.drafts[dk] = ta.value; save(); live(); }; ta.onfocus = () => { lastFocus = ta; };
      frame.append(h("div", null, h("label", { for: id }, f.label, f.hint ? h("span", { class: "fh" }, " — " + f.hint) : null), ta));
      return ta;
    });
    card.append(frame);
    const wc = h("span", { class: "wc" });
    const auto = h("div", { class: "auto-checks", "aria-live": "polite" });
    function live() { const all = tas.map((t) => t.value).join(" "); wc.textContent = wordCount(all) + " words" + (s.minWords ? " (aim for " + s.minWords + "+)" : ""); }
    live();
    card.append(h("div", { class: "row" }, wc));
    const fb = h("div");
    const modelArea = h("div");
    const checkB = h("button", { class: "btn primary", type: "button" }, "Check my writing");
    const modelB = h("button", { class: "btn", type: "button", disabled: !(S.items[key] && S.items[key].done) }, "Show model answer");
    checkB.onclick = () => {
      const texts = tas.map((t) => t.value.trim()).filter(Boolean);
      const all = texts.join(" ");
      if (wordCount(all) < 3) { fb.innerHTML = ""; fb.append(h("div", { class: "feedback info" }, h("b", null, "Write something first."), h("span", null, "Use the word bank and the sentence starters to help you."))); return; }
      const sentences = all.replace(/([.!?])\s+/g, "$1\n").split("\n").filter(Boolean);
      const capOK = texts.every((t) => /^[A-Z"“]/.test(t)) && sentences.every((x) => /^[A-Z"“0-9]/.test(x.trim()));
      const stopOK = texts.every((t) => /[.!?]["”]?$/.test(t));
      const iOK = !/\bi\b/.test(all);
      const lenOK = !s.minWords || wordCount(all) >= s.minWords;
      const linkOK = !s.wordBank || s.wordBank.some((w) => new RegExp("\\b" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i").test(all));
      auto.innerHTML = "";
      const line = (ok, okT, noT) => h("div", { class: ok ? "ok" : "no" }, (ok ? "✔ " : "➜ ") + (ok ? okT : noT));
      auto.append(line(capOK, "Capital letters at the start.", "Start every sentence with a capital letter."), line(stopOK, "Full stops at the end.", "End every sentence with a full stop (.), ? or !"), line(iOK, "“I” is a capital letter.", "Write “I” with a capital letter."), line(lenOK, "Good length.", "Write a little more (aim for " + s.minWords + " words)."), s.wordBank ? line(linkOK, "You used words from the bank.", "Try to use a word from the word bank.") : null);
      fb.innerHTML = ""; fb.append(h("div", { class: "feedback good" }, h("b", null, "Great effort!"), h("span", null, "Read the tips below, then tick the checklist. Your ideas can be different from the model — that is OK.")));
      if (!(S.items[key] && S.items[key].done)) { markItem(key, false, { open: true }); }
      award("writer"); modelB.disabled = false; sfx.good();
    };
    modelB.onclick = () => { modelArea.innerHTML = ""; modelArea.append(h("div", { class: "ans-reveal" }, h("span", { class: "lbl" }, s.modelLabel || (s.modelFromBook ? "Model from the book" : "Model answer (one possible answer – not from the book)")), h("p", { style: { whiteSpace: "pre-line" } }, s.model), h("div", { style: { marginTop: "6px" } }, sayBtn(s.model, "Listen to the model")))); };
    card.append(h("div", { class: "row" }, checkB, modelB), fb, auto, modelArea);
    const cl = (s.bookChecklist || []).concat(s.checklist || []);
    if (cl.length) {
      const ck = "d:" + key + ":ck";
      const saved = S.drafts[ck] || [];
      card.append(h("div", { class: "stack" }, h("h4", null, s.bookChecklist ? "Paragraph writing checklist" : "My checklist"), s.bookNote ? h("p", { class: "small muted" }, "📌 " + s.bookNote) : null,
        h("ul", { class: "checks" }, cl.map((c, ci) => { const id = "ck-" + key.replace(/[^a-z0-9]/gi, "-") + "-" + ci; const inp = h("input", { type: "checkbox", id, checked: saved.includes(ci) ? true : null }); inp.onchange = () => { const a = S.drafts[ck] || (S.drafts[ck] = []); if (inp.checked) { if (!a.includes(ci)) a.push(ci); } else a.splice(a.indexOf(ci), 1); save(); }; return h("li", null, h("label", { for: id }, inp, h("span", null, c, ci < (s.bookChecklist || []).length ? h("span", { class: "small muted" }, "  (book)") : null))); }))));
    }
  }

  /* LISTEN */
  /* Book recording player: loads the file as a blob so it plays offline and on iPad (no range-request issues). */
  let BOOK_AUDIO = null;
  function stopAudio() { if (BOOK_AUDIO) { try { BOOK_AUDIO.pause(); } catch (e) {} } }
  function bookAudioPlayer(src, page) {
    const audio = new Audio(); audio.preload = "none";
    let loaded = false, loading = false;
    const fmt = (t) => { t = Math.max(0, Math.floor(t || 0)); return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0"); };
    const playB = h("button", { class: "btn small primary", type: "button" }, icon("play"), "Play");
    const backB = h("button", { class: "btn small", type: "button", title: "Back 5 seconds" }, icon("replay"), "5 s");
    const restartB = h("button", { class: "btn small ghost", type: "button" }, "From the start");
    const time = h("span", { class: "small muted", style: { fontVariantNumeric: "tabular-nums" } }, "0:00 / –:––");
    const seek = h("input", { type: "range", min: 0, max: 1000, value: 0, "aria-label": "Position in the recording", style: { flex: "1 1 160px", minWidth: "120px" } });
    const speedSel = h("select", { "aria-label": "Speed" }, [["0.75", "Slow"], ["1", "Normal"], ["1.25", "Fast"]].map(([v, t]) => h("option", { value: v, selected: v === "1" ? true : null }, t)));
    const status = h("span", { class: "small muted" }, "Book recording · page " + page);
    speedSel.onchange = () => { audio.playbackRate = +speedSel.value; };
    const setPlaying = (on) => { playB.lastChild.textContent = on ? "Pause" : "Play"; playB.firstChild.replaceWith(icon(on ? "pause" : "play")); };
    audio.addEventListener("play", () => setPlaying(true));
    audio.addEventListener("pause", () => setPlaying(false));
    audio.addEventListener("ended", () => { setPlaying(false); status.textContent = "Finished. Answer the questions, then listen again."; });
    audio.addEventListener("timeupdate", () => { time.textContent = fmt(audio.currentTime) + " / " + fmt(audio.duration); if (audio.duration) seek.value = Math.round((audio.currentTime / audio.duration) * 1000); });
    audio.addEventListener("loadedmetadata", () => { time.textContent = fmt(audio.currentTime) + " / " + fmt(audio.duration); });
    function load() {
      if (loaded || loading) return Promise.resolve();
      loading = true; status.textContent = "Loading the recording…";
      const done = (url) => { audio.src = url; loaded = true; loading = false; status.textContent = "Book recording · page " + page; audio.playbackRate = +speedSel.value; };
      if (!window.fetch || location.protocol === "file:") { done(src); return Promise.resolve(); }
      return fetch(src).then((r) => { if (!r.ok) throw new Error(r.status); return r.blob(); })
        .then((b) => done(URL.createObjectURL(b)))
        .catch(() => { done(src); });
    }
    playB.onclick = () => {
      if (!audio.paused) { audio.pause(); return; }
      TTS.stop(); if (BOOK_AUDIO && BOOK_AUDIO !== audio) stopAudio(); BOOK_AUDIO = audio;
      load().then(() => { const p = audio.play(); if (p && p.catch) p.catch(() => { status.textContent = "Tap Play again to start the sound."; }); });
    };
    backB.onclick = () => { if (loaded) audio.currentTime = Math.max(0, audio.currentTime - 5); };
    restartB.onclick = () => { load().then(() => { audio.currentTime = 0; BOOK_AUDIO = audio; audio.play(); }); };
    seek.oninput = () => { if (loaded && audio.duration) audio.currentTime = (seek.value / 1000) * audio.duration; };
    return h("div", { class: "stack" },
      h("div", { class: "player" }, playB, backB, restartB, seek, time, h("label", { class: "small muted" }, "Speed ", speedSel)),
      h("span", null, status));
  }
  function renderListen(card, s, si, l) {
    card.append(secHead(s.title, s));
    if (s.instructions) card.append(instrBlock(s.instructions));
    if (s.image) card.append(h("div", { class: "pic-wrap" }, h("img", { class: "pic", src: "img/" + s.image, alt: "Picture from the book" })));
    if (s.needsAudio && s.audio) {
      card.append(bookAudioPlayer(s.audio, s.page));
      if (!s.items || !s.items.some((it) => !it.open)) card.append(h("p", { class: "small muted" }, "Write your answers below. Your teacher will check them with the class."));
    } else if (s.needsAudio) {
      card.append(h("div", { class: "notice" }, h("b", null, "🎧 The book recording is not inside this app."),
        h("span", null, "Your teacher will play it in class."),
        s.audioLink ? h("span", null, "The book’s QR code (page " + (s.page || "") + ") points to this Ministry file: ", h("a", { href: s.audioLink, target: "_blank", rel: "noopener" }, "Open the book’s QR audio link"), ". It may need a Ministry (MOE) account. We could not open or check it from here.") : null,
        h("span", { class: "small" }, "Write your notes below. Answers are not marked automatically, because they depend on the recording.")));
    }
    if (s.needsAudio) {
      const list = h("div", { class: "stack" });
      (s.items || []).forEach((it, ii) => list.append(renderItem(it.keyed ? it : Object.assign({}, it, { open: true, needsAudio: true }), l.id + ":" + si + ":" + ii)));
      card.append(list);
      return;
    }
    // extra listening with generated voice
    const lines = s.script || [];
    let i = 0, playing = false, paused = false;
    const scriptBox = h("div", { class: "dialogue", hidden: true }, lines.map((d) => h("div", { class: "bubble" }, h("span", { class: "who" }, d.who.slice(0, 6)), h("div", { class: "say" }, h("span", null, d.text)))));
    const status = h("span", { class: "small muted" }, "Generated voice — not the book recording.");
    const playB = h("button", { class: "btn small primary", type: "button" }, icon("play"), "Play");
    const replayB = h("button", { class: "btn small", type: "button" }, icon("replay"), "Replay");
    const speedSel = h("select", { "aria-label": "Speed" }, [["0.7", "Slow"], ["0.85", "Normal"], ["1", "Fast"]].map(([v, t]) => h("option", { value: v, selected: Math.abs(S.settings.rate - +v) < 0.08 ? true : null }, t)));
    speedSel.onchange = () => { S.settings.rate = +speedSel.value; save(); };
    function next() { if (!playing) return; if (i >= lines.length) { playing = false; setPlay(false); status.textContent = "Finished. Answer the questions."; return; } status.textContent = "Speaker: " + lines[i].who; TTS.speak(lines[i].who + ". " + lines[i].text, { rate: S.settings.rate, onend: () => { if (playing && !paused && TTS.cur === null) { i++; setTimeout(next, 350); } } }); }
    function setPlay(on) { playB.lastChild.textContent = on ? "Pause" : (i > 0 && i < lines.length ? "Resume" : "Play"); playB.firstChild.replaceWith(icon(on ? "pause" : "play")); }
    playB.onclick = () => {
      if (!TTS.ok) { toast("Speech is not available in this browser."); return; }
      if (!playing) { if (i >= lines.length) i = 0; playing = true; paused = false; setPlay(true); next(); }
      else if (!paused) { paused = true; TTS.pause(); setPlay(false); }
      else { paused = false; TTS.resume(); setPlay(true); }
    };
    replayB.onclick = () => { TTS.stop(); i = 0; playing = true; paused = false; setPlay(true); next(); };
    card.append(h("div", { class: "player" }, playB, replayB, h("label", { class: "small muted" }, "Speed ", speedSel), status));
    const list = h("div", { class: "stack" });
    let answered = 0; const total = (s.items || []).length;
    const showScript = h("button", { class: "btn small", type: "button", disabled: true }, "Show the script");
    showScript.onclick = () => { scriptBox.hidden = !scriptBox.hidden; showScript.textContent = scriptBox.hidden ? "Show the script" : "Hide the script"; };
    (s.items || []).forEach((it, ii) => { const k = l.id + ":" + si + ":" + ii; if (S.items[k] && S.items[k].tries) answered++; list.append(renderItem(it, k, { onCorrect: () => { answered++; if (answered >= 1) showScript.disabled = false; } })); });
    if (answered > 0 || S.settings.mode === "teacher") showScript.disabled = false;
    card.append(list, h("div", { class: "row" }, showScript, h("span", { class: "small muted" }, "The script opens after you answer.")), scriptBox);
    // also enable script after any attempt
    list.addEventListener("click", () => setTimeout(() => { if ((s.items || []).some((it, ii) => S.items[l.id + ":" + si + ":" + ii])) showScript.disabled = false; }, 50));
  }

  /* GAMES */
  function gameTimer() {
    if (!S.settings.timer) return { el: null, stop: () => 0 };
    const t0 = Date.now(); const el = h("span", { class: "tag" }, "⏱ 0s");
    const iv = setInterval(() => { if (!document.body.contains(el)) { clearInterval(iv); return; } el.textContent = "⏱ " + Math.round((Date.now() - t0) / 1000) + "s"; }, 1000);
    return { el, stop: () => { clearInterval(iv); return Math.round((Date.now() - t0) / 1000); } };
  }
  function gameDone(l, scoreTxt, again) {
    const k = l.id + ":game";
    const first = !(S.items[k] && S.items[k].done);
    markItem(k, true);
    if (first) { S.games[l.id] = 1; if (Object.keys(S.games).length >= 3) award("gamer"); save(); }
    sfx.win();
    return h("div", { class: "celebrate" }, h("div", { class: "big", "aria-hidden": "true" }, "🎉"), h("h3", null, "Well done!"), h("p", null, scoreTxt), h("button", { class: "btn", type: "button", onclick: again }, icon("replay"), "Play again"));
  }
  function renderGame(host, l) {
    const g = l.game; const c = h("section", { class: "card stack" }); host.append(c);
    const timerToggle = h("button", { class: "btn small", type: "button", "aria-pressed": String(!!S.settings.timer) }, icon("timer"), S.settings.timer ? "Timer: on" : "Timer: off");
    timerToggle.onclick = () => { S.settings.timer = !S.settings.timer; save(); c.remove(); host.innerHTML = ""; renderGame(host, l); };
    c.append(secHead(g.title || "Game", { source: "extra" }, [timerToggle]));
    c.append(h("p", { class: "small muted" }, "No penalty for mistakes. You get a hint and you can try again."));
    const area = h("div", { class: "stack" }); c.append(area);
    const start = () => { area.innerHTML = ""; (GAMES[g.kind] || (() => area.append(h("p", null, "Game not available."))))(area, g, l, start); };
    start();
  }
  const GAMES = {
    "match-emoji": (area, g, l, again) => {
      const vs = seededShuffle(l.vocab, Date.now()).slice(0, Math.min(6, l.vocab.length));
      const tm = gameTimer(); let tries = 0, ok = 0;
      area.append(h("div", { class: "game-top" }, h("span", null, "Tap a picture, then its word."), tm.el));
      area.append(renderMatchGrid(vs.map((v) => [v.emoji, v.w]), () => { const secs = tm.stop(); area.innerHTML = ""; area.append(gameDone(l, "You matched all " + vs.length + " words" + (secs ? " in " + secs + " seconds" : "") + ".", again)); }, true));
    },
    scramble: (area, g, l, again) => {
      const ss = g.sentences.slice(); let i = 0; const tm = gameTimer();
      const top = h("div", { class: "game-top" }, h("span", { class: "score" }), tm.el); const slot = h("div"); area.append(top, slot);
      const next = () => {
        if (i >= ss.length) { const secs = tm.stop(); area.innerHTML = ""; area.append(gameDone(l, "You built " + ss.length + " sentences" + (secs ? " in " + secs + " seconds" : "") + ".", again)); return; }
        top.firstChild.textContent = "Sentence " + (i + 1) + " / " + ss.length; slot.innerHTML = "";
        const s = ss[i]; const words = s.split(/\s+/);
        slot.append(renderItem({ t: "order", q: "Build the sentence.", words, answer: [s], why: "" }, "game:" + l.id + ":" + i + ":" + Date.now(), { onCorrect: () => { i++; setTimeout(next, 700); } }));
      };
      next();
    },
    quiz: (area, g, l, again) => {
      const items = g.items.slice(); let i = 0, firstTry = 0; const tm = gameTimer();
      const top = h("div", { class: "game-top" }, h("span", { class: "score" }), tm.el); const slot = h("div"); area.append(top, slot);
      const next = () => {
        if (i >= items.length) { const secs = tm.stop(); area.innerHTML = ""; area.append(gameDone(l, firstTry + " of " + items.length + " right on the first try" + (secs ? " · " + secs + " seconds" : "") + ".", again)); return; }
        top.firstChild.textContent = "Question " + (i + 1) + " / " + items.length; slot.innerHTML = "";
        const k = "game:" + l.id + ":" + i + ":" + Date.now();
        slot.append(renderItem(items[i], k, { onCorrect: () => { if ((S.items[k] || {}).tries === 1) firstTry++; delete S.items[k]; i++; setTimeout(next, 900); } }));
      };
      next();
    },
    sort: (area, g, l, again) => {
      const cards = seededShuffle(g.cards, Date.now()); let sel = null, done = 0; const tm = gameTimer();
      const fb = h("div", { "aria-live": "polite" });
      const pool = h("div", { class: "bank" });
      const buckets = g.buckets.map((b, bi) => { const chips = h("div", { class: "chips" }); const el = h("button", { class: "bucket", type: "button" }, h("h4", null, b), chips); el.onclick = () => {
        if (sel === null) { toast("First tap a word card."); return; }
        const [w, ans] = cards[sel]; const chip = $$(".chip", pool).find((x) => +x.dataset.i === sel);
        if (ans === bi) { chips.append(h("span", { class: "chip", style: { cursor: "default" } }, w)); chip.remove(); sel = null; done++; sfx.good(); fb.innerHTML = ""; if (done === cards.length) { const secs = tm.stop(); area.innerHTML = ""; area.append(gameDone(l, "You sorted all " + cards.length + " cards" + (secs ? " in " + secs + " seconds" : "") + ".", again)); } }
        else { sfx.bad(); fb.innerHTML = ""; fb.append(h("div", { class: "feedback bad" }, h("b", null, pick(retry)), h("span", null, g.hint || "Think again about “" + w + "”."))); }
      }; return el; });
      cards.forEach(([w], i) => { const b = h("button", { class: "chip", type: "button" }, w); b.dataset.i = i; b.onclick = () => { $$(".chip.sel", pool).forEach((x) => x.classList.remove("sel")); b.classList.add("sel"); sel = i; sfx.tap(); }; pool.append(b); });
      area.append(h("div", { class: "game-top" }, h("span", null, "Tap a word, then tap the right box."), tm.el), pool, h("div", { class: "sort-buckets" }, buckets), fb);
    },
    spell: (area, g, l, again) => {
      area.append(spellGame(seededShuffle(l.vocab, Date.now()).slice(0, 6), "game:" + l.id + ":spell", () => { area.innerHTML = ""; area.append(gameDone(l, "You completed all the words.", again)); }));
    }
  };
  function renderMatchGrid(pairs, onDone, emoji) {
    const left = pairs.map((p, i) => ({ i, t: p[0] })), right = shuffleNotSame(pairs.map((p, i) => ({ i, t: p[1] })), Date.now());
    const L = h("div", { class: "mcol" }), R = h("div", { class: "mcol" }); let sel = null, n = 0; const fb = h("div", { "aria-live": "polite" });
    const lb = left.map((x) => { const b = h("button", { class: "mcard", type: "button", style: { justifyContent: "center" }, "aria-label": "Picture " + (x.i + 1) }, h("span", { class: emoji ? "em" : "" }, x.t)); b.onclick = () => { if (b.classList.contains("done")) return; $$(".mcard.sel", L).forEach((y) => y.classList.remove("sel")); b.classList.add("sel"); sel = x.i; sfx.tap(); }; L.append(b); return b; });
    right.forEach((x) => { const b = h("button", { class: "mcard", type: "button" }, h("span", null, x.t)); b.onclick = () => {
      if (b.classList.contains("done")) return; if (sel === null) { toast("First tap a picture."); return; }
      if (sel === x.i) { n++; [lb[sel], b].forEach((y) => { y.classList.remove("sel"); y.classList.add("done"); }); sel = null; sfx.good(); TTS.speak(x.t); fb.innerHTML = ""; if (n === pairs.length) setTimeout(onDone, 500); }
      else { b.classList.add("shake"); setTimeout(() => b.classList.remove("shake"), 400); sfx.bad(); fb.innerHTML = ""; fb.append(h("div", { class: "feedback bad" }, h("b", null, pick(retry)), h("span", null, "Look at the picture again. Say the word aloud."))); }
    }; R.append(b); });
    return h("div", { class: "stack" }, h("div", { class: "match" }, L, R), fb);
  }
  function spellGame(vs, key, onAll) {
    const box = h("div", { class: "stack" }); let i = 0;
    const draw = () => {
      box.innerHTML = "";
      if (i >= vs.length) { if (onAll) onAll(); else { box.append(h("div", { class: "celebrate" }, h("div", { class: "big" }, "🌟"), h("h3", null, "Well done!"), h("button", { class: "btn", type: "button", onclick: () => { i = 0; draw(); } }, icon("replay"), "Again"))); sfx.win(); } return; }
      const v = vs[i]; const w = v.w; const letters = w.split("");
      const idx = []; letters.forEach((ch, k) => { if (/[a-z]/i.test(ch) && k > 0) idx.push(k); });
      const gaps = seededShuffle(idx, w + i).slice(0, Math.max(1, Math.min(3, Math.floor(idx.length / 3))));
      const word = h("div", { class: "spell-word", "aria-label": "Word with missing letters" }, letters.map((ch, k) => h("span", { class: "slot" + (ch === " " ? " sp" : gaps.includes(k) ? " gap" : "") }, ch === " " ? " " : gaps.includes(k) ? "_" : ch)));
      const inp = h("input", { class: "txt", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "Type the whole word", placeholder: "Type the whole word", style: { maxWidth: "320px" } });
      const fb = h("div", { "aria-live": "polite" });
      const check = h("button", { class: "btn small primary", type: "button" }, "Check");
      const doCheck = () => { if (norm(inp.value) === norm(w)) { sfx.good(); TTS.speak(w); fb.innerHTML = ""; fb.append(h("div", { class: "feedback good" }, h("b", null, pick(praise)), h("span", null, w))); i++; setTimeout(draw, 900); } else { sfx.bad(); fb.innerHTML = ""; fb.append(h("div", { class: "feedback bad" }, h("b", null, pick(retry)), h("span", null, "Listen to the word and look at the letters."))); } };
      check.onclick = doCheck; inp.addEventListener("keydown", (e) => { if (e.key === "Enter") doCheck(); });
      box.append(h("div", { class: "game-top" }, h("span", { class: "small muted" }, "Word " + (i + 1) + " / " + vs.length), h("span", { style: { fontSize: "2.2rem" } }, v.emoji || "")),
        h("p", { class: "muted" }, v.def, S.settings.ar && v.ar ? " · " : "", S.settings.ar && v.ar ? h("span", { class: "ar" }, v.ar) : null), word,
        h("div", { class: "row" }, inp, check, sayBtn(w, "Listen to the word"), h("button", { class: "btn small ghost", type: "button", onclick: () => { i++; draw(); } }, "Skip")), fb);
      setTimeout(() => { if (document.activeElement === document.body) inp.focus({ preventScroll: true }); }, 30);
    };
    draw(); return box;
  }

  /* FINISH */
  function renderFinish(host, l, u) {
    const pct = lessonPct(l);
    const keys = lessonItemKeys(l); const todo = [];
    const parts = lessonParts(l).filter((p) => !p.teacher);
    l.sections.forEach((s, si) => { const ks = (s.items || []).map((x, ii) => l.id + ":" + si + ":" + ii).concat(s.type === "write" ? [l.id + ":" + si + ":w"] : []); const left = ks.filter((k) => !(S.items[k] && S.items[k].done)).length; if (left) { const pi = parts.findIndex((p) => p.sec === si); todo.push({ label: parts[pi].label + ": " + s.title, pi }); } });
    if (l.game && !(S.items[l.id + ":game"] && S.items[l.id + ":game"].done)) todo.push({ label: "Game: " + l.game.title, pi: parts.findIndex((p) => p.key === "game") });
    const c = h("section", { class: "card stack" });
    c.append(h("div", { class: "celebrate" }, h("div", { class: "big", "aria-hidden": "true" }, pct >= 100 ? "🏆" : "🌟"), h("h2", null, pct >= 100 ? "Lesson complete!" : "Great effort!"), h("p", null, "You finished " + pct + "% of this lesson. Points: " + S.points + ".")));
    if (todo.length) c.append(h("div", { class: "stack" }, h("h3", null, "Still to do"), h("div", { class: "stack" }, todo.map((t) => h("button", { class: "btn", style: { justifyContent: "flex-start" }, type: "button", onclick: () => goPart(t.pi) }, "➜ " + t.label)))));
    c.append(h("div", { class: "stack" }, h("h3", null, "Can you…?"), h("ul", { class: "goals" }, l.goals.map((g) => h("li", null, g)))));
    host.append(c);
  }

  /* TEACHER */
  function renderTeacher(host, l, u) {
    const t = l.teacher || {};
    const c = h("section", { class: "card stack teacher" });
    c.append(h("div", { class: "sec-head" }, h("h2", null, "🧑‍🏫 Teacher notes"), h("span", { class: "tag" }, "Teacher mode only")));
    c.append(h("div", { class: "stack" }, h("h3", null, "Lesson objectives (from the book)"), h("ul", null, l.canDo.map((x) => h("li", null, x))), h("h4", null, "In easy words"), h("ul", null, l.goals.map((x) => h("li", null, x)))));
    const grid = h("div", { class: "t-grid" });
    if (t.notes) grid.append(h("div", { class: "stack" }, h("h3", null, "How to run it"), h("ol", { style: { margin: 0, paddingLeft: "20px", display: "grid", gap: "4px" } }, t.notes.map((x) => h("li", null, x)))));
    if (t.pair) grid.append(h("div", { class: "stack" }, h("h3", null, "Pair work"), h("ul", null, t.pair.map((x) => h("li", null, x)))));
    if (t.group) grid.append(h("div", { class: "stack" }, h("h3", null, "Group work"), h("ul", null, t.group.map((x) => h("li", null, x)))));
    c.append(grid);
    if (t.quick) {
      const q = h("div", { class: "stack" }, h("h3", null, "Quick checks (exit questions)"));
      t.quick.forEach((x, i) => { const a = h("span", { class: "t-ans", hidden: true }, x.a); q.append(h("div", { class: "item" }, h("div", { class: "row", style: { flexWrap: "nowrap" } }, h("b", { class: "grow" }, (i + 1) + ". " + x.q), h("button", { class: "btn small", type: "button", onclick: (e) => { a.hidden = !a.hidden; e.target.textContent = a.hidden ? "Show answer" : "Hide answer"; } }, "Show answer")), a)); });
      c.append(q);
    }
    // all answers in lesson
    const ans = h("details", null, h("summary", null, h("b", null, "Answer key for the whole lesson")));
    l.sections.forEach((s, si) => { if (!s.items || !s.items.length) return; ans.append(h("h4", { style: { marginTop: "10px" } }, (s.source === "extra" ? "⭐ " : "") + s.title + (s.page ? " (p. " + s.page + ")" : "")), h("ol", null, s.items.map((it) => h("li", null, h("span", { html: inlineHTML(plain(it.q || "")) }), " — ", h("span", { class: "t-ans" }, it.needsAudio || s.needsAudio ? "check with the book recording" : answerText(it)))))); });
    c.append(ans);
    c.append(h("p", { class: "small muted" }, "The book prints no answer key. Answers marked “from the text” were taken from the book’s own texts. Listening answers depend on the book recording and are not given here."));
    if (u.outcomes) c.append(h("details", null, h("summary", null, h("b", null, "Unit " + u.num + " learning outcomes (book p. " + (u.pages ? u.pages[0] + 2 : "") + ")")), Object.entries(u.outcomes).map(([k, v]) => h("div", null, h("h4", { style: { marginTop: "8px", textTransform: "capitalize" } }, k), h("ul", null, v.map((x) => h("li", null, x)))))));
    host.append(c);
  }

  /* GLOSSARY */
  function renderGlossary(main) {
    const w = h("div", { class: "wrap" });
    const inp = h("input", { class: "txt", type: "search", placeholder: "Find a word…", "aria-label": "Find a word", id: "glq" });
    const list = h("div", { class: "gl" });
    const arMap = {}; allLessons().forEach(({ l }) => (l.vocab || []).forEach((v) => { arMap[v.w.toLowerCase()] = v; }));
    const draw = () => {
      const q = norm(inp.value); list.innerHTML = "";
      (BOOK.glossary || []).filter((e) => !q || e.w.toLowerCase().includes(q) || e.def.toLowerCase().includes(q)).forEach((e) => {
        const v = arMap[e.w.toLowerCase()];
        list.append(h("div", { class: "gl-item" }, h("div", { class: "row" }, h("b", { style: { fontSize: "1.1rem" } }, (v && v.emoji ? v.emoji + " " : "") + e.w), sayBtn(e.w)), h("span", { class: "small muted" }, e.ipa + " · " + e.pos + (e.page ? " · p. " + e.page : "")), h("span", null, e.def), S.settings.ar && v && v.ar ? h("span", { class: "ar", style: { color: "var(--brand)", fontWeight: 700 } }, v.ar) : null));
      });
      if (!list.children.length) list.append(h("p", { class: "muted" }, "No word found."));
    };
    inp.oninput = draw;
    w.append(h("section", { class: "card stack" }, h("div", { class: "sec-head" }, h("h1", null, "Glossary"), h("button", { class: "tag page", type: "button", onclick: () => openPage(parseInt(BOOK.pagesInfo.glossary, 10)) }, "📄 pp. " + BOOK.pagesInfo.glossary)), h("p", { class: "muted" }, "All " + (BOOK.glossary || []).length + " words from the book’s glossary, with the book’s pronunciation and meaning."), inp, list,
      h("p", { class: "small muted" }, "Irregular verbs (pages " + BOOK.pagesInfo.irregular + "): ", h("button", { class: "btn small", type: "button", onclick: () => openPage(parseInt(BOOK.pagesInfo.irregular, 10)) }, icon("book"), "Open the book pages"))));
    w.append(footer()); main.append(w); draw();
  }

  /* PROJECT (p73) */
  function renderProject(main) {
    const w = h("div", { class: "wrap" });
    const steps = ["Form your group and assign roles (e.g., leader, researcher, designer, presenter).", "Research your topic using books, websites, or interviews.", "Plan your product (poster, model, slide deck, etc.).", "Gather materials and create your product.", "Rehearse your presentation.", "Present your project to the class."];
    const crit = ["Content", "Accuracy", "Presentation skills", "Ability to explain and justify ideas when asked", "Design and creativity", "Teamwork"];
    const pres = ["Speak clearly and confidently.", "Be concise and stick to your main points.", "Use visuals to support your ideas.", "Engage your audience with questions or demonstrations."];
    const mk = (arr, key) => h("ul", { class: "checks" }, arr.map((x, i) => { const id = "pj-" + key + i; const st = S.drafts["pj:" + key] || []; const inp = h("input", { type: "checkbox", id, checked: st.includes(i) ? true : null }); inp.onchange = () => { const a = S.drafts["pj:" + key] || (S.drafts["pj:" + key] = []); if (inp.checked) a.push(i); else a.splice(a.indexOf(i), 1); save(); }; return h("li", null, h("label", { for: id }, inp, h("span", null, x))); }));
    const field = (label, k, rows) => { const id = "pjf-" + k; const ta = h("textarea", { class: "txt", id, rows: rows || 2 }); ta.value = S.drafts["pjf:" + k] || ""; ta.oninput = () => { S.drafts["pjf:" + k] = ta.value; save(); }; return h("div", null, h("label", { for: id, style: { fontWeight: 700 } }, label), ta); };
    w.append(h("section", { class: "card stack" }, h("div", { class: "sec-head" }, h("h1", null, "Group Project"), h("button", { class: "tag page", type: "button", onclick: () => openPage(BOOK.pagesInfo.project) }, "📄 p. " + BOOK.pagesInfo.project)),
      field("Project Topic (to be provided by the teacher)", "topic", 1), field("Task: In this project, we are going to …", "task", 2),
      h("h3", null, "Materials Needed"), h("p", null, "paper · newspaper · colouring sets · magazines · markers · textbook · PowerPoint slides · reference books · glue · internet access · others"),
      h("h3", null, "Project Steps"), mk(steps, "steps"), h("h3", null, "Project Presentation"), mk(pres, "pres"), h("h3", null, "Evaluation Criteria"), mk(crit, "crit"),
      h("h3", null, "Self and Peer Reflection"), field("What did I contribute to the project?", "contrib", 2), field("One thing I would improve is:", "improve", 2)));
    w.append(footer()); main.append(w);
  }

  /* SEARCH */
  let IDX = null;
  function buildIndex() {
    IDX = [];
    allLessons().forEach(({ u, l }) => {
      const parts = lessonParts(l);
      IDX.push({ t: l.title, sub: "Unit " + u.num + " · Lesson " + l.num + " · " + l.skill + " · p. " + l.pages.join("–"), id: l.id, pi: 0, txt: l.title + " " + l.skill });
      (l.vocab || []).forEach((v) => IDX.push({ t: v.emoji + " " + v.w, sub: "Word · " + l.title + " · " + v.def, id: l.id, pi: parts.findIndex((p) => p.key === "words"), txt: v.w + " " + v.def + " " + (v.ar || "") }));
      l.sections.forEach((s, si) => {
        const pi = parts.findIndex((p) => p.sec === si);
        const body = [s.title, s.instructions || "", (s.paras || []).join(" "), (s.blocks || []).map((b) => b.paras.join(" ")).join(" "), (s.items || []).map((it) => it.q || "").join(" "), (s.steps || []).map((x) => x.title + " " + x.text + " " + (x.examples || []).join(" ")).join(" ")].join(" ");
        IDX.push({ t: s.title, sub: (s.source === "extra" ? "Extra Practice · " : "") + l.title + (s.page ? " · p. " + s.page : ""), id: l.id, pi, txt: plain(body).replace(/\{[a-z]:([^}]+)\}/g, "$1") });
      });
    });
    (BOOK.glossary || []).forEach((e) => IDX.push({ t: e.w, sub: "Glossary · " + e.def, id: "glossary", txt: e.w + " " + e.def }));
  }
  function renderSearch(main) {
    if (!IDX) buildIndex();
    const w = h("div", { class: "wrap" });
    const inp = h("input", { class: "txt", type: "search", placeholder: "Search words, lessons, texts…", "aria-label": "Search the book", id: "q" });
    const res = h("div", { class: "results", "aria-live": "polite" });
    const draw = () => {
      const q = norm(inp.value); res.innerHTML = ""; if (q.length < 2) { res.append(h("p", { class: "muted" }, "Type at least 2 letters. Try: courtyard, has got, Diwaniya, so that")); return; }
      const hits = IDX.filter((e) => norm(e.txt).includes(q)).slice(0, 40);
      hits.forEach((e) => {
        const i = norm(e.txt).indexOf(q); const raw = e.txt; const snip = i >= 0 && raw.length > 90 ? "…" + raw.slice(Math.max(0, i - 40), i + q.length + 50) + "…" : e.sub;
        const a = h("a", { class: "result", href: "#" + e.id }, h("b", null, e.t), h("small", { html: esc(snip).replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig"), (m) => "<mark>" + m + "</mark>") }), h("small", null, e.sub));
        a.addEventListener("click", (ev) => { if (e.pi != null && e.pi >= 0) { ev.preventDefault(); if (location.hash === "#" + e.id) { goPart(e.pi); } else { PENDING_PART = e.pi; location.hash = "#" + e.id; } } });
        res.append(a);
      });
      if (!hits.length) res.append(h("p", { class: "muted" }, "Nothing found."));
    };
    inp.oninput = draw;
    w.append(h("section", { class: "card stack" }, h("h1", null, "Search the book"), inp, res));
    w.append(footer()); main.append(w); draw(); setTimeout(() => inp.focus(), 50);
  }
  let PENDING_PART = null;

  /* SETTINGS */
  function renderSettings(main) {
    const w = h("div", { class: "wrap" });
    const st = S.settings;
    const toggle = (label, prop, desc) => { const id = "set-" + prop; const inp = h("input", { type: "checkbox", id, checked: st[prop] ? true : null }); inp.onchange = () => { st[prop] = inp.checked; save(); applySettings(); }; return h("li", null, h("label", { for: id }, inp, h("span", null, h("b", null, label), desc ? h("span", { class: "small muted", style: { display: "block" } }, desc) : null))); };
    const confirmBox = h("div", { class: "notice", hidden: true }, h("b", null, "Delete all progress on this device?"), h("span", null, "Points, badges, answers and drafts will be removed. This cannot be undone."),
      h("div", { class: "row" }, h("button", { class: "btn", type: "button", onclick: () => { const keep = S.settings; S = defaults(); S.settings = keep; save(); toast("Progress was reset."); route(); } }, "Yes, reset"), h("button", { class: "btn ghost", type: "button", onclick: () => { confirmBox.hidden = true; } }, "Cancel")));
    const sizeSel = h("select", { class: "txt", id: "set-size", style: { maxWidth: "240px" } }, [["0", "Normal"], ["1", "Large"], ["2", "Extra large (class screen)"]].map(([v, t]) => h("option", { value: v, selected: String(st.text) === v ? true : null }, t)));
    sizeSel.onchange = () => { st.text = +sizeSel.value; save(); applySettings(); };
    w.append(h("section", { class: "card stack" }, h("h1", null, "Settings & progress"),
      h("ul", { class: "checks" }, toggle("Arabic help (عربي)", "ar", "Show Arabic meanings and instructions."), toggle("Sounds", "sound", "Short sounds for right and wrong answers."), toggle("Animations", "motion", "Card flips and gentle movement."), toggle("Game timer", "timer", "Show a stopwatch in games. There is no penalty.")),
      h("div", null, h("label", { for: "set-size", style: { fontWeight: 700, display: "block" } }, "Text size"), sizeSel),
      h("div", { class: "stack" }, h("h3", null, "Progress on this device"), h("p", { class: "muted" }, "Progress is saved in this browser only. No account is needed. Another device or browser starts fresh."),
        h("p", null, "Points: ", h("b", null, String(S.points)), " · Badges: ", h("b", null, Object.keys(S.badges).length + " / " + BADGES.length), " · Answers saved: ", h("b", null, String(Object.keys(S.items).length))),
        h("div", { class: "row" }, h("button", { class: "btn", type: "button", onclick: () => { confirmBox.hidden = false; } }, "Reset my progress")), confirmBox),
      h("div", { class: "stack" }, h("h3", null, "What works where"), h("ul", { style: { margin: 0, paddingLeft: "20px", display: "grid", gap: "4px" } },
        h("li", null, "Read-aloud uses your device’s built-in English voice: " + (TTS.ok ? "available on this device ✓" : "not available on this device ✗") + ". Word highlighting works only where the browser reports word positions (Chrome, Edge, Safari)."),
        h("li", null, "The book’s listening recordings are not inside this app. Listening lessons link to the book’s QR code address."),
        h("li", null, "Voice recording needs microphone permission. If the microphone is blocked, you can use your phone’s recorder button instead."),
        h("li", null, "Pronunciation is not marked automatically."))),
      h("div", { class: "stack" }, h("h3", null, "Install as an app"),
        h("ul", { style: { margin: 0, paddingLeft: "20px", display: "grid", gap: "4px" } },
          h("li", null, "iPad / iPhone (Safari): tap Share, then “Add to Home Screen”."),
          h("li", null, "Android / Chrome: open the menu ⋮, then “Install app” or “Add to Home screen”."),
          h("li", null, "Windows / Mac (Chrome or Edge): click the install icon in the address bar."),
          h("li", null, "After the first visit the book opens without internet. Book pages you have opened are saved for offline use.")),
        h("p", { class: "ar muted" }, "للتثبيت كتطبيق: في الآيباد اضغط مشاركة ثم «إضافة إلى الشاشة الرئيسية». يعمل الكتاب بعد ذلك بدون إنترنت."))));
    w.append(footer()); main.append(w);
  }

  /* BOOK PAGE MODAL */
  let modalEl = null;
  function openPage(p) {
    closeModal(); let page = p;
    const img = h("img", { alt: "" }); const label = h("b", null);
    const imgBox = h("div", { class: "modal-img" }, img);
    const set = () => { img.src = "img/pages/p" + String(page).padStart(3, "0") + ".jpg"; img.alt = "Book page " + page; label.textContent = "Book page " + page; };
    const prev = h("button", { class: "btn small", type: "button", onclick: () => { if (page > 1) { page--; set(); } } }, icon("left"), "Prev");
    const next = h("button", { class: "btn small", type: "button", onclick: () => { if (page < BOOK.pagesInfo.last) { page++; set(); } } }, "Next", icon("right"));
    const zoom = h("button", { class: "btn small", type: "button", onclick: () => imgBox.classList.toggle("zoom") }, "Zoom");
    const close = h("button", { class: "btn small", type: "button", onclick: closeModal, "aria-label": "Close book page" }, icon("close"), "Close");
    modalEl = h("div", { class: "modal", role: "dialog", "aria-modal": "true", "aria-label": "Book page" }, h("div", { class: "modal-bar" }, label, h("span", { class: "grow" }), prev, next, zoom, close), imgBox);
    document.body.append(modalEl); set(); close.focus();
  }
  function closeModal() { if (modalEl) { modalEl.remove(); modalEl = null; } }

  /* ───────────── boot ───────────── */
  function boot() {
    $("#btnMenu").onclick = openDrawer; $("#scrim").onclick = closeDrawer; $("#btnClose").onclick = closeDrawer;
    $("#btnSearch").onclick = () => { location.hash = "#search"; };
    $("#btnAr").onclick = () => { S.settings.ar = !S.settings.ar; save(); applySettings(); rerender(); };
    $("#btnSound").onclick = () => { S.settings.sound = !S.settings.sound; if (!S.settings.sound) TTS.stop(); save(); applySettings(); toast(S.settings.sound ? "Sounds on" : "Sounds off"); };
    $("#btnMotion").onclick = () => { S.settings.motion = !S.settings.motion; save(); applySettings(); $("#btnMotion").setAttribute("aria-pressed", String(!S.settings.motion)); toast(S.settings.motion ? "Animations on" : "Animations off"); };
    $("#btnText").onclick = () => { S.settings.text = (S.settings.text + 1) % 3; save(); applySettings(); toast(["Normal text", "Large text", "Extra large text"][S.settings.text]); };
    $("#btnFull").onclick = async () => {
      try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }
      catch (e) { document.body.classList.toggle("fs"); toast(document.body.classList.contains("fs") ? "Class display: big text on (full screen is blocked here)" : "Class display off"); }
    };
    $("#mStudent").onclick = () => { S.settings.mode = "student"; S.settings.showAns = false; save(); applySettings(); rerender(); toast("Student mode"); };
    $("#mTeacher").onclick = () => { S.settings.mode = "teacher"; save(); applySettings(); rerender(); toast("Teacher mode: notes and answers are available"); };
    $("#btnAns").onclick = () => { S.settings.showAns = !S.settings.showAns; save(); applySettings(); rerender(); toast(S.settings.showAns ? "Answers shown" : "Answers hidden"); };
    $("#btnMotion").setAttribute("aria-pressed", String(!S.settings.motion));
    $("#drawer").setAttribute("inert", "");
    applySettings(); updatePointsUI();
    route();
    var bf = document.getElementById("bootfail"); if (bf) bf.parentNode.removeChild(bf);
    if (BOOK.sw && "serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      try { navigator.serviceWorker.register(BOOK.sw, { scope: BOOK.swScope || "./" }).catch(function () {}); } catch (e) {}
    }
  }
  function rerender() { if (CUR) { const main = $("#main"); const keep = window.scrollY; main.innerHTML = ""; const visible = lessonParts(CUR.l).filter((p) => !p.teacher || S.settings.mode === "teacher"); if (PART >= visible.length) PART = 0; renderLesson(main); window.scrollTo(0, keep); renderDrawer(); } else route(); }
  // apply pending part after search navigation
  const _route = route;
  route = function () { const pp = PENDING_PART; PENDING_PART = null; if (pp != null) PART = pp; _route(); };
  window.addEventListener("hashchange", () => {}, false);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
  window.__pearls = { S: () => S, lessonPct, allLessons };
})();
