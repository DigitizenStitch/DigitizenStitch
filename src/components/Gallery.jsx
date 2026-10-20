import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export function Lightbox({ items, index, onClose, onIndex }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touch = useRef(null);
  const item = items[index];
  const go = useCallback((d) => onIndex((index + d + items.length) % items.length), [index, items.length, onIndex]);

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      previous?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'Tab') {
        // keep focus inside the dialog
        const f = dialogRef.current?.querySelectorAll('button');
        if (!f?.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [go, onClose]);

  // preload neighbours
  useEffect(() => {
    [1, -1].forEach((d) => {
      const n = items[(index + d + items.length) % items.length];
      if (n) new Image().src = n.src;
    });
  }, [index, items]);

  if (!item) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${items.length}: ${item.alt}`}
      className="on-dark anim-fade fixed inset-0 z-[80] flex flex-col bg-navy-ink/95 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current == null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touch.current = null;
      }}
    >
      <div className="flex items-center justify-between p-4 text-sm text-white/70 sm:p-6">
        <span aria-live="polite">{index + 1} / {items.length}</span>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-navy-950">
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <figure className="relative flex min-h-0 flex-1 flex-col items-center justify-center px-4 pb-6 sm:px-20" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <img key={item.src} src={item.src} alt={item.alt} className="anim-fade-scale max-h-[78vh] max-w-full rounded-xl object-contain shadow-lift" />
        <figcaption className="mt-4 text-center text-sm text-white/80">{item.alt}</figcaption>
      </figure>
      {items.length > 1 && (
        <>
          <button type="button" onClick={() => go(-1)} aria-label="Previous image" className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-navy-950 sm:left-6">
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next image" className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-navy-950 sm:right-6">
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </>
      )}
    </div>
  );
}

export default function Gallery({ items, columns = 'sm:grid-cols-2 lg:grid-cols-3', limit }) {
  const [open, setOpen] = useState(null);
  const shown = limit ? items.slice(0, limit) : items;

  return (
    <>
      <ul className={`grid grid-cols-2 gap-3 sm:gap-5 ${columns}`}>
        {shown.map((item, i) => (
          <li key={item.id} className="anim-fade-scale" style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}>
            <button
              type="button"
              data-cursor="view"
              onClick={() => setOpen(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-slate-200 shadow-soft"
            >
              <img
                src={item.thumb}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
                className="h-full w-full object-cover transition duration-700 ease-premium group-hover:scale-[1.06]"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/80 via-navy-950/0 to-transparent p-4 text-left text-sm font-medium text-white opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                {item.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {open !== null && <Lightbox items={shown} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}
    </>
  );
}
