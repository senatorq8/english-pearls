// Usage: node tools/validate.js data/u1.js [data/u2.js ...]
const fs = require("fs");
const path = require("path");
const errors = [], warns = [];
const units = [];
global.BOOK = { addUnit: (u) => units.push(u) };
for (const f of process.argv.slice(2)) {
  try { eval(fs.readFileSync(f, "utf8")); } catch (e) { errors.push(f + ": SYNTAX/RUNTIME " + e.message); }
}
const SKILLS = ["Reading", "Grammar", "Listening", "Speaking", "Writing"];
const ITEM_T = ["mcq", "fill", "fix", "match", "order", "short", "choose", "table"];
const SEC_T = ["reading", "grammar", "activity", "discuss", "speak", "write", "listen"];
const GAMES = ["match-emoji", "scramble", "quiz", "sort", "spell"];
// images live in docs/<book>/img (book = the folder name in books/<book>/data/uN.js)
const bookId = (process.argv[2] || "").split(path.sep).slice(-3)[0];
const root = path.join(__dirname, "..", "docs", bookId);
function chkItem(it, where) {
  if (!ITEM_T.includes(it.t)) return errors.push(where + " bad item type " + it.t);
  if (!it.q && it.t !== "table") warns.push(where + " item without q");
  if (it.t === "mcq" || it.t === "choose") {
    if (!Array.isArray(it.options) || it.options.length < 2) errors.push(where + " options");
    const a = [].concat(it.answer);
    if (!it.open && a.some((x) => typeof x !== "number" || x < 0 || x >= it.options.length)) errors.push(where + " answer index out of range");
  }
  if (it.t === "fill") {
    if ((it.q.match(/____/g) || []).length !== 1) errors.push(where + " fill needs exactly one ____ : " + it.q);
    if (!it.open && (!Array.isArray(it.answer) || !it.answer.length)) errors.push(where + " fill answer[]");
  }
  if (it.t === "fix") { if (!/\{[^}]+\}/.test(it.q)) errors.push(where + " fix needs {wrong}"); if (!Array.isArray(it.answer)) errors.push(where + " fix answer[]"); }
  if (it.t === "match") { if (!Array.isArray(it.pairs) || it.pairs.length < 2) errors.push(where + " pairs"); }
  if (it.t === "order") {
    if (!Array.isArray(it.words) || !Array.isArray(it.answer)) errors.push(where + " order words/answer");
    else {
      const norm = (s) => s.split(/\s+/).filter(Boolean).sort().join(" ");
      it.answer.forEach((a) => { if (norm(a) !== norm(it.words.join(" "))) errors.push(where + " order answer words mismatch: " + a); });
    }
  }
  if (it.t === "short" && !it.open && !it.model) warns.push(where + " short without model");
  if (it.t === "table") { if (!Array.isArray(it.rows) || !Array.isArray(it.head)) errors.push(where + " table rows/head"); }
}
for (const u of units) {
  const U = "unit " + u.id;
  if (!u.title || !u.lessons) errors.push(U + " missing title/lessons");
  if (u.lessons && u.lessons.length !== 7) warns.push(U + " has " + u.lessons.length + " lessons");
  (u.lessons || []).forEach((l, li) => {
    const L = U + "/" + (l.id || li);
    if (!SKILLS.includes(l.skill)) errors.push(L + " skill " + l.skill);
    ["id", "title", "pages", "canDo", "goals", "warmup", "sections", "teacher"].forEach((k) => { if (l[k] == null) errors.push(L + " missing " + k); });
    if (l.warmup && l.warmup.image && !fs.existsSync(path.join(root, "img", l.warmup.image))) errors.push(L + " missing image " + l.warmup.image);
    (l.vocab || []).forEach((v, i) => { if (!v.w || !v.def || !v.ex) errors.push(L + " vocab " + i + " incomplete"); if (!v.emoji) warns.push(L + " vocab " + v.w + " no emoji"); });
    (l.sections || []).forEach((s, si) => {
      const S = L + " sec" + si + "(" + s.type + ")";
      if (!SEC_T.includes(s.type)) errors.push(S + " bad type");
      if (s.image && !fs.existsSync(path.join(root, "img", s.image))) errors.push(S + " missing image " + s.image);
      (s.items || []).forEach((it, ii) => chkItem(it, S + " item" + ii));
      if (s.type === "listen" && s.source === "extra" && !(s.script && s.script.length)) errors.push(S + " extra listening needs script");
    });
    if (l.game) {
      if (!GAMES.includes(l.game.kind)) errors.push(L + " game kind " + l.game.kind);
      (l.game.items || []).forEach((it, ii) => chkItem(it, L + " game item" + ii));
      if (l.game.kind === "match-emoji" || l.game.kind === "spell") { if (!(l.vocab && l.vocab.length >= 4)) errors.push(L + " game needs >=4 vocab"); }
    } else warns.push(L + " no game");
  });
}
console.log("Units:", units.map((u) => u.id + "(" + (u.lessons || []).length + ")").join(", "));
warns.forEach((w) => console.log("WARN", w));
errors.forEach((e) => console.log("ERROR", e));
console.log(errors.length ? "FAILED: " + errors.length + " errors" : "OK");
process.exit(errors.length ? 1 : 0);
