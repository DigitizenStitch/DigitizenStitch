import { useEffect, useRef } from 'react';

// Subtle ring + dot that trails the native cursor. The native cursor stays
// visible, the overlay has pointer-events: none, and it is disabled on touch
// devices and for users who prefer reduced motion.
const INTERACTIVE = 'a, button, [role="button"], input, select, textarea, label, summary, [data-cursor]';

export default function CustomCursor() {
  const ring = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduced.matches) return undefined;

    const root = document.documentElement;
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.1 ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      root.classList.add('cursor-on');
      const target = e.target instanceof Element ? e.target : null;
      const view = target?.closest('[data-cursor="view"]');
      root.classList.toggle('cursor-view', Boolean(view));
      root.classList.toggle('cursor-hover', !view && Boolean(target?.closest(INTERACTIVE)));
      root.classList.toggle('cursor-dark', Boolean(target?.closest('.on-dark')));
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => root.classList.remove('cursor-on');

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      root.classList.remove('cursor-on', 'cursor-hover', 'cursor-view', 'cursor-dark');
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true"><span>VIEW</span></div>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
