import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchAdvisories } from '../api/public';
import type { AdvisoryListItem, PaginatedResponse } from '../types/api';

export function AdvisoriesPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [severity, setSeverity] = useState('');
  const [audience, setAudience] = useState('');

  const { data, isLoading } = useQuery<PaginatedResponse<AdvisoryListItem>>({
    queryKey: ['public', 'advisories', { page, search, severity, audience }],
    queryFn: () =>
      fetchAdvisories({
        page,
        pageSize: 10,
        search: search || undefined,
        severity: severity || undefined,
        audience: audience || undefined,
      }),
  });

  const advisories = data?.items ?? [];
  const totalPages = data ? Math.ceil(data.total / data.pageSize) : 1;

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Advisories</h1>
          <p className="text-slate-400">Curated guidance for defenders. Backed by the workspace publish workflow.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-400">
          <label className="flex items-center gap-2">
            <span>Severity</span>
            <select
              value={severity}
              onChange={(event) => {
                setSeverity(event.target.value);
                setPage(1);
              }}
              className="rounded-lg border border-slate-600 bg-surface px-3 py-1 text-sm text-white focus:border-accent focus:outline-none"
            >
              <option value="">All</option>
              <option value="HIGH">High</option>
              <option value="MEDIUM">Medium</option>
              <option value="LOW">Low</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span>Audience</span>
            <select
              value={audience}
              onChange={(event) => {
                setAudience(event.target.value);
                setPage(1);
              }}
              className="rounded-lg border border-slate-600 bg-surface px-3 py-1 text-sm text-white focus:border-accent focus:outline-none"
            >
              <option value="">All</option>
              <option value="Gov">Gov</option>
              <option value="County">County</option>
              <option value="CNI">CNI</option>
              <option value="Public">Public</option>
            </select>
          </label>
          <input
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
            placeholder="Search advisories"
            className="rounded-lg border border-slate-600 bg-surface px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
          />
        </div>
      </header>

      <div className="card overflow-hidden">
        <table className="min-w-full divide-y divide-slate-800 text-sm">
          <thead className="bg-slate-900/60 text-left text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Severity</th>
              <th className="px-4 py-3">Audience</th>
              <th className="px-4 py-3">Published</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            {isLoading && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-400">
                  Loading advisories…
                </td>
              </tr>
            )}
            {!isLoading && advisories.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-400">
                  No advisories match the filters.
                </td>
              </tr>
            )}
            {advisories.map((advisory) => (
              <AdvisoryRow key={advisory.id} advisory={advisory} />
            ))}
          </tbody>
        </table>
      </div>

      {data && data.total > data.pageSize && (
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>
            Page {page} of {totalPages}
          </span>
          <div className="flex items-center gap-2">
            <button
              className="btn-secondary px-3 py-1"
              disabled={page === 1}
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            >
              Previous
            </button>
            <button
              className="btn-secondary px-3 py-1"
              disabled={page === totalPages}
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function AdvisoryRow({ advisory }: { advisory: AdvisoryListItem }) {
  return (
    <tr>
      <td className="px-4 py-3">
        <div className="font-medium text-white">
          <Link to={`/advisories/${advisory.slug}`} className="hover:underline">
            {advisory.title}
          </Link>
        </div>
        <div className="text-xs text-slate-400">{advisory.summary}</div>
      </td>
      <td className="px-4 py-3 text-slate-300">{advisory.severity}</td>
      <td className="px-4 py-3 text-slate-300">{advisory.tlp === 'CLEAR' ? 'Public' : advisory.tlp}</td>
      <td className="px-4 py-3 text-slate-300">
        {advisory.publishedAt ? new Date(advisory.publishedAt).toLocaleDateString() : 'Pending'}
      </td>
    </tr>
  );
}
