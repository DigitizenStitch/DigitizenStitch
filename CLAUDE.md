# Digitize'NStitch website: project memory for Claude

## Owner and how to talk to them
- Owner runs Digitize'NStitch from Karachi, Pakistan: handles client communication and sales and outsources the actual digitizing work.
- Reply in simple Roman Urdu mixed with natural English, step by step, beginner-friendly, honest and practical.
- Client-facing English must sound natural and human, not AI-written.
- Prefer free tools. Never invent prices, testimonials, client counts, reviews, ratings, certifications, addresses or service claims.
- Never print or ask for secrets, passwords or 2FA codes. Logins happen only through official login flows, done by the owner.

## Site
- Live: https://digitizenstitch.com, hosted on Netlify (site `lighthearted-brioche-759c76`, id `a9668a8f-f938-42d8-83b5-a47d3c4b7b01`).
- Merging to `main` deploys to production automatically. Work on a branch, open a PR, run tests, and get the owner's OK before merging.
- Stack: React 18 + Vite 5 + Tailwind 3, react-router v7 (import from `react-router`).
- `npm run build` = CSP hash check, client build, SSR build, then `scripts/prerender.js`, which writes one static HTML file per route plus `sitemap.xml`.
- Keep the brand colors and the existing design.

## Business facts (source of truth: `src/data/site.js`, `src/data/faq.js`)
- Embroidery digitizing: under 5" $4.99–$9.99, 5–7" $9.99–$14.99, over 7" on quote.
- Vector art from $9.99. Custom patches: on quote only.
- Turnaround: 12–24 h up to 7", 24–48 h over 7". Free edits/revisions.
- Payment: PayPal only, confirmed by email. Online business serving clients worldwide (main markets USA, UK).
- There is NO rush/8-hour service. Do not add one unless the owner confirms it.

## Where things live
- Pages: `src/pages/` (Home, Services, InfoPages, Legal, Portfolio, FileFormats, Blog).
- SEO titles, descriptions and JSON-LD: `src/data/seo.js`. New routes are added to `PAGES` there and to `src/App.jsx`; prerender and sitemap pick them up automatically.
- Blog posts: `src/data/posts.js` (block types: p, h2, ul, tip). Each post has keyword-based title and description, date, FAQs and related links.
- Quote form: `src/components/QuoteForm.jsx` (Netlify form named `contact`).
- `netlify/functions/submission-created.mjs` emails each form submission through Gmail SMTP, using the `GMAIL_USER` and `GMAIL_APP_PASSWORD` env vars. Do not break it.
- `netlify/functions/deploy-succeeded.mjs` pings IndexNow (Bing and partners) with the sitemap URLs after production deploys. The key file is in `public/` and is public by design.
- Analytics: GA4 `G-DRS7VRVML3` in `src/components/Analytics.jsx`. It loads only after the cookie banner's Accept. The CSP in `netlify.toml` allows only the Google Analytics hosts.
- `public/llms.txt` lists key pages for AI crawlers. `robots.txt` allows all crawlers.

## Done so far (Oct 2026)
- Oct 28-29: fixed the trailing-slash redirect problem (pages are now prerendered as name.html, PR #9), so /pricing no longer redirects to /pricing/ and Google sees one URL per page.
- Oct 29: both first blog posts rewritten with photos, FAQ schema and an updated date (PR #10). Blog posts now have an author byline (Abdul Rafay) and a Person node in structured data.
- Oct 29: FAQPage schema added to the service pages and the file formats guide; longer meta descriptions on the legal and portfolio pages.
- Bing Webmaster: Google Search Console import done on Oct 22 (sitemap imported, 17 URLs).
- Full redesign, security headers and CSP, quote form with email notifications, and redirects from old URLs.
- Google Search Console verified (HTML file). Sitemap submitted on Oct 22: Success, 17 pages. Indexing requested for the 3 newest URLs.
- GA4 with cookie consent, live and receiving data.
- SEO rounds 1 and 2: keyword-based H1s and titles, file formats guide (`/embroidery-file-formats`), blog with cap/hat and 3D puff guides, patch FAQs.
- Ubersuggest live audit: 100/100, 0 errors.

## Keyword research (Ubersuggest, US, Oct 2026)
- embroidery digitizing services 1,600/mo (SD 21), embroidery digitizing 2,400 (SD 35), logo digitizing 390 (SD 20).
- embroidery file type 880 (SD 14), what is a dst file 590 (SD 5).
- 3d puff embroidery 880 (SD 27), puff embroidery 1,000 (SD 29).
- custom embroidered patches 9,900 (SD 31).
- Competitors with low DA: finelinedigitizing.com (#1, DA 10), digitizingninjas.com, prodigitizing.com.

## Not allowed / not eligible
- Google Business Profile: NOT eligible (online-only business). Never use a fake address.
- BBB, Yahoo Local and D&B need a US address: skip them.
- No mass auto-generated blog posts. The owner asked for 3 quality, fact-checked posts per week on a schedule (Oct 2026); quality comes first, and never invent facts, prices, clients or reviews.

## Open tasks
- Optional GA4 lead events (form submit, WhatsApp click). Owner has not approved this yet.
- Add real work photos to the blog posts (waiting on photos from the owner).
- Client acquisition, the top priority:
  - follow up the 5 old leads in Netlify Forms
  - research and email US embroidery shops (personal, honest, with an opt-out)
  - Fiverr/Upwork gig
  - Facebook groups
  - Instagram posts of real work
- Ubersuggest: the owner planned to cancel it to save money, so the useful keyword data and a 36-topic blog calendar were saved locally (seo/keyword-plan-2026-10.md, not in this repo).
- Real photos and sew-outs: the owner will supply them; use them in blogs, the portfolio and About instead of generated images where possible.

## Blog images and publishing
- Blog images live in public/images/blog/ (webp, 1600 px wide). Posts use an img block in src/data/posts.js with alt text and no captions. Photo style only, no diagrams. AI-generated images are generic scenes; never present them as the owner's client work.
- The GitHub download from the owner's network is very slow, so changes are often made through github.com in Chrome on a branch, tested on the Netlify deploy preview (deploy-preview-N--lighthearted-brioche-759c76.netlify.app) and then merged.
- Search Console property is the URL-prefix https://digitizenstitch.com/ (the domain-property URL shows no access).

## Testing
- `npm run build` must pass, including the CSP check.
- Check every route for: one H1, no console errors, no horizontal scroll at 375px, unique titles, and quote form validation and submit.
- Preview with a static server that serves `dist/` with the CSP header. Set the cookie choice in localStorage (`dns-cookie-consent`) so the banner does not block clicks.
