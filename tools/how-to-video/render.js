// Records docs/help/how-to-use.mp4: serve a folder holding tour.html, the fonts, icon.png and a "site" link to docs/ on :8792,
// run: node render.js 24 frames, then: ffmpeg -framerate 24 -i frames/f%05d.jpg -c:v libx264 -preset veryfast -crf 24 -pix_fmt yuv420p -movflags +faststart docs/help/how-to-use.mp4
// node tour-render.js <fps> <outdir>
const { chromium } = require("playwright");
(async () => {
  const fps = +process.argv[2] || 24, out = process.argv[3] || "tfr";
  const b = await chromium.launch({ args: ["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream", "--autoplay-policy=no-user-gesture-required"] });
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 }, permissions: ["microphone"] });
  const p = await ctx.newPage(); p.on("console", (m) => { if (/failed/.test(m.text())) console.log(m.text()); });
  await p.goto("http://localhost:8792/tour.html"); await p.waitForFunction(() => window.ready, null, { timeout: 30000 }); await p.waitForTimeout(800);
  const END = await p.evaluate(() => window.END), N = Math.round(END * fps);
  require("fs").mkdirSync(out, { recursive: true });
  for (let i = 0; i < N; i++) { await p.evaluate((t) => window.render(t), i / fps); await p.screenshot({ path: out + "/f" + String(i).padStart(5, "0") + ".jpg", type: "jpeg", quality: 90 }); }
  await b.close(); console.log("frames", N);
})();
