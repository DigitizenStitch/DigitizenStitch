import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';
import ChatWidget from './ChatWidget';
import Cursor from './Cursor';

// Adds .is-visible to .reveal elements as they scroll into view.
function useReveal(pathname) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible), .reveal-img:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}

// Thin gold "thread" across the top that fills as you scroll.
function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar?.style.setProperty('--p', max > 0 ? (window.scrollY / max).toFixed(4) : '0');
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);
}

export default function Layout({ children }) {
  const { pathname, hash } = useLocation();
  useReveal(pathname);
  useScrollProgress();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return (
    <>
      <Seo />
      <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />
      <Header />
      <main id="main" key={pathname} className="page-enter min-h-[60vh]" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <ChatWidget />
      <Cursor />
    </>
  );
}
