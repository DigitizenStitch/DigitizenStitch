import { useRef, useState } from 'react';
import StitchArt from './StitchArt';

/** Interactive before/after slider. `before` and `after` are any nodes of the same size. */
export function BeforeAfter({ before, after, beforeLabel = 'Artwork', afterLabel = 'Digitized', caption, className = '' }) {
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
        className="relative aspect-square w-full touch-pan-y select-none overflow-hidden rounded-3xl bg-white shadow-lift"
        onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
        onPointerDown={(e) => move(e.clientX)}
      >
        <div className="absolute inset-0">{before}</div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>{after}</div>
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-thread" />
          <div className="absolute top-1/2 -ml-5 -mt-5 grid h-10 w-10 place-items-center rounded-full bg-thread text-ink shadow-glow" aria-hidden="true">⇆</div>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white">{beforeLabel}</span>
        <span className="absolute right-4 top-4 rounded-full bg-thread px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-ink">{afterLabel}</span>
      </div>
      <label className="mt-4 block">
        <span className="sr-only">Compare {beforeLabel.toLowerCase()} and {afterLabel.toLowerCase()}</span>
        <input type="range" min="0" max="100" value={Math.round(pos)} onChange={(e) => setPos(Number(e.target.value))} className="w-full accent-[#e9b872]" />
      </label>
      {caption && <figcaption className="mt-2 text-sm text-slate-400">{caption}</figcaption>}
    </figure>
  );
}

/** Embroidery hoop framing a stitched design (code-drawn). */
export function Hoop({ className = '', animate = false }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <div className="absolute inset-0 rounded-full p-[3.5%]" style={{ background: 'linear-gradient(145deg,#e7c79a,#a8783e 45%,#f1d7ad 60%,#8a5d2a)' }}>
        <div className="h-full w-full rounded-full p-[2.5%]" style={{ background: 'linear-gradient(145deg,#caa16b,#7a5226)' }}>
          <div className="fabric relative grid h-full w-full place-items-center overflow-hidden rounded-full shadow-[inset_0_10px_30px_rgba(0,0,0,.55)]">
            <StitchArt animate={animate} className="w-[68%]" />
          </div>
        </div>
      </div>
      <div className="absolute -right-[3%] top-[44%] h-[12%] w-[9%] rounded-md" style={{ background: 'linear-gradient(180deg,#d9dee8,#7d8597)' }} />
    </div>
  );
}
