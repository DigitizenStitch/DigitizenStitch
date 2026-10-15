// Per-page SEO metadata and structured data.
// Used in the browser (components/Seo.jsx) and at build time (scripts/prerender.js).

import { ALL_FAQS } from './faq';
import { BRAND, CONTACT, SITE_URL } from './site';

const ORG_ID = `${SITE_URL}/#organization`;

export const PAGES = {
  '/': {
    title: "Digitize'NStitch | Embroidery Digitizing, Vector Art & Patches",
    description:
      'Premium embroidery digitizing from $4.99 with 12–24 hour delivery for designs up to 7 inches, free edits, and clean vector art from $12. Serving clients worldwide.',
  },
  '/embroidery-digitizing': {
    title: "Embroidery Digitizing from $4.99 | Digitize'NStitch",
    description:
      'Custom embroidery digitizing for left-chest, cap, sleeve, hoodie and jacket-back designs. DST, PES and EMB files, free edits, 12–24 hour delivery up to 7 inches.',
    name: 'Embroidery Digitizing',
    service: { name: 'Embroidery Digitizing', price: 4.99, max: 14.99 },
  },
  '/vector-art': {
    title: "Vector Art & Logo Vectorization from $12 | Digitize'NStitch",
    description:
      'Turn low-resolution logos and images into clean, scalable vector art. Delivered as AI, EPS, PDF, SVG or PNG for print and production.',
    name: 'Vector Art',
    service: { name: 'Vector Art Conversion', price: 12 },
  },
  '/patches': {
    title: "Custom Patches on Quote | Digitize'NStitch",
    description:
      'Custom physical patches made to your design, size and quantity. Every patch order is priced individually on quote.',
    name: 'Custom Patches',
  },
  '/pricing': {
    title: "Embroidery Digitizing Prices: $4.99–$14.99 | Digitize'NStitch",
    description:
      'Embroidery digitizing packages by size: under 5 inches $4.99–$9.99, 5–7 inches $9.99–$14.99, over 7 inches on quote. Free edits and 12–48 hour turnaround.',
    name: 'Pricing',
  },
  '/portfolio': {
    title: "Portfolio: Embroidery, Vector & Patch Work | Digitize'NStitch",
    description:
      'Browse real embroidery digitizing, vector art and patch work by Digitize\'NStitch.',
    name: 'Portfolio',
  },
  '/how-it-works': {
    title: "How It Works: From Artwork to Finished File | Digitize'NStitch",
    description:
      'Upload your artwork, approve your price, pay by PayPal and receive your files by email in 12–48 hours, with free edits.',
    name: 'How It Works',
  },
  '/about': {
    title: "About Digitize'NStitch | Embroidery Digitizing & Vector Art",
    description:
      "Digitize'NStitch turns logos and artwork into production-ready embroidery files and clean vector art for clients worldwide.",
    name: 'About Us',
  },
  '/faq': {
    title: "FAQ: Prices, Formats, Turnaround & Revisions | Digitize'NStitch",
    description:
      'Answers about embroidery digitizing and vector art prices, file formats, hoop sizes, turnaround, revisions, refunds and PayPal payment.',
    name: 'FAQ',
    faq: true,
  },
  '/quote': {
    title: "Get a Quote | Digitize'NStitch",
    description:
      'Upload your artwork to order embroidery digitizing or get a quote for vector art and custom patches. Or chat with us on WhatsApp.',
    name: 'Get a Quote',
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
  areaServed: 'Worldwide',
  sameAs: [CONTACT.instagramUrl, CONTACT.facebookUrl],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: CONTACT.email,
    telephone: CONTACT.phone,
    areaServed: 'Worldwide',
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

  if (page.service) {
    graph.push({
      '@type': 'Service',
      name: page.service.name,
      serviceType: page.service.name,
      url,
      description: page.description,
      provider: { '@id': ORG_ID },
      areaServed: 'Worldwide',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: page.service.price, ...(page.service.max && { maxPrice: page.service.max }), priceCurrency: 'USD' },
      },
    });
  }

  if (page.faq) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: ALL_FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export const canonical = (path) => SITE_URL + (path === '/' ? '/' : path);
