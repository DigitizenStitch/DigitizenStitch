import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CtaBand, PageHeader } from '../components/ui';
import Gallery from '../components/Gallery';
import { CATEGORIES, PORTFOLIO } from '../data/portfolio';

const TABS = [{ id: 'all', label: 'All work' }, ...CATEGORIES];

export default function Portfolio() {
  const [params, setParams] = useSearchParams();
  // The prerendered HTML shows "All work"; apply the ?category= filter after hydration.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const requested = hydrated ? params.get('category') : null;
  const active = TABS.some((t) => t.id === requested) ? requested : 'all';
  const items = active === 'all' ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        crumb="Portfolio"
        eyebrow="Our Work"
        title="Portfolio"
        intro="Real embroidery digitizing, vector art and patch work from our studio. Click any image to view it larger and browse with the arrow keys."
      />
      <section className="section !pt-12">
        <div className="container-x">
          <div role="tablist" aria-label="Filter portfolio" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {TABS.map((t) => {
              const count = t.id === 'all' ? PORTFOLIO.length : PORTFOLIO.filter((p) => p.category === t.id).length;
              const selected = active === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="portfolio-grid"
                  onClick={() => setParams(t.id === 'all' ? {} : { category: t.id }, { replace: true })}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                    selected ? 'bg-navy-950 text-white shadow-soft' : 'border border-slate-200 bg-white text-navy-950 hover:border-navy-900'
                  }`}
                >
                  {t.label} <span className={selected ? 'text-white/60' : 'text-slate-400'}>({count})</span>
                </button>
              );
            })}
          </div>
          <div id="portfolio-grid" role="tabpanel" className="mt-10">
            <Gallery key={active} items={items} columns="sm:grid-cols-3 lg:grid-cols-4" />
          </div>
        </div>
      </section>
      <CtaBand title="Like what you see?" text="Send us your design and we will reply with a quote." />
    </>
  );
}
