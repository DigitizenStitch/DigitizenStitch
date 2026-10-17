import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CreditCard, FileCheck2, Globe2, Layers, Mail, RefreshCw, Ruler, Timer } from 'lucide-react';
import { Backdrop, CtaBand, FormatChips, LineReveal, Marquee, QuoteButtons, Reveal, SectionHeading } from '../components/ui';
import { PricingTiers, StatsBand, Testimonials } from '../components/sections';
import { BeforeAfter } from '../components/art/Scenes';
import { IMAGES, pic } from '../data/images';
import Gallery from '../components/Gallery';
import { byCategory } from '../data/portfolio';
import { FAQ_GROUPS } from '../data/faq';
import { FORMATS } from '../data/site';

/** Moves layered hero elements slightly with the pointer (desktop, motion allowed). */
function useParallax() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) return undefined;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
        el.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
      });
    };
    el.addEventListener('pointermove', onMove);
    return () => el.removeEventListener('pointermove', onMove);
  }, []);
  return ref;
}

const layer = (depth) => ({ transform: `translate3d(calc(var(--px,0) * ${depth}px), calc(var(--py,0) * ${depth}px), 0)`, transition: 'transform .4s cubic-bezier(.2,.7,.2,1)' });

const SERVICES = [
  { to: '/embroidery-digitizing', k: '01', title: 'Embroidery Digitizing', price: '$4.99–$14.99 · large on quote', text: 'Your logo or artwork rebuilt stitch by stitch for your machine, hoop and fabric. Left-chest and cap logos to jacket backs and large appliqué.' },
  { to: '/vector-art', k: '02', title: 'Vector Art', price: 'From $12', text: 'Blurry, pixelated images redrawn as clean vector artwork, sharp at any size for print and production.' },
  { to: '/patches', k: '03', title: 'Custom Patches', price: 'On quote', text: 'Physical patches made to your design, size and quantity. Send your requirements for a custom quote.' },
];

const WHY = [
  { Icon: Ruler, title: 'Digitized for real production', text: 'Stitch direction, density and underlay are planned for your size, hoop and fabric, not just for the screen.' },
  { Icon: Timer, title: '12–24 hour turnaround', text: 'Designs up to 7 inches are delivered within 12–24 hours. Larger designs take 24–48 hours.' },
  { Icon: RefreshCw, title: 'Free edits and revisions', text: 'If a detail needs adjusting after your test sew-out, we revise it at no extra cost.' },
  { Icon: FileCheck2, title: 'The format your machine needs', text: 'DST, PES, EMB, EXP, JEF and any other machine format you ask for.' },
  { Icon: CreditCard, title: 'Clear price before work', text: 'Transparent package ranges, an exact price confirmed up front, and secure PayPal payment.' },
  { Icon: Globe2, title: 'Serving clients worldwide', text: 'We work online with print shops, embroidery businesses and brands in every time zone.' },
];

const WORKFLOW = [
  ['Upload', 'Send your artwork with size, placement and format.'],
  ['Quote', 'We confirm your package and exact price.'],
  ['Pay', 'Approve and pay securely through PayPal.'],
  ['Digitize', 'Your design is digitized for your machine and fabric.'],
  ['Deliver', 'Files arrive by email; edits are free.'],
];

export default function Home() {
  const hero = useParallax();
  const featured = byCategory('embroidery');
  const faqs = FAQ_GROUPS.flatMap((g) => g.items).filter((f) =>
    ['How much does embroidery digitizing cost?', 'How long does embroidery digitizing take?', 'Which embroidery file formats do you provide?', 'Do you offer revisions?', 'Which payment methods do you accept?'].includes(f.q),
  );

  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section ref={hero} className="dark-surface grain relative overflow-hidden bg-mesh pt-32 sm:pt-40">
        <Backdrop />
        <div className="container-x relative grid items-center gap-16 pb-20 lg:grid-cols-12 lg:pb-28">
          <div className="lg:col-span-6">
            <p className="eyebrow eyebrow-gold page-enter">Premium embroidery digitizing studio</p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.6rem]">
              <LineReveal start={150} step={140} lines={['Digitizing that', 'sews flawlessly,', ['every single time.', 'text-gold']]} />
            </h1>
            <p className="page-enter mt-7 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl" style={{ animationDelay: '550ms' }}>
              We turn logos and artwork into clean, machine-ready embroidery files and sharp vector art, delivered in 12–24 hours for designs up to 7 inches, with free edits.
            </p>
            <div className="page-enter" style={{ animationDelay: '700ms' }}>
              <QuoteButtons secondary="work" className="mt-10" />
            </div>
            <ul className="page-enter mt-12 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-widest text-slate-400" style={{ animationDelay: '850ms' }}>
              {['From $4.99', '12–24 h delivery', 'Free revisions', 'PayPal'].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-thread" />{t}</li>
              ))}
            </ul>
          </div>

          {/* Layered composition: real machine photo, software screenshot, thread and sew-out cards */}
          <div className="relative lg:col-span-6">
            <div style={layer(10)} className="page-enter relative" >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-lift">
                <img {...pic(IMAGES.hero, '(min-width: 1024px) 50vw, 100vw', true)} className="aspect-[4/3] w-full object-cover" />
              </div>
            </div>
            <div style={layer(-18)} className="absolute -bottom-10 -left-3 z-20 w-[46%] sm:-left-8 sm:w-[44%]">
              <div className="float-a overflow-hidden rounded-2xl border border-white/15 shadow-lift">
                <img {...pic(IMAGES.software, '260px')} className="w-full" />
              </div>
            </div>
            <div style={layer(-24)} className="absolute -right-3 -top-8 z-20 hidden w-32 sm:block">
              <div className="float-b glass overflow-hidden p-2"><img {...pic(IMAGES.threadCones, '128px')} className="aspect-square w-full rounded-2xl object-cover" /></div>
            </div>
            <div style={layer(-14)} className="absolute -bottom-12 right-4 z-20 hidden w-36 sm:block">
              <div className="float-a glass p-2"><img {...pic(IMAGES.testSewout, '144px')} className="aspect-square w-full rounded-2xl object-cover" /><p className="mt-1.5 text-center font-mono text-[10px] uppercase tracking-widest text-slate-400">Real sew-out</p></div>
            </div>
          </div>
        </div>
        <div className="relative border-y border-white/10 bg-ink/60 py-6">
          <Marquee items={['Left-chest logos', 'Cap logos', 'Sleeve designs', 'Hoodie chests', 'Tote bags', 'Jacket backs', 'Large appliqué', 'Vector redraws', 'DST · PES · EMB']} />
        </div>
      </section>

      {/* ───────────── STATS ───────────── */}
      <section className="dark-surface relative bg-ink pb-24 pt-20">
        <div className="container-x">
          <StatsBand />
        </div>
      </section>

      {/* ───────────── SERVICES (editorial list) ───────────── */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="Services" title="What we create for you" intro="Three focused services, one obsession with stitch quality." />
              <Reveal img className="mt-10 hidden overflow-hidden rounded-3xl lg:block"><img {...pic(IMAGES.serviceHoop, '360px')} className="w-80 object-cover" /></Reveal>
            </div>
          </div>
          <ul className="divide-y divide-ink/10 border-y border-ink/10 lg:col-span-8">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.to} delay={i * 80}>
                <Link to={s.to} className="group grid gap-4 py-10 sm:grid-cols-[80px_1fr_auto] sm:items-start">
                  <span className="font-mono text-sm text-slate-400">{s.k}</span>
                  <div>
                    <h3 className="text-3xl transition-colors group-hover:text-navy-800 sm:text-4xl">{s.title}</h3>
                    <p className="mt-2 font-mono text-xs uppercase tracking-widest text-thread-deep">{s.price}</p>
                    <p className="mt-4 max-w-xl text-slate-600">{s.text}</p>
                  </div>
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-ink/15 transition-all duration-500 ease-premium group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-thread">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── PRICING ───────────── */}
      <section id="pricing" className="dark-surface grain relative overflow-hidden bg-mesh section">
        <Backdrop stitch={false} />
        <div className="container-x relative">
          <SectionHeading dark center eyebrow="Embroidery digitizing prices" title="Our Embroidery Digitizing Prices" intro="Three packages by design size. Pick yours and click Order Now; we confirm the exact price before any work begins." />
          <div className="mt-16"><PricingTiers /></div>
        </div>
      </section>

      {/* ───────────── FEATURED WORK ───────────── */}
      <section className="section overflow-hidden">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Featured work" title="Embroidery designs from our studio" intro="A selection of designs we have digitized. Tap any image to view it full size." />
            <Reveal><Link to="/portfolio" className="btn-outline">Explore Our Work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></Reveal>
          </div>
          <div className="mt-14"><Gallery items={featured} limit={8} columns="sm:grid-cols-3 lg:grid-cols-4" /></div>
        </div>
      </section>

      {/* ───────────── TECHNOLOGY ───────────── */}
      <section className="dark-surface grain relative overflow-hidden bg-ink section">
        <Backdrop stitch={false} />
        <div className="container-x relative grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading dark accent="teal" eyebrow="Process & technology" title="Artwork in. Production-ready stitches out." intro="Digitizing is not a file conversion. Every object is rebuilt with the right stitch type, angle, density and underlay so it sews cleanly on real fabric." />
            <ul className="mt-12 grid grid-cols-2 gap-4">
              {[['satin', 'Satin', 'Smooth, glossy columns for borders and lettering.'], ['tatami', 'Tatami fill', 'Even, textured coverage for larger areas.'], ['running', 'Running stitch', 'Fine outlines and small details.'], ['applique', 'Appliqué', 'Fabric pieces finished with a satin edge.']].map(([t, h, d], i) => (
                <Reveal as="li" key={t} delay={i * 80} className="glass group overflow-hidden p-3 transition-colors hover:border-signal/40">
                  <div className="overflow-hidden rounded-2xl"><img {...pic(IMAGES[t], '(min-width: 1024px) 260px, 45vw')} className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.06]" /></div>
                  <h3 className="mt-4 px-1 font-sans text-base font-semibold">{h}</h3>
                  <p className="mt-1 px-1 pb-1 text-sm text-slate-400">{d}</p>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={150}>
            <BeforeAfter
              before={<img {...pic(IMAGES.compareArtwork, '(min-width: 1024px) 560px, 100vw')} className="h-full w-full object-cover" />}
              after={<img {...pic(IMAGES.compareDigitized, '(min-width: 1024px) 560px, 100vw')} className="h-full w-full object-cover" />}
              caption="Real client project (shared with permission): drag to compare the original artwork with our digitized design."
            />
          </Reveal>
        </div>
      </section>

      {/* ───────────── FORMATS ───────────── */}
      <section className="section">
        <div className="container-x">
          <SectionHeading center eyebrow="Supported file formats" title="The right file for every machine and press" />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <Reveal className="card relative overflow-hidden p-8 sm:p-10">
              <Layers className="h-8 w-8 text-navy-800" aria-hidden="true" />
              <h3 className="mt-6 text-3xl">Embroidery machine files</h3>
              <p className="mt-3 text-slate-600">Stitch files your embroidery machine can sew.</p>
              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-slate-500">Popular formats</p>
              <div className="mt-3"><FormatChips items={FORMATS.embroidery} /></div>
              <p className="mt-6 text-sm text-slate-600">Need a different format? Tell us your machine and we will deliver the file it needs.</p>
            </Reveal>
            <Reveal delay={100} className="card relative overflow-hidden p-8 sm:p-10">
              <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 text-orchid-deep" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 26 C 10 6, 22 6, 28 26" /><rect x="2" y="24" width="5" height="5" /><rect x="25" y="24" width="5" height="5" /><circle cx="16" cy="9" r="2.5" /></svg>
              <h3 className="mt-6 text-3xl">Vector artwork files</h3>
              <p className="mt-3 text-slate-600">Scalable artwork for print, signage, engraving and cutting. Not embroidery machine files.</p>
              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-slate-500">Delivered as</p>
              <div className="mt-3"><FormatChips items={FORMATS.vector} /></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────── WHY US ───────────── */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Why clients choose us" title="Built for businesses that cannot afford a bad sew-out" />
          <ol className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map(({ Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={(i % 3) * 90} className="group relative border-t border-ink/10 pt-8">
                <span aria-hidden="true" className="absolute -top-px left-0 h-px w-0 bg-gradient-to-r from-thread to-signal transition-all duration-700 ease-premium group-hover:w-full" />
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-thread transition-transform duration-500 group-hover:-rotate-6"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <span className="font-display text-5xl text-ink/[0.07]">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-sans text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── TESTIMONIALS ───────────── */}
      <section className="section">
        <div className="container-x">
          <SectionHeading center eyebrow="Client reviews" title="What our clients say" intro="Real feedback and sew-out photos from our clients." />
          <div className="mt-14"><Testimonials /></div>
        </div>
      </section>

      {/* ───────────── WORKFLOW ───────────── */}
      <section className="dark-surface grain relative overflow-hidden bg-mesh section">
        <Backdrop stitch={false} />
        <div className="container-x relative">
          <SectionHeading dark center eyebrow="Our workflow" title="Five steps from upload to inbox" />
          <ol className="relative mt-20 grid gap-10 md:grid-cols-5 md:gap-6">
            <svg aria-hidden="true" className="absolute left-0 top-7 hidden h-4 w-full text-thread/50 md:block" viewBox="0 0 1000 16" preserveAspectRatio="none" fill="none">
              <path className="stitch-run" d="M0 8 H1000" stroke="currentColor" strokeWidth="2" />
            </svg>
            {WORKFLOW.map(([h, t], i) => (
              <Reveal as="li" key={h} delay={i * 120} className="relative flex gap-5 md:block md:text-center">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-thread/40 bg-ink font-mono text-sm text-thread shadow-glow md:mx-auto">0{i + 1}</span>
                <div>
                  <h3 className="font-sans text-xl font-semibold md:mt-6">{h}</h3>
                  <p className="mt-2 text-slate-400">{t}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-16 text-center">
            <Link to="/how-it-works" className="btn-glass">See the full process <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Quick answers" />
            <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link to="/faq" className="btn-outline w-fit">All questions <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <a href="mailto:digitizenstitch@gmail.com" className="inline-flex items-center gap-2 text-sm text-slate-500"><Mail className="h-4 w-4" aria-hidden="true" /> digitizenstitch@gmail.com</a>
            </Reveal>
          </div>
          <div className="space-y-3 lg:col-span-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
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

      <CtaBand />
    </>
  );
}
