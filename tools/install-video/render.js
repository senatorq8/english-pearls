// Renders the install video frames from anim.html (open it via a local server, with library.png, icon.png and the fonts next to it),
// then: ffmpeg -framerate 24 -i fr/f%04d.jpg -c:v libx264 -preset veryfast -crf 23 -pix_fmt yuv420p -movflags +faststart docs/help/install.mp4
const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  await p.goto("http://localhost:8791/anim.html"); await p.waitForFunction(() => window.ready);
  const FPS = 24, N = Math.round(40 * FPS);
  for (let i = 0; i < N; i++) { await p.evaluate((t) => window.render(t), i / FPS); await p.screenshot({ path: "inst/fr/f" + String(i).padStart(4, "0") + ".jpg", type: "jpeg", quality: 92 }); }
  await p.evaluate(() => window.render(1.5)); await p.screenshot({ path: "inst/poster.png" });
  await b.close(); console.log("frames", N);
})();
