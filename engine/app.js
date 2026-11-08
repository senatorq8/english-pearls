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
      else if (k === "style" && typeof v === "object") { for (const sk in v) { if (sk.indexOf("--") === 0) e.style.setProperty(sk, v[sk]); else e.style[sk] = v[sk]; } }
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
    settings: { ar: false, mode: "student", sound: true, motion: true, timer: false, rate: 0.9, text: 0, showAns: false, theme: "auto", voice: "natural" },
    items: {}, parts: {}, points: 0, streak: 0, badges: {}, drafts: {}, flips: 0, games: {}, recordings: 0, lastLesson: null, stars: {}
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
  // soft paper sound: a short burst of filtered noise
  function paper() {
    if (!S.settings.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const n = Math.floor(actx.sampleRate * 0.22), buf = actx.createBuffer(1, n, actx.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
      const src = actx.createBufferSource(), f = actx.createBiquadFilter(), g = actx.createGain(), t = actx.currentTime;
      f.type = "bandpass"; f.frequency.value = 2200; f.Q.value = 0.7; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
      src.buffer = buf; src.connect(f); f.connect(g); g.connect(actx.destination); src.start(t);
    } catch (e) {}
  }
  const sfx = { good: () => tone([660, 880], 0.14), bad: () => tone([300], 0.22), win: () => tone([523, 659, 784, 1046], 0.13), tap: () => tone([520], 0.05), page: paper };

  /* ───────────── speech ───────────── */
  // Natural voice: every text the book reads aloud was recorded in advance with an AI voice (Kokoro "George", British)
  // and saved as voice/<key>.mp3. BOOK.voiceIds lists the keys. Anything not recorded uses the device's own voice.
  const vkey = (t) => { const k = plain(t).replace(/\s+/g, " ").trim(); return hashStr(k).toString(36) + k.length.toString(36); };
  const VOICE_IDS = new Set(String(BOOK.voiceIds || "").split(",").filter(Boolean));
  const VOICE_DIR = BOOK.voiceDir || "../voice/";
  const collect = (t) => { if (window.__SAY) window.__SAY.push(String(t)); };
  const CLIP = {
    el: null,
    url(text) { if (S.settings.voice === "device" || !VOICE_IDS.size) return null; const k = vkey(text); return VOICE_IDS.has(k) ? VOICE_DIR + k + ".mp3" : null; },
    blobs: {}, order: [],
    // fetch the clip as a whole file (works offline through the service worker and on iPad/iPhone), keep the last 60
    get(url) {
      if (this.blobs[url]) return Promise.resolve(this.blobs[url]);
      return fetch(url).then((r) => { if (!r.ok) throw new Error("missing"); return r.blob(); }).then((b) => {
        const o = URL.createObjectURL(b); this.blobs[url] = o; this.order.push(url);
        if (this.order.length > 60) { const old = this.order.shift(); try { URL.revokeObjectURL(this.blobs[old]); } catch (e) {} delete this.blobs[old]; }
        return o;
      });
    },
    // iPhone/iPad only let a page play sound after a tap: play a tiny silent sound on the first tap so later clips can play
    unlock() {
      if (this.unlocked) return; this.unlocked = true;
      const a = this.el || (this.el = new Audio());
      const n = 400, buf = new Uint8Array(44 + n), dv = new DataView(buf.buffer), str = (o, t) => { for (let i = 0; i < t.length; i++) buf[o + i] = t.charCodeAt(i); };
      str(0, "RIFF"); dv.setUint32(4, 36 + n, true); str(8, "WAVEfmt "); dv.setUint32(16, 16, true); dv.setUint16(20, 1, true); dv.setUint16(22, 1, true);
      dv.setUint32(24, 8000, true); dv.setUint32(28, 8000, true); dv.setUint16(32, 1, true); dv.setUint16(34, 8, true); str(36, "data"); dv.setUint32(40, n, true); buf.fill(128, 44);
      let bin = ""; buf.forEach((c) => { bin += String.fromCharCode(c); });
      a.src = "data:audio/wav;base64," + btoa(bin); const p = a.play(); if (p && p.catch) p.catch(() => {});
    },
    play(url, text, opt, u, fallback) {
      const a = this.el || (this.el = new Audio()); a.preload = "auto";
      try { a.pause(); } catch (e) {}
      let raf = 0, done = false;
      const finish = () => { if (done) return; done = true; cancelAnimationFrame(raf); if (TTS.cur === u) TTS.cur = null; opt.onend && opt.onend(); };
      a.onended = finish;
      a.onerror = () => { if (done || TTS.cur !== u) return; done = true; cancelAnimationFrame(raf); fallback(); };
      this.get(url).then((src) => {
      if (TTS.cur !== u) return;
      a.src = src;
      try { a.preservesPitch = true; a.webkitPreservesPitch = true; a.mozPreservesPitch = true; } catch (e) {}
      a.playbackRate = Math.max(0.6, Math.min(1.4, (opt.rate || S.settings.rate || 0.9) / 0.9));
      if (opt.onboundary) {
        // word highlighting: the recording has no word timings, so move through the words in step with the playing time
        const words = []; const re = /\S+/g; let m; while ((m = re.exec(text))) words.push(m.index);
        const tick = () => { if (done) return; if (a.duration && !a.paused) { const lead = 0.12, d = Math.max(0.1, a.duration - 0.35); const f = Math.min(0.999, Math.max(0, (a.currentTime - lead) / d)); const ci = Math.floor(f * text.length); let w = 0; for (let i = 0; i < words.length; i++) if (words[i] <= ci) w = words[i]; opt.onboundary({ name: "word", charIndex: w }); } raf = requestAnimationFrame(tick); };
        raf = requestAnimationFrame(tick);
      }
      const p = a.play(); if (p && p.catch) p.catch(() => { if (!done && TTS.cur === u) { done = true; cancelAnimationFrame(raf); fallback(); } });
      }).catch(() => { if (!done && TTS.cur === u) { done = true; fallback(); } });
    },
    stop() { if (this.el) { try { this.el.pause(); } catch (e) {} } }
  };
  const IS_IOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
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
      const url = CLIP.url(text);
      if (url) {
        this.stopDevice(); CLIP.stop();
        const u = { clip: true }; this.cur = u;
        CLIP.play(url, plain(text), opt, u, () => { this.cur = null; this.speakDevice(text, opt); });
        return u;
      }
      CLIP.stop();
      return this.speakDevice(text, opt);
    },
    speakDevice(text, opt) {
      if (!this.ok) { toast("Your browser has no speech voice."); opt.onend && opt.onend(); return null; }
      const u = new SpeechSynthesisUtterance(plain(text));
      const v = this.voice || this.pick(); if (v) u.voice = v; u.lang = v ? v.lang : "en-GB";
      u.rate = opt.rate || S.settings.rate || 0.9;
      if (opt.onboundary) u.onboundary = opt.onboundary;
      let started = false;
      u.onstart = () => { started = true; };
      u.onend = () => { if (this.cur === u) this.cur = null; opt.onend && opt.onend(); };
      u.onerror = () => { if (this.cur === u) this.cur = null; opt.onend && opt.onend(); };
      this.cur = u;
      // Safari/iOS drops an utterance queued in the same moment as cancel(): cancel only when busy, then wait a beat.
      let busy = false; try { busy = speechSynthesis.speaking || speechSynthesis.pending; } catch (e) {}
      const go = () => { if (this.cur !== u) return; try { speechSynthesis.resume(); } catch (e) {} speechSynthesis.speak(u); };
      if (busy) { try { speechSynthesis.cancel(); } catch (e) {} this.lastCancel = Date.now(); }
      const since = Date.now() - (this.lastCancel || 0);
      if (since < 150) setTimeout(go, 150 - since); else go();
      // No sound after a while (often an iPhone on silent): tell the user once per page load.
      setTimeout(() => { if (!started && this.cur === u && !TTS.warned) { TTS.warned = true; toast(IS_IOS ? "No sound? Turn off silent mode and turn the volume up." : "No sound? Turn the volume up."); } }, 2500);
      return u;
    },
    stopDevice() { if (this.ok) { try { if (speechSynthesis.speaking || speechSynthesis.pending) { speechSynthesis.cancel(); this.lastCancel = Date.now(); } } catch (e) {} } },
    stop() { CLIP.stop(); this.cur = null; if (this.ok) { try { if (speechSynthesis.speaking || speechSynthesis.pending) { speechSynthesis.cancel(); this.lastCancel = Date.now(); } } catch (e) {} } $$(".icon-btn.speaking").forEach((b) => b.classList.remove("speaking")); },
    pause() { if (this.cur && this.cur.clip) { CLIP.stop(); return; } if (this.ok) speechSynthesis.pause(); },
    resume() { if (this.cur && this.cur.clip && CLIP.el) { const p = CLIP.el.play(); if (p && p.catch) p.catch(() => {}); return; } if (this.ok) speechSynthesis.resume(); }
  };
  if (TTS.ok) { TTS.pick(); speechSynthesis.onvoiceschanged = () => TTS.pick(); }
  function sayBtn(text, label) {
    collect(text);
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
  // Stable section keys (progress is saved by key, so adding Lab / Predict sections never shifts old progress).
  // Then add the Extra "Grammar Lab" (right after the rule) and "Predict, Then Reveal" (after the practice) from data/labs.js.
  BOOK.units.forEach((u) => u.lessons.forEach((l) => {
    l.sections.forEach((s, i) => { s._k = i; });
    const x = (BOOK.labs || {})[l.id]; if (!x) return;
    if (x.lab) { const gi = l.sections.findIndex((s) => s.type === "grammar"); l.sections.splice(gi + 1, 0, Object.assign({ type: "lab", source: "extra" }, x.lab, { _k: "lab" })); }
    if (x.predict) { let at = -1; l.sections.forEach((s, i) => { if (s.type === "activity" || s.type === "lab" || s.type === "grammar") at = i; }); l.sections.splice(at + 1, 0, Object.assign({ type: "predict", source: "extra", title: "Predict, Then Reveal" }, x.predict, { _k: "pred" })); }
  }));
  const pagesTxt = (pg) => { const a = Array.from(new Set([].concat(pg || []))); return a.length > 1 ? a[0] + "-" + a[a.length - 1] : String(a[0] || ""); };
  const units = () => BOOK.toc.map((t) => { const u = BOOK.units.find((x) => x.id === t.id); return Object.assign({}, t, u || {}, { built: !!u, lessonsTOC: t.lessons || (u ? u.lessons.map((l) => [l.skill, l.title, pagesTxt(l.pages)]) : []) }); });
  const uName = (u) => u.label || "Unit " + u.num;
  const moduleOf = (u) => (BOOK.modules || []).find((m) => m.units.indexOf(u.id) >= 0) || null;
  function allLessons() { const out = []; units().forEach((u) => { if (u.built) u.lessons.forEach((l) => out.push({ u, l })); }); return out; }
  function findLesson(id) { return allLessons().find((x) => x.l.id === id); }
  const SKILL_ICON = { Reading: "📖", Grammar: "🧩", Listening: "🎧", Speaking: "🗣️", Writing: "✍️" };
  const SKILL_AR = { Reading: "القراءة", Grammar: "القواعد", Listening: "الاستماع", Speaking: "التحدث", Writing: "الكتابة" };

  // parts of a lesson
  function lessonParts(l) {
    const parts = [{ key: "start", label: "Start", ico: "🚀" }];
    if (l.vocab && l.vocab.length) parts.push({ key: "words", label: "Words", ico: "🃏" });
    const lab = { reading: "Read", grammar: "Rule", activity: "Practice", discuss: "Talk", speak: "Speak", write: "Write", listen: "Listen", lab: "Grammar Lab", predict: "Predict" };
    const ico = { reading: "📖", grammar: "🧩", activity: "✏️", discuss: "💬", speak: "🗣️", write: "✍️", listen: "🎧", lab: "🧪", predict: "🔮" };
    const counts = {};
    l.sections.forEach((s, i) => {
      const special = s.type === "lab" || s.type === "predict";
      const base = s.source === "extra" && !special ? "Extra" : lab[s.type] || "Part";
      counts[base] = (counts[base] || 0) + 1;
      parts.push({ key: "s" + s._k, sec: i, base, label: base, ico: s.source === "extra" && !special ? "⭐" : ico[s.type] || "•" });
    });
    // number duplicate labels
    const seen = {}; parts.forEach((p) => { if (p.base && counts[p.base] > 1) { seen[p.base] = (seen[p.base] || 0) + 1; p.label = p.base + " " + seen[p.base]; } });
    if (l.game) parts.push({ key: "game", label: "Game", ico: "🎮" });
    parts.push({ key: "finish", label: "Finish", ico: "🏁" });
    parts.push({ key: "teacher", label: "Teacher", ico: "🧑‍🏫", teacher: true });
    return parts;
  }
  // progress keys of one section
  function secKeys(l, s) {
    const b = l.id + ":" + s._k, ks = [];
    if (s.items) s.items.forEach((it, ii) => ks.push(b + ":" + ii));
    if (s.type === "write") ks.push(b + ":w");
    if (s.type === "lab") ks.push(b + ":lab");
    if (s.type === "predict") ks.push(b + ":p");
    return ks;
  }
  // items that count toward progress
  function lessonItemKeys(l) {
    const keys = [];
    l.sections.forEach((s) => { keys.push.apply(keys, secKeys(l, s)); });
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
  // Stars: up to 3 per unit, earned only by doing the work (never lost for mistakes, no speed needed).
  function unitStars(u) { const p = unitPct(u); return p >= 100 ? 3 : p >= 67 ? 2 : p >= 34 ? 1 : 0; }
  function starsTotal() { return units().reduce((a, u) => a + unitStars(u), 0); }
  const starStr = (n) => "★★★".slice(0, n) + "☆☆☆".slice(0, 3 - n);

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
  function updatePointsUI() { const p = $("#pts"); if (p) p.textContent = S.points; const st = $("#stars"); if (st) st.textContent = starsTotal() + "/" + units().length * 3; }
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
    const ns = unitStars(CUR.u); S.stars = S.stars || {};
    if (ns > (S.stars[CUR.u.id] || 0)) { const un = CUR.u.num; S.stars[CUR.u.id] = ns; save(); setTimeout(() => { toast("⭐ Unit " + un + ": " + ns + " of 3 stars!"); sfx.win(); }, 1300); }
    updatePointsUI();
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
    return esc(str).replace(/\{([svaotcnqpx]):([^}]+)\}/g, (m, k, t) => '<span class="tk tk-' + k + '">' + t + "</span>");
  }
  const untoken = (s) => String(s).replace(/\{[a-z]:([^}]+)\}/g, "$1");
  // Arabic text with English inside: wrap each English run in <bdi dir="ltr"> so word order and punctuation never scramble.
  function arHTML(str) {
    const re = /[A-Za-z][A-Za-z0-9'’\-\/+ ]*[A-Za-z0-9]|[A-Za-z]/g; let out = "", last = 0, m;
    str = String(str);
    while ((m = re.exec(str))) { out += esc(str.slice(last, m.index)) + '<bdi dir="ltr">' + esc(m[0]) + "</bdi>"; last = m.index + m[0].length; }
    return out + esc(str.slice(last));
  }
  function inlineHTML(str) { // *italic*  [[underline]]
    return esc(str).replace(/\[\[(.+?)\]\]/g, '<span class="ul">$1</span>').replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/\n/g, "<br>");
  }
  const LEGEND = { s: "subject", v: "verb", a: "helping verb / modal", o: "object", t: "time / key word", c: "connector", n: "negative", q: "question word", p: "purpose", x: "ending" };

  /* ───────────── shell ───────────── */
  let CUR = null; // {u,l}
  let PART = 0;
  function applySettings() {
    const st = S.settings, b = document.body;
    b.classList.toggle("mode-teacher", st.mode === "teacher");
    b.classList.toggle("no-motion", !st.motion);
    document.documentElement.classList.toggle("big-text", st.text === 1);
    document.documentElement.classList.toggle("huge-text", st.text === 2);
    if (st.theme === "dark" || st.theme === "light") document.documentElement.setAttribute("data-theme", st.theme); else document.documentElement.removeAttribute("data-theme");
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
    body.append(h("a", { class: "toc-extra", href: "#help" }, "❓ How to use · ", h("span", { class: "ar" }, "طريقة الاستخدام")));
    let lastMod = null;
    units().forEach((u) => {
      const md = moduleOf(u); if (md && md !== lastMod) { lastMod = md; body.append(h("div", { class: "toc-module", style: { "--uc": "var(--" + md.color + ")" } }, md.extra ? md.title : "Module " + md.num + " · " + md.title)); }
      const box = h("div", { class: "toc-unit" });
      box.append(h("button", { type: "button", onclick: () => { location.hash = "#" + u.id + "l1"; closeDrawer(); } }, h("span", { class: "dot", style: { background: "var(--" + u.color + ")" } }), u.label ? u.label : "Unit " + u.num + " · " + u.title));
      u.lessonsTOC.forEach((t, i) => {
        const id = u.id + "l" + (i + 1), l = u.built ? u.lessons[i] : null;
        const a = h("a", { class: "toc-lesson" + (CUR && CUR.l.id === id ? " active" : ""), href: "#" + id },
          h("span", { class: "skill" }, t[0]), h("span", { class: "ttl" }, t[1]), h("span", { class: "pct" }, l ? lessonPct(l) + "%" : "not built"));
        box.append(a);
      });
      body.append(box);
    });
    body.append(h("hr", { style: { border: 0, borderTop: "1px solid var(--line)", margin: "12px 8px" } }));
    body.append(h("a", { class: "toc-extra", href: "#glossary" }, "🔤 " + (BOOK.glossaryTitle || "Glossary") + " (pages " + BOOK.pagesInfo.glossary + ")"));
    if (BOOK.projects) body.append(h("a", { class: "toc-extra", href: "#project" }, "🧑‍🤝‍🧑 Projects (pages " + BOOK.projects.map((x) => pagesTxt(x.pages)).join(", ") + ")"));
    else if (BOOK.pagesInfo.project) body.append(h("a", { class: "toc-extra", href: "#project" }, "🧑‍🤝‍🧑 Group Project (page " + BOOK.pagesInfo.project + ")"));
    if (BOOK.pagesInfo.writing) body.append(h("button", { class: "toc-extra", type: "button", onclick: () => { closeDrawer(); openPage(BOOK.pagesInfo.writing); } }, "✍️ Writing Reference (page " + BOOK.pagesInfo.writing + ")"));
    Object.keys(BOOK.ar || {}).forEach((uid) => { const u = units().find((x) => x.id === uid); body.append(h("a", { class: "toc-extra", href: "../ar/scan.html?set=" + BOOK.ar[uid].set }, "📷 Scan your book: " + (u ? "Unit " + u.num : uid) + " (AR)")); });
    body.append(h("a", { class: "toc-extra", href: "#search" }, "🔎 Search the book"));
    body.append(h("a", { class: "toc-extra", href: "#settings" }, "⚙️ Settings & progress"));
    const TH = { auto: "Automatic", light: "Light", dark: "Dark" };
    body.append(h("button", { class: "toc-extra", type: "button", onclick: () => { const order = ["auto", "light", "dark"]; S.settings.theme = order[(order.indexOf(S.settings.theme || "auto") + 1) % 3]; save(); applySettings(); renderDrawer(); toast("Colours: " + TH[S.settings.theme]); } }, "🌓 Colours: " + TH[S.settings.theme || "auto"]));
  }
  // coloured unit tabs on the right edge of the page (big screens): jump to any unit
  function renderSideTabs() {
    let nav = $("#unitTabs");
    if (!nav) { nav = h("nav", { id: "unitTabs", class: "side-tabs", "aria-label": "Units" }); document.body.append(nav); }
    nav.innerHTML = "";
    if (BOOK.modules) BOOK.modules.forEach((m) => { const on = CUR && m.units.indexOf(CUR.u.id) >= 0; nav.append(h("a", { href: "#" + m.units[0] + "l1", class: "side-tab" + (on ? " on" : ""), style: { "--uc": "var(--" + m.color + ")" }, title: m.extra ? m.title : "Module " + m.num + ": " + m.title, "aria-label": m.extra ? m.title : "Module " + m.num + ": " + m.title }, h("b", null, m.extra ? "📖" : "M" + m.num), h("span", null, m.title))); });
    else units().forEach((u) => nav.append(h("a", { href: "#" + u.id + "l1", class: "side-tab" + (CUR && CUR.u.id === u.id ? " on" : ""), style: { "--uc": "var(--" + u.color + ")" }, title: "Unit " + u.num + ": " + u.title, "aria-label": "Unit " + u.num + ": " + u.title }, h("b", null, String(u.num)), h("span", null, u.title))));
  }
  function openDrawer() { $("#drawer").classList.add("open"); $("#scrim").classList.add("open"); $("#drawer").removeAttribute("inert"); setTimeout(() => { const a = $(".toc-lesson.active") || $("#drawer a"); a && a.focus(); }, 50); }
  function closeDrawer() { $("#drawer").classList.remove("open"); $("#scrim").classList.remove("open"); $("#drawer").setAttribute("inert", ""); }

  function footer() {
    return h("footer", { class: "footer" }, h("b", null, BOOK.credit), h("span", null, BOOK.title + " · " + BOOK.level), h("span", null, BOOK.copyright));
  }

  /* ───────────── router ───────────── */
  function route() {
    TTS.stop(); stopRec(); stopAudio(); closeDrawer(); closePop(); endSpot();
    const hsh = (location.hash || "#home").slice(1);
    const m = hsh.match(/^(u\d+)l(\d+)$/);
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
    else if (hsh === "help" || hsh.indexOf("help-") === 0) renderHelp(main, hsh.slice(5));
    else renderHome(main);
    renderDrawer(); renderSideTabs();
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
        h("h1", { html: BOOK.heroTitle || "English <em>Pearls</em> of Kuwait" }),
        h("p", { class: "muted", style: { maxWidth: "52ch", marginTop: "6px" } }, "Read, listen, speak, write and play. Every lesson follows the book, page by page."),
        h("p", { class: "credit" }, BOOK.credit),
        h("div", { class: "stats" },
          h("div", { class: "stat" }, h("b", null, overall + "%"), h("span", null, "book progress")),
          h("div", { class: "stat" }, h("b", null, done + " / " + all.length), h("span", null, "lessons finished")),
          h("div", { class: "stat" }, h("b", null, String(S.points)), h("span", null, "points")),
          h("div", { class: "stat" }, h("b", null, starsTotal() + " / " + units().length * 3), h("span", null, "⭐ stars")),
          h("div", { class: "stat" }, h("b", null, Object.keys(S.badges).length + " / " + BADGES.length), h("span", null, "badges"))),
        h("div", { class: "row", style: { marginTop: "16px" } },
          S.lastLesson && findLesson(S.lastLesson) ? h("a", { class: "btn primary", href: "#" + S.lastLesson }, "Continue: " + findLesson(S.lastLesson).l.title, icon("right")) : h("a", { class: "btn primary", href: "#u1l1" }, "Start Unit 1", icon("right")),
          h("a", { class: "btn", href: "#search" }, icon("search"), "Search"),
          h("a", { class: "btn", href: "#help" }, "❓ How to use"))),
      h("div", { class: "book3d" },
        h("div", { class: "book3d-body" },
          h("img", { src: "img/covers/book.jpg", alt: "Cover of English Pearls of Kuwait " + BOOK.code }),
          h("div", { class: "book3d-tabs" }, BOOK.modules ? BOOK.modules.filter((m) => !m.extra).map((m) => h("a", { class: "b3tab", href: "#" + m.units[0] + "l1", style: { background: "var(--" + m.color + ")" }, title: "Module " + m.num + ": " + m.title, "aria-label": "Open Module " + m.num + ": " + m.title }, String(m.num)))
            : units().map((u) => h("a", { class: "b3tab", href: "#" + u.id + "l1", style: { background: "var(--" + u.color + ")" }, title: "Unit " + u.num + ": " + u.title, "aria-label": "Open Unit " + u.num + ": " + u.title }, String(u.num)))))));
    w.append(hero);
    if (!storageOK) w.append(h("div", { class: "notice" }, "This browser is not saving progress (private mode or blocked storage). Your work stays until you close the page."));
    if (!S.helpSeen) w.append(h("div", { class: "notice help-first" }, h("span", null, h("b", null, "New here? "), "See how the book works, step by step.", h("span", { class: "ar", style: { display: "block" } }, "أول مرة؟ شاهد طريقة استخدام الكتاب خطوة بخطوة.")),
      h("span", { class: "row" }, h("a", { class: "btn small primary", href: "#help" }, "❓ How to use"), h("button", { class: "btn small ghost", type: "button", onclick: (e) => { S.helpSeen = 1; save(); e.target.closest(".notice").remove(); } }, "Hide"))));
    const grid = h("section", { class: "units", "aria-label": "Units" });
    let lastMod = null;
    units().forEach((u) => {
      const md = moduleOf(u);
      if (md && md !== lastMod) { lastMod = md; grid.append(h("h2", { class: "mod-head", style: { "--uc": "var(--" + md.color + ")" } }, h("span", null, md.extra ? "Extra" : "Module " + md.num), md.title, S.settings.ar && md.titleAr ? h("small", { class: "ar" }, md.titleAr) : null)); }
      const pct = unitPct(u);
      const card = h("article", { class: "unit-card", style: { "--uc": "var(--" + u.color + ")" } },
        h("a", { class: "unit-cover", href: "#" + u.id + "l1", "aria-label": "Open Unit " + u.num },
          h("img", { src: "img/covers/" + u.id + ".jpg", alt: "", loading: "lazy" }),
          h("div", { class: "band" }, h("small", null, u.label ? (moduleOf(u) && moduleOf(u).extra ? "Extra reading" : "") : (BOOK.modules ? "Module " + (moduleOf(u) ? moduleOf(u).num : "") + " · Unit " + u.num : "Learning Unit " + u.num)), h("b", null, u.title))),
        h("div", { class: "unit-body" },
          h("div", { class: "row" }, h("div", { class: "bar grow", role: "progressbar", "aria-valuenow": pct, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Unit " + u.num + " progress" }, h("i", { style: { width: pct + "%", background: "var(--" + u.color + ")" } })), h("b", { class: "small" }, pct + "%"),
            h("span", { class: "ustars", title: unitStars(u) + " of 3 stars", "aria-label": unitStars(u) + " of 3 stars" }, starStr(unitStars(u)))),
          S.settings.ar ? h("p", { class: "ar muted small" }, u.titleAr) : null,
          h("div", { class: "lesson-list" }, u.lessonsTOC.map((t, i) => {
            const l = u.built ? u.lessons[i] : null, p = l ? lessonPct(l) : 0;
            return h("a", { class: "lesson-link", href: "#" + u.id + "l" + (i + 1) },
              h("span", { class: "n" + (p >= 100 ? " full" : "") }, p >= 100 ? "✓" : String(i + 1)),
              h("span", null, t[1], h("span", { class: "meta" }, SKILL_ICON[t[0]] + " " + t[0] + " · p. " + String(t[2]).replace("-", "–") + (l ? "" : " · not built yet"))),
              l ? h("span", { class: "ring", style: { "--p": p }, "data-v": p + "%" }) : h("span", { class: "tag todo" }, "soon"));
          }))));
      grid.append(card);
    });
    w.append(grid);
    // star passport
    w.append(h("section", { class: "card" }, h("div", { class: "sec-head" }, h("h2", null, "⭐ My star passport"), h("span", { class: "muted small" }, "1 star = a third of the unit · 3 stars = unit complete · mistakes never take stars away")),
      h("div", { class: "passport" }, units().map((u) => h("a", { class: "stamp", href: "#" + u.id + "l1", style: { "--uc": "var(--" + u.color + ")" } }, h("small", null, uName(u)), h("b", null, u.title), h("span", { class: "ustars", "aria-label": unitStars(u) + " of 3 stars" }, starStr(unitStars(u))))))));
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
      h("nav", { class: "crumbs", "aria-label": "Breadcrumb" }, h("a", { href: "#home" }, "Home"), "›", h("span", null, (u.label ? u.label : "Unit " + u.num + ": " + u.title)), "›", h("span", null, "Lesson " + l.num)),
      h("div", { class: "unit-stripe" }),
      h("div", { class: "row", style: { alignItems: "flex-start" } },
        h("div", { class: "grow" },
          h("div", { class: "row", style: { marginBottom: "6px" } }, h("span", { class: "tag book" }, SKILL_ICON[l.skill] + " " + l.skill), h("span", { class: "tag page" }, "📄 Book " + pagesTxt), S.settings.ar ? h("span", { class: "tag ar" }, SKILL_AR[l.skill]) : null),
          h("h1", null, l.title)),
        h("span", { class: "ring", id: "lessonPct", style: { "--p": pct, width: "54px", height: "54px" }, "data-v": pct + "%", title: "Lesson progress" })),
      h("div", { class: "row" }, h("button", { class: "btn small", onclick: () => openPage(l.pages[0]) }, icon("book"), "Open book " + pagesTxt),
        h("a", { class: "btn small ghost", href: "#help-" + helpTopic(visible[PART], l), title: "How to use this step" }, "❓ How to use"))));
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
    if (TURN) { host.classList.add(TURN > 0 ? "turn-next" : "turn-prev"); TURN = 0; }
    // Teacher mode: show one activity alone, big, on the class screen
    if (S.settings.mode === "teacher") Array.prototype.forEach.call(host.children, (c) => { if (!c.classList.contains("card")) return;
      const b = h("button", { class: "btn small spot-btn", type: "button", onclick: () => (c.classList.contains("spot") ? endSpot() : startSpot(c, b)) }, "⛶ Show on board");
      c.insertBefore(b, c.firstChild); });
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
  let TURN = 0, SPOT = null;
  function startSpot(c, b) { endSpot(); SPOT = { c, b }; c.classList.add("spot"); document.body.classList.add("spotting"); b.textContent = "✕ Close board view"; c.scrollTop = 0; b.focus(); }
  function endSpot() { if (!SPOT) return; SPOT.c.classList.remove("spot"); SPOT.b.textContent = "⛶ Show on board"; document.body.classList.remove("spotting"); const c = SPOT.c; SPOT = null; c.scrollIntoView({ block: "start" }); }
  function stepBy(d) {
    if (!CUR) return;
    const visible = lessonParts(CUR.l).filter((p) => !p.teacher || S.settings.mode === "teacher");
    const i = PART + d;
    if (i >= 0 && i < visible.length) { goPart(i); return; }
    const nb = neighbourLesson(d); if (nb) { PART = 0; if (d < 0) PENDING_PART = lessonParts(nb.l).filter((p) => !p.teacher || S.settings.mode === "teacher").length - 1; TURN = d; location.hash = "#" + nb.l.id; }
  }
  function goPart(i) { TTS.stop(); stopRec(); stopAudio(); closePop(); endSpot(); TURN = i > PART ? 1 : i < PART ? -1 : 0; if (TURN) sfx.page(); PART = i; const main = $("#main"); main.innerHTML = ""; renderLesson(main); const pw = $(".parts-wrap"); if (pw) window.scrollTo({ top: Math.max(0, pw.offsetTop - 70), behavior: "auto" }); }
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
    const R = { reading: renderReading, grammar: renderGrammar, activity: renderActivity, discuss: renderDiscuss, speak: renderSpeak, write: renderWrite, listen: renderListen, lab: renderLab, predict: renderPredict }[s.type];
    if (R) R(card, s, s._k, l); else card.append(h("p", null, "Unknown section."));
    if (S.settings.mode === "teacher" && s.items && s.items.length) card.append(teacherAnswers(s, s._k, l));
  }

  /* START */
  function renderStart(host, l, u) {
    const c = h("section", { class: "card stack" });
    c.append(h("div", { class: "sec-head" }, h("h2", null, "Today’s goals"), h("span", { class: "tag" }, SKILL_ICON[l.skill] + " " + l.skill)));
    c.append(h("ul", { class: "goals" }, l.goals.map((g, i) => h("li", null, h("span", null, g, S.settings.ar && l.goalsAr && l.goalsAr[i] ? h("span", { class: "ar muted", style: { display: "block" } }, l.goalsAr[i]) : null)))));
    c.append(h("p", { class: "cando" }, l.canDo.join(" ")));
    if (l.linkers && l.linkers.length) c.append(h("div", { class: "stack" }, h("h4", null, "Linkers Bank"), h("div", { class: "bank" }, l.linkers.map((x) => h("span", { class: "chip", style: { cursor: "default" } }, x)))));
    host.append(c);
    const ar = BOOK.ar && u && BOOK.ar[u.id];
    if (ar) host.append(h("section", { class: "card stack ar-card" },
      h("div", { class: "sec-head" }, h("h2", null, "📷 Bring your book to life"), h("span", { class: "tag extra" }, "⭐ Extra · AR")),
      h("p", null, "At home, open your printed book at pages " + ar.pages + " and point your phone at the page. It opens the lesson, reads the page to you and shows its words in 3D."),
      S.settings.ar ? h("p", { class: "ar muted" }, "في البيت: افتح كتابك المطبوع ووجّه كاميرا الجوال نحو الصفحة، فيفتح لك الدرس ويقرأ الصفحة وتظهر كلماتها بشكل ثلاثي الأبعاد.") : null,
      h("div", { class: "row" },
        h("a", { class: "btn primary", href: "../ar/scan.html?set=" + ar.set }, "📷 Scan your book page"),
        h("a", { class: "btn", href: "../ar/words.html?set=" + ar.set }, "🧊 Words in 3D"))));
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
      const turn = () => { f.classList.toggle("flipped"); if (f.classList.contains("flipped")) { S.flips++; if (S.flips >= 20) award("cards"); save(); } sfx.tap(); };
      const hitFront = h("button", { class: "flip-hit", type: "button", "aria-label": "Turn card: " + v.w, onclick: turn });
      const hitBack = h("button", { class: "flip-hit", type: "button", "aria-label": "Turn card back: " + v.w, onclick: turn });
      const front = h("div", { class: "face front" }, h("div", { class: "big-emoji", "aria-hidden": "true" }, v.emoji || "🔤"), h("div", { class: "word" }, v.w), h("div", { class: "pos" }, v.pos || ""), v.ipa ? h("div", { class: "ipa" }, v.ipa) : null,
        h("div", { class: "actions" }, sayBtn(v.w, "Listen to the word")), h("div", { class: "tap" }, "Tap to turn ↻"));
      const back = h("div", { class: "face back" }, h("div", { class: "row", style: { justifyContent: "space-between", flexWrap: "nowrap" } }, h("b", null, v.w), h("span", { "aria-hidden": "true" }, v.emoji || "")),
        h("p", { class: "ex" }, v.ex), v.exFromBook ? h("span", { class: "small muted" }, "Sentence from the book") : null, h("p", { class: "def" }, v.def),
        S.settings.ar && v.ar ? h("p", { class: "ar-mean" }, v.ar) : null,
        h("div", { class: "actions" }, sayBtn(v.w, "Listen to the word"), sayBtn(v.ex, "Listen to the sentence")));
      front.prepend(hitFront); back.prepend(hitBack);
      f.append(h("div", { class: "flip-inner" }, front, back));
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
    paraObjs.forEach((p) => collect(p.plainTxt));
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
      if (!TTS.ok && !VOICE_IDS.size) { toast("Speech is not available in this browser."); return; }
      if (!playing) { playing = true; paused = false; stopB.disabled = false; playB.lastChild.textContent = "Pause"; playB.firstChild.replaceWith(icon("pause")); playPara(0); }
      else if (!paused) { paused = true; TTS.pause(); playB.lastChild.textContent = "Resume"; playB.firstChild.replaceWith(icon("play")); }
      else { paused = false; TTS.resume(); playB.lastChild.textContent = "Pause"; playB.firstChild.replaceWith(icon("pause")); }
    };
    stopB.onclick = stop;
    paraObjs.forEach((p, i) => { p.box.addEventListener("dblclick", () => { if (!TTS.ok && !VOICE_IDS.size) return; playing = true; paused = false; stopB.disabled = false; playB.lastChild.textContent = "Pause"; playPara(i); }); });
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
        list.append(h("div", { class: "gstep" }, h("h4", null, h("span", { class: "num" }, String(i + 1)), h("span", { class: "grow" }, st.title), st.source === "extra" ? h("span", { class: "tag extra" }, "⭐ Extra help (not in the book)") : null),
          h("div", { class: "row", style: { flexWrap: "nowrap", alignItems: "flex-start" } }, h("p", { class: "grow" }, st.text), sayBtn(st.text)),
          S.settings.ar && st.textAr ? h("p", { class: "ar muted", html: arHTML(st.textAr) }) : null,
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

  /* GRAMMAR LAB (Extra Practice): buttons and a slider change a pop-up paper sentence live */
  function labTiles(str) {
    const out = [], re = /\{([svaotcnqpx]):([^}]+)\}/g; let last = 0, m;
    const words = (t) => t.split(/\s+/).filter(Boolean).forEach((w) => out.push({ k: "w", t: w, glue: /^[.,?!]+$/.test(w) }));
    while ((m = re.exec(str))) { words(str.slice(last, m.index)); out.push({ k: m[1], t: m[2], glue: m.index > 0 && !/\s/.test(str[m.index - 1]) }); last = m.index + m[0].length; }
    words(str.slice(last));
    return out;
  }
  function tileRow(str, prev) {
    const row = h("div", { class: "lab-sentence" }); const tiles = labTiles(str);
    tiles.forEach((t, i) => { const changed = prev && (!prev[i] || prev[i].t !== t.t || prev[i].k !== t.k); row.append(h("span", { class: "tile tile-" + t.k + (t.glue ? " glue" : "") + (changed ? " rise" : "") }, t.t)); });
    return { row, tiles };
  }
  function renderLab(card, s, si, l) {
    const key = l.id + ":" + si + ":lab";
    card.append(secHead(s.title, s));
    card.append(h("span", { class: "stage" }, "Explore the rule · tap, slide and watch"));
    card.append(instrBlock(s.intro || "Tap the buttons. Watch the sentence change.", s.introAr || "اضغط الأزرار وشاهد كيف تتغيّر الجملة."));
    const optsOf = (c) => c.options.map((o) => (typeof o === "string" ? { v: o, t: o } : o));
    const st = {}; s.controls.forEach((c) => { st[c.id] = c.start != null ? c.start : optsOf(c)[0].v; });
    const badge = h("div", { class: "lab-badge", hidden: true });
    const fromBox = h("div", { class: "lab-from", hidden: true });
    const sentHost = h("div");
    const rule = h("div", { class: "lab-rule" });
    const note = h("p", { class: "lab-note" }), noteAr = h("p", { class: "ar muted lab-note-ar" });
    let current = "", prev = null, changes = 0;
    const listen = h("button", { class: "btn small", type: "button", onclick: () => { TTS.stop(); TTS.speak(current); } }, icon("speak"), "Listen");
    const dice = h("button", { class: "btn small ghost", type: "button", onclick: () => { s.controls.forEach((c) => { const o = optsOf(c); st[c.id] = o[Math.floor(Math.random() * o.length)].v; }); changed(); } }, "🎲 Surprise me");
    const doneNote = h("span", { class: "small muted" });
    const stageBox = h("div", { class: "lab-stage" }, badge, fromBox, sentHost, rule, note, noteAr);
    const ctrlBox = h("div", { class: "lab-ctrls" });
    const refs = [];
    s.controls.forEach((c) => {
      const o = optsOf(c); const grp = h("div", { class: "lab-ctrl", role: "group", "aria-label": c.label }, h("span", { class: "lab-ctrl-label" }, c.label));
      const ref = { c, grp, o, btns: [] };
      if (c.kind === "slider") {
        ref.rng = h("input", { type: "range", min: 0, max: o.length - 1, step: 1, value: 0, "aria-label": c.label, class: "lab-range" });
        ref.rng.addEventListener("input", () => { st[c.id] = o[+ref.rng.value].v; changed(); });
        ref.btns = o.map((x) => h("button", { type: "button", class: "lab-tick", onclick: () => { st[c.id] = x.v; changed(); } }, x.t));
        grp.append(ref.rng, h("div", { class: "lab-ticks" }, ref.btns));
      } else {
        ref.btns = o.map((x) => h("button", { type: "button", class: "chip lab-chip", "aria-pressed": "false", onclick: () => { st[c.id] = x.v; changed(); } }, x.t));
        grp.append(h("div", { class: "lab-chips" }, ref.btns));
      }
      refs.push(ref); ctrlBox.append(grp);
    });
    function draw() {
      refs.forEach((r) => {
        r.grp.hidden = !!(r.c.show && !r.c.show(st));
        const idx = r.o.findIndex((x) => x.v === st[r.c.id]);
        r.btns.forEach((b, i) => { if (r.rng) b.classList.toggle("on", i === idx); else b.setAttribute("aria-pressed", i === idx ? "true" : "false"); });
        if (r.rng) { r.rng.value = idx; r.rng.setAttribute("aria-valuetext", r.o[idx].t); }
      });
      const out = s.build(st);
      badge.hidden = !out.badge; badge.textContent = out.badge || ""; badge.className = "lab-badge" + (out.badgeKind ? " " + out.badgeKind : "");
      fromBox.hidden = !out.from; fromBox.innerHTML = "";
      if (out.from) fromBox.append(h("span", { class: "lab-from-label" }, out.fromLabel || "Before"), tileRow(out.from, null).row, h("div", { class: "lab-arrow", "aria-hidden": "true" }, "⬇"));
      const tr = tileRow(out.s, prev); prev = tr.tiles; sentHost.innerHTML = ""; sentHost.append(tr.row);
      current = untoken(out.s);
      rule.innerHTML = out.rule ? tokensHTML(out.rule) : ""; rule.hidden = !out.rule;
      note.textContent = out.note || ""; note.hidden = !out.note;
      noteAr.innerHTML = S.settings.ar && out.noteAr ? arHTML(out.noteAr) : ""; noteAr.hidden = !(S.settings.ar && out.noteAr);
      // keep the sentence in view while tapping (phones), only when it is short enough to leave room for the buttons
      setTimeout(() => { stageBox.classList.toggle("stick", stageBox.offsetHeight < window.innerHeight * 0.42); }, 0);
    }
    function changed() {
      sfx.tap(); draw(); changes++;
      if (changes === 3 && !(S.items[key] && S.items[key].done)) { markItem(key, false, { open: true }); doneNote.textContent = "✓ Lab explored. Keep playing!"; }
    }
    draw();
    if (S.items[key] && S.items[key].done) doneNote.textContent = "✓ Lab explored";
    card.append(stageBox, h("div", { class: "row" }, listen, dice, doneNote), ctrlBox);
  }

  /* PREDICT, THEN REVEAL (Extra Practice): choose first, then lift the paper flap */
  function renderPredict(card, s, si, l) {
    const key = l.id + ":" + si + ":p";
    card.append(secHead(s.title || "Predict, Then Reveal", s));
    card.append(h("span", { class: "stage" }, "Common mistake challenge"));
    card.append(instrBlock("Predict: choose your answer. Then lift the paper flap to check.", "توقّع: اختر إجابتك، ثم ارفع الورقة لترى الجواب."));
    if (s.mistake) card.append(h("p", { class: "muted small" }, "🧠 " + s.mistake));
    card.append(h("p", { class: "pr-q", html: inlineHTML(s.q) }));
    const teacher = S.settings.mode === "teacher";
    let choice = null, opened = false;
    const btns = s.options.map((o, i) => h("button", { type: "button", class: "pr-opt", "aria-pressed": "false", onclick: () => { if (opened) return; choice = i; btns.forEach((b, j) => b.setAttribute("aria-pressed", j === i ? "true" : "false")); flap.disabled = false; flapTxt.textContent = "Lift the flap!"; sfx.tap(); } },
      h("span", { class: "pr-letter" }, "ABCD"[i]), h("span", { html: tokensHTML(o) })));
    const result = h("p", { class: "pr-result" });
    const under = h("div", { class: "pr-under", style: { visibility: "hidden" } }, result,
      h("div", { class: "ex-line" }, h("span", { class: "s" }, h("b", null, "Answer: "), h("span", { html: tokensHTML(s.reveal || s.options[s.answer]) })), sayBtn(untoken(s.reveal || s.options[s.answer]))),
      h("p", null, "💡 ", s.why),
      S.settings.ar && s.whyAr ? h("p", { class: "ar muted", html: arHTML(s.whyAr) }) : null);
    const flapTxt = h("span", null, teacher ? "Teacher: lift the flap any time" : "Choose A, B" + (s.options.length > 2 ? " or C" : "") + " first");
    const flap = h("button", { type: "button", class: "pr-flap", disabled: teacher ? null : true, "aria-label": "Lift the paper flap to see the answer" }, h("span", { class: "pr-flap-ico", "aria-hidden": "true" }, "📜"), flapTxt);
    const wrap = h("div", { class: "pr-flapwrap" }, under, flap);
    const again = h("button", { class: "btn small ghost", type: "button", hidden: true }, "↺ Close the flap and try again");
    flap.onclick = () => {
      if (opened || (choice === null && !teacher)) return;
      opened = true; wrap.classList.add("open"); under.style.visibility = "visible"; flap.setAttribute("tabindex", "-1"); again.hidden = false;
      sfx.page();
      if (choice !== null) {
        const ok = choice === s.answer;
        result.className = "pr-result " + (ok ? "good" : "try");
        result.textContent = ok ? "✓ Your prediction was right! " + pick(praise) : "✗ Not this time, and that is OK. Mistakes help us learn!";
        if (ok) { markItem(key, true); sfx.good(); } else markItem(key, false, { open: true });
      } else result.textContent = "";
      btns.forEach((b, i) => { if (i === s.answer) b.classList.add("right"); else if (i === choice) b.classList.add("wrong"); });
    };
    again.onclick = () => { opened = false; choice = null; wrap.classList.remove("open"); under.style.visibility = "hidden"; flap.removeAttribute("tabindex"); flap.disabled = !teacher; flapTxt.textContent = teacher ? "Teacher: lift the flap any time" : "Choose first"; again.hidden = true; btns.forEach((b) => { b.classList.remove("right", "wrong"); b.setAttribute("aria-pressed", "false"); }); };
    card.append(h("div", { class: "pr-opts" }, btns), wrap, h("div", { class: "row" }, again));
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
        h("span", null, "Your teacher will play it in class." + (s.track ? " Book recording: track " + s.track + "." : "")),
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
    lines.forEach((d) => collect(d.who + ". " + d.text));
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
      if (!TTS.ok && !VOICE_IDS.size) { toast("Speech is not available in this browser."); return; }
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
    l.sections.forEach((s, si) => { const ks = secKeys(l, s); const left = ks.filter((k) => !(S.items[k] && S.items[k].done)).length; if (left) { const pi = parts.findIndex((p) => p.sec === si); todo.push({ label: parts[pi].label + ": " + s.title, pi }); } });
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
    l.sections.forEach((s, si) => { if (s.type === "predict") ans.append(h("h4", { style: { marginTop: "10px" } }, "🔮 Predict, Then Reveal"), h("p", null, h("span", { html: inlineHTML(s.q) }), " — ", h("span", { class: "t-ans", html: tokensHTML(s.options[s.answer]) })));
      if (!s.items || !s.items.length) return; ans.append(h("h4", { style: { marginTop: "10px" } }, (s.source === "extra" ? "⭐ " : "") + s.title + (s.page ? " (p. " + s.page + ")" : "")), h("ol", null, s.items.map((it) => h("li", null, h("span", { html: inlineHTML(plain(it.q || "")) }), " — ", h("span", { class: "t-ans" }, it.needsAudio || s.needsAudio ? "check with the book recording" : answerText(it)))))); });
    c.append(ans);
    c.append(h("p", { class: "small muted" }, "The book prints no answer key. Answers marked “from the text” were taken from the book’s own texts. Listening answers depend on the book recording and are not given here."));
    if (u.outcomes) c.append(h("details", null, h("summary", null, h("b", null, uName(u) + " learning outcomes (book p. " + (u.outcomesPage || (u.pages ? u.pages[0] + 2 : "")) + ")")), Object.entries(u.outcomes).map(([k, v]) => h("div", null, h("h4", { style: { marginTop: "8px", textTransform: "capitalize" } }, k), h("ul", null, v.map((x) => h("li", null, x)))))));
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
      (BOOK.glossary || []).filter((e) => !q || e.w.toLowerCase().includes(q) || (e.def || "").toLowerCase().includes(q)).forEach((e) => {
        const v = arMap[e.w.toLowerCase()];
        list.append(h("div", { class: "gl-item" }, h("div", { class: "row" }, h("b", { style: { fontSize: "1.1rem" } }, (v && v.emoji ? v.emoji + " " : "") + e.w), sayBtn(e.w)), h("span", { class: "small muted" }, [e.ipa, e.pos, e.unit ? "Unit " + e.unit : null, e.page ? "p. " + e.page : null].filter(Boolean).join(" · ")), e.def ? h("span", null, e.def, e.defExtra ? h("span", { class: "small muted" }, " (simple meaning – not in the book)") : null) : null, S.settings.ar && v && v.ar ? h("span", { class: "ar", style: { color: "var(--brand)", fontWeight: 700 } }, v.ar) : null));
      });
      if (!list.children.length) list.append(h("p", { class: "muted" }, "No word found."));
    };
    inp.oninput = draw;
    w.append(h("section", { class: "card stack" }, h("div", { class: "sec-head" }, h("h1", null, BOOK.glossaryTitle || "Glossary"), h("button", { class: "tag page", type: "button", onclick: () => openPage(parseInt(BOOK.pagesInfo.glossary, 10)) }, "📄 pp. " + BOOK.pagesInfo.glossary)),
      h("p", { class: "muted" }, BOOK.glossaryNote || "All " + (BOOK.glossary || []).length + " words from the book’s glossary, with the book’s pronunciation and meaning."), inp, list,
      BOOK.pagesInfo.irregular ? h("p", { class: "small muted" }, "Irregular verbs (pages " + BOOK.pagesInfo.irregular + "): ", h("button", { class: "btn small", type: "button", onclick: () => openPage(parseInt(BOOK.pagesInfo.irregular, 10)) }, icon("book"), "Open the book pages")) : null));
    w.append(footer()); main.append(w); draw();
  }

  /* PROJECTS from data (Grade 8: several projects, texts from the book + a planner) */
  function renderProjects(main) {
    const w = h("div", { class: "wrap" });
    const field = (label, k, rows) => { const id = "pjf-" + k; const ta = h("textarea", { class: "txt", id, rows: rows || 2 }); ta.value = S.drafts["pjf:" + k] || ""; ta.oninput = () => { S.drafts["pjf:" + k] = ta.value; save(); }; return h("div", null, h("label", { for: id, style: { fontWeight: 700 } }, label), ta); };
    const checks = (arr, key) => h("ul", { class: "checks" }, arr.map((x, i) => { const id = "pj-" + key + i; const st = S.drafts["pj:" + key] || []; const inp = h("input", { type: "checkbox", id, checked: st.includes(i) ? true : null }); inp.onchange = () => { const a = S.drafts["pj:" + key] || (S.drafts["pj:" + key] = []); if (inp.checked) a.push(i); else a.splice(a.indexOf(i), 1); save(); }; return h("li", null, h("label", { for: id }, inp, h("span", null, x))); }));
    w.append(h("section", { class: "card stack" }, h("h1", null, "Projects"), h("p", { class: "muted" }, "The book’s projects, with space to plan. Your notes are saved on this device.")));
    BOOK.projects.forEach((pj) => {
      const c = h("section", { class: "card stack" });
      c.append(h("div", { class: "sec-head" }, h("h2", null, pj.title), h("div", { class: "row" }, h("span", { class: "tag book" }, "From the book"), pj.pages.map((pg) => h("button", { class: "tag page", type: "button", onclick: () => openPage(pg) }, "📄 p. " + pg)))));
      if (pj.note) c.append(h("p", null, h("b", null, pj.note)));
      (pj.intro || []).forEach((t) => c.append(h("div", { class: "row", style: { flexWrap: "nowrap", alignItems: "flex-start" } }, h("p", { class: "grow" }, t), sayBtn(t))));
      if (pj.points) c.append(h("ul", null, pj.points.map((t) => h("li", null, t))));
      if (pj.tasks) c.append(h("h3", null, "Steps (tick when done)"), checks(pj.tasks, pj.id));
      if (pj.table) {
        const tb = h("table", { class: "bt" }, h("thead", null, h("tr", null, pj.table.head.map((x) => h("th", null, x)))));
        const body = h("tbody", null, h("tr", null, pj.table.example.map((x) => h("td", null, h("i", null, x)))));
        for (let r = 0; r < pj.table.rows; r++) body.append(h("tr", null, pj.table.head.map((x, ci) => { const k = "pjt:" + pj.id + ":" + r + ":" + ci; const ta = h("textarea", { class: "txt", rows: 1, "aria-label": x + " " + (r + 1) }); ta.value = S.drafts[k] || ""; ta.oninput = () => { S.drafts[k] = ta.value; save(); }; return h("td", null, ta); })));
        tb.append(body); c.append(h("h3", null, "Our programme"), h("div", { class: "tablewrap" }, tb));
      }
      (pj.fields || []).forEach((f, i) => c.append(field(f[0], pj.id + i, f[1])));
      w.append(c);
    });
    w.append(footer()); main.append(w);
  }

  /* PROJECT (p73) */
  function renderProject(main) {
    if (BOOK.projects) return renderProjects(main);
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
        const body = [s.title, s.instructions || "", s.intro || "", s.q || "", (s.options || []).join(" "), s.why || "", (s.paras || []).join(" "), (s.blocks || []).map((b) => b.paras.join(" ")).join(" "), (s.items || []).map((it) => it.q || "").join(" "), (s.steps || []).map((x) => x.title + " " + x.text + " " + (x.examples || []).join(" ")).join(" ")].join(" ");
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
    const themeSel = h("select", { class: "txt", id: "set-theme", style: { maxWidth: "240px" } }, [["auto", "Automatic (like the device)"], ["light", "Light"], ["dark", "Dark"]].map(([v, t]) => h("option", { value: v, selected: (st.theme || "auto") === v ? true : null }, t)));
    themeSel.onchange = () => { st.theme = themeSel.value; save(); applySettings(); };
    const voiceSel = h("select", { class: "txt", id: "set-voice", style: { maxWidth: "320px" } }, [["natural", "Natural voice (George, British) — recommended"], ["device", "This device’s own voice"]].map(([v, t]) => h("option", { value: v, selected: (st.voice || "natural") === v ? true : null }, t)));
    voiceSel.onchange = () => { st.voice = voiceSel.value; save(); TTS.stop(); TTS.speak("Hello! This is the voice that reads the book."); };
    w.append(h("section", { class: "card stack" }, h("h1", null, "Settings & progress"),
      h("ul", { class: "checks" }, toggle("Arabic help (عربي)", "ar", "Show Arabic meanings and instructions."), toggle("Sounds", "sound", "Short sounds for right and wrong answers."), toggle("Animations", "motion", "Card flips and gentle movement."), toggle("Game timer", "timer", "Show a stopwatch in games. There is no penalty.")),
      h("div", null, h("label", { for: "set-size", style: { fontWeight: 700, display: "block" } }, "Text size"), sizeSel),
      h("div", null, h("label", { for: "set-theme", style: { fontWeight: 700, display: "block" } }, "Colours (dark mode)"), themeSel),
      VOICE_IDS.size ? h("div", null, h("label", { for: "set-voice", style: { fontWeight: 700, display: "block" } }, "Reading voice"), voiceSel, h("p", { class: "small muted", style: { margin: "4px 0 0" } }, "Both are generated voices, not the book’s recordings. The natural voice was made with an AI voice (Kokoro) and works without internet once heard.")) : null,
      h("div", { class: "stack" }, h("h3", null, "Progress on this device"), h("p", { class: "muted" }, "Progress is saved in this browser only. No account is needed. Another device or browser starts fresh."),
        h("p", null, "Points: ", h("b", null, String(S.points)), " · Badges: ", h("b", null, Object.keys(S.badges).length + " / " + BADGES.length), " · Answers saved: ", h("b", null, String(Object.keys(S.items).length))),
        h("div", { class: "row" }, h("button", { class: "btn", type: "button", onclick: () => { confirmBox.hidden = false; } }, "Reset my progress")), confirmBox),
      h("div", { class: "stack" }, h("h3", null, "What works where"), h("ul", { style: { margin: 0, paddingLeft: "20px", display: "grid", gap: "4px" } },
        h("li", null, VOICE_IDS.size ? "Read-aloud uses a natural AI voice (George, British English) recorded for every word, sentence and text in the book. It is a generated voice, not the book recording. Anything new (like your own sentences) uses the device’s voice." : "Read-aloud uses your device’s built-in English voice: " + (TTS.ok ? "available on this device ✓" : "not available on this device ✗") + ". Word highlighting works only where the browser reports word positions (Chrome, Edge, Safari)."),
        h("li", null, "The book’s own listening recordings play inside the listening lessons. Extra listening activities use the device’s generated voice and say so."),
        h("li", null, "Move between lesson steps with the arrow keys ← → or by swiping left / right."),
        h("li", null, "Stars: up to 3 per unit for the work you finish. Mistakes never take stars or points away."),
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

  /* ───────────── HOW TO USE (help guide, Arabic, for students, parents and teachers) ───────────── */
  // Pictures: docs/help/img (tools/help-shots.js, taken from the Grade 7 book; all books work the same way)
  const EN = (t) => '<b dir="ltr" class="en">' + t + "</b>";
  const GUIDE = [
    { who: "s", id: "start", ico: "🏠", t: "ابدأ من هنا", img: "home", steps: [
      "افتح كتاب صفّك. صفحة " + EN("All books") + " فيها كتب الصفوف.",
      "أول مرة اضغط " + EN("Start Unit 1") + ". بعدها يظهر لك " + EN("Continue") + " لتكمل من آخر درس فتحته.",
      "في الأعلى ترى نسبة إنجازك في الكتاب، ونقاطك 💎 ونجومك ⭐.",
      "الألسنة الملوّنة على غلاف الكتاب تفتح كل وحدة مباشرة."] },
    { who: "s", id: "contents", ico: "☰", t: "قائمة المحتويات", img: "contents", steps: [
      "اضغط ☰ " + EN("Contents") + " في أعلى الشاشة.",
      "تظهر كل الوحدات والدروس، وبجانب كل درس نسبة ما أنجزته منه.",
      "في أعلى القائمة " + EN("All books") + " للانتقال لكتاب صف آخر، وفي آخرها: الكلمات المهمة، والبحث، والإعدادات، وطريقة الاستخدام."] },
    { who: "s", id: "lesson", ico: "🚀", t: "خطوات الدرس", img: "lesson", steps: [
      "كل درس مقسّم لخطوات في الشريط أعلى الدرس، من " + EN("Start") + " إلى " + EN("Finish"),
      "انتقل بالزر " + EN("Next") + " أسفل الصفحة، أو اسحب الشاشة يمينًا ويسارًا، أو اضغط أي خطوة في الشريط.",
      "العلامة ✓ على الخطوة تعني أنك فتحتها.",
      EN("Open book pages") + " و" + EN("📄 p.") + " يعرضان صفحة الكتاب الأصلية.",
      EN("From the book") + " تعني أن النشاط من الكتاب. " + EN("⭐ Extra Practice") + " تدريب إضافي ليس في الكتاب."] },
    { who: "s", id: "words", ico: "🃏", t: "الكلمات الجديدة", en: "Words", img: "words", steps: [
      "اضغط البطاقة لتقلبها، فترى معنى الكلمة وجملة فيها.",
      "زر 🔊 يقرأ الكلمة والجملة بصوت واضح."] },
    { who: "s", id: "read", ico: "📖", t: "القراءة", en: "Read", img: "readaloud", img2: "read", steps: [
      EN("Read aloud") + " يقرأ النص كاملًا ويلوّن الكلمة التي يقرؤها. غيّر السرعة من " + EN("Speed"),
      "اضغط أي كلمة زرقاء لترى معناها وتسمع نطقها، و" + EN("Show Arabic meaning") + " لمعناها بالعربي.",
      "اضغط مرتين على أي فقرة ليقرأها وحدها."] },
    { who: "s", id: "listen", ico: "🎧", t: "الاستماع", en: "Listen", img: "listen", steps: [
      EN("Play") + " يشغّل تسجيل الكتاب، و" + EN("5 s") + " يرجع خمس ثوانٍ، ويمكن تغيير السرعة.",
      "إذا لم يكن تسجيل الكتاب متوفرًا، يُكتب ذلك بوضوح، ويُستخدم صوت مولَّد مع التنبيه أنه ليس تسجيل الكتاب.",
      "أجب عن الأسئلة تحت المشغّل."] },
    { who: "s", id: "rule", ico: "🧩", t: "القاعدة", en: "Rule", img: "rule", steps: [
      "القاعدة مقسّمة لخطوات صغيرة: اضغط " + EN("Next step") + "، أو " + EN("Show all steps") + " لعرضها كلها.",
      "كل لون يدل على جزء من الجملة (الفاعل، الفعل، كلمة الزمن…)، ودليل الألوان فوق الأمثلة.",
      EN("Worked example") + " مثال محلول خطوة بخطوة قبل أن تحل وحدك."] },
    { who: "s", id: "lab", ico: "🧪", t: "مختبر القواعد", en: "Grammar Lab", img: "lab", steps: [
      "غيّر الفاعل أو الزمن أو نوع الجملة من الأزرار، وشاهد الجملة تتغيّر أمامك.",
      EN("Surprise me") + " يختار جملة جديدة، و" + EN("Listen") + " يقرؤها لك.",
      "المختبر تدريب إضافي يساعدك تفهم القاعدة، وليس من الكتاب."] },
    { who: "s", id: "practice", ico: "✏️", t: "التمارين", en: "Practice", img: "practice", steps: [
      "اختر الإجابة أو اكتبها، ثم اضغط " + EN("Check"),
      "الإجابة الصحيحة تظهر بالأخضر مع سببها. الخطأ لا يخصم شيئًا، حاول مرة أخرى.",
      EN("Help") + " و" + EN("Hint") + " يساعدانك قبل الإجابة.",
      "التمارين تبدأ بمساعدة " + EN("Guided practice") + " ثم تحلّ وحدك " + EN("On your own")] },
    { who: "s", id: "predict", ico: "🔮", t: "توقّع ثم اكشف", en: "Predict", img: "predict", steps: [
      "اختر " + EN("A") + " أو " + EN("B") + " أولًا، ثم ارفع الورقة لترى الإجابة.",
      "تعرف بعدها الخطأ الشائع ولماذا يقع فيه الطلاب."] },
    { who: "s", id: "speak", ico: "🗣️", t: "المحادثة", en: "Speak", img: "speak", steps: [
      "تدرّب مع زميلك: 🔊 يقرأ السؤال، و" + EN("Your turn") + " يعني دورك لتتكلم.",
      EN("Record") + " يسجّل صوتك لتسمعه. يطلب الجوال السماح باستخدام الميكروفون، والتسجيل يبقى على جهازك.",
      "الكتاب لا يصحّح النطق آليًا. اسمع تسجيلك واطلب رأي زميلك أو معلمك."] },
    { who: "s", id: "write", ico: "✍️", t: "الكتابة", en: "Write", img: "write", steps: [
      "اكتب في المربع. اضغط أي كلمة في " + EN("Word bank") + " لتضيفها لكتابتك.",
      "كتابتك تُحفظ تلقائيًا على جهازك."] },
    { who: "s", id: "game", ico: "🎮", t: "اللعبة", en: "Game", img: "game", steps: [
      "لعبة سريعة تراجع فيها الدرس، ولا عقاب فيها على الخطأ.",
      "المؤقت " + EN("Timer") + " اختياري، تشغّله من الإعدادات."] },
    { who: "s", id: "finish", ico: "🏁", t: "نهاية الدرس والنجوم", en: "Finish", img: "finish", steps: [
      "ترى نسبة ما أنجزته من الدرس. تحت " + EN("Still to do") + " ما بقي، اضغط أي واحد لتذهب له.",
      "في كل وحدة حتى 3 نجوم ⭐ حسب ما تنجزه. الأخطاء لا تُنقص النقاط ولا النجوم."] },
    { who: "s", id: "arabic", ico: "ع", t: "المساعدة بالعربي", img: "arabic", steps: [
      "زر " + EN("عربي") + " في أعلى الشاشة يُظهر ترجمة التعليمات ومعاني الكلمات بالعربي.",
      "اضغطه مرة أخرى لإخفاء العربي والتدرّب بالإنجليزي فقط."] },
    { who: "s", id: "tools", ico: "🔎", t: "أدوات أعلى الشاشة", steps: [
      "🔎 ابحث عن أي كلمة أو درس في الكتاب.",
      "⛶ ملء الشاشة، مفيد على الآيباد.",
      "الكلمات المهمة في الكتاب كلها من قائمة المحتويات."] },
    { who: "s", id: "settings", ico: "⚙️", t: "الإعدادات وحفظ التقدّم", img: "settings", steps: [
      "افتحها من قائمة المحتويات ← " + EN("Settings & progress"),
      "صوت القراءة: " + EN("Natural voice (George)") + " صوت طبيعي مولَّد بالذكاء الاصطناعي، أو صوت جهازك. كلاهما ليس تسجيل الكتاب.",
      "تقدر تغيّر حجم الخط، والوضع الليلي، والأصوات، ومؤقت الألعاب.",
      "تقدّمك محفوظ في هذا المتصفح فقط وبدون حساب. إذا غيّرت الجهاز أو المتصفح يبدأ من جديد، فلا تستخدم التصفح الخفي."] },
    { who: "s", id: "install", ico: "📲", t: "ثبّته كتطبيق", video: "install", wide: true, steps: [
      "آيفون وآيباد (Safari): زر المشاركة ← " + EN("Add to Home Screen"),
      "أندرويد (Chrome): القائمة ⋮ ← " + EN("Install app"),
      "بعد أول فتح يعمل الكتاب بدون إنترنت. شاهد الفيديو للخطوات كاملة."] },
    { who: "s", id: "ar", ico: "📷", t: "الواقع المعزز", img: "ar", only: () => BOOK.ar && Object.keys(BOOK.ar).length, steps: [
      "يعمل بكاميرا الجوال. افتح كتابك المطبوع على صفحات الوحدة، أو اعرض الصفحة على شاشة الكمبيوتر.",
      "من درس الوحدة اضغط " + EN("Scan your book page") + "، ثم " + EN("Start camera") + "، واسمح باستخدام الكاميرا.",
      "وجّه الجوال على الصفحة حتى تظهر كاملة. يظهر مجسّم فوق الصفحة، وأزرار لفتح الدرس والاستماع.",
      EN("Words in 3D") + ": اضغط " + EN("Put it in your room") + " ووجّه الكاميرا على الأرض، فيظهر المجسّم في غرفتك على شاشة الجوال."] },
    { who: "t", id: "teacher", ico: "🧑‍🏫", t: "وضع المعلم والإجابات", img: "teacher", wide: true, steps: [
      "اضغط " + EN("Teacher") + " في أعلى الشاشة. في الجوال تجده أسفل قائمة المحتويات " + EN("Teacher mode"),
      "🔑 " + EN("Answers") + " يُظهر الإجابة الصحيحة وسببها تحت كل سؤال، واضغطه مرة أخرى لإخفائها.",
      "ارجع لـ" + EN("Student") + " قبل أن تعطي الجهاز للطالب."] },
    { who: "t", id: "board", ico: "⛶", t: "العرض على السبورة", img: "board", wide: true, steps: [
      EN("Show on board") + " فوق كل نشاط يعرضه وحده بخط كبير على شاشة الفصل. " + EN("Close board view") + " للرجوع.",
      "استخدم ملء الشاشة وحجم الخط " + EN("Extra large") + " من الإعدادات.",
      "تنقّل بين الخطوات بالأسهم ← → في لوحة المفاتيح، والأرقام على يمين الشاشة تفتح الوحدات."] },
    { who: "t", id: "notes", ico: "📋", t: "ملاحظات المعلم", img: "notes", wide: true, steps: [
      "خطوة " + EN("🧑‍🏫 Teacher") + " في آخر كل درس تظهر في وضع المعلم فقط.",
      "فيها أهداف الدرس من الكتاب، وطريقة تنفيذه، والعمل الثنائي والجماعي، وأسئلة سريعة للخروج مع إجاباتها."] },
    { who: "t", id: "fidelity", ico: "📘", t: "ما الذي من الكتاب؟", steps: [
      "كل نشاط عليه " + EN("From the book") + " منقول من الكتاب مع رقم صفحته.",
      EN("⭐ Extra") + " يعني تدريبًا إضافيًا للتثبيت، وليس من الكتاب.",
      "الصوت المولَّد ليس تسجيل الكتاب، وهذا مكتوب بجانبه في كل مكان.",
      "لا يوجد خصم على الخطأ في أي نشاط."] }
  ];
  const GUIDE_FAQ = [
    ["لا أسمع أي صوت", "ارفع صوت الجهاز، وأوقف الوضع الصامت في الآيفون. وإذا لم يعمل، اختر صوت الجهاز من الإعدادات."],
    ["اختفى تقدّمي", "التقدّم محفوظ في المتصفح نفسه. تأكد أنك تفتح الكتاب من نفس الجهاز والمتصفح، وليس من التصفح الخفي."],
    ["الكتاب لا يفتح", "حدّث المتصفح، أو افتح الرابط في Chrome أو Safari."],
    ["الميكروفون أو الكاميرا لا يعمل", "اسمح للموقع باستخدامهما من إعدادات المتصفح، ثم أعد فتح الصفحة. ويمكنك التسجيل بمسجّل الجوال من زر " + EN("Use my phone’s recorder") + "."]
  ];
  function helpTopic(p, l) {
    const k = { start: "lesson", words: "words", game: "game", finish: "finish", teacher: "notes" }[p.key];
    if (k) return k;
    const s = l.sections[p.sec] || {};
    return { reading: "read", listen: "listen", grammar: "rule", lab: "lab", predict: "predict", activity: "practice", speak: "speak", discuss: "speak", write: "write" }[s.type] || "lesson";
  }
  function renderHelp(main, sub) {
    if (!S.helpSeen) { S.helpSeen = 1; save(); }
    const w = h("div", { class: "wrap help" });
    const list = GUIDE.filter((x) => !x.only || x.only());
    const chip = (x) => h("a", { class: "chip", href: "#help-" + x.id, onclick: (e) => { e.preventDefault(); const el = document.getElementById("h-" + x.id); el && el.scrollIntoView({ behavior: "smooth", block: "start" }); try { history.replaceState(null, "", "#help-" + x.id); } catch (err) {} } }, x.ico + " " + x.t);
    w.append(h("section", { class: "card stack help-top", dir: "rtl", lang: "ar" },
      h("h1", null, "طريقة استخدام الكتاب التفاعلي", h("small", { dir: "ltr", lang: "en" }, "How to use this book")),
      h("p", null, "شرح مصوّر لكل جزء في الكتاب. الصور من كتاب الصف السابع، وكل الكتب تعمل بنفس الطريقة."),
      h("h2", null, "🎬 شاهد الفيديو أولًا (دقيقتان)"),
      h("video", { class: "help-video", src: "../help/how-to-use.mp4", poster: "../help/how-to-use-poster.webp", controls: true, playsinline: true, preload: "none", "aria-label": "فيديو: طريقة استخدام الكتاب التفاعلي" }),
      h("h2", null, "👩‍🎓 للطالب وولي الأمر"), h("div", { class: "help-chips" }, list.filter((x) => x.who === "s").map(chip)),
      h("h2", null, "🧑‍🏫 للمعلم"), h("div", { class: "help-chips" }, list.filter((x) => x.who === "t").map(chip), h("a", { class: "chip", href: "#help-faq", onclick: (e) => { e.preventDefault(); document.getElementById("h-faq").scrollIntoView({ behavior: "smooth" }); } }, "🛟 مشاكل شائعة"))));
    let lastWho = null;
    list.forEach((x) => {
      if (x.who !== lastWho) { lastWho = x.who; w.append(h("h2", { class: "help-part", dir: "rtl", lang: "ar" }, x.who === "s" ? "👩‍🎓 للطالب وولي الأمر" : "🧑‍🏫 للمعلم")); }
      const size = (n) => (x.wide ? [1280, 600] : n === "lesson" ? [390, 560] : [390, 640]); // reserves the space before the picture loads
      const pics = [x.img, x.img2].filter(Boolean).map((n) => h("img", { src: "../help/img/" + n + ".webp", alt: "صورة توضيحية: " + x.t, loading: "lazy", width: size(n)[0], height: size(n)[1], class: x.wide ? "wide" : "" }));
      if (x.video) pics.push(h("video", { class: "help-video", src: "../help/" + x.video + ".mp4", poster: "../help/" + x.video + "-poster.webp", controls: true, playsinline: true, preload: "none", "aria-label": "فيديو: " + x.t }));
      w.append(h("section", { class: "card help-sec" + (x.wide ? " is-wide" : "") + (pics.length ? "" : " no-pic"), id: "h-" + x.id, dir: "rtl", lang: "ar" },
        h("div", { class: "help-text" },
          h("h3", null, h("span", { class: "help-ico", "aria-hidden": "true" }, x.ico), x.t, x.en ? h("span", { class: "tag", dir: "ltr", lang: "en" }, x.en) : null),
          h("ol", null, x.steps.map((s) => h("li", { html: s })))),
        pics.length ? h("div", { class: "help-pics" }, pics) : null));
    });
    w.append(h("section", { class: "card stack", id: "h-faq", dir: "rtl", lang: "ar" }, h("h3", null, "🛟 مشاكل شائعة"),
      GUIDE_FAQ.map(([q, a]) => h("details", { class: "help-faq" }, h("summary", null, q), h("p", { html: a })))));
    w.append(footer()); main.append(w);
    if (sub) setTimeout(() => { const el = document.getElementById("h-" + sub); if (el) el.scrollIntoView({ block: "start" }); }, 0);
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
    if (VOICE_IDS.size) { const un = () => { CLIP.unlock(); document.removeEventListener("touchend", un, true); document.removeEventListener("click", un, true); }; document.addEventListener("touchend", un, true); document.addEventListener("click", un, true); }
    // Move between lesson steps: arrow keys (computer / class screen) and a sideways swipe (phone / iPad)
    const busyTarget = (t) => t && t.closest && t.closest("input, textarea, select, [contenteditable], .parts, .tablewrap, .lab-ctrls, .modal, .match, .drawer");
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && SPOT) { endSpot(); return; }
      if (!CUR || modalEl || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || busyTarget(e.target) || $("#drawer").classList.contains("open")) return;
      if (e.key === "ArrowRight") { e.preventDefault(); stepBy(1); } else if (e.key === "ArrowLeft") { e.preventDefault(); stepBy(-1); }
    });
    let sw = null;
    $("#main").addEventListener("touchstart", (e) => { const t = e.touches[0]; sw = (e.touches.length === 1 && CUR && !SPOT && !busyTarget(e.target) && t.clientX > 24 && t.clientX < window.innerWidth - 24) ? { x: t.clientX, y: t.clientY, at: Date.now() } : null; }, { passive: true });
    $("#main").addEventListener("touchend", (e) => {
      if (!sw) return; const t = e.changedTouches[0], dx = t.clientX - sw.x, dy = t.clientY - sw.y, dt = Date.now() - sw.at; sw = null;
      if (dt > 700 || Math.abs(dx) < 80 || Math.abs(dy) > 50 || Math.abs(dx) < Math.abs(dy) * 2) return;
      const sel = window.getSelection && String(window.getSelection()); if (sel) return;
      stepBy(dx < 0 ? 1 : -1);
    }, { passive: true });
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
  window.__pearls = { S: () => S, lessonPct, allLessons, vkey, plain, units: () => BOOK.units, labs: () => BOOK.labs, glossary: () => BOOK.glossary };
})();
