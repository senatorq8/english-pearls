// Screenshots for the "How to use" guide (docs/help/img/*.webp), taken from the Grade 7 book.
// Usage: (cd docs && python3 -m http.server 8790) & node tools/help-shots.js
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const OUT = path.join(__dirname, "..", "docs", "help", "img"), BASE = "http://localhost:8790/";
fs.mkdirSync(OUT, { recursive: true });
const HIDE = ".toast{display:none!important} *{animation-duration:0s!important;transition-duration:0s!important}";

(async () => {
  const b = await chromium.launch({ args: ["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream"] });
  async function page(w, hgt) {
    const ctx = await b.newContext({ viewport: { width: w, height: hgt }, deviceScaleFactor: 2 });
    const p = await ctx.newPage(); return p;
  }
  const shot = async (p, name, clip) => {
    await p.addStyleTag({ content: HIDE }); await p.waitForTimeout(350);
    const png = path.join(OUT, name + ".png"); await p.screenshot({ path: png, clip });
    const webp = await p.evaluate(async (data) => { const img = new Image(); img.src = data; await img.decode(); const c = document.createElement("canvas"); c.width = img.width; c.height = img.height; c.getContext("2d").drawImage(img, 0, 0); return c.toDataURL("image/webp", 0.8); }, "data:image/png;base64," + fs.readFileSync(png).toString("base64"));
    fs.writeFileSync(path.join(OUT, name + ".webp"), Buffer.from(webp.split(",")[1], "base64")); fs.unlinkSync(png);
    console.log(name, Math.round(fs.statSync(path.join(OUT, name + ".webp")).size / 1024) + " KB");
  };
  const go = async (p, id, label) => {
    await p.goto(BASE + "g7/index.html#" + id); await p.waitForTimeout(500);
    if (!label) return;
    const parts = await p.$$eval(".parts button", (a) => a.map((x) => x.textContent.trim()));
    const i = parts.findIndex((t) => t.includes(label)); (await p.$$(".parts button"))[i].click(); await p.waitForTimeout(500); await p.evaluate(() => window.scrollTo(0, 0));
  };
  const P = { x: 0, y: 0, width: 390, height: 640 };

  let p = await page(390, 760);
  await p.goto(BASE + "g7/index.html#home"); await p.evaluate(() => localStorage.clear()); await p.reload(); await p.waitForTimeout(600);
  await shot(p, "home", P);
  await p.click("#btnMenu"); await p.waitForTimeout(500); await shot(p, "contents", P);
  await go(p, "u1l1"); await shot(p, "lesson", { x: 0, y: 0, width: 390, height: 560 });
  await go(p, "u1l1", "Words"); await shot(p, "words", P);
  await go(p, "u1l1", "Read"); const tw = await p.$("button.tw"); await tw.scrollIntoViewIfNeeded(); await tw.click(); await p.waitForTimeout(400); await shot(p, "read", P);
  await go(p, "u1l1", "Read"); await shot(p, "readaloud", P);
  await go(p, "u1l3", "Listen 1"); await shot(p, "listen", P);
  await go(p, "u1l2", "Rule"); await shot(p, "rule", P);
  await go(p, "u1l2", "Grammar Lab"); await shot(p, "lab", P);
  await go(p, "u1l2", "Extra 1");
  await p.evaluate(() => { const b = [...document.querySelectorAll("button")].find((x) => x.textContent.trim() === "brushes"); b && b.click(); });
  await p.waitForTimeout(500); await shot(p, "practice", P);
  await go(p, "u1l2", "Predict"); await shot(p, "predict", P);
  await go(p, "u1l2", "Speak"); await shot(p, "speak", P);
  await go(p, "u1l2", "Write"); await shot(p, "write", P);
  await go(p, "u1l1", "Game"); await shot(p, "game", P);
  await go(p, "u1l2", "Finish"); await shot(p, "finish", P);
  await p.click("#btnAr"); await go(p, "u1l2", "Practice"); await shot(p, "arabic", P); await p.click("#btnAr");
  await p.goto(BASE + "g7/index.html#settings"); await p.waitForTimeout(500); await shot(p, "settings", P);

  p = await page(1280, 720);
  await go(p, "u1l2"); await p.click("#mTeacher"); await p.waitForTimeout(300);
  await go(p, "u1l2", "Practice"); await p.click("#btnAns"); await p.waitForTimeout(400); await shot(p, "teacher", { x: 0, y: 0, width: 1280, height: 600 });
  await p.click("#btnAns"); await p.click(".spot-btn"); await p.waitForTimeout(500); await shot(p, "board", { x: 0, y: 0, width: 1280, height: 600 }); await p.click(".spot-btn"); await p.waitForTimeout(300);
  await go(p, "u1l2", "Teacher"); await shot(p, "notes", { x: 0, y: 0, width: 1280, height: 600 });
  await p.click("#mStudent");

  p = await page(390, 760);
  // AR screenshot (docs/help/img/ar.webp) was taken from the Grade 8 pilot; retake it when a book has an AR set again
  await b.close();
})();
