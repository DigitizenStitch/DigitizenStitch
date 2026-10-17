// Verified answers used by the FAQ page, FAQ schema and the chat assistant.
// `keywords` only help the chat assistant match questions; they are not shown.

import { CONTACT, FORMATS, PRICE_NOTE } from './site';

const PRICING_SUMMARY =
  'Embroidery digitizing: under 5 inches $4.99–$9.99, 5–7 inches $9.99–$14.99, over 7 inches on quote. Vector art starts at $12. Custom patches are priced on quote.';

export const FAQ_GROUPS = [
  {
    title: 'Pricing & payment',
    items: [
      {
        q: 'What are your prices?',
        a: `${PRICING_SUMMARY} ${PRICE_NOTE}`,
        keywords: ['price', 'prices', 'pricing', 'rates', 'cost', 'costs', 'charges', 'packages', 'package'],
      },
      {
        q: 'How much does embroidery digitizing cost?',
        a: `Designs under 5 inches (sleeve, cap logo, left-chest, 4×4 and 5×5 hoop) cost $4.99–$9.99. Designs of 5–7 inches (mid-chest, sweatshirt or hoodie chest, tote bags, 5×7 hoop) cost $9.99–$14.99. Designs over 7 inches (full-front, jacket back, large appliqué, 6×10 and 8×12 hoops) are priced on quote. The final price within each range depends on design complexity.`,
        keywords: ['digitizing', 'digitize', 'embroidery', 'stitch', 'price', 'cost', 'how much', 'fee', 'logo', 'cap', 'chest'],
      },
      {
        q: 'How much does vector art cost?',
        a: 'Vector art starts at $12. The final price depends on the complexity of your artwork and is confirmed in your quote.',
        keywords: ['vector', 'vectorize', 'vectorizing', 'vectorization', 'redraw', 'price', 'cost', 'how much'],
      },
      {
        q: 'Which payment methods do you accept?',
        a: 'We accept payment through PayPal only.',
        keywords: ['pay', 'payment', 'paypal', 'card', 'credit card', 'debit', 'bank', 'transfer', 'stripe', 'invoice', 'wise'],
      },
      {
        q: 'Why is the price shown as a range?',
        a: 'Two designs of the same size can need very different amounts of work. Simple shapes sit at the lower end of the range; dense or highly detailed artwork sits at the higher end. You always see the exact price before any work begins.',
        keywords: ['range', 'final', 'differ', 'exact', 'why', 'complexity'],
      },
    ],
  },
  {
    title: 'Files & formats',
    items: [
      {
        q: 'Which embroidery file formats do you provide?',
        a: `We deliver whichever machine format you need, including ${FORMATS.embroidery.join(', ')}. Just tell us your machine or format when you order.`,
        keywords: ['format', 'formats', 'dst', 'pes', 'emb', 'exp', 'jef', 'vp3', 'xxx', 'hus', 'pec', 'machine', 'brother', 'tajima', 'janome', 'husqvarna', 'file', 'embroidery'],
      },
      {
        q: 'Which vector art formats do you provide?',
        a: `Vector art is delivered in ${FORMATS.vector.join(', ')}. These are artwork files for printing, screen printing, engraving, signage and similar uses. They are not embroidery machine files.`,
        keywords: ['vector', 'ai', 'eps', 'pdf', 'svg', 'png', 'format', 'formats', 'file'],
      },
      {
        q: 'What artwork can I send you?',
        a: 'You can upload JPG, PNG, PDF, SVG, AI or EPS files of up to 8 MB through the quote form. A clear, high-resolution image gives the best result. If your file is larger, mention it in the form and we will arrange another way to receive it.',
        keywords: ['upload', 'artwork', 'image', 'jpg', 'photo', 'attach', 'accept'],
      },
      {
        q: 'Which hoop sizes do you digitize for?',
        a: 'Our packages cover 4×4 and 5×5 hoops (under 5 inches), 5×7 hoops (5–7 inches), and 6×10 and 8×12 hoops (over 7 inches, on quote).',
        keywords: ['hoop', 'hoops', '4x4', '5x5', '5x7', '6x10', '8x12', 'size', 'sizes'],
      },
      {
        q: 'How do I receive my finished files?',
        a: 'Final completed design files are delivered to you by email.',
        keywords: ['receive', 'deliver', 'delivered', 'delivery', 'download', 'finished'],
      },
    ],
  },
  {
    title: 'Turnaround & revisions',
    items: [
      {
        q: 'How long does embroidery digitizing take?',
        a: 'Designs under 5 inches and designs of 5–7 inches are delivered within 12–24 hours. Designs over 7 inches take 24–48 hours.',
        keywords: ['how long', 'turnaround', 'delivery time', 'days', 'hours', 'deadline', 'timeline', 'take', 'fast', 'quick', 'rush', 'urgent'],
      },
      {
        q: 'Do you offer revisions?',
        a: 'Yes, edits and revisions are free. If something needs adjusting, reply to the delivery email and tell us what to change.',
        keywords: ['revision', 'revisions', 'change', 'edit', 'edits', 'fix', 'modify', 'adjust', 'free'],
      },
      {
        q: 'What is your refund policy?',
        a: 'Refund requests are handled case by case. Contact us with your order details and we will review your situation.',
        keywords: ['refund', 'money back', 'cancel', 'return', 'unhappy', 'dissatisfied'],
      },
    ],
  },
  {
    title: 'Services & ordering',
    items: [
      {
        q: 'What services do you offer?',
        a: 'We offer embroidery digitizing, vector art conversion and custom physical patches (priced on quote).',
        keywords: ['service', 'services', 'offer', 'provide'],
      },
      {
        q: 'Do you make physical patches?',
        a: 'Yes, custom physical patches are available on quote. Share your design, size, quantity and patch type through the quote form, and we will reply with pricing.',
        keywords: ['patch digitizing', 'physical', 'patch', 'patches', 'manufacture', 'pvc', 'woven', 'leather', 'iron'],
      },
      {
        q: 'How do I place an order?',
        a: 'Choose a package and click Order Now, or send your artwork through the Get a Quote form, WhatsApp or email. We confirm the price, you pay through PayPal, and your files arrive by email.',
        keywords: ['order', 'start', 'begin', 'place', 'quote', 'process', 'buy'],
      },
      {
        q: 'Where are your clients located?',
        a: 'We work online and serve clients worldwide.',
        keywords: ['country', 'location', 'worldwide', 'international', 'located', 'ship', 'shipping'],
      },
      {
        q: 'How can I contact you?',
        a: `Email ${CONTACT.email} or message us on WhatsApp at ${CONTACT.phoneDisplay}. You can also use the Get a Quote form.`,
        keywords: ['contact', 'email', 'whatsapp', 'phone', 'call', 'reach', 'human', 'person', 'agent'],
      },
    ],
  },
];

export const ALL_FAQS = FAQ_GROUPS.flatMap((g) => g.items);
