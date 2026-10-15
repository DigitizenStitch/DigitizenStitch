import { useId } from 'react';
import { chunk, rng, satinColumn, satinRing, shade, starPoints, tatamiRows } from './stitch';

// An original embroidered emblem, drawn stitch by stitch:
// gold satin border, navy tatami fill, teal satin star, running-stitch detail.
// `animate` sews it in sequence (like a machine). `flat` shows the source vector artwork instead.

const GOLD = '#e9b872';
const NAVY = '#1e3a8a';
const TEAL = '#2dd4bf';
const IVORY = '#f6f1e6';

const ring = satinRing({ cx: 100, cy: 100, r1: 78, r2: 92, count: 260, color: GOLD, seed: 11 });
const star = starPoints(100, 100, 46, 20);
const starSatin = satinColumn({ points: star, width: 9, step: 1.9, color: TEAL, seed: 23 });
const fill = tatamiRows({ x: 18, y: 18, w: 164, h: 164, gap: 2.6, stitch: 10 });
const sparkle = (() => {
  const r = rng(41);
  return Array.from({ length: 3 }, (_, i) => ({ a: (i / 3) * Math.PI * 2 + 0.6 + r() * 0.2 }));
})();

function Lines({ items, width, start, step, animate, group = 14 }) {
  return chunk(items, group).map((g, gi) => (
    <g key={gi} className={animate ? 'stitch-seq-g' : undefined} style={animate ? { '--i': gi, '--start': `${start}ms`, '--step': `${step}ms` } : undefined}>
      {g.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={l.c} strokeWidth={width} strokeLinecap="round" />
      ))}
    </g>
  ));
}

export default function StitchArt({ animate = false, flat = false, className = '', title }) {
  const id = useId().replace(/:/g, '');
  const decorative = title === '';
  const a11y = decorative ? { 'aria-hidden': true } : { role: 'img', 'aria-label': title ?? (flat ? 'Vector artwork of an emblem with a star' : 'Embroidered emblem with satin border, tatami fill and satin star') };

  if (flat) {
    return (
      <svg viewBox="0 0 200 200" className={className} {...a11y}>
        <circle cx="100" cy="100" r="92" fill={GOLD} />
        <circle cx="100" cy="100" r="78" fill={NAVY} />
        <circle cx="100" cy="100" r="66" fill="none" stroke={IVORY} strokeWidth="1.2" strokeDasharray="3 3" />
        <polygon points={star.map((p) => p.join(',')).join(' ')} fill="none" stroke={TEAL} strokeWidth="9" strokeLinejoin="round" />
        {sparkle.map((s, i) => (
          <circle key={i} cx={100 + Math.cos(s.a) * 58} cy={100 + Math.sin(s.a) * 58} r="3.2" fill={IVORY} />
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" className={className} {...a11y}>
      <defs>
        <clipPath id={`c${id}`}><circle cx="100" cy="100" r="79" /></clipPath>
        <filter id={`s${id}`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="1" floodColor="#000" floodOpacity=".45" />
        </filter>
      </defs>
      <g filter={`url(#s${id})`}>
        {/* tatami fill, angled 45deg like a real fill */}
        <g clipPath={`url(#c${id})`} className={animate ? 'stitch-seq-g' : undefined} style={animate ? { '--i': 0, '--start': '200ms' } : undefined}>
          <g transform="rotate(-45 100 100)">
            {fill.rows.map((r, i) => (
              <line key={i} x1={r.x - 40} y1={r.y} x2={r.x + r.w + 40} y2={r.y} stroke={shade(NAVY, i % 3 === 0 ? 0.08 : 0)} strokeWidth="2.1" strokeDasharray={fill.dash} strokeDashoffset={r.off} />
            ))}
          </g>
        </g>
        {/* running stitch circle */}
        <circle cx="100" cy="100" r="66" fill="none" stroke={IVORY} strokeWidth="1.3" strokeDasharray="3.2 2.2" strokeLinecap="round" className={animate ? 'stitch-seq-g' : undefined} style={animate ? { '--i': 1, '--start': '700ms' } : undefined} />
        <Lines items={ring} width={1.9} start={900} step={22} animate={animate} />
        <Lines items={starSatin} width={1.5} start={900 + (ring.length / 14) * 22} step={22} animate={animate} />
        {sparkle.map((s, i) => {
          const cx = 100 + Math.cos(s.a) * 58, cy = 100 + Math.sin(s.a) * 58;
          return (
            <g key={i} className={animate ? 'stitch-seq-g' : undefined} style={animate ? { '--i': i, '--start': '2900ms', '--step': '120ms' } : undefined}>
              {Array.from({ length: 9 }, (_, k) => {
                const a = (k / 9) * Math.PI;
                return <line key={k} x1={cx - Math.cos(a) * 3.4} y1={cy - Math.sin(a) * 3.4} x2={cx + Math.cos(a) * 3.4} y2={cy + Math.sin(a) * 3.4} stroke={k % 2 ? IVORY : '#ffffff'} strokeWidth="1.2" strokeLinecap="round" />;
              })}
            </g>
          );
        })}
      </g>
      {/* thread sheen */}
      <circle cx="100" cy="100" r="92" fill={`url(#g${id})`} opacity=".35" pointerEvents="none" />
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".5" />
          <stop offset=".45" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".25" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Small swatches demonstrating stitch types. */
export function StitchSwatch({ type }) {
  const id = useId().replace(/:/g, '');
  const common = { viewBox: '0 0 120 80', className: 'h-full w-full', role: 'img' };
  if (type === 'satin') {
    const s = satinColumn({ points: [[14, 58], [60, 22], [106, 58]], width: 16, step: 1.7, color: GOLD, seed: 3 });
    return (
      <svg {...common} aria-label="Satin stitch column">
        {s.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={l.c} strokeWidth="1.4" strokeLinecap="round" />)}
      </svg>
    );
  }
  if (type === 'fill') {
    const t = tatamiRows({ x: 0, y: 0, w: 160, h: 140, gap: 2.6, stitch: 11 });
    return (
      <svg {...common} aria-label="Tatami fill stitches">
        <clipPath id={`f${id}`}><rect x="10" y="10" width="100" height="60" rx="10" /></clipPath>
        <g clipPath={`url(#f${id})`}><g transform="rotate(-30 60 40)">
          {t.rows.map((r, i) => <line key={i} x1={-30} y1={r.y - 30} x2={170} y2={r.y - 30} stroke={shade(TEAL, i % 4 === 0 ? -0.12 : 0)} strokeWidth="2.1" strokeDasharray={t.dash} strokeDashoffset={r.off} />)}
        </g></g>
      </svg>
    );
  }
  if (type === 'run') {
    return (
      <svg {...common} aria-label="Running stitch outline">
        <path d="M14 56 C 34 6, 60 74, 82 26 S 104 40, 108 30" fill="none" stroke={IVORY} strokeWidth="1.6" strokeDasharray="4 2.6" strokeLinecap="round" />
        <path d="M14 66 C 34 16, 60 84, 82 36 S 104 50, 108 40" fill="none" stroke={GOLD} strokeWidth="1.6" strokeDasharray="4 2.6" strokeLinecap="round" />
      </svg>
    );
  }
  // appliqué: fabric piece with satin edge
  const pts = [[24, 16], [96, 16], [96, 64], [24, 64], [24, 16]];
  const edge = satinColumn({ points: pts, width: 6, step: 1.5, color: '#a78bfa', seed: 9, tilt: 0.6 });
  return (
    <svg {...common} aria-label="Appliqué fabric with satin border">
      <rect x="24" y="16" width="72" height="48" fill="#7c3aed" opacity=".55" />
      <rect x="24" y="16" width="72" height="48" fill={`url(#w${id})`} />
      <defs>
        <pattern id={`w${id}`} width="3" height="3" patternUnits="userSpaceOnUse"><path d="M0 0h3v1H0z" fill="#fff" opacity=".08" /></pattern>
      </defs>
      {edge.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={l.c} strokeWidth="1.2" strokeLinecap="round" />)}
    </svg>
  );
}
