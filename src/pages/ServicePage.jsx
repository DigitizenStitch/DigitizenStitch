import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CheckList, CtaBand, FormatChips, PageHeader, QuoteButtons, Reveal, SectionHeading } from '../components/ui';
import Gallery from '../components/Gallery';
import { ALL_FAQS } from '../data/faq';
import { PRICE_NOTE } from '../data/site';

// Shared layout for the three service pages. Each page supplies its own content.
export default function ServicePage({ content }) {
  const { crumb, eyebrow, title, intro, price, priceLabel, overview, uses, includes, formats, gallery, faqs, related, extra } = content;
  const faqItems = faqs.map((q) => ALL_FAQS.find((f) => f.q === q)).filter(Boolean);

  return (
    <>
      <PageHeader crumb={crumb} eyebrow={eyebrow} title={title} intro={intro}>
        <div className="page-enter mt-10 flex flex-wrap items-center gap-6">
          <QuoteButtons light />
          <p className="text-white/70">
            <span className="block text-xs uppercase tracking-[0.18em] text-white/50">{priceLabel}</span>
            <span className="font-display text-3xl text-white">{price}</span>
          </p>
        </div>
      </PageHeader>

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Overview" title={overview.title} />
            <Reveal className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              {overview.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
            {extra}
          </div>
          <Reveal className="lg:col-span-5">
            <div className="card p-8">
              <h2 className="font-sans text-lg font-semibold">What&rsquo;s included</h2>
              <div className="mt-5"><CheckList items={includes} /></div>
              <hr className="my-7 border-slate-200" />
              {formats.map((f) => (
                <div key={f.label} className="mt-5 first:mt-0">
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">{f.label}</h3>
                  <div className="mt-3"><FormatChips items={f.items} muted={f.muted} /></div>
                  {f.note && <p className="mt-2 text-sm text-slate-500">{f.note}</p>}
                </div>
              ))}
              <hr className="my-7 border-slate-200" />
              <p className="text-sm text-slate-500">{PRICE_NOTE}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Common uses" title={uses.title} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {uses.items.map(([h, t], i) => (
              <Reveal as="li" key={h} delay={(i % 3) * 80} className="card card-hover p-7">
                <h3 className="font-sans text-lg font-semibold">{h}</h3>
                <p className="mt-2 text-slate-600">{t}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Samples" title={gallery.title} />
            <Reveal><Link to={`/portfolio?category=${gallery.category}`} className="btn-outline">More {gallery.label} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></Reveal>
          </div>
          <div className="mt-12"><Gallery items={gallery.items} limit={6} /></div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Questions about this service" />
            <Reveal className="mt-6"><Link to="/faq" className="font-semibold text-navy-800 underline underline-offset-4">See all FAQs</Link></Reveal>
          </div>
          <dl className="space-y-4 lg:col-span-8">
            {faqItems.map((f) => (
              <Reveal key={f.q} className="card p-6">
                <dt className="font-sans text-lg font-semibold text-navy-950">{f.q}</dt>
                <dd className="mt-2 text-slate-600">{f.a}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {related && (
        <section className="pt-20">
          <div className="container-x">
            <p className="text-center text-sm text-slate-500">
              Also see:{' '}
              {related.map((r, i) => (
                <span key={r.to}>
                  {i > 0 && ' · '}
                  <Link to={r.to} className="font-semibold text-navy-800 underline underline-offset-4">{r.label}</Link>
                </span>
              ))}
            </p>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
