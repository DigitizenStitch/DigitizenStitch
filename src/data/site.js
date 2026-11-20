import doubleRR from '../assets/testimonials/double-rr-trucking.webp';
import exxonMobil from '../assets/testimonials/exxonmobil.webp';
import runLittleMouse from '../assets/testimonials/run-little-mouse.webp';
import eyeOfTiger from '../assets/testimonials/eye-of-the-tiger.webp';
import heroineKarl from '../assets/testimonials/heroine-karl.webp';
import anchoredHomestead from '../assets/testimonials/anchored-homestead.webp';
import smallSpaces from '../assets/testimonials/small-spaces.webp';
import disneyworld from '../assets/testimonials/disneyworld.webp';
import starWars from '../assets/testimonials/star-wars.webp';

// Single source of truth for verified business details.
// Update contact info, prices or policies here and they change site-wide.

export const SITE_URL = 'https://digitizenstitch.com';

export const BRAND = "Digitize'NStitch";

// Byline shown on blog posts and used as the author in structured data.
export const AUTHOR = 'Abdul Rafay';

// While true, unverified sections (client count, testimonials) render as clearly
// labelled placeholders. Set to false before going live, or fill in real data below.
export const SHOW_PLACEHOLDERS = false;

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

// Exact embroidery digitizing packages supplied by the business owner.
export const PACKAGES = [
  {
    id: 'under-5',
    name: 'Under 5 Inches',
    size: 'Up to 5"',
    price: '$4.99–$9.99',
    min: 4.99,
    max: 9.99,
    turnaround: '12–24 hours',
    features: ['Sleeve Design', 'Cap Logo', 'Left-Chest', '4×4 and 5×5 Hoop', 'Free Edits/Revisions', '12–24 Hours Turnaround'],
    cta: 'Order Now',
    accent: 'cyan',
  },
  {
    id: '5-7',
    name: '5–7 Inches',
    size: '5" to 7"',
    price: '$9.99–$14.99',
    min: 9.99,
    max: 14.99,
    turnaround: '12–24 hours',
    features: ['Mid-Chest', 'Sweatshirt/Hoodie Chest', 'Tote Bags', '5×7 Hoop', 'Free Edits/Revisions', '12–24 Hours Turnaround'],
    cta: 'Order Now',
    accent: 'gold',
    featured: true,
  },
  {
    id: 'over-7',
    name: 'Over 7 Inches',
    size: 'Larger than 7"',
    price: 'On Quote',
    min: null,
    max: null,
    turnaround: '24–48 hours',
    features: ['Full-Front', 'Jacket Back', 'Large Appliqué Designs', '6×10 and 8×12 Hoops', 'Free Edits/Revisions', '24–48 Hours Turnaround'],
    cta: 'Get a Quote',
    accent: 'violet',
  },
];

export const packageById = (id) => PACKAGES.find((p) => p.id === id);
export const packageLabel = (p) => `${p.name} (${p.price})`;

export const PRICE_NOTE =
  'Prices are shown as ranges: the final price within each range depends on design complexity and detail. For anything outside these packages, request a quote.';

export const VECTOR_PRICE = 'Starting at $9.99';

export const FORMATS = {
  // Popular machine formats; any other format a client needs is provided on request.
  embroidery: ['DST', 'PES', 'EMB', 'EXP', 'JEF', 'VP3', 'XXX', 'HUS', 'PEC'],
  vector: ['AI', 'EPS', 'PDF', 'SVG', 'PNG'],
};

export const POLICIES = {
  revisions: 'Free edits and revisions',
  refunds: 'Handled case by case',
  delivery: 'Final files are delivered by email',
};

export const SERVICE_OPTIONS = ['Embroidery Digitizing', 'Vector Art', 'Custom Patches', 'Not sure yet'];

export const FORMAT_OPTIONS = [
  'DST',
  'PES',
  'EMB',
  'EXP',
  'JEF',
  'VP3',
  'XXX',
  'HUS',
  'PEC',
  'AI',
  'EPS',
  'PDF',
  'SVG',
  'PNG',
  'Other format (tell us below)',
  'Not sure',
];

export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    children: [
      { label: 'Embroidery Digitizing', to: '/embroidery-digitizing', note: 'Stitch files from $4.99' },
      { label: 'Vector Art', to: '/vector-art', note: 'Clean vectors from $9.99' },
      { label: 'Custom Patches', to: '/patches', note: 'Physical patches on quote' },
    ],
  },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Process', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
];

// Only verified figures. Everything here comes from the owner's published packages.
export const VERIFIED_STATS = [
  { value: 12, suffix: '–24 h', label: 'Turnaround for designs up to 7"' },
  { value: 4.99, prefix: '$', decimals: 2, label: 'Digitizing packages start at' },
  { text: 'Any', label: 'Machine format you need: DST, PES, EMB, EXP, JEF and more' },
  { value: 0, prefix: '$', label: 'Charged for edits and revisions' },
];

// Add genuine reviews here (with the client's permission). Leave empty to hide names.
// { quote: '', name: '', business: '', project: '', image: importedImage }
export const TESTIMONIALS = [
  {
    quote: 'Absolutely loved the 3D puff embroidery results! The lettering has a bold, raised look with a clean and professional finish. The stitching looks sharp, well-defined, and perfectly suited for custom trucker caps. Excellent digitizing quality and attention to detail! 🔥',
    name: 'Adrienne Martinez',
    project: 'Double RR Trucking',
    image: doubleRR,
  },
  {
    quote: 'The fine details in this design were important to get right, and the result looks amazing. The rose, skull, and lettering all came together beautifully. A great finish on the sweatshirt! 🌹',
    name: 'Kennedy Clark',
    project: 'Run Little Mouse',
    image: runLittleMouse,
  },
  {
    quote: 'Very happy with how this design turned out! The fine floral details, lettering, and overall stitch quality look fantastic. Everything is clean, well-defined, and beautifully stitched. Excellent work and great attention to detail! ⚓',
    name: 'Anghelina Parh',
    project: 'Anchored Homestead',
    image: anchoredHomestead,
  },
  {
    quote: 'Excellent digitizing quality! The designs came out beautifully with clean stitching, vibrant colors, and great attention to detail. Everything was well-organized and stitched smoothly. Very happy with the final results. Highly recommended! 🏰',
    name: 'Gabriela Milanes',
    project: 'Disneyworld Embroidery Design',
    image: disneyworld,
  },
  {
    quote: 'Really happy with how these caps turned out! The 3D puff lettering looks great and gives the logos a nice raised effect. Both caps came out just the way I wanted. Definitely happy with the work! 👍',
    name: 'Adrienne Martinez',
    project: 'ExxonMobil',
    image: exxonMobil,
  },
  {
    quote: "Love how this turned out! The character artwork looks fantastic, especially the different thread colors and lettering. It really brings the whole sweatshirt design together. Couldn't be happier with the finished look! 🙌",
    name: 'Kennedy Clark',
    project: 'Eye of the Tiger',
    image: eyeOfTiger,
  },
  {
    quote: 'Simple, clean, and exactly how I wanted it! The design looks lovely on the apron, and the lettering is clear and easy to read. Really pleased with how the final piece turned out. 😊',
    name: 'Anghelina Parh',
    project: 'Small Spaces',
    image: smallSpaces,
  },
  {
    quote: 'Outstanding embroidery digitizing work! The design has so many details and colors, but everything turned out sharp, clean, and beautifully stitched. Great attention to detail and excellent stitch quality. Very satisfied with the results! ⭐',
    name: 'Gabriela Milanes',
    project: 'Star Wars Embroidery Design',
    image: starWars,
  },
  {
    quote: 'Really impressed with the digitizing quality! The detailed artwork, multiple colors, and fine stitching all turned out beautifully. The design looks clean and professional on the final product. Great attention to detail and excellent results! 🎉',
    name: 'Anghelina Parh',
    project: 'Héróïne & Karl',
    image: heroineKarl,
  },
];
