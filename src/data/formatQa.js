// Questions and answers for the embroidery file formats guide.
// Used by the page and by its FAQ structured data (seo.js).

export const FORMAT_QA = [
  ['What is a DST file?', 'A DST file is a Tajima embroidery stitch file. It tells the machine where to place every stitch and when to stop for a color change. Almost every commercial embroidery machine can read DST, but it does not store thread colors, so you set the colors on the machine.'],
  ['What is the difference between DST and PES?', 'DST is the standard commercial format from Tajima and does not store thread colors. PES is the Brother and Baby Lock format and does store thread colors. Choose the one your machine reads.'],
  ['Which embroidery file format do I need?', 'Check your machine brand: Tajima and most commercial machines use DST, Brother and Baby Lock use PES, Janome uses JEF, Husqvarna Viking and Pfaff use VP3, Melco uses EXP and Singer uses XXX. If you are not sure, tell us your machine model and we will send the right format.'],
  ['Can I convert a JPG or PNG directly into a DST file?', 'Not properly. A JPG or PNG is only a picture. To sew well, the design has to be digitized: a digitizer sets stitch types, direction, density and underlay for your size and fabric, then saves it as DST, PES or another machine format. Automatic converters usually sew poorly.'],
  ['Can one file be converted to another format?', 'Yes, a stitch file can be saved in other machine formats. Converting between formats does not fix a poorly digitized design, and resizing a stitch file by more than a small amount can hurt quality, so large size changes are best done from the original working file.'],
];
