import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchHomeSummary } from '../api/public';

export function HomePage() {
  const { data, isLoading } = useQuery({ queryKey: ['public', 'home'], queryFn: fetchHomeSummary });

  const kevCount = data?.kevCount ?? 0;
  const advisories = data?.latestAdvisories ?? [];
  const trend = data?.trendHighlight;

  return (
    <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold text-white">Cyber Threat Alerts &amp; Guidance for Kenya’s Defenders</h1>
        <p className="max-w-2xl text-lg text-slate-300">
          Action-first advisories, weekly trends, and a KEV Kenya must-patch list. Public content is TLP:CLEAR and
          defender-focused — no sensitive indicators.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/advisories" className="btn">
            View Latest Advisories
          </Link>
          <Link to="/kev" className="btn-secondary">
            Open KEV Kenya
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card p-6">
            <h2 className="text-xl font-semibold text-white">Latest Advisories</h2>
            {isLoading && <p className="mt-2 text-sm text-slate-400">Loading advisories…</p>}
            {!isLoading && advisories.length === 0 && (
              <p className="mt-2 text-sm text-slate-400">No advisories available yet.</p>
            )}
            <ul className="mt-4 space-y-3 text-sm">
              {advisories.map((advisory) => (
                <li key={advisory.id} className="rounded-lg border border-slate-800/80 bg-surface/60 px-3 py-2">
                  <Link to={`/advisories/${advisory.slug}`} className="font-medium text-white">
                    {advisory.title}
                  </Link>
                  <div className="text-xs text-slate-400">
                    {advisory.severity} • {advisory.publishedAt ? new Date(advisory.publishedAt).toLocaleDateString() : 'Pending'}
                  </div>
                </li>
              ))}
            </ul>
          </article>
          <article className="card p-6">
            <h2 className="text-xl font-semibold text-white">Weekly Trend Snapshot</h2>
            {trend ? (
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p>
                  Week {trend.week} • {new Date(trend.generatedAt).toLocaleDateString()}
                </p>
                <p className="text-slate-400 text-xs">Charts omit data if sample size is below 7 to protect privacy.</p>
              </div>
            ) : (
              <p className="mt-2 text-sm text-slate-400">Trend data populates as incidents are shared.</p>
            )}
          </article>
        </div>
      </section>
      <aside className="card flex flex-col justify-between p-6">
        <div>
          <p className="text-sm uppercase tracking-wide text-slate-400">KEV Kenya</p>
          <p className="mt-2 text-5xl font-bold text-white">{isLoading ? '—' : kevCount}</p>
          <p className="mt-1 text-sm text-slate-400">Exploited vulns in KEV Kenya</p>
        </div>
        <p className="text-xs text-slate-500">Prioritize patching these first. Data updates automatically as the backend syncs.</p>
      </aside>
    </div>
  );
}
