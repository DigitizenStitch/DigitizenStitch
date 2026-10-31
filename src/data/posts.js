// Blog posts. Technical guidance is general industry practice (fact-checked against
// Wilcom, Melco, BERNINA and Impressions Magazine guidance), not claims about our business.
// Block types: p (paragraph), h2, ul (list), tip (highlighted note), img ({ src, alt, w, h }).
// Images live in public/images/blog/ (webp, 1600 wide). Alt text describes the image; no captions.

export const POSTS = [
  {
    slug: 'what-is-a-dst-file',
    title: 'What Is a DST File? Tajima Embroidery Format Explained',
    description: 'A DST file is the Tajima stitch format read by most commercial embroidery machines. See what it contains, how to open it and when to choose DST over PES.',
    date: '2026-10-31',
    updated: '2026-10-31',
    readMinutes: 5,
    excerpt: 'A DST file is not a picture. Here is what is inside it, why it has no thread colors and which machines read it.',
    image: {
      src: '/images/blog/what-is-a-dst-file-tajima.webp',
      alt: 'Two Tajima multi-head embroidery machines in a workshop, one stitching a white moon design on dark fabric held in a green hoop',
      w: 1600,
      h: 1067,
    },
    related: [
      '/embroidery-file-formats',
      '/embroidery-digitizing',
      '/blog/what-is-a-pes-file',
      '/quote',
    ],
    body: [
      [
        'p',
        'A DST file is an embroidery stitch file in the Tajima format, and it is the most widely accepted format on commercial embroidery machines. It stores the position of every stitch and the points where the machine stops for a color change.',
      ],
      [
        'p',
        'If you have received a .dst file and your computer cannot show it, that is normal. A DST file is not a picture. This guide covers what is inside one, how to open it and when it is the right format to ask for.',
      ],
      [
        'tip',
        'The short version: if you sew on a commercial or multi-needle machine, DST is usually the safest choice. It does not store thread colors, so you set those on the machine.',
      ],
      [
        'img',
        {
          src: '/images/blog/what-is-a-dst-file-tajima.webp',
          alt: 'Two Tajima multi-head embroidery machines in a workshop, one stitching a white moon design on dark fabric held in a green hoop',
          w: 1600,
          h: 1067,
        },
      ],
      ['h2', 'What is a DST file?'],
      [
        'p',
        'DST stands for Data Stitch Tajima. It was created for Tajima machines, and because so many other machines and software packages learned to read it, it became a kind of common language for commercial embroidery.',
      ],
      [
        'p',
        'The file is a list of instructions. Each one moves the needle a small distance from the last point, and some of them tell the machine to jump, trim or change color. The machine simply follows the list from start to finish.',
      ],
      ['h2', 'What does a DST file contain?'],
      [
        'ul',
        [
          'A short header with basic details such as the design label, the number of stitches and the overall size.',
          'The movement of the needle for every stitch, stored in very small steps.',
          'Jump and color change commands, so the machine knows where to stop or move without sewing.',
          'An end marker that tells the machine the design is finished.',
        ],
      ],
      [
        'p',
        'What it does not contain is thread color information. A DST file only says that a color change happens, not which color to use. That is why a design sent as DST should come with a color list or a preview image.',
      ],
      [
        'img',
        {
          src: '/images/blog/what-is-a-dst-file-threads.webp',
          alt: 'Black, white, yellow, orange, red, pink, blue and green thread cones on top of a multi-needle embroidery machine',
          w: 1600,
          h: 1067,
        },
      ],
      ['h2', 'Which machines use DST files?'],
      [
        'p',
        'Tajima machines read DST natively, and most other commercial and multi-needle machines accept it as well. That includes many industrial models from other brands, which is why shops that work with different machines often ask for DST by default. Home machines often use another format, such as PES on Brother, so check your manual before you order.',
      ],
      ['h2', 'DST vs. PES: which one do you need?'],
      [
        'ul',
        [
          'DST is the broad commercial format. PES is made for Brother and Baby Lock.',
          'PES stores thread colors. DST does not.',
          'Both can hold the same stitches, but a poorly digitized design stays poor in either format.',
        ],
      ],
      [
        'p',
        'If you are not sure, ask the person who runs the machine which format it takes. Our embroidery file formats guide lists the common formats and the machines that use them.',
      ],
      ['h2', 'How do you open a DST file?'],
      [
        'p',
        'A normal picture viewer cannot open it. You need embroidery software or a viewer. Free tools such as Ink/Stitch, which works inside Inkscape, can import DST files, and Wilcom TrueSizer is a free viewer for common stitch formats. Most commercial machines can read a DST file from a USB stick and show a preview before you sew.',
      ],
      [
        'tip',
        'Opening a DST file in a viewer is a good habit before sewing. You can check the size, the stitch count and the sewing order before you waste a garment.',
      ],
      ['h2', 'Can you turn a JPG or PNG into a DST file?'],
      [
        'p',
        'Not properly. A JPG or PNG is only a picture. To sew well, the artwork has to be digitized: someone chooses the stitch types, direction, density and underlay for your size and fabric, then saves the result as a DST file. Automatic converters usually struggle with small text and fine detail.',
      ],
      [
        'img',
        {
          src: '/images/blog/what-is-a-dst-file-shirt.webp',
          alt: 'White cotton shirt with a small teal and orange embroidered logo on the chest',
          w: 1600,
          h: 899,
        },
      ],
      ['h2', 'Common mistakes with DST files'],
      [
        'ul',
        [
          'Renaming another file to .dst. The extension does not change what is inside, and the machine will not read it.',
          'Resizing too much. Stitch files do not scale like pictures, because density and stitch length are planned for one size.',
          'Forgetting the colors. Keep a color list or preview with the file, since the DST itself has none.',
          'Ordering the wrong format. Confirm what your machine reads before you place the order.',
        ],
      ],
      ['h2', 'What to send when you order a DST file'],
      [
        'ul',
        [
          'Your logo or artwork in the clearest version you have.',
          'The size you want, and the garment or fabric.',
          'Your machine type, so the file suits it.',
          'Thread colors, if they need to match a brand.',
        ],
      ],
      [
        'p',
        'Tell us you need DST and we deliver it by email, with free edits and revisions if anything needs adjusting. Send your artwork through the quote form and we will confirm the price for your size.',
      ],
      [
        'img',
        {
          src: '/images/blog/what-is-a-dst-file-hoodie.webp',
          alt: 'Burgundy hoodie with a small cream embroidered mountain logo, folded next to thread spools and scissors',
          w: 1600,
          h: 899,
        },
      ],
    ],
    faqs: [
      [
        'What is a DST file used for?',
        'A DST file runs an embroidery design on Tajima and most other commercial machines. It tells the machine where to place each stitch and when to stop for a color change.',
      ],
      [
        'Does a DST file store thread colors?',
        'No. It only marks where a color change happens, so you choose the thread colors on the machine or follow a color list that comes with the file.',
      ],
      [
        'Can I open a DST file on my computer?',
        'Not with a normal picture viewer. You need embroidery software or a free viewer, and many machines can show a preview from a USB stick.',
      ],
      [
        'Is DST better than PES?',
        'Neither is better in general. DST is the common commercial format, while PES is made for Brother and Baby Lock machines, so choose the one your machine reads.',
      ],
      [
        'Can a JPG be converted to a DST file?',
        'A picture has to be digitized first, which means planning the stitches by hand or with software and then saving as DST. A plain converter usually gives rough results.',
      ],
    ],
  },
  {
    slug: 'what-is-a-pes-file',
    title: 'What Is a PES File? Brother Embroidery Format Explained',
    description: 'A PES file is the embroidery stitch format used by Brother and Baby Lock machines. Learn what it contains, how to open it and when to choose PES over DST.',
    date: '2026-10-29',
    updated: '2026-10-29',
    readMinutes: 5,
    excerpt: 'A PES file is not a picture. Here is what is inside it, which machines read it and how it differs from DST.',
    image: {
      src: '/images/blog/what-is-a-pes-file-1.webp',
      alt: 'Home embroidery machine stitching a gold floral design on navy fabric held in a hoop',
      w: 1600,
      h: 899,
    },
    related: [
      '/embroidery-file-formats',
      '/embroidery-digitizing',
      '/blog/cap-hat-logo-digitizing-guide',
      '/quote',
    ],
    body: [
      [
        'p',
        'A PES file is the embroidery file format used by Brother and Baby Lock machines. It holds the stitch instructions for a design, including the thread colors, so the machine knows where to sew and when to change color.',
      ],
      [
        'p',
        'If you have ever downloaded a design and found a .pes file that your photo viewer cannot open, that is normal. A PES file is not a picture. This guide explains what is inside one, how to open it and when to ask for PES instead of DST.',
      ],
      [
        'tip',
        'The short version: if you sew on a Brother or Baby Lock machine, order your design as a PES file. Commercial machines usually want DST.',
      ],
      [
        'img',
        {
          src: '/images/blog/what-is-a-pes-file-1.webp',
          alt: 'Home embroidery machine stitching a gold floral design on navy fabric held in a hoop',
          w: 1600,
          h: 899,
        },
      ],
      ['h2', 'What is a PES file?'],
      [
        'p',
        'PES is the embroidery format made by Brother. A PES file is a set of instructions, not an image: it tells the machine the position of every stitch, the order they are sewn in and where to stop for a color change.',
      ],
      [
        'p',
        'Because it is a stitch file, it is tied to the size it was digitized at. The stitches are planned for that size, that fabric and that density, which is why you cannot stretch a PES file the way you would stretch a JPG.',
      ],
      ['h2', 'What does a PES file contain?'],
      [
        'ul',
        [
          'The position and order of every stitch.',
          'Color changes, so the machine knows when to stop and ask for a new thread.',
          'Thread color information, which is a real advantage over DST.',
          'The overall size of the design, so you can check it against your hoop.',
        ],
      ],
      ['h2', 'Which machines use PES files?'],
      [
        'p',
        'PES is the standard home and semi-commercial format for Brother and Baby Lock machines. Other brands use their own formats: JEF for Janome, VP3 for Husqvarna Viking and Pfaff, EXP for Melco and many Bernina models, and DST on Tajima and most commercial multi-needle machines. If you are not sure, check your machine manual. Our embroidery file formats guide has the full list.',
      ],
      [
        'img',
        {
          src: '/images/blog/what-is-a-pes-file-2.webp',
          alt: 'Wooden embroidery hoop with navy fabric and a gold leaf design, next to spools of gold, white and navy thread',
          w: 1600,
          h: 899,
        },
      ],
      ['h2', 'PES vs. DST: what is the difference?'],
      ['p', 'Both are stitch files, but they are built for different machines.'],
      [
        'ul',
        [
          'PES stores thread colors. DST does not, so you set the colors on the machine.',
          'PES is made for Brother and Baby Lock. DST is the most widely accepted commercial format.',
          'A design can be saved in both formats, but converting does not fix a poorly digitized design.',
        ],
      ],
      ['h2', 'How do you open a PES file?'],
      [
        'p',
        'A normal picture viewer will not show it. You need embroidery software or a viewer. PE-Design from Brother can open and edit PES files, and free tools such as Wilcom TrueSizer and Ink/Stitch can open or preview them. Most Brother machines can also read a PES file from a USB stick and show a preview on the screen before you sew.',
      ],
      [
        'tip',
        'Do not rename a DST file to .pes. The extension does not change what is inside, and the machine will not read it.',
      ],
      ['h2', 'Can you turn a JPG or PNG into a PES file?'],
      [
        'p',
        'Not properly. A JPG or PNG is only a picture. To sew well, the design has to be digitized: someone sets the stitch types, direction, density and underlay for your size and fabric, then saves the result as a PES file. Automatic converters usually sew poorly, especially on small text and fine detail.',
      ],
      ['h2', 'Common problems with PES files'],
      [
        'ul',
        [
          'The machine will not read the file. Check that you are using the right format and, if your software allows it, try saving an older PES version, because some machines are picky about versions.',
          'The design is bigger than the hoop. Check the size against your hoop before you sew.',
          'The size was changed too much. Stitch files do not scale like pictures, so large size changes are best made from the original working file.',
          'The colors on screen look different from your thread. The colors in the file are a guide, so match them to the thread you actually have.',
        ],
      ],
      ['h2', 'What to send when you order a PES file'],
      [
        'ul',
        [
          'Your logo or artwork in the clearest version you have.',
          'The size you want, and your hoop size if you know it.',
          'Your machine model, so the file matches it.',
          'The garment or fabric.',
          'Thread colors, if they need to match a brand.',
        ],
      ],
      [
        'p',
        'Tell us you need PES and we deliver it by email, with free edits and revisions if anything needs adjusting.',
      ],
    ],
    faqs: [
      [
        'What is a PES file used for?',
        'A PES file is used to run an embroidery design on Brother and Baby Lock machines. It tells the machine where to place each stitch, in what order, and when to change thread color.',
      ],
      [
        'Is a PES file the same as a DST file?',
        'No. Both are stitch files, but PES is the Brother and Baby Lock format and stores thread colors, while DST is the widely used commercial format and does not store colors. Choose the one your machine reads.',
      ],
      [
        'Can I open a PES file on my computer?',
        'Not with a normal picture viewer. You need embroidery software or a free viewer, and many Brother machines can also show a preview from a USB stick.',
      ],
      [
        'Can a PES file be converted to DST?',
        'Yes, a stitch file can be saved in other machine formats. Converting does not fix a poorly digitized design, so for large changes it is better to start from the original working file.',
      ],
      [
        'Which machines read PES files?',
        'Brother and Baby Lock machines read PES. Other brands use formats such as JEF, VP3, EXP, XXX or DST, so check your machine manual.',
      ],
    ],
  },
  {
    slug: 'cap-hat-logo-digitizing-guide',
    title: 'Cap & Hat Logo Digitizing: A Practical Guide',
    description:
      'How hat embroidery digitizing differs from flat garments: center-out sequencing, cap underlay, the center seam, small lettering and what to send your digitizer.',
    date: '2026-10-22',
    updated: '2026-10-29',
    readMinutes: 6,
    excerpt: 'Why a left-chest logo file often sews badly on a cap, and what a cap-ready embroidery file does differently.',
    image: {
      src: '/images/blog/cap-front.webp',
      alt: 'Navy baseball cap with a gold embroidered emblem on the front panel and the center seam visible',
      w: 1600,
      h: 899,
    },
    related: ['/embroidery-digitizing', '/embroidery-file-formats', '/blog/3d-puff-embroidery-digitizing', '/quote'],
    body: [
      ['p', 'Caps are where a lot of embroidery files fall apart. A logo that sews cleanly on a polo can pucker, drift out of register or lose its small text on a hat, and the cause is almost always the digitizing, not the machine.'],
      ['tip', 'The short version: sew from the center out and from the bottom up, use enough underlay to lock the front panel, keep small text bigger and simpler than you would on a shirt, and tell your digitizer the cap type and your frame before you order.'],
      ['img', {
        src: '/images/blog/cap-front.webp',
        alt: 'Navy baseball cap with a gold embroidered emblem on the front panel and the center seam visible',
        w: 1600,
        h: 899,
      }],
      ['h2', 'Why a cap needs its own embroidery file'],
      ['p', 'On a flat garment the fabric is hooped tight and stays put. A cap is curved, stiff at the front and held in a cap frame, so it behaves differently. Every stitch pushes the fabric a little in the direction it is laid, and on a curved panel that push adds up fast.'],
      ['p', 'A cap-ready file plans for that movement instead of fighting it. That is why a file made for a flat shirt so often needs rework before it sews well on a hat.'],
      ['h2', 'Sew from the center out, and from the bottom up'],
      ['p', 'The most important rule in cap digitizing is the sewing sequence. Start near the middle of the design, work outward to each side, and generally go from the bottom of the cap toward the top. That pushes extra fabric to the sides and upward, where it has room to go, instead of trapping it in the middle where it causes bunching and gaps.'],
      ['ul', [
        'Lettering usually starts from the center of the word and sews outward to each side.',
        'Each letter or element is finished (fill, then its outline) before moving on, so outlines line up with their fills.',
        'Large elements are split so the center is stitched first and the sides follow.',
      ]],
      ['h2', 'Underlay that locks the cap down'],
      ['p', 'Underlay is the foundation layer that sews before the visible design. On caps it does extra work: it fixes the front panel to the backing so nothing shifts when the top stitches go down. A good cap file uses enough underlay to stabilize the panel without making the design stiff.'],
      ['h2', 'Working around the center seam'],
      ['p', 'Most six-panel caps have a seam running down the middle of the front. Thin stitches can sink into it and disappear, and a design that starts exactly on the seam can distort. Experienced digitizers reinforce the underlay across the seam, or arrange the design so important detail does not land right on it.'],
      ['h2', 'Structured vs. unstructured caps'],
      ['p', 'Structured caps have a stiff buckram lining behind the front panels. That gives a firm surface, which is usually easier to embroider. Unstructured caps (often called dad hats) are soft and move more, so they need more careful stabilizing. Tell your digitizer which type you are using, because density and underlay are adjusted for it.'],
      ['img', {
        src: '/images/blog/cap-structured-vs-unstructured.webp',
        alt: 'A structured navy baseball cap next to a soft unstructured navy dad hat',
        w: 1600,
        h: 899,
      }],
      ['h2', 'Size and small text'],
      ['p', 'The usable height of a cap design depends on the cap profile (low, mid or high) and on your cap frame, so there is no single maximum that suits every hat. Measure the front panel of the actual blank and check your frame limits before you order the file.'],
      ['p', 'Small lettering needs extra care. A curved, stiff surface closes up fine detail, so text that reads well on a shirt can fill in on a cap. Keep letters a little larger and simpler than you would on flat fabric.'],
      ['tip', 'Many shops use sharp 75/11 needles on caps to reduce deflection on buckram and seams.'],
      ['h2', 'Common cap embroidery mistakes'],
      ['ul', [
        'Sewing a flat-garment file on a cap without changing anything.',
        'Starting the design right on the center seam, or letting thin lines fall on it.',
        'Making small lettering too small or too detailed.',
        'Not telling the digitizer the cap type or the frame you will use.',
        'Skipping a test sew-out on the actual cap before a full run.',
      ]],
      ['h2', 'What to send for a cap logo digitizing order'],
      ['ul', [
        'Your logo in the clearest version you have (vector, PDF or a high-resolution image).',
        'The exact width and height you want on the cap.',
        'Cap type: structured or unstructured, and the profile if you know it.',
        'Your machine file format, such as DST or PES (see our embroidery file formats guide).',
        'Thread colors, if they need to match a brand.',
      ]],
      ['p', 'With those details a digitizer can plan the sequence, underlay and density for the cap you are really sewing, instead of converting a flat-garment file and hoping for the best.'],
    ],
    faqs: [
      ['Can I use the same embroidery file for a shirt and a cap?', 'Sometimes, but it is not recommended. Cap files are sequenced center-out and bottom-up and use underlay that stabilizes a curved panel. A file planned for a flat shirt often puckers or shifts on a cap.'],
      ['What is the best sewing sequence for cap embroidery?', 'Start near the center of the design and sew outward to the sides, generally from the bottom up. This pushes extra fabric toward the sides instead of trapping it in the middle.'],
      ['How big can a cap embroidery design be?', 'It depends on the cap profile and your cap frame, so check the front panel of your blank and your frame limits. Keep small lettering larger and simpler than on flat garments.'],
      ['Do structured and unstructured caps need different embroidery files?', 'They are usually digitized a little differently. Structured caps have a firm lining that gives a stable surface. Unstructured caps are soft and move more, so density, underlay and stabilizing matter more. Tell your digitizer which type you are using.'],
      ['Which file format do I need for cap embroidery?', 'It depends on your machine. DST is widely used on commercial machines and PES on Brother machines, but check your machine manual. Our embroidery file formats guide explains the common types.'],
    ],
  },
  {
    slug: '3d-puff-embroidery-digitizing',
    title: '3D Puff Embroidery Digitizing: What Makes a File Puff-Ready',
    description:
      'What 3D puff embroidery is, how puff digitizing differs from flat embroidery, plus foam thickness, satin column width, end caps and tips for hats.',
    date: '2026-10-22',
    updated: '2026-10-29',
    readMinutes: 6,
    excerpt: 'Puff embroidery is not just a regular file sewn over foam. Here is what a puff-ready design needs.',
    image: {
      src: '/images/blog/puff-hero.webp',
      alt: 'Navy cap with raised gold 3D puff embroidery on the front panel',
      w: 1600,
      h: 899,
    },
    related: ['/embroidery-digitizing', '/blog/cap-hat-logo-digitizing-guide', '/embroidery-file-formats', '/quote'],
    body: [
      ['p', '3D puff embroidery gives a design a raised, bold look by stitching over a layer of foam. It is popular on hats and caps, and also used on hoodies and jackets. A clean result depends far more on the digitizing than on the foam.'],
      ['tip', 'The short version: puff needs its own file. Use satin stitches only, higher density than flat satin, end caps on the columns and bold, simple shapes. Fine detail and small text are better sewn flat.'],
      ['img', {
        src: '/images/blog/puff-hero.webp',
        alt: 'Navy cap with raised gold 3D puff embroidery on the front panel',
        w: 1600,
        h: 899,
      }],
      ['h2', 'What is 3D puff embroidery?'],
      ['p', 'A sheet of embroidery foam is placed on the garment, and satin stitches are sewn over it. The needle perforates the foam along the edges of each shape, the extra foam is torn away, and the stitched areas keep the foam underneath, so the design stands up from the fabric.'],
      ['h2', 'Puff vs. regular (flat) embroidery'],
      ['p', 'A regular embroidery file cannot simply be sewn over foam. Flat designs use fills and thin details that crush the foam or fail to cover it, so foam ends up peeking through. A puff design is digitized specifically for puff, usually as its own file, and is often combined with flat elements that sew before or after the puff parts.'],
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
      ['img', {
        src: '/images/blog/puff-macro.webp',
        alt: 'Close-up of raised gold puff embroidery with smooth rounded edges on navy cap fabric',
        w: 1600,
        h: 899,
      }],
      ['tip', 'Exact values differ between machines, software and foam brands, so a test sew-out on the real garment is the best final check.'],
      ['h2', 'Common puff embroidery mistakes'],
      ['ul', [
        'Sewing a regular flat file over foam.',
        'Using fill stitches for the raised areas.',
        'Satin columns that are too narrow or too wide for the foam.',
        'Leaving the ends of columns open, so foam shows or does not cut cleanly.',
        'Putting small text or fine detail in puff instead of sewing it flat.',
        'Stacking foam layers, which can shift while sewing.',
      ]],
      ['h2', '3D puff on hats'],
      ['p', 'Hats are the most common place for puff. All the cap rules still apply: sew from the center out, stabilize the front panel well and keep the center seam in mind. Bold lettering across the front panel is a classic puff job.'],
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
      ['Can small text be puff?', 'Usually not. Fine detail and small text do not cover the foam cleanly, so they are normally sewn flat next to the puff elements.'],
      ['Why does foam show through some puff designs?', 'Most often a flat file was sewn over foam, or the satin density or column width was not right for puff. A file digitized for puff, with higher density and end caps, covers the foam fully.'],
    ],
  },
];

export const postBySlug = (slug) => POSTS.find((p) => p.slug === slug);
