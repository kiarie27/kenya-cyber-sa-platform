import { useQuery } from '@tanstack/react-query';

import { fetchTrends } from '../api/public';

export function TrendsPage() {
  const { data, isLoading } = useQuery({ queryKey: ['public', 'trends'], queryFn: () => fetchTrends(12) });

  const snapshots = data ?? [];
  const latest = snapshots[0]?.data as
    | {
        top_exploited?: { category: string; count: number }[];
        sector_signals?: { sector: string; score: number }[];
        phishing_count?: number;
        week_start?: string;
      }
    | undefined;

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Weekly Cyber Trends</h1>
        <p className="text-slate-400">
          Aggregated insights across the trusted sharing community. Metrics suppress categories with fewer than seven reports.
        </p>
      </header>
      {isLoading && <div className="text-slate-400">Loading trends…</div>}
      {!isLoading && snapshots.length === 0 && <div className="text-slate-400">Trend data will appear as incidents are reported.</div>}
      {!isLoading && snapshots.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-white">Latest Snapshot</h2>
            <p className="mt-2 text-sm text-slate-400">
              Week starting {latest?.week_start ? new Date(latest.week_start).toLocaleDateString() : '—'}
            </p>
            <p className="mt-2 text-4xl font-bold text-white">{latest?.phishing_count ?? '—'} phishing reports</p>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-white">Top Exploited Categories</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {latest?.top_exploited?.slice(0, 5).map((item) => (
                <li key={item.category} className="flex justify-between">
                  <span>{item.category}</span>
                  <span className="text-slate-400">{item.count}</span>
                </li>
              )) ?? <li>No data available.</li>}
            </ul>
          </div>
          <div className="card p-6 md:col-span-2">
            <h2 className="text-lg font-semibold text-white">Sector Signals</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {latest?.sector_signals?.map((sector) => (
                <div key={sector.sector} className="rounded-lg border border-slate-800 bg-surface/60 p-3 text-sm">
                  <div className="font-medium text-white">{sector.sector}</div>
                  <div className="text-slate-400">Score {sector.score}</div>
                </div>
              )) ?? <p className="text-slate-400">Sector metrics unavailable.</p>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
