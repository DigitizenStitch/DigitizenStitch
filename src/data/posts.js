// Blog posts. Technical guidance is general industry practice (fact-checked against
// Wilcom, Melco, BERNINA and Impressions Magazine guidance), not claims about our business.
// Block types: p (paragraph), h2, ul (list), tip (highlighted note).

export const POSTS = [
  {
    slug: 'cap-hat-logo-digitizing-guide',
    title: 'Cap & Hat Logo Digitizing: A Practical Guide',
    description:
      'How hat embroidery digitizing differs from flat garments: center-out sequencing, cap underlay, the center seam, small lettering and what to send your digitizer.',
    date: '2026-10-22',
    readMinutes: 6,
    excerpt: 'Why a left-chest logo file often sews badly on a cap, and what a cap-ready embroidery file does differently.',
    related: ['/embroidery-digitizing', '/embroidery-file-formats', '/blog/3d-puff-embroidery-digitizing'],
    body: [
      ['p', 'Hat embroidery is one of the most popular jobs in any embroidery shop, but caps are also where a design file is most likely to fail. A logo that sews perfectly on a polo shirt can pucker, shift out of register or lose its small text on a cap. The difference is almost always in the digitizing.'],
      ['h2', 'Why caps need their own embroidery file'],
      ['p', 'On a flat garment the fabric is hooped tight and stays still. A cap is curved, stiff at the front and sewn on a cap frame that holds it differently. As the needle works, the fabric is pushed in the direction stitches are laid, and on a curved panel that movement builds up quickly. A cap-ready file is planned around this movement instead of fighting it.'],
      ['h2', 'Sew from the center out, and from the bottom up'],
      ['p', 'The most important rule in cap digitizing is the sewing sequence. Elements should start near the middle of the design and work outward to each side, and generally from the bottom of the cap toward the top. This pushes any extra fabric toward the sides and up, where it has room to go, instead of trapping it in the middle where it causes bunching and gaps.'],
      ['ul', [
        'Lettering usually starts from the center of the word and sews outward to each side.',
        'Each letter or element is finished (fill, then its outline) before moving on, so outlines line up with their fills.',
        'Large elements are split so the center is stitched first and the sides follow.',
      ]],
      ['h2', 'Underlay that locks the cap down'],
      ['p', 'Underlay is the foundation layer of stitches that sews before the visible design. On caps it does extra work: it fixes the cap fabric to the backing so nothing moves when the top stitches go down. A good cap file uses enough underlay to stabilize the front panel without making the design stiff or bulletproof.'],
      ['h2', 'Working around the center seam'],
      ['p', 'Most six-panel caps have a seam running down the middle of the front. Thin stitches can sink into that seam and disappear, and starting a design exactly on it can cause distortion. Experienced digitizers reinforce the underlay across the seam or arrange the design so important detail does not fall directly on it.'],
      ['h2', 'Structured vs. unstructured caps'],
      ['p', 'Structured caps have a stiff buckram lining behind the front panels, which gives a firm surface that is usually easier to embroider. Unstructured caps (often called dad hats) are soft and move more, so they need careful stabilizing. Tell your digitizer which type you are using, because density and underlay are adjusted for it.'],
      ['h2', 'Size and small text'],
      ['p', 'The usable height of a cap design depends on the cap profile (low, mid or high) and your cap frame, so there is no single maximum that suits every cap. Measure the front panel of the actual blank and confirm your frame limits before ordering the file.'],
      ['p', 'Small lettering needs extra care. Curved, stiff surfaces close up fine detail, so text that reads well on a shirt can fill in on a cap. Keep letters a little larger and simpler than you would on flat fabric.'],
      ['tip', 'Machine operators also matter: many shops use sharp 75/11 needles on caps to reduce deflection on buckram and seams.'],
      ['h2', 'What to send for a cap logo digitizing order'],
      ['ul', [
        'Your logo in the clearest version you have (vector, PDF or a high-resolution image).',
        'The exact width and height you want on the cap.',
        'Cap type: structured or unstructured, and the profile if you know it.',
        'Your machine file format, such as DST or PES (see our embroidery file formats guide).',
        'Thread colors, if they need to match a brand.',
      ]],
      ['p', 'With those details, a digitizer can plan the sequence, underlay and density for the cap you are actually sewing, rather than converting a flat-garment file and hoping it works.'],
    ],
    faqs: [
      ['Can I use the same embroidery file for a shirt and a cap?', 'Sometimes, but it is not recommended. Cap files are sequenced center-out and bottom-up and use underlay that stabilizes a curved panel. A file planned for a flat shirt often puckers or shifts on a cap.'],
      ['What is the best sewing sequence for cap embroidery?', 'Start near the center of the design and sew outward to the sides, generally from the bottom up. This pushes extra fabric toward the sides instead of trapping it in the middle.'],
      ['How big can a cap embroidery design be?', 'It depends on the cap profile and your cap frame, so check the front panel of your blank and your frame limits. Keep small lettering larger and simpler than on flat garments.'],
    ],
  },
  {
    slug: '3d-puff-embroidery-digitizing',
    title: '3D Puff Embroidery Digitizing: What Makes a File Puff-Ready',
    description:
      'What 3D puff embroidery is, how puff digitizing differs from flat embroidery, plus foam thickness, satin column width, end caps and tips for hats.',
    date: '2026-10-22',
    readMinutes: 6,
    excerpt: 'Puff embroidery is not just a regular file sewn over foam. Here is what a puff-ready design needs.',
    related: ['/embroidery-digitizing', '/blog/cap-hat-logo-digitizing-guide', '/embroidery-file-formats'],
    body: [
      ['p', '3D puff embroidery gives a design a raised, bold look by stitching over a layer of foam. It is especially popular on hats and caps, but also used on hoodies and jackets. Getting a clean result depends far more on the digitizing than on the foam itself.'],
      ['h2', 'What is 3D puff embroidery?'],
      ['p', 'A sheet of embroidery foam is placed on the garment, and satin stitches are sewn over it. The needle perforates the foam along the edges of each shape, the extra foam is torn away, and the stitched areas keep the foam underneath, so the design stands up from the fabric.'],
      ['h2', 'Puff vs. regular (flat) embroidery'],
      ['p', 'A regular embroidery file cannot simply be sewn over foam. Flat designs use fills and thin details that crush the foam or fail to cover it, leaving foam peeking through. A puff design is digitized specifically for puff, usually as its own file, and is often combined with flat elements that sew before or after the puff parts.'],
      ['h2', 'Foam thickness'],
      ['p', 'Puff foam commonly comes in about 2 mm to 3 mm, and 3 mm is widely treated as the standard. Thinner foam gives little lift, while very thick foam can deflect needles. Stacking layers is usually avoided because the second layer can shift while sewing.'],
      ['h2', 'How puff designs are digitized'],
      ['ul', [
        'Satin stitches, not fills: fills flatten the foam, so raised areas are built from satin columns.',
        'Column width limits: satin columns are kept within a practical range (often cited as roughly 3 mm minimum to about 12 mm maximum) so stitches cover the foam without becoming loose.',
        'Higher density: puff satins are sewn denser than flat satins so they cut cleanly through the foam edges and cover it fully.',
        'End caps: the open ends of columns are closed with small capping stitches so the foam is cut and hidden at the ends, not just the sides.',
        'Simple shapes: bold letters and clean shapes work best; fine detail and small text are better sewn flat.',
      ]],
      ['tip', 'Exact values differ between machines, software and foam brands, so a test sew-out on the real garment is the best final check.'],
      ['h2', '3D puff on hats'],
      ['p', 'Hats are the most common place for puff. All the cap rules still apply: sew from the center out, stabilize the front panel well, and keep in mind the center seam. Bold lettering across the front panel is a classic puff job.'],
      ['h2', 'What to send for a 3D puff digitizing order'],
      ['ul', [
        'Your logo or design, plus the width and height you want.',
        'Which parts should be puff and which should stay flat.',
        'The garment (structured cap, unstructured cap, hoodie and so on).',
        'Your foam thickness if you already have it, and your machine file format.',
      ]],
    ],
    faqs: [
      ['What is 3D puff embroidery?', 'It is embroidery sewn over a layer of foam, so the design stands up from the fabric. Satin stitches cut the foam at the edges, the excess is torn away, and the stitched areas stay raised.'],
      ['Can any embroidery design be made 3D puff?', 'Not directly. Puff works best with bold shapes and lettering built from satin columns. Fine detail, small text and fill areas are usually sewn flat, and the design needs a file digitized specifically for puff.'],
      ['What foam thickness is used for puff embroidery?', 'Foam of roughly 2 mm to 3 mm is common, and 3 mm is widely treated as the standard. Very thick foam can cause needle deflection.'],
    ],
  },
];

export const postBySlug = (slug) => POSTS.find((p) => p.slug === slug);
