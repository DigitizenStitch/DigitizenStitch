// Single source of truth for verified business details.
// Update contact info, prices or policies here and they change site-wide.

export const SITE_URL = 'https://digitizenstitch.com';

export const BRAND = "Digitize'NStitch";

export const CONTACT = {
  email: 'digitizenstitch@gmail.com',
  phone: '+923701081851',
  phoneDisplay: '+92 370 1081851',
  whatsappUrl: 'https://wa.me/923701081851',
  instagramUrl: 'https://www.instagram.com/digitizenstitch._/',
  facebookUrl: 'https://www.facebook.com/share/19WE5X4obH/',
  coverage: 'Serving Clients Worldwide',
  payment: 'PayPal only',
};

export const whatsappLink = (text) =>
  text ? `${CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}` : CONTACT.whatsappUrl;

export const PRICES = [
  { service: 'Embroidery Digitizing', price: 'Starting at $10', amount: 10, path: '/embroidery-digitizing' },
  { service: 'Vector Art', price: 'Starting at $12', amount: 12, path: '/vector-art' },
  { service: 'Patch Digitizing', price: 'Starting at $10', amount: 10, path: '/patches' },
  { service: 'Physical Patches', price: 'Custom Quote', amount: null, path: '/patches' },
];

export const PRICE_NOTE =
  'Final pricing depends on artwork complexity, size and requirements. You will always receive a quote before any work begins.';

export const FORMATS = {
  embroidery: ['DST', 'PES', 'EMB'],
  embroideryOnRequest: ['EXP', 'JEF'],
  vector: ['AI', 'EPS', 'PDF', 'SVG', 'PNG'],
};

export const POLICIES = {
  revisions: 'Free revisions',
  refunds: 'Handled case by case',
  turnaround: 'Depends on design complexity',
  rush: '2-hour rush turnaround available',
  delivery: 'Final files are delivered by email',
};

export const SERVICE_OPTIONS = [
  'Embroidery Digitizing',
  'Vector Art',
  'Patch Digitizing',
  'Physical Patches',
  'Not sure yet',
];

export const FORMAT_OPTIONS = [
  'DST',
  'PES',
  'EMB',
  'EXP (on request)',
  'JEF (on request)',
  'AI',
  'EPS',
  'PDF',
  'SVG',
  'PNG',
  'Other / not sure',
];

export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    children: [
      { label: 'Embroidery Digitizing', to: '/embroidery-digitizing' },
      { label: 'Vector Art', to: '/vector-art' },
      { label: 'Patch Design & Digitizing', to: '/patches' },
    ],
  },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
];
