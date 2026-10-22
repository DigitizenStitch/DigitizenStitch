import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { CtaBand, PageHeader, Reveal } from '../components/ui';
import { PAGES } from '../data/seo';
import { POSTS } from '../data/posts';

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
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500"><time dateTime={p.date}>{fmt(p.date)}</time> · {p.readMinutes} min read</p>
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
  if (type === 'ul') return <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-relaxed text-slate-700">{value.map((li) => <li key={li}>{li}</li>)}</ul>;
  if (type === 'tip') return <p className="mt-6 rounded-2xl border-l-4 border-thread bg-paper p-5 text-slate-700">{value}</p>;
  return <p className="mt-5 text-lg leading-relaxed text-slate-700">{value}</p>;
}

export function BlogPost({ post }) {
  return (
    <>
      <PageHeader crumb="Blog" eyebrow={`Guide · ${post.readMinutes} min read`} title={post.title} intro={post.description} />
      <article className="section">
        <div className="container-x max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500">By Digitize&rsquo;NStitch · <time dateTime={post.date}>{fmt(post.date)}</time></p>
          {post.body.map(([type, value], i) => <Block key={i} type={type} value={value} />)}
          <h2 className="mt-14 text-3xl">Frequently asked questions</h2>
          {post.faqs.map(([q, a]) => (
            <div key={q} className="mt-8">
              <h3 className="text-2xl">{q}</h3>
              <p className="mt-3 text-lg leading-relaxed text-slate-700">{a}</p>
            </div>
          ))}
          <nav aria-label="Related" className="mt-14 border-t border-ink/10 pt-8">
            <h2 className="font-mono text-xs uppercase tracking-widest text-slate-500">Related</h2>
            <ul className="mt-4 space-y-3">
              {post.related.map((to) => (
                <li key={to}><Link to={to} className="font-semibold text-navy-800 underline underline-offset-4">{PAGES[to]?.name ?? PAGES[to]?.title}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
      <CtaBand title="Want this done for your logo?" text="Send your artwork, size and machine format, and our team will reply with a quote by email." />
    </>
  );
}
