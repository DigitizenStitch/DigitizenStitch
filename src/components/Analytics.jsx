import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

// Google Analytics 4, loaded only after the visitor accepts cookies.
const GA_ID = 'G-DRS7VRVML3';
const KEY = 'dns-cookie-consent';

function readConsent() {
  try { return localStorage.getItem(KEY); } catch { return null; }
}

function loadGtag() {
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

export default function Analytics() {
  const { pathname, search } = useLocation();
  const [consent, setConsent] = useState('pending');

  useEffect(() => {
    setConsent(readConsent());
    const reopen = () => setConsent(null);
    window.addEventListener('open-cookie-settings', reopen);
    return () => window.removeEventListener('open-cookie-settings', reopen);
  }, []);

  useEffect(() => {
    if (consent !== 'granted') return;
    loadGtag();
    window.gtag('event', 'page_view', { page_location: window.location.href, page_title: document.title });
  }, [consent, pathname, search]);

  const choose = (value) => {
    try { localStorage.setItem(KEY, value); } catch { /* storage blocked */ }
    if (value === 'denied' && window.gtag) window.location.reload();
    setConsent(value);
  };

  if (consent !== null) return null;
  return (
    <div role="dialog" aria-label="Cookie consent" className="fixed inset-x-4 bottom-24 z-[60] max-w-md rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-soft sm:bottom-6 sm:left-6 sm:right-auto">
      <p>
        We use Google Analytics cookies to see how visitors use our site. No advertising.{' '}
        <Link to="/privacy-policy" className="font-semibold text-navy-950 underline">Privacy Policy</Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button type="button" onClick={() => choose('granted')} className="rounded-full bg-navy-950 px-5 py-2 font-semibold text-white">Accept</button>
        <button type="button" onClick={() => choose('denied')} className="rounded-full border border-slate-300 px-5 py-2 font-semibold text-navy-950">Decline</button>
      </div>
    </div>
  );
}
