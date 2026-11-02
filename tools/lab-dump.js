// List every sentence each Grammar Lab can build, so a teacher (or a checker) can review them all.
// Usage: node tools/lab-dump.js g7   (or g6)
const fs = require("fs"), path = require("path");
const book = process.argv[2] || "g7";
global.BOOK = {};
const dir = path.join(__dirname, "..", "books", book, "data");
fs.readdirSync(dir).filter((f) => /^labs.*\.js$/.test(f)).sort().forEach((f) => eval(fs.readFileSync(path.join(dir, f), "utf8")));
if (!BOOK.labs) { console.log("no labs yet"); process.exit(0); }
const untoken = (s) => String(s).replace(/\{[a-z]:([^}]+)\}/g, "$1");
let total = 0; const seen = new Set();
for (const [id, x] of Object.entries(BOOK.labs)) {
  console.log("\n### " + id + " — " + x.lab.title);
  const ctr = x.lab.controls.map((c) => ({ id: c.id, vals: c.options.map((o) => (typeof o === "string" ? o : o.v)) }));
  const combos = ctr.reduce((acc, c) => acc.flatMap((st) => c.vals.map((v) => Object.assign({}, st, { [c.id]: v }))), [{}]);
  for (const st of combos) {
    const visible = x.lab.controls.every((c) => !c.show || c.show(st) || st[c.id] === (typeof c.options[0] === "string" ? c.options[0] : c.options[0].v));
    if (!visible) continue;
    const o = x.lab.build(st);
    const line = (o.from ? untoken(o.from) + "  →  " : "") + untoken(o.s);
    if (seen.has(id + line)) continue; seen.add(id + line); total++;
    if (/\{|\}|undefined|null|  | \.| ,/.test(untoken(o.s) + "|" + untoken(o.from || "") + "|" + o.note + "|" + (o.noteAr || ""))) console.log("!! PROBLEM: " + JSON.stringify(o));
    console.log(line + "   [" + (o.badge || "") + "]");
  }
  const p = x.predict; console.log("PREDICT: " + p.q + " → " + p.options[p.answer]);
}
console.log("\n" + total + " different sentences");
