import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Backdrop, CheckList, CtaBand, FormatChips, PageHeader, QuoteButtons, Reveal, SectionHeading } from '../components/ui';
import Gallery from '../components/Gallery';
import { ALL_FAQS } from '../data/faq';

// Shared layout for the service pages. Each page supplies its own content.
export default function ServicePage({ content }) {
  const { crumb, eyebrow, title, intro, priceLabel, price, visual, overview, uses, includes, formats, gallery, faqs, related, pricing } = content;
  const faqItems = faqs.map((q) => ALL_FAQS.find((f) => f.q === q)).filter(Boolean);

  return (
    <>
      <PageHeader crumb={crumb} eyebrow={eyebrow} title={title} intro={intro} aside={visual}>
        <div className="page-enter mt-10 flex flex-wrap items-center gap-8" style={{ animationDelay: '450ms' }}>
          <QuoteButtons />
          <p>
            <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">{priceLabel}</span>
            <span className="font-display text-3xl text-gold">{price}</span>
          </p>
        </div>
      </PageHeader>

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Overview" title={overview.title} />
            <Reveal className="mt-8 space-y-5 text-lg leading-relaxed text-slate-600">
              {overview.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5">
            <div className="dark-surface grain relative overflow-hidden rounded-[2rem] bg-ink p-8 sm:p-10">
              <Backdrop stitch={false} />
              <div className="relative">
                <h2 className="font-sans text-lg font-semibold">What&rsquo;s included</h2>
                <div className="mt-6"><CheckList items={includes} dark /></div>
                {formats.map((f) => (
                  <div key={f.label} className="mt-8 border-t border-white/10 pt-6">
                    <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">{f.label}</h3>
                    <div className="mt-3"><FormatChips items={f.items} muted={f.muted} dark /></div>
                    {f.note && <p className="mt-3 text-sm text-slate-400">{f.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {pricing}

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Common uses" title={uses.title} />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {uses.items.map(([h, t], i) => (
              <Reveal as="li" key={h} delay={(i % 3) * 80} className="group bg-white p-8 transition-colors duration-500 hover:bg-paper">
                <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
                <h3 className="mt-4 font-sans text-xl font-semibold transition-colors group-hover:text-navy-800">{h}</h3>
                <p className="mt-2 text-slate-600">{t}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {gallery && (
        <section className="section">
          <div className="container-x">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading eyebrow="Samples" title={gallery.title} intro={gallery.intro} />
              <Reveal><Link to={`/portfolio?category=${gallery.category}`} className="btn-outline">See more <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></Reveal>
            </div>
            <div className="mt-14"><Gallery items={gallery.items} limit={8} columns="sm:grid-cols-3 lg:grid-cols-4" /></div>
          </div>
        </section>
      )}

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Questions about this service" />
            <Reveal className="mt-8"><Link to="/faq" className="btn-outline">All FAQs <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></Reveal>
          </div>
          <div className="space-y-3 lg:col-span-8">
            {faqItems.map((f) => (
              <Reveal key={f.q}>
                <details className="card group open:shadow-lift">
                  <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-sans text-lg font-semibold">{f.q}</h3>
                    <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-thread transition-transform duration-500 group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-6 pb-6 leading-relaxed text-slate-600">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {related && (
        <nav aria-label="Related services" className="pt-20">
          <ul className="container-x grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.to}>
                <Link to={r.to} className="group flex items-center justify-between rounded-3xl border border-ink/10 p-7 transition hover:border-ink hover:bg-ink hover:text-white">
                  <span><span className="block font-mono text-[11px] uppercase tracking-widest text-slate-400">Also see</span><span className="font-display text-2xl">{r.label}</span></span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <CtaBand />
    </>
  );
}
