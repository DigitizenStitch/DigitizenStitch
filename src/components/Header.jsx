import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo-white.webp';
import { NAV, CONTACT } from '../data/site';
import { WhatsAppIcon } from './Icons';

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Close menus after every navigation.
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [open]);

  const isServiceActive = NAV[1].children.some((c) => c.to === pathname);

  return (
    <header
      className={`on-dark fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        scrolled || open ? 'border-b border-white/10 bg-ink/85 shadow-lift backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className={`container-x flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
        <Link to="/" className="flex shrink-0 items-center" aria-label="Digitize'NStitch home">
          <img src={logo} alt="Digitize'NStitch" width="520" height="273" className="h-10 w-auto sm:h-12" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[15px] text-slate-300">
            {NAV.map((item) =>
              item.children ? (
                <li key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 transition hover:text-white ${isServiceActive ? 'text-white' : ''}`}
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  <ul
                    id="services-menu"
                    className={`absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-ink-900/95 p-2 shadow-lift backdrop-blur-xl transition-all duration-300 ease-premium ${
                      servicesOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                    }`}
                  >
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <NavLink
                          to={c.to}
                          className={({ isActive }) =>
                            `group block rounded-xl px-4 py-3 transition hover:bg-white/5 ${isActive ? 'bg-white/10' : ''}`
                          }
                        >
                          <span className="block font-medium text-white">{c.label}</span>
                          <span className="block text-xs text-slate-400 group-hover:text-thread">{c.note}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end
                    className={({ isActive }) => `link-underline mx-2.5 py-1 transition hover:text-white ${isActive ? 'text-thread' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp (opens in a new tab)"
            className="hidden h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-thread hover:text-thread sm:grid"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <Link to="/quote" className="btn-gold hidden !min-h-[42px] !py-2 sm:inline-flex">
            Get a Quote
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-y-auto border-t border-white/10 bg-ink transition-all duration-500 ease-premium lg:hidden ${
          open ? 'visible max-h-[calc(100dvh-4rem)] opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="container-x py-6">
          <ul className="space-y-1 text-lg text-white">
            {NAV.flatMap((item) => item.children ?? [item]).map((item, i) => (
              <li key={item.to} style={{ transitionDelay: open ? `${i * 35}ms` : '0ms' }} className={`transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'}`}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) => `flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-white/5 ${isActive ? 'bg-white/10 font-semibold text-thread' : 'text-slate-200'}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link to="/quote" className="btn-gold w-full">Get a Quote</Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
