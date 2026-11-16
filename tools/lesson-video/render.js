// Word video for one lesson: each new word with its emoji, meaning in Arabic, the natural-voice recording
// (docs/voice, made by tools/voice-make.py), a pause for the learner to repeat, and the example sentence read aloud.
// Usage: node tools/lesson-video/render.js g7 u4 u4l1   → docs/<grade>/video/<lesson>-words.mp4 (+ poster .jpg)
// Needs ffmpeg and Playwright (Chromium). The page loads the site fonts from Google Fonts.
const fs = require("fs"), path = require("path"), os = require("os"), { execFileSync } = require("child_process");
const { chromium } = require("playwright");
const R = path.resolve(__dirname, "..", "..");
const [grade, unit, lessonId] = process.argv.slice(2);
if (!lessonId) { console.error("usage: node tools/lesson-video/render.js g7 u4 u4l1"); process.exit(1); }

global.BOOK = { addUnit: (u) => (global.UNIT = u) };
require(path.join(R, "books", grade, "data", unit + ".js"));
const lesson = UNIT.lessons.find((l) => l.id === lessonId);
const voice = JSON.parse(fs.readFileSync(path.join(R, "tools", "voice", grade + ".json"), "utf8"));
const keyOf = {}; for (const [k, t] of Object.entries(voice)) keyOf[t] = k;
const mp3 = (text) => { const k = keyOf[text], f = k && path.join(R, "docs", "voice", k + ".mp3"); if (!f || !fs.existsSync(f)) throw new Error("no recording for: " + text); return f; };
const dur = (f) => parseFloat(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]).toString());

// timeline (seconds) and the audio clips to place on it
const INTRO = 3.2, OUTRO = 3.6, SAY = 1.8, clips = [];
let t = INTRO;
const words = lesson.vocab.map((v) => {
  const wf = mp3(v.w), ef = mp3(v.ex), wd = dur(wf), ed = dur(ef);
  const x = { w: v.w, pos: v.pos, emoji: v.emoji, ar: v.ar, ipa: v.ipa || "", ex: v.ex, t0: t };
  x.tw = t + 0.5; clips.push([wf, x.tw]);
  x.tar = x.tw + wd + 0.3; clips.push([wf, x.tar + 0.3]);       // hear it again while the meaning shows
  x.tsay = x.tar + 0.3 + wd + 0.2; x.sayDur = SAY;              // learner repeats
  x.tex = x.tsay + SAY + 0.4; x.exDur = ed; clips.push([ef, x.tex]);
  x.t1 = x.tex + ed + 0.9; t = x.t1;
  return x;
});
const TL = { total: t + OUTRO, intro: INTRO, words };
console.log(lesson.title, "·", words.length, "words ·", TL.total.toFixed(1), "s");

const outDir = path.join(R, "docs", grade, "video"); fs.mkdirSync(outDir, { recursive: true });
const out = path.join(outDir, lessonId + "-words.mp4");
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "lv-"));

(async () => {
  const FPS = 24, N = Math.ceil(TL.total * FPS);
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  await p.goto("file://" + path.join(__dirname, "anim.html"));
  await p.evaluate((tl) => { window.TL = tl; }, TL); await p.evaluate(() => window.ready);
  for (let i = 0; i < N; i++) {
    await p.evaluate((s) => window.render(s), i / FPS);
    await p.screenshot({ path: path.join(tmp, "f" + String(i).padStart(5, "0") + ".jpg"), type: "jpeg", quality: 90 });
    if (i % 240 === 0) console.log("frame", i, "/", N);
  }
  await p.evaluate((s) => window.render(s), words[0].tex + 2); await p.screenshot({ path: out.replace(/\.mp4$/, ".jpg"), type: "jpeg", quality: 85 });
  await b.close();

  // audio: every clip delayed to its start time, mixed onto silence of the full length
  const args = ["-loglevel", "error", "-y", "-framerate", String(FPS), "-i", path.join(tmp, "f%05d.jpg")];
  clips.forEach(([f]) => args.push("-i", f));
  const chains = clips.map(([, s], i) => `[${i + 1}:a]aresample=24000,adelay=${Math.round(s * 1000)}:all=1[a${i}]`);
  const mix = clips.map((_, i) => `[a${i}]`).join("") + `amix=inputs=${clips.length}:normalize=0:duration=longest,apad,atrim=0:${TL.total.toFixed(2)}[aout]`;
  args.push("-filter_complex", chains.concat(mix).join(";"), "-map", "0:v", "-map", "[aout]",
    "-c:v", "libx264", "-preset", "veryfast", "-crf", "24", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "64k", "-ac", "1",
    "-movflags", "+faststart", "-shortest", out);
  execFileSync("ffmpeg", args, { stdio: "inherit" });
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log("wrote", path.relative(R, out), (fs.statSync(out).size / 1e6).toFixed(1) + " MB");
})();
