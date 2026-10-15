import { useId, useRef, useState } from 'react';
import StitchArt from './StitchArt';

// Original illustrations used across the site. All are drawn in code, so they are
// sharp at any size, weigh almost nothing and are clearly illustrative.

/** A digitizing workstation window (illustrative UI, not a real product). */
export function SoftwareWindow({ animate = true, className = '' }) {
  const objects = [
    { name: 'Fill · Tatami 45°', color: '#1e3a8a' },
    { name: 'Run · Detail ring', color: '#f6f1e6' },
    { name: 'Satin · Border', color: '#e9b872' },
    { name: 'Satin · Star', color: '#2dd4bf' },
  ];
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 text-[11px] text-slate-300 shadow-lift backdrop-blur-xl ${className}`} role="img" aria-label="Illustration of embroidery digitizing software showing stitch objects, properties and a stitched emblem">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-coral/80" /><span className="h-2.5 w-2.5 rounded-full bg-thread/80" /><span className="h-2.5 w-2.5 rounded-full bg-signal/80" />
        <span className="ml-3 truncate font-mono text-slate-400">emblem_left-chest.dst</span>
        <span className="ml-auto hidden items-center gap-1.5 font-mono text-signal sm:flex"><span className="pulse-dot h-1.5 w-1.5 rounded-full bg-signal" />sewing preview</span>
      </div>
      <div className="grid grid-cols-[1fr] sm:grid-cols-[150px_1fr_150px]">
        <div className="hidden border-r border-white/10 p-3 sm:block">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">Objects</p>
          <ul className="space-y-1.5">
            {objects.map((o, i) => (
              <li key={o.name} className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${i === 2 ? 'bg-white/10 text-white' : ''}`}>
                <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: o.color }} />
                <span className="truncate">{o.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative grid place-items-center p-5 sm:p-6">
          <div className="absolute inset-3 rounded-xl fabric opacity-90" />
          <div className="absolute inset-3 rounded-xl bg-grid opacity-60" />
          <StitchArt animate={animate} title="" className="relative w-full max-w-[230px] drop-shadow-2xl" />
        </div>
        <div className="hidden border-l border-white/10 p-3 font-mono sm:block">
          <p className="mb-2 text-[10px] uppercase tracking-widest text-slate-500">Properties</p>
          <dl className="space-y-2">
            {[['Stitch', 'Satin'], ['Density', '0.40 mm'], ['Underlay', 'Edge + zigzag'], ['Pull comp', '0.20 mm'], ['Hoop', '4 × 4']].map(([k, v]) => (
              <div key={k}><dt className="text-slate-500">{k}</dt><dd className="text-white">{v}</dd></div>
            ))}
          </dl>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-white/10 px-4 py-2 font-mono text-slate-400">
        <span>Colors <b className="text-white">4</b></span>
        <span>Size <b className="text-white">3.8 × 3.8 in</b></span>
        <span className="ml-auto text-thread">DST · PES · EMB</span>
      </div>
    </div>
  );
}

/** Polo shirt with an embroidered left-chest emblem. */
export function PoloShirt({ className = '', color = '#13204f' }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 300 300" className={className} role="img" aria-label="Illustration of a navy polo shirt with an embroidered left-chest emblem">
      <defs>
        <linearGradient id={`p${id}`} x1="0" x2="1">
          <stop offset="0" stopColor={color} /><stop offset=".55" stopColor="#1e2c66" /><stop offset="1" stopColor="#0d1638" />
        </linearGradient>
        <pattern id={`k${id}`} width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".6" fill="#fff" opacity=".06" /><circle cx="3" cy="3" r=".6" fill="#000" opacity=".15" /></pattern>
      </defs>
      <path d="M95 40 L130 30 Q150 48 170 30 L205 40 L262 80 L240 132 L212 118 L212 270 Q150 282 88 270 L88 118 L60 132 L38 80 Z" fill={`url(#p${id})`} />
      <path d="M95 40 L130 30 Q150 48 170 30 L205 40 L262 80 L240 132 L212 118 L212 270 Q150 282 88 270 L88 118 L60 132 L38 80 Z" fill={`url(#k${id})`} />
      <path d="M130 30 L150 70 L170 30" fill="#0b1433" stroke="#2a3a7a" strokeWidth="2" />
      <path d="M150 70 L150 110" stroke="#0b1433" strokeWidth="3" />
      {[80, 95].map((y) => <circle key={y} cx="150" cy={y} r="2.6" fill="#e9e3d4" />)}
      <path d="M88 118 L60 132 M212 118 L240 132" stroke="#0b1433" strokeWidth="2" opacity=".6" />
      <foreignObject x="168" y="92" width="34" height="34"><StitchArt className="h-full w-full" title="" /></foreignObject>
    </svg>
  );
}

/** Structured cap with front embroidery. */
export function Cap({ className = '' }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 300 220" className={className} role="img" aria-label="Illustration of a structured cap with front embroidery">
      <defs>
        <radialGradient id={`c${id}`} cx=".4" cy=".35" r=".8"><stop offset="0" stopColor="#f2efe7" /><stop offset="1" stopColor="#c9c3b3" /></radialGradient>
        <linearGradient id={`b${id}`} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#1e3a8a" /><stop offset="1" stopColor="#0f1d4a" /></linearGradient>
      </defs>
      <path d="M40 150 Q50 40 150 34 Q250 40 262 150 Z" fill={`url(#c${id})`} />
      <path d="M150 34 L150 150 M95 46 Q110 100 104 150 M205 46 Q190 100 196 150" stroke="#b5ae9c" strokeWidth="1.4" fill="none" strokeDasharray="3 2.2" />
      <circle cx="150" cy="38" r="6" fill="#d8d2c2" />
      <path d="M30 150 Q150 128 272 150 Q290 178 250 196 Q150 168 50 196 Q12 178 30 150 Z" fill={`url(#b${id})`} />
      <path d="M44 160 Q150 140 258 160" stroke="#e9b872" strokeWidth="1.2" strokeDasharray="3 2.4" fill="none" />
      <foreignObject x="118" y="70" width="64" height="64"><StitchArt className="h-full w-full" title="" /></foreignObject>
    </svg>
  );
}

/** Interactive before/after: source vector artwork vs stitched result (both illustrative). */
export function BeforeAfter({ className = '' }) {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const move = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };
  return (
    <figure className={className}>
      <div
        ref={ref}
        className="relative aspect-square w-full touch-pan-y select-none overflow-hidden rounded-3xl"
        onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
        onPointerDown={(e) => move(e.clientX)}
      >
        <div className="absolute inset-0 grid place-items-center bg-white p-[12%]">
          <StitchArt flat className="w-full" />
        </div>
        <div className="absolute inset-0 grid place-items-center fabric p-[12%]" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <StitchArt className="w-full drop-shadow-2xl" />
        </div>
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-thread shadow-glow" />
          <div className="absolute top-1/2 -ml-5 -mt-5 grid h-10 w-10 place-items-center rounded-full bg-thread text-ink shadow-glow">⇆</div>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white">Artwork</span>
        <span className="absolute right-4 top-4 rounded-full bg-thread px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-ink">Stitched</span>
      </div>
      <label className="mt-4 block">
        <span className="sr-only">Compare artwork and stitched result</span>
        <input type="range" min="0" max="100" value={Math.round(pos)} onChange={(e) => setPos(Number(e.target.value))} className="w-full accent-[#e9b872]" />
      </label>
      <figcaption className="mt-2 text-sm text-slate-400">Illustration: drag to compare source artwork with its stitched rendering.</figcaption>
    </figure>
  );
}

/** Embroidery hoop framing a stitched design. */
export function Hoop({ className = '', animate = false }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <div className="absolute inset-0 rounded-full p-[3.5%]" style={{ background: 'linear-gradient(145deg,#e7c79a,#a8783e 45%,#f1d7ad 60%,#8a5d2a)' }}>
        <div className="h-full w-full rounded-full p-[2.5%]" style={{ background: 'linear-gradient(145deg,#caa16b,#7a5226)' }}>
          <div className="fabric relative grid h-full w-full place-items-center overflow-hidden rounded-full shadow-[inset_0_10px_30px_rgba(0,0,0,.55)]">
            <StitchArt animate={animate} className="w-[68%] drop-shadow-2xl" />
          </div>
        </div>
      </div>
      <div className="absolute -right-[3%] top-[44%] h-[12%] w-[9%] rounded-md" style={{ background: 'linear-gradient(180deg,#d9dee8,#7d8597)' }} />
    </div>
  );
}
