import { useRef } from 'react';
import StitchArt from './StitchArt';

/** Interactive before/after slider. Dragging updates a CSS variable directly
 * (no React re-render per frame) and never drags the underlying images. */
export function BeforeAfter({ before, after, beforeLabel = 'Artwork', afterLabel = 'Digitized', caption, className = '' }) {
  const box = useRef(null);
  const range = useRef(null);
  const raf = useRef(0);

  const set = (pct) => {
    const v = Math.max(0, Math.min(100, pct));
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      box.current?.style.setProperty('--pos', `${v}%`);
      if (range.current) range.current.value = String(Math.round(v));
    });
  };
  const fromEvent = (e) => {
    const r = box.current.getBoundingClientRect();
    set(((e.clientX - r.left) / r.width) * 100);
  };

  return (
    <figure className={className}>
      <div
        ref={box}
        style={{ '--pos': '50%' }}
        className="group relative aspect-square w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-3xl bg-white shadow-lift"
        onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); fromEvent(e); }}
        onPointerMove={(e) => e.currentTarget.hasPointerCapture(e.pointerId) && fromEvent(e)}
        onDragStart={(e) => e.preventDefault()}
      >
        <div className="pointer-events-none absolute inset-0">{before}</div>
        <div className="pointer-events-none absolute inset-0 will-change-[clip-path]" style={{ clipPath: 'inset(0 0 0 var(--pos))' }}>{after}</div>
        <div className="pointer-events-none absolute inset-y-0 will-change-[left]" style={{ left: 'var(--pos)' }}>
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-thread shadow-[0_0_20px_rgba(233,184,114,.8)]" />
          <div className="absolute top-1/2 -ml-6 -mt-6 grid h-12 w-12 place-items-center rounded-full bg-thread text-ink shadow-glow transition-transform duration-300 group-active:scale-110" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" /></svg>
          </div>
        </div>
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white">{beforeLabel}</span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-thread px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-ink">{afterLabel}</span>
      </div>
      <label className="mt-4 block">
        <span className="sr-only">Compare {beforeLabel.toLowerCase()} and {afterLabel.toLowerCase()}</span>
        <input ref={range} type="range" min="0" max="100" defaultValue="50" onInput={(e) => set(Number(e.target.value))} className="w-full accent-[#e9b872]" />
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
