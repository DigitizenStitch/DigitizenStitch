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

function head(route, page) {
  const url = canonical(route);
  const ld = structuredData(route);
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="${page.noindex ? 'noindex' : 'index, follow'}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    ld ? `<script type="application/ld+json" id="ld-json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>` : '',
  ].join('\n    ');
}

function write(route, page, html) {
  const out = template
    .replace(/<!--seo-->[\s\S]*?<!--\/seo-->/, head(route, page))
    .replace('<!--app-->', html);
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, out);
  console.log('prerendered', route);
}

for (const route of ROUTES) write(route, PAGES[route], render(route));

// Netlify serves 404.html with a real 404 status for unknown URLs.
write('/404', { title: "Page Not Found | Digitize'NStitch", description: 'The page you are looking for does not exist.', noindex: true }, render('/__not-found'));
fs.renameSync(path.join(dist, '404', 'index.html'), path.join(dist, '404.html'));
fs.rmSync(path.join(dist, '404'), { recursive: true });
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
