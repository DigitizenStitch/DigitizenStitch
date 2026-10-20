// Portfolio images are discovered automatically.
// To add work: run scripts/optimize_images.py (see README) — the new files
// appear in the gallery without code changes. Add a caption below if you like.

const large = import.meta.glob('../assets/portfolio/*/*.webp', { eager: true, import: 'default' });
const thumbs = import.meta.glob('../assets/portfolio-thumbs/*/*.webp', { eager: true, import: 'default' });

export const CATEGORIES = [
  { id: 'embroidery', label: 'Embroidery Digitizing' },
  { id: 'vector', label: 'Vector Art' },
  { id: 'patches', label: 'Patch Work' },
];

// Optional captions, keyed by "<category>/<file name without extension>".
const CAPTIONS = {
  'embroidery/d1': 'Floral portrait embroidery design',
  'embroidery/d2': 'Teddy bear character embroidery design',
  'embroidery/d3': 'Multi-color cartoon artwork digitized for embroidery',
  'embroidery/d4': 'Wolf and branches embroidery design',
  'embroidery/d5': 'Doberman portrait embroidery design',
  'embroidery/d6': 'Textured lettering embroidery design',
  'embroidery/d7': 'Off-road vehicle embroidery design',
  'embroidery/d8': 'Detailed butterfly embroidery design',
  'embroidery/a1': 'Anime character panel embroidery design',
  'embroidery/a2': 'Masked anime character embroidery design',
  'embroidery/a3': 'Stacked anime character embroidery design',
  'embroidery/a4': 'Anime character with red accents embroidery design',
  'embroidery/a5': 'Anime character portrait embroidery design',
  'embroidery/a6': 'Anime character in patterned outfit embroidery design',
  'vector/p1': 'Skate-themed vector illustration',
  'vector/p2': 'Palm tree and wave vector illustration',
  'vector/p3': 'Shark mascot vector artwork',
  'vector/p4': 'Bold lettering vector artwork',
  'vector/p5': 'Dinosaur rider vector artwork',
  'vector/p6': 'Sneaker vector illustration',
  'vector/p7': 'Character with lettering vector artwork',
  'vector/p8': 'Skull character vector artwork',
  'vector/p9': 'Hooded bear character vector artwork',
  'patches/pa1': 'Batch of red helmet patches',
  'patches/pa2': 'Round green patches',
  'patches/pa3': 'Police-style emblem patch',
  'patches/pa4': 'Red shaped patches',
  'patches/pa5': 'Leather and dark-toned patches',
  'patches/pa6': 'Black and white club patches',
  'patches/pa7': 'Round emblem patches',
  'patches/pa8': 'Round green and white event patches',
  'patches/pa9': 'Red and white shaped patches',
  'patches/pa10': 'State-shaped patches',
};

const label = (cat) => CATEGORIES.find((c) => c.id === cat)?.label ?? 'Portfolio';

const naturalSort = (a, b) => a.localeCompare(b, undefined, { numeric: true });

export const PORTFOLIO = Object.keys(large)
  .sort(naturalSort)
  .map((path) => {
    const [, category, file] = path.match(/portfolio\/([^/]+)\/([^/]+)\.webp$/);
    const key = `${category}/${file}`;
    return {
      id: key,
      category,
      src: large[path],
      thumb: thumbs[`../assets/portfolio-thumbs/${key}.webp`] ?? large[path],
      alt: CAPTIONS[key] ?? `${label(category)} sample`,
    };
  })
  .filter((item) => CATEGORIES.some((c) => c.id === item.category));

export const byCategory = (cat) => PORTFOLIO.filter((p) => p.category === cat);
