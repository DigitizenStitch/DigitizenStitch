import ServicePage from './ServicePage';
import { Backdrop, SectionHeading } from '../components/ui';
import { PricingTiers } from '../components/sections';
import { BeforeAfter, Hoop } from '../components/art/Scenes';
import StitchArt from '../components/art/StitchArt';
import { IMAGES, pic } from '../data/images';
import { byCategory } from '../data/portfolio';
import { FORMATS } from '../data/site';

export function EmbroideryDigitizing() {
  return (
    <ServicePage
      content={{
        crumb: 'Embroidery Digitizing',
        eyebrow: 'Embroidery Digitizing',
        title: 'Custom embroidery digitizing that sews clean',
        intro: 'We rebuild your logo or artwork as a stitch file for your machine, digitized for the size, placement and fabric you need.',
        priceLabel: 'Packages from',
        price: '$4.99',
        visual: (
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-lift">
            <img {...pic(IMAGES.software, '(min-width: 1024px) 40vw, 100vw', true)} className="w-full" />
          </div>
        ),
        overview: {
          title: 'Turning artwork into stitches',
          paragraphs: [
            'Embroidery digitizing rebuilds artwork as a sequence of stitches: stitch types, direction, density, underlay and color order. A machine cannot sew a JPG or PNG; it needs a dedicated stitch file.',
            'Tell us the design size, the placement (for example left chest, cap front or jacket back) and the fabric if you know it. We digitize for those details and deliver the file in your machine format by email.',
            'Small text, fine lines and very detailed artwork may need simplifying to sew cleanly. If that applies to your design, we will let you know before we start.',
          ],
        },
        pricing: (
          <section id="pricing" className="dark-surface grain relative overflow-hidden bg-mesh section">
            <Backdrop stitch={false} />
            <div className="container-x relative">
              <SectionHeading dark center eyebrow="Pricing" title="Our Embroidery Digitizing Prices" intro="Choose the package that matches your design size." />
              <div className="mt-16"><PricingTiers /></div>
            </div>
          </section>
        ),
        includes: [
          'Digitizing for your size, placement and hoop',
          'Any machine format you need',
          'Free edits and revisions',
          '12–24 hours turnaround up to 7 inches; 24–48 hours over 7 inches',
          'Final files delivered by email',
        ],
        formats: [
          { label: 'Machine formats', items: FORMATS.embroidery, note: 'Need another format? Tell us your machine and you will get the file it needs.' },
        ],
        uses: {
          title: 'Where our embroidery files are used',
          items: [
            ['Left-chest logos', 'Company logos for polos, shirts and uniforms.'],
            ['Cap logos', 'Front, side and back cap designs.'],
            ['Sleeve designs', 'Small, precise designs for sleeves and cuffs.'],
            ['Hoodies and sweatshirts', 'Mid-chest and chest designs on heavier fabrics.'],
            ['Jacket backs and full-fronts', 'Large, detailed designs and appliqué.'],
            ['Tote bags', 'Branded bags and promotional items.'],
          ],
        },
        gallery: { title: 'Embroidery digitizing samples', category: 'embroidery', items: byCategory('embroidery') },
        faqs: ['How much does embroidery digitizing cost?', 'How long does embroidery digitizing take?', 'Which embroidery file formats do you provide?', 'Which hoop sizes do you digitize for?', 'Do you offer revisions?'],
        related: [
          { to: '/vector-art', label: 'Vector Art' },
          { to: '/pricing', label: 'Pricing' },
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
        price: '$9.99',
        visual: (
          <BeforeAfter
            beforeLabel="Pixelated"
            afterLabel="Vector"
            before={<img {...pic(IMAGES.vectorBefore, '(min-width: 1024px) 40vw, 100vw', true)} style={{ imageRendering: 'pixelated' }} className="h-full w-full object-cover" />}
            after={<div className="grid h-full w-full place-items-center bg-white p-[4.5%]"><StitchArt flat className="w-full" /></div>}
            caption="Sample: a low-resolution image redrawn as clean, scalable vector art."
          />
        ),
        overview: {
          title: 'Sharp artwork at any size',
          paragraphs: [
            'Raster images such as JPG and PNG are made of pixels, so they blur when enlarged. Vector artwork is made of paths and shapes, so it can be scaled up or down without losing quality.',
            'We manually redraw your logo or image as vector art, ready for screen printing, signage, engraving, cutting, promotional products and other print work.',
            'Vector files are artwork files, not embroidery machine files. If you need embroidery, see our embroidery digitizing service.',
          ],
        },
        includes: ['Manual redraw of your logo or image', 'Clean, scalable vector paths', 'Free edits and revisions', 'Exact price and timing confirmed in your quote', 'Final files delivered by email'],
        formats: [{ label: 'Vector art formats', items: FORMATS.vector }],
        uses: {
          title: 'What vector art is used for',
          items: [
            ['Screen printing', 'Clean artwork for printing on apparel.'],
            ['Signs and banners', 'Large-format output without blurring.'],
            ['Laser engraving and cutting', 'Precise paths for engraving and cutting machines.'],
            ['Logo recreation', 'Rebuild an old or low-quality logo file.'],
            ['Promotional products', 'Artwork for mugs, pens, bags and more.'],
            ['Illustrations', 'Characters and graphics for print and merchandise.'],
          ],
        },
        gallery: { title: 'Vector art samples', category: 'vector', items: byCategory('vector') },
        faqs: ['How much does vector art cost?', 'Which vector art formats do you provide?', 'What artwork can I send you?', 'Do you offer revisions?'],
        related: [
          { to: '/embroidery-digitizing', label: 'Embroidery Digitizing' },
          { to: '/patches', label: 'Custom Patches' },
        ],
      }}
    />
  );
}

export function Patches() {
  return (
    <ServicePage
      content={{
        crumb: 'Custom Patches',
        eyebrow: 'Custom Patches',
        title: 'Custom patches made to your design',
        intro: 'Physical patches produced to your artwork, size and quantity. Every patch order is priced individually on quote.',
        priceLabel: 'Pricing',
        price: 'On Quote',
        visual: <Hoop animate className="mx-auto w-full max-w-sm" />,
        overview: {
          title: 'How patch quotes work',
          paragraphs: [
            'Patch pricing depends on the patch type, size, quantity and level of detail, so we quote each order individually.',
            'Send your design through the quote form and include the size, quantity and any preferences such as patch type, border or backing. We will reply with pricing and options.',
          ],
        },
        includes: ['Individual quote for your design', 'Your size and quantity', 'Final details confirmed before production'],
        formats: [],
        uses: {
          title: 'Popular patch uses',
          items: [
            ['Clubs and teams', 'Club, team and event patches.'],
            ['Uniforms', 'Emblems for uniforms and workwear.'],
            ['Brand merchandise', 'Logo patches for caps, jackets and bags.'],
            ['Events', 'Limited-run patches for special occasions.'],
          ],
        },
        gallery: { title: 'Patch work samples', category: 'patches', items: byCategory('patches') },
        faqs: ['Do you make physical patches?', 'How do I place an order?', 'Which payment methods do you accept?'],
        related: [
          { to: '/embroidery-digitizing', label: 'Embroidery Digitizing' },
          { to: '/vector-art', label: 'Vector Art' },
        ],
      }}
    />
  );
}
