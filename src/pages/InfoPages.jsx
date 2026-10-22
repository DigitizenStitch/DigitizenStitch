import { Link } from 'react-router';
import { ArrowRight, CreditCard, FileCheck2, Inbox, Mail, RefreshCw, Upload, Wand2 } from 'lucide-react';
import { Backdrop, CheckList, CtaBand, PageHeader, QuoteButtons, Reveal, SectionHeading } from '../components/ui';
import { PricingTiers, StatsBand } from '../components/sections';
import { BeforeAfter } from '../components/art/Scenes';
import { IMAGES, pic } from '../data/images';
import QuoteForm from '../components/QuoteForm';
import { FAQ_GROUPS } from '../data/faq';
import { CONTACT, PACKAGES, VECTOR_PRICE } from '../data/site';
import { SocialLinks, WhatsAppIcon } from '../components/Icons';

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function Pricing() {
  return (
    <>
      <PageHeader crumb="Pricing" eyebrow="Transparent pricing" title="Simple pricing by design size" intro="Embroidery digitizing packages from $4.99, with free edits and 12–24 hour delivery for designs up to 7 inches." />
      <section className="dark-surface relative overflow-hidden bg-ink pb-24 pt-20 sm:pb-32 sm:pt-28">
        <div className="container-x relative">
          <PricingTiers headingLevel="h2" />
        </div>
      </section>
      <section className="section !pb-0">
        <div className="container-x">
          <SectionHeading eyebrow="Which package?" title="Match your design to the hoop" intro="Under 5 inches fits 4×4 and 5×5 hoops. 5–7 inches fits a 5×7 hoop. Over 7 inches uses 6×10 or 8×12 hoops." />
          <Reveal img className="mt-12 overflow-hidden rounded-[2rem]">
            <img {...pic(IMAGES.hoopSizes, '(min-width: 1280px) 1216px, 100vw')} className="w-full" />
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Compare" title="Packages at a glance" />
          <Reveal className="mt-12 overflow-x-auto rounded-3xl border border-ink/10 bg-white shadow-soft">
            <table className="w-full min-w-[640px] text-left">
              <caption className="sr-only">Embroidery digitizing packages compared</caption>
              <thead className="bg-ink text-white">
                <tr>
                  <th scope="col" className="p-5 font-mono text-xs uppercase tracking-widest">Package</th>
                  <th scope="col" className="p-5 font-mono text-xs uppercase tracking-widest">Price</th>
                  <th scope="col" className="p-5 font-mono text-xs uppercase tracking-widest">Hoops</th>
                  <th scope="col" className="p-5 font-mono text-xs uppercase tracking-widest">Turnaround</th>
                  <th scope="col" className="p-5"><span className="sr-only">Action</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {PACKAGES.map((p) => (
                  <tr key={p.id} className="transition-colors hover:bg-paper">
                    <th scope="row" className="p-5 font-display text-xl font-normal text-ink">{p.name}</th>
                    <td className="p-5 font-semibold text-ink">{p.price}</td>
                    <td className="p-5 text-slate-600">{p.features.find((f) => f.includes('Hoop'))}</td>
                    <td className="p-5 text-slate-600">{p.turnaround}</td>
                    <td className="p-5 text-right"><Link to={`/quote?package=${p.id}`} className="font-semibold text-navy-800 underline underline-offset-4">{p.cta}<span className="sr-only">: {p.name}</span></Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <Reveal className="card p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Vector Art</p>
              <p className="mt-3 font-display text-4xl text-ink">{VECTOR_PRICE}</p>
              <p className="mt-3 text-slate-600">Final price depends on the complexity of your artwork and is confirmed in your quote.</p>
              <Link to="/vector-art" className="mt-6 inline-flex items-center gap-2 font-semibold text-navy-800">About vector art <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </Reveal>
            <Reveal delay={100} className="card p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Custom Patches</p>
              <p className="mt-3 font-display text-4xl text-ink">On Quote</p>
              <p className="mt-3 text-slate-600">Priced by patch type, size and quantity.</p>
              <Link to="/quote" className="mt-6 inline-flex items-center gap-2 font-semibold text-navy-800">Request a quote <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Pricing questions" title="Which package do I need?" />
          </div>
          <dl className="space-y-4 lg:col-span-8">
            {[
              ['How do I know my design size?', 'Measure the widest side of the design as it will appear on the garment. A left-chest logo or cap logo is usually under 5 inches; a hoodie chest or tote bag design is usually 5–7 inches; full-front and jacket-back designs are over 7 inches.'],
              ['Why is the price a range?', 'Simple designs with few colors sit at the lower end of the range. Dense, highly detailed or multi-color artwork takes more work and sits higher. Our team confirms the price by email before any work begins.'],
              ['Why are designs over 7 inches priced on quote?', 'Large designs vary a lot in stitch count and detail, so each one is quoted individually. Turnaround for these designs is 24–48 hours.'],
              ['Are edits included?', 'Yes. Edits and revisions are free in every package.'],
            ].map(([q, a]) => (
              <Reveal key={q} className="card p-6">
                <dt className="font-sans text-lg font-semibold text-ink">{q}</dt>
                <dd className="mt-2 leading-relaxed text-slate-600">{a}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
      <CtaBand title="Not sure which package fits?" text="Send your design and size, and our team will recommend the right package by email." />
    </>
  );
}

const STEPS = [
  { Icon: Upload, title: 'Send your artwork', text: 'Upload your design through the quote form, or send it on WhatsApp or by email. Include the size, placement and file format you need.' },
  { Icon: FileCheck2, title: 'We contact you by email', text: 'Our team emails you to confirm your order, package and exact price. Designs over 7 inches are quoted individually.' },
  { Icon: CreditCard, title: 'Confirm and pay', text: 'We confirm the PayPal payment with you by email. No payment is taken on the website, and PayPal is our only payment method.' },
  { Icon: Wand2, title: 'We digitize your design', text: 'Stitch types, angles, density and underlay are set for your size and fabric. Up to 7 inches: 12–24 hours. Over 7 inches: 24–48 hours.' },
  { Icon: Inbox, title: 'Get your files by email', text: 'Your finished files arrive in the format you requested.' },
  { Icon: RefreshCw, title: 'Free edits and revisions', text: 'Need a change after your test sew-out? Reply to the delivery email. Edits are free.' },
];

export function HowItWorks() {
  return (
    <>
      <PageHeader crumb="How It Works" eyebrow="Process" title="From your artwork to a perfect sew-out" intro="A clear, six-step process with no surprises." aside={<div className="overflow-hidden rounded-3xl border border-white/10 shadow-lift"><img {...pic(IMAGES.software, '(min-width: 1024px) 40vw, 100vw', true)} className="w-full" /></div>} />
      <section className="section">
        <div className="container-x max-w-5xl">
          <ol className="relative space-y-8 before:absolute before:bottom-10 before:left-8 before:top-10 before:w-px before:bg-gradient-to-b before:from-thread before:via-orchid/40 before:to-signal sm:before:left-10">
            {STEPS.map(({ Icon, title, text }, i) => (
              <Reveal as="li" key={title} className="relative grid grid-cols-[64px_1fr] gap-6 sm:grid-cols-[80px_1fr]">
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl bg-ink text-thread shadow-glow sm:h-20 sm:w-20">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="card card-hover p-7 sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Step 0{i + 1}</p>
                  <h2 className="mt-2 text-3xl">{title}</h2>
                  <p className="mt-3 text-lg text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <section className="dark-surface grain relative overflow-hidden bg-mesh section">
        <Backdrop stitch={false} />
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
          <SectionHeading dark eyebrow="See the difference" title="Why digitizing matters" intro="A flat image tells a machine nothing. Digitizing decides how every thread is laid down, which is why a clean file sews clean." />
          <Reveal>
            <BeforeAfter
              before={<img {...pic(IMAGES.sliderArtwork, '(min-width: 1024px) 560px, 100vw')} className="h-full w-full object-cover" />}
              after={<img {...pic(IMAGES.sliderDigitized, '(min-width: 1024px) 560px, 100vw')} className="h-full w-full object-cover" />}
              caption="Drag to compare the original artwork with the digitized stitch design."
            />
          </Reveal>
        </div>
      </section>
      <CtaBand title="Ready to start?" />
    </>
  );
}

export function About() {
  return (
    <>
      <PageHeader crumb="About Us" eyebrow="About Us" title="Crafting excellence, one stitch at a time" intro="Digitize'NStitch is an embroidery digitizing and vector art studio serving clients worldwide." aside={<div className="overflow-hidden rounded-3xl border border-white/10 shadow-lift"><img {...pic(IMAGES.serviceHoop, '(min-width: 1024px) 40vw, 100vw', true)} className="aspect-[16/10] w-full object-cover lg:aspect-[4/3]" /></div>} />
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Who we are" title="A studio focused on files that work" />
            <Reveal className="mt-8 space-y-5 text-lg leading-relaxed text-slate-600">
              <p>At Digitize&rsquo;NStitch, we turn your creative concepts into production-ready files. We specialise in embroidery digitizing and vector art, from simple logos to detailed character artwork, and we also arrange custom patches on quote.</p>
              <p>We work entirely online, and our service is available to embroidery shops, print shops and brands in the USA, UK, Canada, Australia and worldwide. You send your artwork, our team confirms your order by email, and your finished files arrive by email.</p>
              <p>Our aim is simple: clear communication, careful work and files you can use with confidence.</p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img {...pic(IMAGES.about, '(min-width: 1024px) 40vw, 100vw')} className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="dark-surface bg-ink section">
        <div className="container-x">
          <SectionHeading dark eyebrow="How we work with you" title="Our commitments" />
          <div className="mt-12"><StatsBand /></div>
          <div className="mt-12 max-w-xl"><CheckList dark items={['Exact price confirmed before work begins', 'Free edits and revisions', '12–24 hours for designs up to 7 inches; 24–48 hours over 7 inches', 'Files delivered by email', 'Payment via PayPal only', 'Serving clients worldwide']} /></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function Faq() {
  return (
    <>
      <PageHeader crumb="FAQ" eyebrow="FAQ" title="Frequently asked questions" intro="Clear answers about prices, formats, turnaround, revisions and payment." />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <nav aria-label="FAQ topics" className="lg:col-span-3">
            <ul className="flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-28 lg:flex-col lg:overflow-visible">
              {FAQ_GROUPS.map((g) => (
                <li key={g.title}>
                  <a href={`#${slug(g.title)}`} className="block whitespace-nowrap rounded-full border border-ink/10 px-4 py-2.5 text-sm text-slate-600 transition hover:border-ink hover:text-ink lg:rounded-xl lg:border-transparent">{g.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-16 lg:col-span-9">
            {FAQ_GROUPS.map((g) => (
              <section key={g.title} id={slug(g.title)} aria-labelledby={`${slug(g.title)}-h`}>
                <h2 id={`${slug(g.title)}-h`} className="text-4xl">{g.title}</h2>
                <div className="mt-8 space-y-3">
                  {g.items.map((f) => (
                    <details key={f.q} className="card group open:shadow-lift">
                      <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                        <h3 className="font-sans text-lg font-semibold">{f.q}</h3>
                        <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-thread transition-transform duration-500 group-open:rotate-45">+</span>
                      </summary>
                      <p className="px-6 pb-6 leading-relaxed text-slate-600">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Still have a question?" text={`Message us on WhatsApp or email ${CONTACT.email}.`} />
    </>
  );
}

export function Quote() {
  return (
    <>
      <PageHeader crumb="Get a Quote" eyebrow="Get a Quote / Order" title="Start your order" intro="Submit the form below. Our team will contact you by email to confirm your order and payment, and your completed files will be delivered by email." />
      <section className="section !pt-16">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
          <aside className="space-y-6 lg:col-span-5">
            <div className="dark-surface grain relative overflow-hidden rounded-3xl bg-mesh p-8">
              <Backdrop stitch={false} />
              <div className="relative">
                <h2 className="text-3xl">Prefer to chat?</h2>
                <p className="mt-2 text-slate-300">Send your design on WhatsApp for a quick reply.</p>
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6 w-full">
                  <WhatsAppIcon className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <ul className="mt-8 space-y-5 text-[15px]">
                  <li><span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Email</span><a href={`mailto:${CONTACT.email}`} className="link-underline text-white"><Mail className="mr-2 inline h-4 w-4" aria-hidden="true" />{CONTACT.email}</a></li>
                  <li><span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Phone &amp; WhatsApp</span><a href={`tel:${CONTACT.phone}`} className="link-underline text-white">{CONTACT.phoneDisplay}</a></li>
                  <li><span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Coverage</span><span className="text-white">{CONTACT.coverage}</span></li>
                  <li><span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Payment</span><span className="text-white">{CONTACT.payment}</span></li>
                </ul>
                <SocialLinks className="mt-8 text-white" />
              </div>
            </div>
            <div className="card p-8">
              <h2 className="font-sans text-lg font-semibold">Embroidery digitizing packages</h2>
              <ul className="mt-5 divide-y divide-ink/10">
                {PACKAGES.map((p) => (
                  <li key={p.id} className="flex items-center justify-between gap-4 py-3.5">
                    <span><b className="text-ink">{p.name}</b><span className="block text-sm text-slate-500">{p.turnaround}</span></span>
                    <span className="font-semibold text-ink">{p.price}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-slate-500">Vector art from $9.99 · Custom patches on quote · Free edits. <Link to="/pricing" className="font-semibold text-navy-800 underline underline-offset-2">Full pricing</Link></p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <PageHeader title="Page not found" intro="The page you are looking for does not exist or has moved.">
      <QuoteButtons secondary="work" className="mt-10" />
      <Link to="/" className="mt-6 inline-block text-slate-300 underline underline-offset-4">Back to home</Link>
    </PageHeader>
  );
}
