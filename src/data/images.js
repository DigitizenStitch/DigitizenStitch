// Website photography (optimized WebP, two widths each). Originals live in site-images/.
import heroMachine1600 from '../assets/site/hero-machine-1600.webp';
import heroMachine800 from '../assets/site/hero-machine-800.webp';
import serviceHoop1000 from '../assets/site/service-hoop-1000.webp';
import serviceHoop600 from '../assets/site/service-hoop-600.webp';
import satin900 from '../assets/site/satin-900.webp';
import satin500 from '../assets/site/satin-500.webp';
import tatami900 from '../assets/site/tatami-900.webp';
import tatami500 from '../assets/site/tatami-500.webp';
import running900 from '../assets/site/running-900.webp';
import running500 from '../assets/site/running-500.webp';
import applique900 from '../assets/site/applique-900.webp';
import applique500 from '../assets/site/applique-500.webp';
import threadCones from '../assets/site/thread-cones-600.webp';
import testSewout from '../assets/site/test-sewout-600.webp';
import hoopSizes1600 from '../assets/site/hoop-sizes-1600.webp';
import hoopSizes800 from '../assets/site/hoop-sizes-800.webp';
import about1600 from '../assets/site/about-workstation-1600.webp';
import about800 from '../assets/site/about-workstation-800.webp';
import software1366 from '../assets/site/software-1366.webp';
import software800 from '../assets/site/software-800.webp';
import compareArtwork from '../assets/site/compare-artwork-900.webp';
import compareDigitized from '../assets/site/compare-digitized-900.webp';
import vectorBefore from '../assets/site/vector-before-900.webp';

const img = (large, small, w, h, alt) => ({ src: large, srcSet: small ? `${small} ${Math.round(w / 2)}w, ${large} ${w}w` : undefined, width: w, height: h, alt });

export const IMAGES = {
  hero: { ...img(heroMachine1600, heroMachine800, 1600, 1067, 'Embroidery machine needle sewing a gold satin design on navy fabric in a hoop'), srcSet: `${heroMachine800} 800w, ${heroMachine1600} 1600w` },
  serviceHoop: { ...img(serviceHoop1000, null, 1000, 1250, 'Finished embroidery sew-out held in a magnetic hoop'), srcSet: `${serviceHoop600} 600w, ${serviceHoop1000} 1000w` },
  satin: { ...img(satin900, null, 900, 600, 'Close-up of a gold satin stitch column'), srcSet: `${satin500} 500w, ${satin900} 900w` },
  tatami: { ...img(tatami900, null, 900, 600, 'Close-up of teal tatami fill stitches'), srcSet: `${tatami500} 500w, ${tatami900} 900w` },
  running: { ...img(running900, null, 900, 600, 'Close-up of running stitch outlines on navy twill'), srcSet: `${running500} 500w, ${running900} 900w` },
  applique: { ...img(applique900, null, 900, 600, 'Close-up of an appliqué piece finished with a satin border'), srcSet: `${applique500} 500w, ${applique900} 900w` },
  threadCones: img(threadCones, null, 600, 600, 'Navy, gold and teal embroidery thread cones'),
  testSewout: img(testSewout, null, 600, 600, 'Client logo sewn out in blue thread'),
  hoopSizes: { ...img(hoopSizes1600, null, 1600, 800, 'Embroidery hoops in three sizes: small round, 5×7 and 8×12'), srcSet: `${hoopSizes800} 800w, ${hoopSizes1600} 1600w` },
  about: { ...img(about1600, null, 1600, 1200, 'Digitizing workstation with a client design on screen and its sew-out in a hoop'), srcSet: `${about800} 800w, ${about1600} 1600w` },
  software: { ...img(software1366, null, 1366, 622, 'Our digitizing software showing a design and its stitch object list'), srcSet: `${software800} 800w, ${software1366} 1366w` },
  compareArtwork: img(compareArtwork, null, 900, 900, "Client's original artwork"),
  compareDigitized: img(compareDigitized, null, 900, 900, 'The same artwork after digitizing'),
  vectorBefore: img(vectorBefore, null, 900, 900, 'Low-resolution, pixelated source image'),
};

/** <img> props helper. */
export const pic = (i, sizes = '100vw', eager = false) => ({
  src: i.src,
  srcSet: i.srcSet,
  sizes: i.srcSet ? sizes : undefined,
  width: i.width,
  height: i.height,
  alt: i.alt,
  loading: eager ? 'eager' : 'lazy',
  decoding: 'async',
});
