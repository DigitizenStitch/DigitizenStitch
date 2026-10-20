import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { NOT_FOUND, PAGES, canonical, structuredData } from '../data/seo';

// Keeps <head> in sync on client-side navigation.
// The prerender script writes the same tags into each page's static HTML.
function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    const [, key, name] = selector.match(/\[(\w+)="([^"]+)"\]/);
    el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
    const page = PAGES[path] ?? NOT_FOUND;
    const url = canonical(path);

    document.title = page.title;
    setMeta('meta[name="description"]', 'content', page.description);
    setMeta('meta[property="og:title"]', 'content', page.title);
    setMeta('meta[property="og:description"]', 'content', page.description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:locale"]', 'content', 'en_US');
    setMeta('meta[name="twitter:title"]', 'content', page.title);
    setMeta('meta[name="twitter:description"]', 'content', page.description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[name="robots"]', 'content', PAGES[path] ? 'index, follow' : 'noindex');

    let ld = document.getElementById('ld-json');
    const data = structuredData(path);
    if (data) {
      if (!ld) {
        ld = document.createElement('script');
        ld.type = 'application/ld+json';
        ld.id = 'ld-json';
        document.head.appendChild(ld);
      }
      ld.textContent = JSON.stringify(data);
    } else if (ld) {
      ld.remove();
    }
  }, [pathname]);

  return null;
}
