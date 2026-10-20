// Per-page SEO metadata and structured data.
// Used in the browser (components/Seo.jsx) and at build time (scripts/prerender.js).

import { ALL_FAQS } from './faq';
import { BRAND, CONTACT, FORMATS, PACKAGES, SITE_URL } from './site';

const ORG_ID = `${SITE_URL}/#organization`;
// Online service available worldwide; main markets listed for clarity.
const AREAS = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Worldwide'].map((name) => ({ '@type': 'Place', name }));

export const PAGES = {
  '/': {
    title: "Embroidery Digitizing Services from $4.99 | Digitize'NStitch",
    description:
      "Custom embroidery digitizing from $4.99: logo to DST, PES or EMB in 12–24 hours, free edits. Vector art from $9.99. Clients in the USA, UK and worldwide.",
  },
  '/embroidery-digitizing': {
    title: "Custom Embroidery Digitizing Service | Logo to DST & PES",
    description:
      "Logo digitizing for embroidery: left chest, cap, sleeve, hoodie and jacket back. DST, PES, EMB and more, 12–24 hour delivery, free edits. From $4.99.",
    name: 'Embroidery Digitizing',
    service: { name: 'Embroidery Digitizing', price: 4.99, max: 14.99 },
  },
  '/vector-art': {
    title: "Vector Art Services: Convert Logo to Vector | From $9.99",
    description:
      "Raster to vector conversion: blurry JPG or PNG logos redrawn as clean AI, EPS, PDF, SVG or PNG files for print, screen printing and signs. From $9.99.",
    name: 'Vector Art',
    service: { name: 'Vector Art Conversion', price: 9.99 },
  },
  '/patches': {
    title: "Custom Embroidered Patches on Quote | Digitize'NStitch",
    description:
      "Custom patches made from your logo or design. Share your size, quantity and patch type and get an individual quote by email.",
    name: 'Custom Patches',
    service: { name: 'Custom Embroidered Patches', quoteOnly: true },
  },
  '/pricing': {
    title: "Embroidery Digitizing Prices: $4.99–$14.99 | Digitize'NStitch",
    description:
      "How much does embroidery digitizing cost? Under 5\" $4.99–$9.99, 5–7\" $9.99–$14.99, over 7\" on quote. Free edits, 12–48 hour delivery.",
    name: 'Pricing',
    pricing: true,
  },
  '/portfolio': {
    title: "Embroidery & Vector Art Portfolio | Digitize'NStitch",
    description:
      "See embroidery digitizing samples, vector art conversions and custom patch work by Digitize'NStitch.",
    name: 'Portfolio',
  },
  '/how-it-works': {
    title: "How Embroidery Digitizing Works | Digitize'NStitch",
    description:
      "Upload your artwork, we confirm your order and PayPal payment by email, and your digitized files arrive by email in 12–48 hours, with free edits.",
    name: 'How It Works',
    howTo: true,
  },
  '/about': {
    title: "About Digitize'NStitch | Embroidery Digitizing Studio",
    description:
      "Digitize'NStitch is an online embroidery digitizing and vector art studio serving embroidery shops, print shops and brands worldwide.",
    name: 'About Us',
    pageType: 'AboutPage',
  },
  '/faq': {
    title: "Embroidery Digitizing FAQ: Prices, Formats & Turnaround",
    description:
      "Answers about embroidery digitizing prices, DST and PES files, hoop sizes, turnaround times, vector art formats, revisions and PayPal payment.",
    name: 'FAQ',
    faq: true,
  },
  '/quote': {
    title: "Get an Embroidery Digitizing Quote | Digitize'NStitch",
    description:
      "Upload your logo or artwork for embroidery digitizing, vector art or custom patches. Our team confirms your order by email. WhatsApp also available.",
    name: 'Get a Quote',
    pageType: 'ContactPage',
  },
  '/privacy-policy': {
    title: "Privacy Policy | Digitize'NStitch",
    description: "How Digitize'NStitch collects, uses and protects the information you share with us.",
    name: 'Privacy Policy',
  },
  '/terms-of-service': {
    title: "Terms of Service | Digitize'NStitch",
    description: "The terms that apply when you order embroidery digitizing, vector art or patch services from Digitize'NStitch.",
    name: 'Terms of Service',
  },
  '/refund-revision-policy': {
    title: "Refund & Revision Policy | Digitize'NStitch",
    description: "Free revisions and case-by-case refund review. Read the Digitize'NStitch refund and revision policy.",
    name: 'Refund & Revision Policy',
  },
};

export const NOT_FOUND = {
  title: "Page Not Found | Digitize'NStitch",
  description: 'The page you are looking for does not exist.',
};

export const ROUTES = Object.keys(PAGES);

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: BRAND,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  areaServed: AREAS,
  knowsAbout: ['Embroidery digitizing', 'Logo digitizing', 'Vector art conversion', 'Custom patches', ...FORMATS.embroidery.map((f) => `${f} embroidery files`)],
  sameAs: [CONTACT.instagramUrl, CONTACT.facebookUrl],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: CONTACT.email,
    telephone: CONTACT.phone,
    areaServed: AREAS,
    availableLanguage: ['English'],
  },
};

export function structuredData(path) {
  const page = PAGES[path];
  if (!page) return null;
  const url = SITE_URL + (path === '/' ? '/' : path);
  const graph = [organization];

  if (path === '/') {
    graph.push({ '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: BRAND, publisher: { '@id': ORG_ID } });
  } else {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: page.name, item: url },
      ],
    });
  }

  graph.push({
    '@type': page.pageType || (page.faq ? 'FAQPage' : 'WebPage'),
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': ORG_ID },
    ...(page.faq && {
      mainEntity: ALL_FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    }),
  });

  if (page.service) {
    graph.push({
      '@type': 'Service',
      name: page.service.name,
      serviceType: page.service.name,
      url,
      description: page.description,
      provider: { '@id': ORG_ID },
      areaServed: AREAS,
      ...(page.service.quoteOnly
        ? {}
        : {
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              priceSpecification: { '@type': 'PriceSpecification', minPrice: page.service.price, ...(page.service.max && { maxPrice: page.service.max }), priceCurrency: 'USD' },
            },
          }),
    });
  }

  if (page.pricing) {
    graph.push({
      '@type': 'OfferCatalog',
      name: 'Embroidery digitizing packages',
      url,
      itemListElement: PACKAGES.map((p) => ({
        '@type': 'Offer',
        name: `${p.name} embroidery digitizing`,
        description: `${p.features.slice(0, 4).join(', ')}. ${p.turnaround} turnaround. Free edits and revisions.`,
        url: `${SITE_URL}/quote?package=${p.id}`,
        itemOffered: { '@type': 'Service', name: 'Embroidery Digitizing', provider: { '@id': ORG_ID } },
        ...(p.min && { priceSpecification: { '@type': 'PriceSpecification', minPrice: p.min, maxPrice: p.max, priceCurrency: 'USD' } }),
      })),
    });
  }

  if (page.howTo) {
    graph.push({
      '@type': 'HowTo',
      name: 'How to order embroidery digitizing from Digitize\'NStitch',
      step: [
        'Send your artwork with the size, placement and file format you need.',
        'Our team emails you to confirm your order, package and price.',
        'Confirm and pay through PayPal.',
        'We digitize your design for your machine and fabric (12–24 hours up to 7 inches, 24–48 hours over 7 inches).',
        'Receive your files by email.',
        'Request free edits if anything needs adjusting.',
      ].map((text, i) => ({ '@type': 'HowToStep', position: i + 1, text })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export const canonical = (path) => SITE_URL + (path === '/' ? '/' : path);
