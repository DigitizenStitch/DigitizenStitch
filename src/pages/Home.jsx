import { Link } from 'react-router-dom';
import { ArrowRight, Clock, FileCheck2, Globe2, RefreshCw, Mail, ShieldCheck } from 'lucide-react';
import { Backdrop, CtaBand, PriceGrid, QuoteButtons, Reveal, SectionHeading } from '../components/ui';
import Gallery from '../components/Gallery';
import { PORTFOLIO, byCategory } from '../data/portfolio';
import { CONTACT } from '../data/site';

const SERVICES = [
  {
    to: '/embroidery-digitizing',
    title: 'Embroidery Digitizing',
    price: 'From $10',
    text: 'Logos and artwork converted into clean, production-ready stitch files for your embroidery machine.',
    image: byCategory('embroidery').find((p) => p.id === 'embroidery/d5'),
  },
  {
    to: '/vector-art',
    title: 'Vector Art',
    price: 'From $12',
    text: 'Blurry or low-resolution images redrawn as sharp, scalable vector artwork for print and production.',
    image: byCategory('vector').find((p) => p.id === 'vector/p8'),
  },
  {
    to: '/patches',
    title: 'Patch Design & Digitizing',
    price: 'From $10',
    text: 'Patch digitizing for your machine, plus physical patches made to your requirements by custom quote.',
    image: byCategory('patches').find((p) => p.id === 'patches/pa6'),
  },
];

const PROMISES = [
  { Icon: RefreshCw, title: 'Free revisions', text: 'If something needs adjusting, we revise it at no extra cost.' },
  { Icon: Clock, title: '2-hour rush available', text: 'Rush turnaround for eligible designs when you are on a deadline.' },
  { Icon: FileCheck2, title: 'Machine-ready formats', text: 'DST, PES and EMB as standard. Other formats on request.' },
  { Icon: Mail, title: 'Delivered by email', text: 'Your finished files arrive straight in your inbox.' },
  { Icon: ShieldCheck, title: 'Quote before work', text: 'You approve the price before we start. PayPal only.' },
  { Icon: Globe2, title: 'Serving clients worldwide', text: 'We work online with customers in every time zone.' },
];

const heroImages = ['embroidery/d1', 'vector/p9', 'patches/pa8'].map((id) => PORTFOLIO.find((p) => p.id === id));

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark relative overflow-hidden bg-navy-950 pb-20 pt-32 text-white sm:pt-40 lg:pb-28">
        <Backdrop />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow eyebrow-light page-enter">Crafting Excellence, One Stitch at a Time</p>
            <h1 className="page-enter mt-5 text-[2.6rem] leading-[1.05] text-white sm:text-6xl lg:text-[4.2rem]" style={{ animationDelay: '80ms' }}>
              Embroidery digitizing &amp; vector art, <em className="font-normal text-navy-200">ready for production.</em>
            </h1>
            <p className="page-enter mt-6 max-w-xl text-lg leading-relaxed text-white/75" style={{ animationDelay: '160ms' }}>
              Send us your logo or artwork. We turn it into clean stitch files and sharp vector art, with free revisions and a 2-hour rush option when you need it fast.
            </p>
            <div className="page-enter" style={{ animationDelay: '240ms' }}>
              <QuoteButtons light className="mt-9" />
            </div>
            <dl className="page-enter mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8" style={{ animationDelay: '320ms' }}>
              {[['$10', 'Digitizing from'], ['$12', 'Vector art from'], ['2 hr', 'Rush option']].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-xs uppercase tracking-[0.16em] text-white/50">{l}</dt>
                  <dd className="mt-1 font-display text-3xl text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Layered artwork collage */}
          <div className="relative mx-auto aspect-square w-full max-w-md sm:max-w-lg lg:col-span-6" aria-hidden="true">
            <div className="absolute inset-[8%] rounded-full border border-dashed border-white/15" />
            <div className="float-slow absolute left-0 top-[6%] w-[62%] overflow-hidden rounded-3xl shadow-lift ring-1 ring-white/10">
              <img src={heroImages[0].thumb} alt="" width="600" height="600" className="h-full w-full object-cover" />
            </div>
            <div className="float-slower absolute bottom-[4%] right-0 w-[52%] overflow-hidden rounded-3xl shadow-lift ring-1 ring-white/10">
              <img src={heroImages[1].thumb} alt="" width="600" height="600" className="h-full w-full object-cover" />
            </div>
            <div className="float-slow absolute bottom-[10%] left-[8%] w-[34%] overflow-hidden rounded-2xl shadow-lift ring-4 ring-navy-950">
              <img src={heroImages[2].thumb} alt="" width="600" height="600" className="h-full w-full object-cover" />
            </div>
            <div className="absolute right-[4%] top-[2%] rounded-2xl bg-white/95 px-4 py-3 text-navy-950 shadow-lift backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Formats</p>
              <p className="mt-0.5 font-display text-lg">DST · PES · EMB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="What we do" title="Three services, one standard of quality" intro="Each file is prepared for real production, not just to look good on screen." />
            <Reveal><Link to="/portfolio" className="btn-outline">See our work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></Reveal>
          </div>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.to} delay={i * 90}>
                <Link to={s.to} className="card card-hover group flex h-full flex-col overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img src={s.image.thumb} alt={s.image.alt} loading="lazy" width="600" height="600" className="h-full w-full object-cover transition duration-700 ease-premium group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-sm font-semibold text-navy-800">{s.price}</p>
                    <h3 className="mt-2 text-2xl">{s.title}</h3>
                    <p className="mt-3 flex-1 text-slate-600">{s.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-all group-hover:gap-3">
                      Explore service <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Promises */}
      <section className="section bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Why Digitize'NStitch" title="Built for businesses that need files that simply work" />
          </div>
          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {PROMISES.map(({ Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={(i % 2) * 90} className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy-950 text-white"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <div>
                  <h3 className="font-sans text-lg font-semibold">{title}</h3>
                  <p className="mt-1.5 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Portfolio" title="Recent work" intro="A selection of embroidery, vector and patch projects. Click any image to view it larger." />
            <Reveal><Link to="/portfolio" className="btn-outline">View full portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></Reveal>
          </div>
          <div className="mt-12">
            <Gallery
              items={['embroidery/d8', 'vector/p3', 'patches/pa2', 'embroidery/a3', 'vector/p2', 'patches/pa7'].map((id) => PORTFOLIO.find((p) => p.id === id)).filter(Boolean)}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Pricing" title="Clear starting prices" intro="Simple designs start from the prices below. You receive an exact quote before any work begins." />
          <div className="mt-12"><PriceGrid /></div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="section">
        <div className="container-x">
          <SectionHeading center eyebrow="How it works" title="From artwork to finished file in four steps" />
          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {['Send your artwork', 'Approve your quote', 'Pay via PayPal', 'Receive files by email'].map((t, i) => (
              <Reveal as="li" key={t} delay={i * 90} className="card p-7">
                <span className="font-display text-4xl text-navy-200">0{i + 1}</span>
                <p className="mt-4 font-semibold text-navy-950">{t}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10 text-center">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 font-semibold text-navy-800 transition-all hover:gap-3">
              Read the full process <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand text={`Upload your design for a quote, or message us on WhatsApp at ${CONTACT.phoneDisplay}.`} />
    </>
  );
}
