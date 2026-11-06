// Makes the AR assets in headless Chromium:
//   docs/ar/models/<name>.glb + <name>.webp  (from tools/ar/models.js)
//   docs/ar/<set>.mind                        (MindAR image targets from the book page scans)
// Usage: node tools/ar/render.js [models] [targets]     (needs: npm install; Playwright's Chromium)
const { chromium } = require("playwright");
const http = require("http"), fs = require("fs"), path = require("path");
const R = path.join(__dirname, "..", ".."), OUT = path.join(R, "docs", "ar");
const SETS = require("./sets.config.js");
const what = process.argv.slice(2).length ? process.argv.slice(2) : ["models", "targets"];
const TARGET_W = 640; // page scans are resized to this width before compiling (smaller file, same tracking)

const PAGE = `<!doctype html><meta charset=utf-8>
<script type="importmap">{"imports":{"three":"/node_modules/three/build/three.module.js","three/addons/":"/node_modules/three/examples/jsm/"}}</script>
<body style="margin:0"><canvas id=c width=600 height=600></canvas><script type="module">
import * as THREE from "three"; import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";
import { MODELS } from "/tools/ar/models.js"; import { Compiler } from "/node_modules/mind-ar/dist/mindar-image.prod.js";
const b64 = (buf) => { let s = ""; const u = new Uint8Array(buf); for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000)); return btoa(s); };
const r = new THREE.WebGLRenderer({ canvas: document.getElementById("c"), antialias: true, alpha: true, preserveDrawingBuffer: true }); r.setClearColor(0x000000, 0);
r.outputColorSpace = THREE.SRGBColorSpace;
window.names = Object.keys(MODELS);
window.model = async (name) => {
  const scene = new THREE.Scene(); const obj = MODELS[name](); obj.name = name; scene.add(obj);
  const glb = await new GLTFExporter().parseAsync(scene, { binary: true });
  const box = new THREE.Box3().setFromObject(obj), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3()), d = Math.max(size.x, size.y, size.z);
  const cam = new THREE.PerspectiveCamera(30, 1, d / 100, d * 20); cam.position.set(c.x + d * 1.25, c.y + d * 0.75, c.z + d * 1.9); cam.lookAt(c);
  scene.add(new THREE.HemisphereLight("#ffffff", "#8899aa", 2.2)); const dl = new THREE.DirectionalLight("#fff", 2.2); dl.position.set(d * 2, d * 4, d * 3); scene.add(dl);
  r.render(scene, cam);
  return { glb: b64(glb), img: r.domElement.toDataURL("image/webp", 0.85).split(",")[1], size: [size.x, size.y, size.z] };
};
window.targets = async (srcs, w) => {
  const imgs = await Promise.all(srcs.map((src) => new Promise((res, rej) => { const i = new Image(); i.onload = () => {
    const c = document.createElement("canvas"); c.width = w; c.height = Math.round(i.height * w / i.width); c.getContext("2d").drawImage(i, 0, 0, c.width, c.height);
    const o = new Image(); o.onload = () => res(o); o.src = c.toDataURL("image/png"); }; i.onerror = rej; i.src = src; })));
  const comp = new Compiler(); await comp.compileImageTargets(imgs, () => {}); return b64(await comp.exportData());
};
window.ready = true;
</script>`;

const TYPES = { ".js": "text/javascript", ".jpg": "image/jpeg", ".html": "text/html", ".json": "application/json" };
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split("?")[0]);
  if (u === "/render.html") { res.writeHead(200, { "content-type": "text/html" }); return res.end(PAGE); }
  const f = path.join(R, u); if (!f.startsWith(R) || !fs.existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "content-type": TYPES[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(res);
});
server.listen(0, async () => {
  const port = server.address().port, b = await chromium.launch(), p = await b.newPage();
  p.on("pageerror", (e) => console.log("page error:", e.message));
  await p.goto(`http://localhost:${port}/render.html`); await p.waitForFunction(() => window.ready, null, { timeout: 60000 });
  if (what.includes("models")) {
    fs.mkdirSync(path.join(OUT, "models"), { recursive: true });
    for (const n of await p.evaluate(() => window.names)) {
      const o = await p.evaluate((n) => window.model(n), n);
      fs.writeFileSync(path.join(OUT, "models", n + ".glb"), Buffer.from(o.glb, "base64"));
      fs.writeFileSync(path.join(OUT, "models", n + ".webp"), Buffer.from(o.img, "base64"));
      console.log("model", n, Math.round(fs.statSync(path.join(OUT, "models", n + ".glb")).size / 1024) + " KB", o.size.map((v) => v.toFixed(2)).join(" × ") + " m");
    }
  }
  if (what.includes("targets")) {
    for (const [sid, cfg] of Object.entries(SETS)) {
      const srcs = cfg.pages.map((pg) => `/docs/${cfg.book}/img/pages/p${String(pg.page).padStart(3, "0")}.jpg`);
      const t0 = Date.now(), data = await p.evaluate(([s, w]) => window.targets(s, w), [srcs, TARGET_W]);
      fs.writeFileSync(path.join(OUT, sid + ".mind"), Buffer.from(data, "base64"));
      console.log("targets", sid, cfg.pages.length + " pages", Math.round(fs.statSync(path.join(OUT, sid + ".mind")).size / 1024) + " KB", Math.round((Date.now() - t0) / 1000) + " s");
    }
  }
  await b.close(); server.close();
});
