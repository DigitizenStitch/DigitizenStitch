import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { CONTACT } from '../data/site';
import { WhatsAppIcon } from './Icons';

export function Reveal({ as: Tag = 'div', delay = 0, img = false, className = '', children, ...rest }) {
  return (
    <Tag className={`${img ? 'reveal-img' : 'reveal'} ${className}`} style={delay ? { '--d': `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  );
}

/** Heading lines that slide up from behind a mask, one after another. */
export function LineReveal({ lines, start = 0, step = 120 }) {
  return lines.map((l, i) => {
    const [text, cls] = Array.isArray(l) ? l : [l, ''];
    return (
      <span key={i} className="line-mask">
        <span className={`line-in ${cls}`} style={{ '--d': `${start + i * step}ms` }}>{text}</span>
        {i < lines.length - 1 && ' '}
      </span>
    );
  });
}

/** Dark, layered backdrop: static glows (no filters, cheap to paint), grid, a running stitch line. */
export function Backdrop({ stitch = true }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(40% 45% at 88% 8%, rgba(29,78,216,.32), transparent 70%), radial-gradient(35% 40% at 6% 95%, rgba(124,58,237,.16), transparent 70%), radial-gradient(25% 30% at 70% 80%, rgba(45,212,191,.08), transparent 70%)',
        }}
      />
      <div className="bg-grid absolute inset-0" />
      {stitch && (
        <svg className="absolute bottom-6 left-0 h-24 w-full text-thread/30" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="none">
          <path className="stitch-run" d="M0 70 C 240 10, 480 100, 720 50 S 1200 0, 1440 40" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro, crumb, children, aside }) {
  return (
    <section className="dark-surface grain relative overflow-hidden bg-mesh pb-20 pt-36 sm:pb-28 sm:pt-44">
      <Backdrop />
      <div className={`container-x relative ${aside ? 'grid items-center gap-14 lg:grid-cols-12' : ''}`}>
        <div className={aside ? 'lg:col-span-7' : ''}>
          {crumb && (
            <nav aria-label="Breadcrumb" className="page-enter mb-8 font-mono text-xs text-slate-400">
              <ol className="flex items-center gap-1.5">
                <li><Link to="/" className="transition hover:text-white">Home</Link></li>
                <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
                <li aria-current="page" className="text-thread">{crumb}</li>
              </ol>
            </nav>
          )}
          {eyebrow && <p className="eyebrow eyebrow-gold page-enter">{eyebrow}</p>}
          <h1 className="mt-5 max-w-4xl text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-7xl">
            <LineReveal lines={[title]} start={100} />
          </h1>
          {intro && <p className="page-enter mt-7 max-w-2xl text-lg leading-relaxed text-slate-300" style={{ animationDelay: '300ms' }}>{intro}</p>}
          {children}
        </div>
        {aside && <div className="page-enter lg:col-span-5" style={{ animationDelay: '350ms' }}>{aside}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, center = false, dark = false, accent = 'gold' }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`eyebrow ${dark ? (accent === 'teal' ? 'eyebrow-teal' : 'eyebrow-gold') : ''}`}>{eyebrow}</p>}
      <h2 className={`mt-5 text-[2.1rem] leading-[1.08] sm:text-5xl ${dark ? 'text-white' : ''}`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{intro}</p>}
    </Reveal>
  );
}

export function QuoteButtons({ className = '', secondary = 'whatsapp', quoteTo = '/quote' }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link to={quoteTo} className="btn-gold">
        Get a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      {secondary === 'work' ? (
        <Link to="/portfolio" className="btn-glass">Explore Our Work</Link>
      ) : (
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glass">
          <WhatsAppIcon className="h-4 w-4 text-[#4ade80]" aria-hidden="true" /> Chat on WhatsApp
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
    </div>
  );
}

export function CtaBand({ title = 'Ready to see your design stitched perfectly?', text = 'Send your artwork today. You get a clear price before any work begins.' }) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="dark-surface grain relative overflow-hidden rounded-[2.5rem] bg-mesh px-6 py-16 text-center sm:px-12 sm:py-24">
          <Backdrop />
          <div className="relative">
            <p className="eyebrow eyebrow-gold">Start your order</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl sm:text-6xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">{text}</p>
            <QuoteButtons className="mt-10 justify-center" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FormatChips({ items, muted = false, dark = false }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((f) => (
        <li
          key={f}
          className={`rounded-full border px-3.5 py-1.5 font-mono text-[13px] font-medium tracking-wide ${
            muted
              ? dark ? 'border-dashed border-white/20 text-slate-400' : 'border-dashed border-slate-300 text-slate-500'
              : dark ? 'border-thread/30 bg-thread/10 text-thread' : 'border-navy-900/15 bg-navy-50 text-navy-900'
          }`}
        >
          {f}
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items, dark = false, accent = 'text-navy-800' }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <Check className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? 'text-thread' : accent}`} aria-hidden="true" />
          <span className={dark ? 'text-slate-300' : ''}>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** Number that counts up once when scrolled into view. Renders the final value on the server. */
export function Counter({ value, decimals = 0, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return undefined;
    setShown(0);
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / 1600);
        setShown(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  return (
    <span ref={ref}>
      {prefix}{shown.toFixed(decimals)}{suffix}
    </span>
  );
}

/** Infinite horizontal ticker. */
export function Marquee({ items, className = '' }) {
  const row = [...items, ...items];
  return (
    <div className={`relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] ${className}`}>
      <ul className="marquee flex w-max gap-4">
        {row.map((t, i) => (
          <li key={i} aria-hidden={i >= items.length ? 'true' : undefined} className="flex items-center gap-4 whitespace-nowrap font-display text-2xl text-white/80 sm:text-3xl">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-thread" />
          </li>
        ))}
      </ul>
    </div>
  );
}
