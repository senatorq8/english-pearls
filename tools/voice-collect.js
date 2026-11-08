// Collect every text the book can read aloud, so it can be recorded with the natural voice.
// Opens each lesson part (teacher mode, so every grammar step is on screen), the glossary,
// and builds every Grammar Lab sentence. Writes tools/voice/<book>.json  { key: text }.
// Usage: node tools/voice-collect.js   (needs the built site in docs/ served on http://localhost:8790)
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const OUT = path.join(__dirname, "voice");
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const b = await chromium.launch();
  for (const book of (process.argv.slice(2).length ? process.argv.slice(2) : ["g6", "g7"])) {
    const p = await b.newPage({ viewport: { width: 1100, height: 900 } });
    const store = { g6: "pearls6a.v1", g7: "pearls7a.v1" }[book];
    await p.addInitScript((k) => { window.__SAY = []; try { localStorage.setItem(k, JSON.stringify({ settings: { mode: "teacher", ar: false, sound: false, motion: false, voice: "device" } })); } catch (e) {} }, store);
    const base = `http://localhost:8790/${book}/index.html`;
    await p.goto(base + "#glossary"); await p.waitForTimeout(300);
    const ids = await p.evaluate(() => window.__pearls.allLessons().map((x) => x.l.id));
    for (const id of ids) {
      await p.goto(base + "#" + id); await p.waitForTimeout(120);
      const n = (await p.$$(".parts button")).length;
      for (let i = 1; i < n; i++) { await p.click(`.parts button >> nth=${i}`); await p.waitForTimeout(60); }
    }
    const out = await p.evaluate(() => {
      const P = window.__pearls, said = window.__SAY.slice();
      // every vocabulary word and sentence (games say the word too)
      P.units().forEach((u) => u.lessons.forEach((l) => (l.vocab || []).forEach((v) => { said.push(v.w); if (v.ex) said.push(v.ex); })));
      (P.glossary() || []).forEach((e) => said.push(e.w));
      said.push("Hello! This is the voice that reads the book.");
      // every Grammar Lab sentence
      const untoken = (s) => String(s).replace(/\{[a-z]:([^}]+)\}/g, "$1");
      Object.values(P.labs() || {}).forEach((x) => {
        const ctr = x.lab.controls.map((c) => c.options.map((o) => (typeof o === "string" ? o : o.v)));
        let combos = [{}];
        x.lab.controls.forEach((c, ci) => { const nx = []; combos.forEach((st) => ctr[ci].forEach((v) => { const o = Object.assign({}, st); o[c.id] = v; nx.push(o); })); combos = nx; });
        combos.forEach((st) => said.push(untoken(x.lab.build(st).s)));
      });
      const map = {};
      said.forEach((t) => { const k = P.vkey(t); const txt = P.plain(t).replace(/\s+/g, " ").trim(); if (!txt || !/[A-Za-z]/.test(txt)) return; if (map[k] && map[k] !== txt) map["!collision:" + k] = txt; map[k] = txt; });
      return map;
    });
    const col = Object.keys(out).filter((k) => k.startsWith("!collision"));
    if (col.length) { console.error(book + ": key collisions", col); process.exitCode = 1; }
    fs.writeFileSync(path.join(OUT, book + ".json"), JSON.stringify(out, null, 0));
    const chars = Object.values(out).reduce((a, t) => a + t.length, 0);
    console.log(book + ": " + Object.keys(out).length + " texts, " + chars + " characters");
    await p.close();
  }
  await b.close();
})();
