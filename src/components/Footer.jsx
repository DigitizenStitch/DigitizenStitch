import { Link } from 'react-router-dom';
import { Mail, Globe2, CreditCard } from 'lucide-react';
import logo from '../assets/logo-white.webp';
import { CONTACT } from '../data/site';
import { SocialLinks, WhatsAppIcon } from './Icons';

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Embroidery Digitizing', to: '/embroidery-digitizing' },
      { label: 'Vector Art', to: '/vector-art' },
      { label: 'Patch Design & Digitizing', to: '/patches' },
      { label: 'Get a Quote', to: '/quote' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'About Us', to: '/about' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Service', to: '/terms-of-service' },
      { label: 'Refund & Revision Policy', to: '/refund-revision-policy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-navy-ink text-white/70">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-navy-800/30 blur-3xl" />
      <div className="container-x relative grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" aria-label="Digitize'NStitch home">
            <img src={logo} alt="Digitize'NStitch" width="520" height="273" loading="lazy" className="h-14 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
            Production-ready embroidery digitizing, clean vector art and patch design. Crafting excellence, one stitch at a time.
          </p>
          <ul className="mt-6 space-y-3 text-[15px]">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-3 transition hover:text-white">
                <Mail className="h-4 w-4" aria-hidden="true" /> {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 transition hover:text-white">
                <WhatsAppIcon className="h-4 w-4" aria-hidden="true" /> {CONTACT.phoneDisplay}
                <span className="sr-only">(WhatsApp, opens in a new tab)</span>
              </a>
            </li>
            <li className="inline-flex items-center gap-3"><Globe2 className="h-4 w-4" aria-hidden="true" /> {CONTACT.coverage}</li>
            <li className="flex items-center gap-3"><CreditCard className="h-4 w-4" aria-hidden="true" /> Payments via {CONTACT.payment}</li>
          </ul>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title} className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">{col.title}</h2>
            <ul className="mt-5 space-y-3 text-[15px]">
              {col.links.map((l) => (
                <li key={l.to + l.label}>
                  <Link to={l.to} className="link-underline transition hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="lg:col-span-2">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">Follow</h2>
          <SocialLinks className="mt-5 text-white" />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-sm sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Digitize&rsquo;NStitch. All rights reserved.</p>
          <p>{CONTACT.coverage}</p>
        </div>
      </div>
    </footer>
  );
}
