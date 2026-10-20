import { useEffect, useRef } from 'react';

// A soft gold ring that trails the normal mouse pointer and grows over links
// and buttons. The real pointer stays visible, so clicking and text selection
// work exactly as usual. Disabled on touch screens and for reduced motion.
const INTERACTIVE = 'a, button, [role="button"], input, select, textarea, label, summary, [data-cursor]';

export default function Cursor() {
  const ring = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const root = document.documentElement;
    let x = 0, y = 0, rx = 0, ry = 0, raf = 0;

    const tick = () => {
      rx += (x - rx) * 0.22;
      ry += (y - ry) * 0.22;
      ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.2 ? requestAnimationFrame(tick) : 0;
    };
    const onMove = (e) => {
      if (!root.classList.contains('cursor-on')) { rx = e.clientX; ry = e.clientY; root.classList.add('cursor-on'); }
      x = e.clientX;
      y = e.clientY;
      root.classList.toggle('cursor-hover', e.target instanceof Element && Boolean(e.target.closest(INTERACTIVE)));
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => root.classList.remove('cursor-on');
    const onDown = () => root.classList.add('cursor-down');
    const onUp = () => root.classList.remove('cursor-down');

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
      root.classList.remove('cursor-on', 'cursor-hover', 'cursor-down');
    };
  }, []);

  return <div ref={ring} className="cursor-ring" aria-hidden="true" />;
}
