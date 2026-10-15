import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock, Quote as QuoteIcon, Sparkles } from 'lucide-react';
import { Counter, Reveal } from './ui';
import { PACKAGES, PLACEHOLDER_STATS, PRICE_NOTE, SHOW_PLACEHOLDERS, TESTIMONIALS, VERIFIED_STATS } from '../data/site';

const ACCENTS = {
  cyan: { ring: 'from-signal/60 via-signal/10 to-transparent', text: 'text-signal', chip: 'bg-signal/10 text-signal', glow: 'bg-signal/20', hoop: 'w-[38%]' },
  gold: { ring: 'from-thread via-thread/30 to-orchid/30', text: 'text-thread', chip: 'bg-thread text-ink', glow: 'bg-thread/25', hoop: 'w-[58%]' },
  violet: { ring: 'from-orchid/60 via-orchid/10 to-transparent', text: 'text-orchid', chip: 'bg-orchid/10 text-orchid', glow: 'bg-orchid/20', hoop: 'w-[84%]' },
};

/** The three embroidery digitizing packages, exactly as supplied by the owner. */
export function PricingTiers({ headingLevel = 'h3' }) {
  const H = headingLevel;
  return (
    <div>
      <ul className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {PACKAGES.map((p, i) => {
          const a = ACCENTS[p.accent];
          return (
            <Reveal as="li" key={p.id} delay={i * 110} className={`group relative rounded-[2rem] bg-gradient-to-br p-px ${a.ring} ${p.featured ? 'lg:-my-4' : ''}`}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(2rem-1px)] bg-ink-900 p-7 transition-transform duration-500 ease-premium group-hover:-translate-y-1 sm:p-9">
                <div aria-hidden="true" className={`absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${a.glow} opacity-60`} />
                {/* size visual: a design growing inside the hoop */}
                <div aria-hidden="true" className="absolute right-6 top-6 grid h-20 w-20 place-items-center rounded-full border border-dashed border-white/15">
                  <span className={`block aspect-square rounded-full border-2 ${a.text} border-current opacity-80 ${a.hoop}`} />
                </div>
                {p.featured && <span className="relative mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-thread px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink"><Sparkles className="h-3 w-3" aria-hidden="true" /> Most popular sizes</span>}
                <p className={`relative font-mono text-xs uppercase tracking-[0.2em] ${a.text}`}>Package {i + 1}</p>
                <H className="relative mt-2 text-3xl text-white">{p.name}</H>
                <p className="relative mt-6 font-display text-[2.6rem] leading-none text-white sm:text-5xl">
                  {p.min ? (
                    <>${p.min}<span className="mx-1 text-slate-500">–</span>${p.max}</>
                  ) : (
                    <span className="text-gold">On Quote</span>
                  )}
                </p>
                <p className="relative mt-2 text-sm text-slate-400">{p.min ? 'Price range per design' : 'Priced individually for large designs'}</p>
                <p className={`relative mt-5 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ${a.chip}`}>
                  <Clock className="h-4 w-4" aria-hidden="true" /> {p.turnaround} turnaround
                </p>
                <ul className="relative mt-7 flex-1 space-y-3 border-t border-white/10 pt-7 text-[15px] text-slate-300">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3"><Check className={`mt-0.5 h-5 w-5 shrink-0 ${a.text}`} aria-hidden="true" />{f}</li>
                  ))}
                </ul>
                <Link
                  to={`/quote?package=${p.id}`}
                  className={`relative mt-9 w-full ${p.featured ? 'btn-gold' : 'btn-glass'} uppercase tracking-wider`}
                >
                  {p.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">: {p.name} package</span>
                </Link>
              </div>
            </Reveal>
          );
        })}
      </ul>
      <p className="mt-8 text-center text-sm text-slate-400">{PRICE_NOTE} Payment via PayPal only.</p>
    </div>
  );
}

/** Verified figures only; unverified ones appear as labelled placeholders while SHOW_PLACEHOLDERS is on. */
export function StatsBand() {
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-4">
      {VERIFIED_STATS.map((s, i) => (
        <Reveal as="li" key={s.label} delay={i * 90} className="bg-ink-900 p-6 sm:p-9">
          <p className="font-display text-4xl text-white sm:text-5xl">
            <Counter value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
          </p>
          <p className="mt-3 text-sm leading-snug text-slate-400">{s.label}</p>
        </Reveal>
      ))}
      {SHOW_PLACEHOLDERS &&
        PLACEHOLDER_STATS.map((s) => (
          <li key={s.label} className="col-span-1 bg-ink-900 p-6 sm:p-9 lg:col-span-2">
            <p className="font-mono text-lg text-thread/80">{s.value}</p>
            <p className="mt-3 text-sm text-slate-400">{s.label} <span className="rounded bg-coral/15 px-1.5 py-0.5 font-mono text-[10px] uppercase text-coral">placeholder · not published</span></p>
          </li>
        ))}
    </ul>
  );
}

/** Testimonials: real ones from data/site.js, otherwise labelled placeholders (preview only). */
export function Testimonials() {
  if (TESTIMONIALS.length) {
    return (
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal as="li" key={i} delay={i * 90} className="card flex flex-col overflow-hidden">
            {t.image && <img src={t.image} alt={`Sewout for ${t.project}`} loading="lazy" className="aspect-[4/3] w-full object-cover" />}
            <figure className="flex flex-1 flex-col p-7">
              <blockquote className="flex-1 text-lg leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm"><b className="text-ink">{t.name}</b>{t.business && `, ${t.business}`}<span className="block text-slate-500">{t.project}</span></figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    );
  }
  if (!SHOW_PLACEHOLDERS) return null;
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <Reveal as="li" key={i} delay={i * 90} className="relative flex flex-col rounded-3xl border-2 border-dashed border-ink/15 bg-white/60 p-7">
          <span className="absolute right-5 top-5 rounded bg-coral/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-coral">Placeholder</span>
          <QuoteIcon className="h-8 w-8 text-ink/20" aria-hidden="true" />
          <div className="mt-5 aspect-[4/3] rounded-2xl bg-ink/5 p-4 font-mono text-xs text-slate-500">[Genuine sewout photo]</div>
          <p className="mt-5 flex-1 text-slate-500">[Real client feedback, used with permission]</p>
          <p className="mt-5 font-mono text-xs text-slate-400">[Client name / business] · [Project]</p>
        </Reveal>
      ))}
    </ul>
  );
}
