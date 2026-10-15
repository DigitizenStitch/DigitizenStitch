import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CONTACT, PRICE_NOTE, PRICES } from '../data/site';
import { WhatsAppIcon } from './Icons';

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  return (
    <Tag className={`reveal ${className}`} style={delay ? { '--d': `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  );
}

export function PageHeader({ eyebrow, title, intro, crumb, children }) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy-950 pb-20 pt-32 text-white sm:pb-24 sm:pt-40">
      <Backdrop />
      <div className="container-x relative">
        {crumb && (
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
            <ol className="flex items-center gap-1.5">
              <li><Link to="/" className="transition hover:text-white">Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li aria-current="page" className="text-white/90">{crumb}</li>
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow eyebrow-light page-enter">{eyebrow}</p>}
        <h1 className="page-enter mt-4 max-w-4xl text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className="page-enter mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

// Decorative layered backdrop for dark sections: soft glow + stitched curve.
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-navy-700/30 blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-navy-500/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
      />
      <svg className="absolute bottom-0 left-0 h-40 w-full text-white/15" viewBox="0 0 1440 160" preserveAspectRatio="none" fill="none">
        <path className="stitch-draw" d="M0 120 C 240 40, 480 160, 720 90 S 1200 20, 1440 80" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, intro, center = false, light = false }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</p>}
      <h2 className={`mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${light ? 'text-white' : ''}`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-slate-600'}`}>{intro}</p>}
    </Reveal>
  );
}

export function QuoteButtons({ light = false, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link to="/quote" className={light ? 'btn-light' : 'btn-primary'}>
        Get a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
        <WhatsAppIcon className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  );
}

export function CtaBand({ title = 'Ready to bring your design to life?', text = 'Send your artwork and get a clear quote before any work begins.' }) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="on-dark relative overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <Backdrop />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">{text}</p>
            <QuoteButtons light className="mt-8 justify-center" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PriceGrid({ highlight }) {
  return (
    <div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PRICES.map((p, i) => {
          const active = highlight?.includes(p.service);
          return (
            <Reveal as="li" key={p.service} delay={i * 80} className={`card card-hover relative p-6 ${active ? 'border-navy-900 ring-1 ring-navy-900' : ''}`}>
              <p className="text-sm font-medium text-slate-500">{p.service}</p>
              <p className="mt-3 font-display text-3xl text-navy-950">
                {p.amount ? (
                  <>
                    <span className="block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Starting at</span>${p.amount}
                  </>
                ) : (
                  <>
                    <span className="block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Pricing</span>Custom Quote
                  </>
                )}
              </p>
              <Link to={p.amount ? p.path : '/quote'} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition hover:gap-2.5">
                {p.amount ? 'Learn more' : 'Request a Quote'} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">about {p.service}</span>
              </Link>
            </Reveal>
          );
        })}
      </ul>
      <p className="mt-6 text-sm text-slate-500">{PRICE_NOTE} Payments are accepted via PayPal only.</p>
    </div>
  );
}

export function FormatChips({ items, muted = false }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((f) => (
        <li
          key={f}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold tracking-wide ${
            muted ? 'border-dashed border-slate-300 text-slate-500' : 'border-navy-900/15 bg-navy-50 text-navy-900'
          }`}
        >
          {f}
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items, light = false }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span aria-hidden="true" className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full ${light ? 'bg-white/15 text-white' : 'bg-navy-900 text-white'}`}>
            <svg viewBox="0 0 12 12" className="h-3 w-3"><path d="M2.5 6.2l2.2 2.2 4.8-4.9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <span className={light ? 'text-white/80' : ''}>{t}</span>
        </li>
      ))}
    </ul>
  );
}
