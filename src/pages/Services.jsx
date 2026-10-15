import ServicePage from './ServicePage';
import { CheckList, Reveal } from '../components/ui';
import { byCategory } from '../data/portfolio';
import { FORMATS } from '../data/site';

export function EmbroideryDigitizing() {
  return (
    <ServicePage
      content={{
        crumb: 'Embroidery Digitizing',
        eyebrow: 'Embroidery Digitizing',
        title: 'Custom embroidery digitizing for logos and artwork',
        intro: 'We convert your logo, illustration or design into a stitch file your embroidery machine can sew, prepared for the size and placement you need.',
        priceLabel: 'Starting at',
        price: '$10',
        overview: {
          title: 'Turning artwork into stitches',
          paragraphs: [
            'Embroidery digitizing is the process of rebuilding artwork as a sequence of stitches: stitch types, direction, density, underlay and colour order. A machine cannot read a JPG or PNG; it needs a dedicated stitch file.',
            'Tell us the design size, the placement (for example left chest, cap front or jacket back) and the fabric if you know it. We digitize for those details and deliver the file in your machine format by email.',
            'Small text, fine lines and very detailed artwork may need simplifying to sew cleanly. If that applies to your design, we will let you know before we start.',
          ],
        },
        includes: [
          'Digitizing for your required size and placement',
          'Your choice of standard machine format',
          'Free revisions',
          '2-hour rush turnaround available for eligible designs',
          'Final files delivered by email',
        ],
        formats: [
          { label: 'Standard machine formats', items: FORMATS.embroidery },
          { label: 'Available on request', items: FORMATS.embroideryOnRequest, muted: true, note: 'Other machine formats can be requested and are provided when supported.' },
        ],
        uses: {
          title: 'Where our embroidery files are used',
          items: [
            ['Left chest logos', 'Company logos for polos, shirts and uniforms.'],
            ['Caps and hats', 'Front, side and back cap designs.'],
            ['Jacket backs', 'Large, detailed designs for jackets and hoodies.'],
            ['Character artwork', 'Detailed illustrations, including anime and cartoon characters.'],
            ['Promotional items', 'Bags, towels and other branded merchandise.'],
            ['Patch artwork', 'Designs prepared for embroidered patches. See our patch page.'],
          ],
        },
        gallery: { title: 'Embroidery digitizing samples', category: 'embroidery', label: 'embroidery work', items: byCategory('embroidery') },
        faqs: [
          'How much does embroidery digitizing cost?',
          'Which embroidery file formats do you provide?',
          'Do you offer rush orders?',
          'Do you offer revisions?',
          'What artwork can I send you?',
        ],
        related: [
          { to: '/vector-art', label: 'Vector Art' },
          { to: '/patches', label: 'Patch Design & Digitizing' },
        ],
      }}
    />
  );
}

export function VectorArt() {
  return (
    <ServicePage
      content={{
        crumb: 'Vector Art',
        eyebrow: 'Vector Art',
        title: 'Vector art conversion for print and production',
        intro: 'We redraw blurry, pixelated or low-resolution images as clean vector artwork that stays sharp at any size.',
        priceLabel: 'Starting at',
        price: '$12',
        overview: {
          title: 'Sharp artwork at any size',
          paragraphs: [
            'Raster images such as JPG and PNG are made of pixels, so they blur when enlarged. Vector artwork is made of paths and shapes, which means it can be scaled up or down without losing quality.',
            'We manually redraw your logo or image as vector art, ready for screen printing, signage, engraving, cutting, promotional products and other print work.',
            'Please note that vector files are artwork files. They are not embroidery machine files. If you need embroidery, see our embroidery digitizing service.',
          ],
        },
        includes: [
          'Manual redraw of your logo or image',
          'Clean, scalable vector paths',
          'Free revisions',
          '2-hour rush turnaround available for eligible designs',
          'Final files delivered by email',
        ],
        formats: [{ label: 'Vector art formats', items: FORMATS.vector }],
        uses: {
          title: 'What vector art is used for',
          items: [
            ['Screen printing', 'Separated, clean artwork for printing on apparel.'],
            ['Signs and banners', 'Large-format output without blurring.'],
            ['Laser engraving and cutting', 'Precise paths for engraving and cutting machines.'],
            ['Logo recreation', 'Rebuild an old or low-quality logo file.'],
            ['Promotional products', 'Artwork for mugs, pens, bags and more.'],
            ['Illustrations', 'Characters and graphics for print and merchandise.'],
          ],
        },
        gallery: { title: 'Vector art samples', category: 'vector', label: 'vector art', items: byCategory('vector') },
        faqs: [
          'How much does vector art cost?',
          'Which vector art formats do you provide?',
          'What artwork can I send you?',
          'Do you offer revisions?',
        ],
        related: [
          { to: '/embroidery-digitizing', label: 'Embroidery Digitizing' },
          { to: '/patches', label: 'Patch Design & Digitizing' },
        ],
      }}
    />
  );
}

export function Patches() {
  return (
    <ServicePage
      content={{
        crumb: 'Patch Design & Digitizing',
        eyebrow: 'Patches',
        title: 'Patch design, digitizing and custom patches',
        intro: 'Patch digitizing for your own production, or physical patches made to your requirements by custom quote.',
        priceLabel: 'Patch digitizing from',
        price: '$10',
        overview: {
          title: 'Two ways we can help with patches',
          paragraphs: [
            'Patch digitizing: if you produce patches yourself, we digitize your patch design as a machine-ready stitch file, starting at $10.',
            'Physical patches: if you need finished patches, send us your design, size, quantity and preferred patch type. Pricing depends on these details, so physical patches are quoted individually.',
          ],
        },
        extra: (
          <Reveal className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="card p-6">
              <p className="text-sm font-medium text-slate-500">Patch Digitizing</p>
              <p className="mt-2 font-display text-3xl text-navy-950">From $10</p>
              <div className="mt-5 text-[15px]"><CheckList items={['Machine-ready stitch file', 'DST, PES or EMB', 'Free revisions']} /></div>
            </div>
            <div className="card p-6">
              <p className="text-sm font-medium text-slate-500">Physical Patches</p>
              <p className="mt-2 font-display text-3xl text-navy-950">Custom Quote</p>
              <div className="mt-5 text-[15px]"><CheckList items={['Priced per design and quantity', 'Share size and patch type', 'Request a Quote to start']} /></div>
            </div>
          </Reveal>
        ),
        includes: [
          'Patch digitizing from $10',
          'Physical patches by custom quote',
          'Free revisions on digitizing',
          'Digital files delivered by email',
        ],
        formats: [
          { label: 'Patch digitizing formats', items: FORMATS.embroidery },
          { label: 'Available on request', items: FORMATS.embroideryOnRequest, muted: true, note: 'Other machine formats can be requested and are provided when supported.' },
        ],
        uses: {
          title: 'Popular patch uses',
          items: [
            ['Clubs and teams', 'Club, team and event patches.'],
            ['Uniforms', 'Emblems for uniforms and workwear.'],
            ['Brand merchandise', 'Logo patches for caps, jackets and bags.'],
            ['Events and commemoratives', 'Limited-run patches for special occasions.'],
          ],
        },
        gallery: { title: 'Patch work samples', category: 'patches', label: 'patch work', items: byCategory('patches') },
        faqs: ['How much do patches cost?', 'Do you make physical patches?', 'Which embroidery file formats do you provide?', 'How do I place an order?'],
        related: [
          { to: '/embroidery-digitizing', label: 'Embroidery Digitizing' },
          { to: '/vector-art', label: 'Vector Art' },
        ],
      }}
    />
  );
}
