import { Link } from 'react-router';
import { CtaBand, PageHeader, Reveal, SectionHeading } from '../components/ui';
import { FORMAT_QA } from '../data/formatQa';

// Embroidery file format guide. Facts here are general industry knowledge, not business claims.
const FORMATS = [
  ['DST', 'Tajima and most commercial multi-needle machines', 'The most widely accepted commercial format. Stores stitches and color stops, but not thread colors.'],
  ['PES', 'Brother, Baby Lock', 'The standard home and semi-commercial format for Brother and Baby Lock. Stores thread colors.'],
  ['PEC', 'Older Brother machines', 'An older Brother format, also embedded inside PES files.'],
  ['EXP', 'Melco, Bernina', 'Used by Melco commercial machines and many Bernina models.'],
  ['JEF', 'Janome', 'The native format for Janome embroidery machines.'],
  ['VP3', 'Husqvarna Viking, Pfaff', 'Used by newer Husqvarna Viking and Pfaff machines.'],
  ['HUS', 'Husqvarna Viking (older models)', 'The earlier Husqvarna Viking format.'],
  ['XXX', 'Singer', 'The format read by many Singer embroidery machines.'],
  ['EMB', 'Wilcom software', 'An editable working file, not a machine file. Keep it so the design can be resized or changed later.'],
];


export { FORMAT_QA };

export default function FileFormats() {
  return (
    <>
      <PageHeader
        crumb="Embroidery File Formats"
        eyebrow="Guide"
        title="Embroidery file formats: DST, PES, EMB and more"
        intro="Which embroidery file type does your machine need? A quick guide to DST, PES, JEF, EXP, VP3 and other formats, and what each one is for."
      />
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Quick answer" title="Pick the format your machine reads" intro="Embroidery machines only sew stitch files in their own format. Use the table below to match your machine brand to the right file type." />
          <Reveal className="mt-12 overflow-x-auto rounded-3xl border border-ink/10 bg-white shadow-soft">
            <table className="w-full min-w-[640px] text-left">
              <caption className="sr-only">Embroidery file formats and the machines that use them</caption>
              <thead className="bg-ink text-white">
                <tr>
                  <th scope="col" className="p-5 font-mono text-xs uppercase tracking-widest">Format</th>
                  <th scope="col" className="p-5 font-mono text-xs uppercase tracking-widest">Machines / software</th>
                  <th scope="col" className="p-5 font-mono text-xs uppercase tracking-widest">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {FORMATS.map(([f, m, n]) => (
                  <tr key={f}>
                    <th scope="row" className="p-5 font-display text-xl font-normal text-ink">.{f}</th>
                    <td className="p-5 font-semibold text-ink">{m}</td>
                    <td className="p-5 text-slate-600">{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mt-6 max-w-3xl text-slate-600">
            We deliver all of these formats with our <Link to="/embroidery-digitizing" className="font-semibold text-navy-800 underline underline-offset-4">custom embroidery digitizing service</Link>. Need artwork files for printing instead? Those are vector formats such as AI, EPS and SVG, covered on our <Link to="/vector-art" className="font-semibold text-navy-800 underline underline-offset-4">vector art conversion</Link> page.
          </p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="Common questions" title="Embroidery file format questions" />
          <div className="mt-10 space-y-10">
            {FORMAT_QA.map(([q, a]) => (
              <Reveal key={q}>
                <h3 className="text-2xl">{q}</h3>
                <p className="mt-3 text-lg leading-relaxed text-slate-600">{a}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-slate-600">
            See <Link to="/pricing" className="font-semibold text-navy-800 underline underline-offset-4">embroidery digitizing prices</Link> or read more answers in our <Link to="/faq" className="font-semibold text-navy-800 underline underline-offset-4">FAQ</Link>.
          </p>
        </div>
      </section>
      <CtaBand title="Need your logo as a DST or PES file?" text="Send your artwork and machine format, and we will digitize it for you." />
    </>
  );
}
