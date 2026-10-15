import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';
import CustomCursor from './CustomCursor';
import ChatWidget from './ChatWidget';

// Adds .is-visible to .reveal elements as they scroll into view.
function useReveal(pathname) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)');
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

export default function Layout({ children }) {
  const { pathname, hash } = useLocation();
  useReveal(pathname);

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
      <Header />
      <main id="main" key={pathname} className="page-enter min-h-[60vh]" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <ChatWidget />
      <CustomCursor />
    </>
  );
}
