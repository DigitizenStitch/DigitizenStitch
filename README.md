# Digitize'NStitch website

React + Vite + Tailwind CSS, hosted on Netlify. Every page is prerendered to static HTML at build time for SEO.

## Commands

```bash
npm install
npm run dev       # local development
npm run build     # production build + prerender into dist/
npm run lint
```

## Where things live

| What | File |
|---|---|
| Contact details, prices, formats, policies | `src/data/site.js` |
| FAQ answers (FAQ page, FAQ schema, chat assistant) | `src/data/faq.js` |
| Page titles, descriptions, structured data | `src/data/seo.js` |
| Portfolio captions | `src/data/portfolio.js` |
| Pages | `src/pages/` |
| Quote form (Netlify Forms, form name `contact`) | `src/components/QuoteForm.jsx` + hidden copy in `index.html` |
| Old-URL redirects | `public/_redirects` |

If you add a page, also add it to `src/data/seo.js`, `src/App.jsx` and `public/sitemap.xml`.
If you change quote form fields, update the hidden form in `index.html` too.

## Adding portfolio images

Original photos are never modified. Create optimized copies (needs Python 3 + Pillow):

```bash
python3 scripts/optimize_images.py path/to/photo1.jpg path/to/photo2.jpg embroidery
# category: embroidery | vector | patches
```

The new images appear in the gallery automatically. Optionally add a caption in `src/data/portfolio.js`.
