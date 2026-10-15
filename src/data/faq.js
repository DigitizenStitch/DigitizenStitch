// Verified answers used by the FAQ page, FAQ schema and the chat assistant.
// `keywords` only help the chat assistant match questions; they are not shown.

import { CONTACT, FORMATS, PRICE_NOTE } from './site';

export const FAQ_GROUPS = [
  {
    title: 'Pricing & payment',
    items: [
      {
        q: 'What are your prices?',
        a: `Embroidery digitizing starts at $10, vector art at $12 and patch digitizing at $10. Physical patches are priced by custom quote. ${PRICE_NOTE}`,
        keywords: ['price', 'prices', 'pricing', 'rates', 'cost', 'costs', 'charges', 'packages'],
      },
      {
        q: 'How much does embroidery digitizing cost?',
        a: `Embroidery digitizing starts at $10. ${PRICE_NOTE}`,
        keywords: ['digitizing', 'digitize', 'embroidery', 'stitch', 'price', 'cost', 'how much', 'fee'],
      },
      {
        q: 'How much does vector art cost?',
        a: `Vector art starts at $12. ${PRICE_NOTE}`,
        keywords: ['vector', 'vectorize', 'vectorizing', 'vectorization', 'redraw', 'price', 'cost', 'how much'],
      },
      {
        q: 'How much do patches cost?',
        a: 'Patch digitizing starts at $10. Physical patches are priced by custom quote, because cost depends on the patch type, size, quantity and details. Send your design through the quote form for an exact price.',
        keywords: ['patch', 'patches', 'price', 'cost', 'physical', 'how much'],
      },
      {
        q: 'Which payment methods do you accept?',
        a: 'We accept payment through PayPal only.',
        keywords: ['pay', 'payment', 'paypal', 'card', 'credit card', 'debit', 'bank', 'transfer', 'stripe', 'invoice', 'wise'],
      },
      {
        q: 'Why can the final price differ from the starting price?',
        a: 'Starting prices cover simpler designs. Larger sizes, high stitch counts, fine detail or special requirements take more work, so the final price is confirmed in your quote before any work begins.',
        keywords: ['final', 'starting', 'differ', 'quote', 'complexity', 'size'],
      },
    ],
  },
  {
    title: 'Files & formats',
    items: [
      {
        q: 'Which embroidery file formats do you provide?',
        a: `Our standard embroidery machine formats are ${FORMATS.embroidery.join(', ')}. Other machine formats, such as ${FORMATS.embroideryOnRequest.join(' and ')}, can be requested and are provided when supported. Please mention your machine format when you request a quote.`,
        keywords: ['format', 'formats', 'dst', 'pes', 'emb', 'exp', 'jef', 'machine', 'file', 'embroidery'],
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
        q: 'How long does an order take?',
        a: 'Standard turnaround depends on the complexity of the design. We confirm the expected timing with your quote.',
        keywords: ['how long', 'turnaround', 'delivery time', 'days', 'deadline', 'timeline', 'take'],
      },
      {
        q: 'Do you offer rush orders?',
        a: 'Yes. A 2-hour rush turnaround is available. Whether a specific design qualifies depends on its complexity, so please ask for rush delivery when you request your quote.',
        keywords: ['rush', 'urgent', 'asap', '2 hour', '2-hour', 'two hour', 'express', 'same day'],
      },
      {
        q: 'Do you offer revisions?',
        a: 'Yes, revisions are free. If something needs adjusting, reply to the delivery email and tell us what to change.',
        keywords: ['revision', 'revisions', 'change', 'edit', 'fix', 'modify', 'adjust', 'free'],
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
        a: 'We offer embroidery digitizing, vector art, patch digitizing and physical patches (custom quote).',
        keywords: ['service', 'services', 'offer', 'provide'],
      },
      {
        q: 'Do you make physical patches?',
        a: 'Yes, physical patches are available by custom quote. Share your design, size, quantity and patch type through the quote form, and we will reply with pricing.',
        keywords: ['physical', 'patch', 'patches', 'manufacture', 'pvc', 'woven', 'leather', 'iron'],
      },
      {
        q: 'How do I place an order?',
        a: 'Send your artwork through the Get a Quote form, or message us on WhatsApp or by email. We review the design, confirm the price, and start work once you approve and pay through PayPal.',
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
