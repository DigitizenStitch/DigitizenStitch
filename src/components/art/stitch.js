// Procedural embroidery geometry. Deterministic (seeded) so server and client
// render identical SVG. Produces satin columns, tatami fills and running stitches
// that follow how real embroidery is built.

export function rng(seed = 7) {
  let s = seed % 2147483647;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

const clamp = (v) => Math.max(0, Math.min(255, Math.round(v)));
export function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const t = amt < 0 ? 0 : 255, p = Math.abs(amt);
  return `rgb(${clamp((t - r) * p + r)},${clamp((t - g) * p + g)},${clamp((t - b) * p + b)})`;
}

const f = (n) => Math.round(n * 10) / 10;

/** Satin stitches filling a ring between radii r1 and r2. */
export function satinRing({ cx, cy, r1, r2, count, color, seed = 3, tilt = 0.05 }) {
  const rand = rng(seed);
  return Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2;
    const j = (rand() - 0.5) * 0.004;
    return {
      x1: f(cx + Math.cos(a + j) * r1), y1: f(cy + Math.sin(a + j) * r1),
      x2: f(cx + Math.cos(a + tilt + j) * r2), y2: f(cy + Math.sin(a + tilt + j) * r2),
      c: shade(color, (rand() - 0.5) * 0.18),
    };
  });
}

/** Satin column following a polyline. */
export function satinColumn({ points, width, step = 2.2, color, seed = 5, tilt = 1.2 }) {
  const rand = rng(seed);
  const out = [];
  for (let s = 0; s < points.length - 1; s++) {
    const [ax, ay] = points[s], [bx, by] = points[s + 1];
    const len = Math.hypot(bx - ax, by - ay);
    const tx = (bx - ax) / len, ty = (by - ay) / len, nx = -ty, ny = tx;
    for (let d = 0; d < len; d += step) {
      const px = ax + tx * d, py = ay + ty * d, w = width / 2;
      out.push({
        x1: f(px - nx * w - tx * tilt / 2), y1: f(py - ny * w - ty * tilt / 2),
        x2: f(px + nx * w + tx * tilt / 2), y2: f(py + ny * w + ty * tilt / 2),
        c: shade(color, (rand() - 0.5) * 0.2),
      });
    }
  }
  return out;
}

/** Tatami fill: rows of short stitches with a staggered offset, inside a box (clip separately). */
export function tatamiRows({ x, y, w, h, gap = 2.4, stitch = 9 }) {
  const rows = [];
  for (let i = 0, yy = y; yy <= y + h; i++, yy += gap) rows.push({ y: f(yy), off: (i * 3) % stitch, x, w });
  return { rows, dash: `${stitch - 0.9} 0.9` };
}

/** Points on a regular star (for satin columns). */
export function starPoints(cx, cy, rOuter, rInner, n = 5, rot = -Math.PI / 2) {
  return Array.from({ length: n * 2 + 1 }, (_, i) => {
    const r = i % 2 === 0 ? rOuter : rInner;
    const a = rot + (i * Math.PI) / n;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  });
}

export function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
