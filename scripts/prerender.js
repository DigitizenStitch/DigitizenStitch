// Renders every page to static HTML after `vite build`, so each URL has its own
// crawlable content, title, description, canonical and structured data.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, PAGES, ROUTES, canonical, structuredData } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function head(route, page, html) {
  const url = canonical(route);
  const ld = structuredData(route);
  const heroTag = route === '/' ? (html.match(/<img[^>]*hero-main-1600-[^>]*>/) || [])[0] : null;
  const attr = (n) => (heroTag?.match(new RegExp(`${n}="([^"]+)"`)) || [])[1];
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    page.noindex ? '' : `<link rel="canonical" href="${url}" />`,
    heroTag ? `<link rel="preload" as="image" href="${attr('src')}" imagesrcset="${attr('srcSet') || attr('srcset')}" imagesizes="${attr('sizes')}" fetchpriority="high" />` : '',
    `<meta name="robots" content="${page.noindex ? 'noindex' : 'index, follow'}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    '<meta property="og:locale" content="en_US" />',
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    ld ? `<script type="application/ld+json" id="ld-json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>` : '',
  ].join('\n    ');
}

function write(route, page, html) {
  const out = template
    .replace(/<!--seo-->[\s\S]*?<!--\/seo-->/, head(route, page, html))
    .replace('<!--app-->', html);
  // `/pricing` -> pricing.html, not pricing/index.html: Netlify 301-redirects a folder
  // URL to its trailing-slash form, which would contradict the canonical and sitemap.
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, `${route.slice(1)}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, out);
  console.log('prerendered', route);
}

for (const route of ROUTES) write(route, PAGES[route], render(route));

// Netlify serves 404.html with a real 404 status for unknown URLs.
write('/404', { title: "Page Not Found | Digitize'NStitch", description: 'The page you are looking for does not exist.', noindex: true }, render('/__not-found'));
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });

// sitemap.xml is generated from the page list so new pages are never missed.
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${ROUTES.map((r) => `  <url><loc>${canonical(r)}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`,
);
console.log('sitemap.xml', ROUTES.length, 'urls');
