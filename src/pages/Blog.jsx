import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { CtaBand, PageHeader, Reveal } from '../components/ui';
import { PAGES } from '../data/seo';
import { AUTHOR } from '../data/site';
import { POSTS } from '../data/posts';
import RichText from '../components/RichText';

const fmt = (d) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export function BlogIndex() {
  return (
    <>
      <PageHeader crumb="Blog" eyebrow="Blog" title="Embroidery digitizing guides" intro="Practical guides on embroidery digitizing, file formats and getting clean sew-outs on caps, puff and more." />
      <section className="section">
        <ul className="container-x grid gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Reveal className="card h-full p-8 sm:p-10">
                {p.image && <img src={p.image.src} alt={p.image.alt} width={p.image.w} height={p.image.h} loading="lazy" decoding="async" className="mb-6 aspect-[16/9] w-full rounded-2xl border border-ink/10 bg-paper object-cover" />}
                <p className="font-mono text-xs uppercase tracking-widest text-slate-600"><time dateTime={p.date}>{fmt(p.date)}</time> · {p.readMinutes} min read</p>
                <h2 className="mt-4 text-3xl"><Link to={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link></h2>
                <p className="mt-4 text-slate-600">{p.excerpt}</p>
                <Link to={`/blog/${p.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-navy-800">Read the guide<span className="sr-only">: {p.title}</span> <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand title="Need a file digitized?" text="Send your artwork, size and machine format for a quote." />
    </>
  );
}

function Block({ type, value }) {
  if (type === 'h2') return <h2 className="mt-12 text-3xl">{value}</h2>;
  if (type === 'ul') return <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-relaxed text-slate-700">{value.map((li) => <li key={li}><RichText text={li} /></li>)}</ul>;
  if (type === 'table') return (
    <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/10 bg-white">
      <table className="w-full min-w-[36rem] border-collapse text-left text-base">
        <thead className="bg-paper">
          <tr>{value.head.map((h) => <th key={h} scope="col" className="px-4 py-3 font-semibold text-ink">{h}</th>)}</tr>
        </thead>
        <tbody>
          {value.rows.map((row) => (
            <tr key={row[0]} className="border-t border-ink/10 align-top">
              {row.map((cell, j) => (j === 0
                ? <th key={j} scope="row" className="px-4 py-3 font-semibold text-ink">{cell}</th>
                : <td key={j} className="px-4 py-3 text-slate-700">{cell}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  if (type === 'img') return <figure className="mt-8"><img src={value.src} alt={value.alt} width={value.w} height={value.h} loading="lazy" decoding="async" className="w-full rounded-2xl border border-ink/10 bg-paper" /></figure>;
  if (type === 'tip') return <p className="mt-6 rounded-2xl border-l-4 border-thread bg-paper p-5 text-slate-700"><RichText text={value} /></p>;
  return <p className="mt-5 text-lg leading-relaxed text-slate-700"><RichText text={value} /></p>;
}

export function BlogPost({ post }) {
  return (
    <>
      <PageHeader crumb="Blog" eyebrow={`Guide · ${post.readMinutes} min read`} title={post.title} intro={post.description} />
      <article className="section">
        <div className="container-x max-w-3xl">
          {post.body.map(([type, value], i) => <Block key={i} type={type} value={value} />)}
          <h2 className="mt-14 text-3xl">Frequently asked questions</h2>
          {post.faqs.map(([q, a]) => (
            <div key={q} className="mt-8">
              <h3 className="text-2xl">{q}</h3>
              <p className="mt-3 text-lg leading-relaxed text-slate-700">{a}</p>
            </div>
          ))}
          <nav aria-label="Related" className="mt-14 border-t border-ink/10 pt-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-slate-600">Related</h2>
            <ul className="mt-4 space-y-3">
              {post.related.map((to) => (
                <li key={to}><Link to={to} className="font-semibold text-navy-800 underline underline-offset-4">{PAGES[to]?.name ?? PAGES[to]?.title}</Link></li>
              ))}
            </ul>
          </nav>
          <p className="mt-10 font-mono text-xs uppercase tracking-widest text-slate-600">By {AUTHOR} · Digitize&rsquo;NStitch · <time dateTime={post.date}>{fmt(post.date)}</time></p>
        </div>
      </article>
      <CtaBand title="Want this done for your logo?" text="Send your artwork, size and machine format, and our team will reply with a quote by email." />
    </>
  );
}
