import { Link } from 'react-router-dom';
import { Mail, Upload, FileCheck2, CreditCard, Inbox, RefreshCw, Zap } from 'lucide-react';
import { CheckList, CtaBand, PageHeader, PriceGrid, QuoteButtons, Reveal, SectionHeading } from '../components/ui';
import QuoteForm from '../components/QuoteForm';
import { FAQ_GROUPS } from '../data/faq';
import { CONTACT } from '../data/site';
import { SocialLinks, WhatsAppIcon } from '../components/Icons';

const STEPS = [
  { Icon: Upload, title: 'Send your artwork', text: 'Upload your design through the quote form, or send it on WhatsApp or by email. Include the size, placement and file format you need.' },
  { Icon: FileCheck2, title: 'Receive your quote', text: 'We review the design and reply with a price. Final pricing depends on complexity, size and requirements.' },
  { Icon: CreditCard, title: 'Approve and pay', text: 'Once you approve the quote, payment is made through PayPal. PayPal is our only payment method.' },
  { Icon: Inbox, title: 'Get your files by email', text: 'We complete your design and deliver the finished files to your email address.' },
  { Icon: RefreshCw, title: 'Request revisions', text: 'Need a change? Reply to the delivery email. Revisions are free.' },
];

export function HowItWorks() {
  return (
    <>
      <PageHeader crumb="How It Works" eyebrow="Process" title="How it works" intro="A simple process from your first message to your finished files." />
      <section className="section">
        <div className="container-x max-w-4xl">
          <ol className="relative space-y-6 before:absolute before:bottom-6 before:left-7 before:top-6 before:w-px before:bg-navy-200 sm:before:left-8">
            {STEPS.map(({ Icon, title, text }, i) => (
              <Reveal as="li" key={title} className="relative flex gap-6">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy-950 text-white shadow-lift sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="card flex-1 p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Step {i + 1}</p>
                  <h2 className="mt-1 text-2xl">{title}</h2>
                  <p className="mt-2 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <Reveal className="card p-8">
            <Zap className="h-7 w-7 text-navy-800" aria-hidden="true" />
            <h2 className="mt-4 text-2xl">Turnaround</h2>
            <p className="mt-3 text-slate-600">Standard turnaround depends on the complexity of your design, and we confirm timing with your quote. A 2-hour rush turnaround is available; whether a design qualifies depends on its complexity.</p>
          </Reveal>
          <Reveal delay={90} className="card p-8">
            <Mail className="h-7 w-7 text-navy-800" aria-hidden="true" />
            <h2 className="mt-4 text-2xl">Delivery</h2>
            <p className="mt-3 text-slate-600">Final completed design files are delivered by email in the format you requested. Please check your spam folder if you do not see our message.</p>
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
      <PageHeader crumb="About Us" eyebrow="About Us" title="About Digitize'NStitch" intro="Embroidery digitizing, vector art and patch design for businesses and creators worldwide." />
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Who we are" title="Crafting excellence, one stitch at a time" />
            <Reveal className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>At Digitize&rsquo;NStitch, we turn your creative concepts into production-ready files. We specialise in embroidery digitizing, vector art and patches, from simple logos to detailed character artwork.</p>
              <p>We work entirely online and serve clients worldwide. You send your artwork, we confirm the price before starting, and your finished files arrive by email.</p>
              <p>Our aim is simple: clear communication, careful work and files you can use with confidence.</p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5">
            <div className="card p-8">
              <h2 className="font-sans text-lg font-semibold">How we work with you</h2>
              <div className="mt-5">
                <CheckList items={['Quote confirmed before work begins', 'Free revisions', '2-hour rush available for eligible designs', 'Files delivered by email', 'Payment via PayPal only', 'Serving clients worldwide']} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Services" title="What we offer" />
          <div className="mt-12"><PriceGrid /></div>
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
            <ul className="sticky top-28 space-y-1">
              {FAQ_GROUPS.map((g) => (
                <li key={g.title}>
                  <a href={`#${slug(g.title)}`} className="block rounded-lg px-3 py-2 text-slate-600 transition hover:bg-white hover:text-navy-950">{g.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-14 lg:col-span-9">
            {FAQ_GROUPS.map((g) => (
              <section key={g.title} id={slug(g.title)} aria-labelledby={`${slug(g.title)}-h`}>
                <h2 id={`${slug(g.title)}-h`} className="text-3xl">{g.title}</h2>
                <div className="mt-6 space-y-3">
                  {g.items.map((f) => (
                    <details key={f.q} className="card group p-0 open:shadow-lift">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-semibold text-navy-950 [&::-webkit-details-marker]:hidden">
                        <h3 className="font-sans text-lg">{f.q}</h3>
                        <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-900 transition-transform duration-300 group-open:rotate-45">+</span>
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

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function Quote() {
  return (
    <>
      <PageHeader crumb="Get a Quote" eyebrow="Get a Quote / Contact" title="Get a quote" intro="Upload your design and tell us what you need. We reply by email with a clear price before any work begins." />
      <section className="section !pt-14">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
          <aside className="space-y-6 lg:col-span-5">
            <div className="on-dark relative overflow-hidden rounded-2xl bg-navy-950 p-8 text-white">
              <h2 className="text-2xl text-white">Prefer to chat?</h2>
              <p className="mt-2 text-white/70">Send your design on WhatsApp for a quick reply.</p>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6 w-full">
                <WhatsAppIcon className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <ul className="mt-8 space-y-4 text-[15px]">
                <li>
                  <span className="block text-xs uppercase tracking-[0.16em] text-white/50">Email</span>
                  <a href={`mailto:${CONTACT.email}`} className="link-underline text-white">{CONTACT.email}</a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.16em] text-white/50">Phone &amp; WhatsApp</span>
                  <a href={`tel:${CONTACT.phone}`} className="link-underline text-white">{CONTACT.phoneDisplay}</a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.16em] text-white/50">Coverage</span>
                  {CONTACT.coverage}
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.16em] text-white/50">Payment</span>
                  {CONTACT.payment}
                </li>
              </ul>
              <SocialLinks className="mt-8 text-white" />
            </div>
            <div className="card p-8">
              <h2 className="font-sans text-lg font-semibold">Good to know</h2>
              <div className="mt-4 text-[15px]">
                <CheckList items={['Embroidery digitizing from $10', 'Vector art from $12', 'Patch digitizing from $10', 'Physical patches: custom quote', 'Free revisions', '2-hour rush available for eligible designs']} />
              </div>
              <p className="mt-5 text-sm text-slate-500">
                Have a question first? See the <Link to="/faq" className="font-semibold text-navy-800 underline underline-offset-2">FAQ</Link>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" intro="The page you are looking for does not exist or has moved.">
        <QuoteButtons light className="mt-8" />
      </PageHeader>
      <section className="section">
        <div className="container-x text-center">
          <Link to="/" className="btn-primary">Back to home</Link>
        </div>
      </section>
    </>
  );
}
