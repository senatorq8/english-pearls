import * as THREE from "three";
const M = (c, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.55, metalness: 0 }, o));
const mesh = (g, m, x = 0, y = 0, z = 0) => { const e = new THREE.Mesh(g, m); e.position.set(x, y, z); return e; };
const box = (w, h, d, m, x = 0, y = 0, z = 0) => mesh(new THREE.BoxGeometry(w, h, d), m, x, y, z);
const lathe = (pts, m, seg = 48) => new THREE.Mesh(new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), seg), m);
const rbox = (w, h, d, r, m, x = 0, y = 0, z = 0) => { // rounded box via extrude of a rounded rect
  const s = new THREE.Shape(), a = w / 2 - r, b = h / 2 - r;
  s.moveTo(-a, -h / 2); s.lineTo(a, -h / 2); s.quadraticCurveTo(w / 2, -h / 2, w / 2, -b); s.lineTo(w / 2, b); s.quadraticCurveTo(w / 2, h / 2, a, h / 2);
  s.lineTo(-a, h / 2); s.quadraticCurveTo(-w / 2, h / 2, -w / 2, b); s.lineTo(-w / 2, -b); s.quadraticCurveTo(-w / 2, -h / 2, -a, -h / 2);
  const g = new THREE.ExtrudeGeometry(s, { depth: d - 2 * Math.min(r, d / 3), bevelEnabled: true, bevelSize: Math.min(r, d / 3) * 0.9, bevelThickness: Math.min(r, d / 3), bevelSegments: 3, curveSegments: 8 });
  g.center(); return mesh(g, m, x, y, z);
};
const cyl = (rt, rb, h, m, x = 0, y = 0, z = 0, seg = 32) => mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m, x, y, z);

export const MODELS = {
  wheel() { // ancient wooden wheel with spokes, standing upright
    const g = new THREE.Group(), wood = M("#8a5a2b", { roughness: 0.8 }), dark = M("#5e3b1a", { roughness: 0.8 }), iron = M("#6b6f75", { metalness: 0.6, roughness: 0.4 });
    const R = 0.35;
    const rim = mesh(new THREE.TorusGeometry(R, 0.035, 16, 64), wood); g.add(rim);
    const tyre = mesh(new THREE.TorusGeometry(R + 0.03, 0.012, 8, 64), iron); g.add(tyre);
    const hub = cyl(0.06, 0.06, 0.12, dark); hub.rotation.x = Math.PI / 2; g.add(hub);
    for (let i = 0; i < 8; i++) { const sp = box(0.03, R, 0.03, wood); sp.position.set(Math.cos(i * Math.PI / 4) * R / 2, Math.sin(i * Math.PI / 4) * R / 2, 0); sp.rotation.z = i * Math.PI / 4 - Math.PI / 2; g.add(sp); }
    const axle = cyl(0.02, 0.02, 0.3, dark); axle.rotation.x = Math.PI / 2; g.add(axle);
    g.position.y = R + 0.042; const w = new THREE.Group(); w.add(g); return w;
  },
  pot() { // clay pot
    const clay = M("#b5652b", { roughness: 0.9 }), band = M("#7a3d17", { roughness: 0.9 });
    const g = new THREE.Group();
    g.add(lathe([[0, 0], [0.08, 0], [0.11, 0.02], [0.15, 0.08], [0.165, 0.14], [0.15, 0.2], [0.1, 0.25], [0.085, 0.28], [0.095, 0.3], [0.1, 0.31], [0.088, 0.31], [0.075, 0.29], [0.07, 0.26]], clay));
    const b1 = mesh(new THREE.TorusGeometry(0.163, 0.006, 8, 64), band, 0, 0.15, 0); b1.rotation.x = Math.PI / 2; g.add(b1);
    const b2 = mesh(new THREE.TorusGeometry(0.155, 0.005, 8, 64), band, 0, 0.11, 0); b2.rotation.x = Math.PI / 2; g.add(b2);
    return g;
  },
  bottle() { // Roman glass bottle
    const glass = M("#9fd8c8", { transparent: true, opacity: 0.45, roughness: 0.05, metalness: 0.1 });
    const g = new THREE.Group();
    g.add(lathe([[0, 0.002], [0.05, 0], [0.065, 0.01], [0.07, 0.06], [0.068, 0.11], [0.05, 0.14], [0.02, 0.16], [0.016, 0.22], [0.024, 0.23], [0.024, 0.235], [0.014, 0.235]], glass));
    return g;
  },
  beads() { // a necklace of glass beads lying on a surface
    const g = new THREE.Group(), cols = ["#1f6fd1", "#e2b534", "#2aa36b", "#d1453b", "#7c4bc2"];
    const n = 26;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2, r = 0.12;
      const b = mesh(new THREE.SphereGeometry(0.014, 14, 10), M(cols[i % cols.length], { roughness: 0.15, metalness: 0.05, transparent: true, opacity: 0.9 }), Math.cos(a) * r * 1.0, 0.014, Math.sin(a) * r * 1.25);
      g.add(b);
    }
    const t = mesh(new THREE.TorusGeometry(0.12, 0.002, 6, 80), M("#c9a26b"), 0, 0.014, 0); t.rotation.x = Math.PI / 2; t.scale.set(1, 1.25, 1); g.add(t);
    return g;
  },
  noodles() { // bowl of noodles with chopsticks
    const g = new THREE.Group(), bowl = M("#f4f1ea", { roughness: 0.3 }), red = M("#c0392b", { roughness: 0.4 }), noodle = M("#f2d27a", { roughness: 0.6 }), soup = M("#c8873a", { roughness: 0.2 }), wood = M("#a0703c");
    g.add(lathe([[0, 0], [0.04, 0], [0.045, 0.01], [0.06, 0.012], [0.1, 0.04], [0.12, 0.08], [0.125, 0.085], [0.118, 0.085], [0.112, 0.078], [0.09, 0.045], [0.05, 0.018], [0, 0.018]], bowl));
    const rim = mesh(new THREE.TorusGeometry(0.1215, 0.0035, 8, 64), red, 0, 0.0835, 0); rim.rotation.x = Math.PI / 2; g.add(rim);
    g.add(cyl(0.108, 0.108, 0.004, soup, 0, 0.07, 0, 48));
    for (let k = 0; k < 9; k++) { // wavy noodles
      const pts = []; const ang = k * 0.7, off = (k - 4) * 0.018;
      for (let i = 0; i <= 30; i++) { const s = i / 30 - 0.5; pts.push(new THREE.Vector3(s * 0.18, 0.074 + Math.sin(i * 0.9 + k) * 0.004, off + Math.sin(i * 0.6 + k) * 0.01)); }
      const tb = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 40, 0.0028, 6), noodle); tb.rotation.y = ang * 0.2; g.add(tb);
    }
    for (let j = 0; j < 2; j++) { const c = cyl(0.003, 0.0045, 0.24, wood, 0.04 + j * 0.015, 0.11, -0.02); c.rotation.z = 1.15; c.rotation.y = 0.3; g.add(c); }
    return g;
  },
  bulb() { // electric light bulb
    const g = new THREE.Group(), glass = M("#fff6c8", { transparent: true, opacity: 0.55, roughness: 0.05, emissive: "#ffe9a0", emissiveIntensity: 0.35 }), metal = M("#b8bcc2", { metalness: 0.8, roughness: 0.3 }), fil = M("#ffb300", { emissive: "#ffb300", emissiveIntensity: 1 });
    g.add(lathe([[0.0, 0], [0.012, 0], [0.016, 0.006], [0.017, 0.01], [0.017, 0.045]], M("#333")));
    for (let i = 0; i < 5; i++) { const t = mesh(new THREE.TorusGeometry(0.0175, 0.0025, 6, 32), metal, 0, 0.012 + i * 0.007, 0); t.rotation.x = Math.PI / 2; g.add(t); }
    g.add(cyl(0.0175, 0.0175, 0.035, metal, 0, 0.028, 0));
    const pts = [[0.0175, 0.045], [0.02, 0.055], [0.028, 0.07], [0.04, 0.09], [0.05, 0.11], [0.052, 0.13], [0.046, 0.15], [0.032, 0.163], [0.015, 0.169], [0, 0.17]];
    g.add(lathe(pts, glass));
    g.add(cyl(0.002, 0.002, 0.06, M("#888"), -0.008, 0.085, 0)); g.add(cyl(0.002, 0.002, 0.06, M("#888"), 0.008, 0.085, 0));
    const pts2 = []; for (let i = 0; i <= 40; i++) { const s = i / 40; pts2.push(new THREE.Vector3(-0.008 + s * 0.016, 0.118 + Math.sin(s * Math.PI * 6) * 0.004, 0)); }
    g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts2), 60, 0.0012, 6), fil));
    return g;
  },
  fridge() { // fridge, real size
    const g = new THREE.Group(), body = M("#e9edf1", { roughness: 0.25, metalness: 0.2 }), line = M("#9aa3ab"), handle = M("#c7cdd3", { metalness: 0.8, roughness: 0.25 });
    g.add(rbox(0.7, 1.75, 0.68, 0.03, body, 0, 0.875 + 0.03, 0));
    g.add(box(0.7, 0.012, 0.01, line, 0, 1.18, 0.345));
    g.add(box(0.025, 0.35, 0.035, handle, 0.27, 1.42, 0.36)); g.add(box(0.025, 0.55, 0.035, handle, 0.27, 0.8, 0.36));
    [[-0.28, -0.28], [0.28, -0.28], [-0.28, 0.28], [0.28, 0.28]].forEach(([x, z]) => g.add(cyl(0.02, 0.02, 0.03, M("#333"), x, 0.015, z)));
    return g;
  },
  tv() { // old black-and-white television
    const g = new THREE.Group(), wood = M("#7b4a22", { roughness: 0.6 }), screen = M("#3a3f44", { roughness: 0.15, metalness: 0.1, emissive: "#20262b", emissiveIntensity: 0.4 }), knob = M("#d9d2c3"), leg = M("#2b1a0e");
    const body = rbox(0.6, 0.45, 0.42, 0.04, wood, 0, 0.225 + 0.22, 0); g.add(body);
    const scr = rbox(0.4, 0.32, 0.03, 0.04, screen, -0.06, 0.45, 0.205); g.add(scr);
    g.add(box(0.1, 0.32, 0.02, M("#5c3517"), 0.22, 0.45, 0.212));
    [0.52, 0.42].forEach((y) => { const k = cyl(0.022, 0.022, 0.02, knob, 0.22, y, 0.225); k.rotation.x = Math.PI / 2; g.add(k); });
    [[-0.25, -0.16], [0.25, -0.16], [-0.25, 0.16], [0.25, 0.16]].forEach(([x, z]) => { const l = cyl(0.012, 0.008, 0.24, leg, x, 0.12, z); g.add(l); });
    const ant = new THREE.Group(); [-0.5, 0.5].forEach((a) => { const r = cyl(0.004, 0.004, 0.35, M("#aaa", { metalness: 0.8 }), 0, 0.17, 0); const p = new THREE.Group(); p.add(r); p.rotation.z = a; ant.add(p); }); ant.position.set(0, 0.67, 0); g.add(ant);
    return g;
  },
  car() { // small family car, real size
    const g = new THREE.Group(), paint = M("#1c6fb8", { roughness: 0.3, metalness: 0.4 }), glass = M("#9cc7e6", { roughness: 0.05, metalness: 0.3, transparent: true, opacity: 0.7 }), tyre = M("#1d1d1f", { roughness: 0.9 }), rimM = M("#c7cdd3", { metalness: 0.8, roughness: 0.3 }), light = M("#fff7d0", { emissive: "#fff2b0", emissiveIntensity: 0.6 }), tail = M("#d1302b", { emissive: "#a01010", emissiveIntensity: 0.4 });
    g.add(rbox(3.9, 0.65, 1.7, 0.18, paint, 0, 0.62, 0));
    g.add(rbox(2.1, 0.55, 1.5, 0.2, glass, -0.15, 1.18, 0));
    g.add(rbox(2.0, 0.08, 1.52, 0.04, paint, -0.15, 1.46, 0));
    [[1.25, 0.8], [1.25, -0.8], [-1.3, 0.8], [-1.3, -0.8]].forEach(([x, z]) => { const t = cyl(0.33, 0.33, 0.24, tyre, x, 0.33, z); t.rotation.x = Math.PI / 2; g.add(t); const r = cyl(0.2, 0.2, 0.25, rimM, x, 0.33, z); r.rotation.x = Math.PI / 2; g.add(r); });
    [0.55, -0.55].forEach((z) => { g.add(box(0.04, 0.12, 0.3, light, 1.95, 0.72, z)); g.add(box(0.04, 0.12, 0.28, tail, -1.95, 0.72, z)); });
    return g;
  },
  computer() { // desktop computer: monitor, keyboard, mouse
    const g = new THREE.Group(), plast = M("#2d3238", { roughness: 0.4 }), screen = M("#1e4f8a", { emissive: "#2a6fc0", emissiveIntensity: 0.55, roughness: 0.1 }), key = M("#3c434b");
    g.add(rbox(0.56, 0.34, 0.03, 0.015, plast, 0, 0.32, 0)); g.add(box(0.52, 0.29, 0.005, screen, 0, 0.325, 0.017));
    g.add(box(0.04, 0.14, 0.03, plast, 0, 0.11, -0.03)); g.add(rbox(0.22, 0.015, 0.16, 0.007, plast, 0, 0.008, -0.02));
    g.add(rbox(0.44, 0.02, 0.14, 0.006, plast, 0, 0.01, 0.22));
    for (let r = 0; r < 4; r++) for (let c = 0; c < 13; c++) g.add(box(0.026, 0.006, 0.024, key, -0.19 + c * 0.0317, 0.022, 0.172 + r * 0.03));
    const mouse = mesh(new THREE.SphereGeometry(0.03, 20, 12), plast, 0.3, 0.012, 0.22); mouse.scale.set(0.7, 0.4, 1.1); g.add(mouse);
    return g;
  },
  aircon() { // window air conditioner on a stand
    const g = new THREE.Group(), body = M("#eef0f2", { roughness: 0.35 }), grille = M("#b9c0c7"), panel = M("#3d4a56");
    g.add(rbox(0.62, 0.42, 0.6, 0.02, body, 0, 0.21, 0));
    for (let i = 0; i < 9; i++) g.add(box(0.4, 0.012, 0.01, grille, -0.08, 0.08 + i * 0.03, 0.305));
    g.add(box(0.12, 0.3, 0.012, panel, 0.22, 0.22, 0.306));
    [0.3, 0.24, 0.18].forEach((y) => { const k = cyl(0.016, 0.016, 0.015, M("#ccd"), 0.22, y, 0.316); k.rotation.x = Math.PI / 2; g.add(k); });
    return g;
  },
  phone() { // smartphone standing on a small stand
    const g = new THREE.Group(), body = M("#1b1d21", { roughness: 0.25, metalness: 0.5 }), screen = M("#2c6bd6", { emissive: "#3b82f6", emissiveIntensity: 0.5, roughness: 0.05 }), stand = M("#9aa3ab", { metalness: 0.6, roughness: 0.3 });
    const p = new THREE.Group();
    p.add(rbox(0.075, 0.155, 0.008, 0.01, body, 0, 0.0775, 0)); p.add(rbox(0.069, 0.147, 0.001, 0.008, screen, 0, 0.0775, 0.0045));
    const icons = ["#f59e0b", "#10b981", "#ef4444", "#a855f7", "#f97316", "#06b6d4", "#84cc16", "#eab308"];
    icons.forEach((c, i) => p.add(box(0.012, 0.012, 0.001, M(c, { emissive: c, emissiveIntensity: 0.3 }), -0.021 + (i % 4) * 0.014, 0.13 - Math.floor(i / 4) * 0.018, 0.0056)));
    p.rotation.x = -0.25; p.position.set(0, 0.012, 0.0); g.add(p);
    g.add(rbox(0.09, 0.012, 0.07, 0.004, stand, 0, 0.006, -0.012));
    return g;
  }
};
