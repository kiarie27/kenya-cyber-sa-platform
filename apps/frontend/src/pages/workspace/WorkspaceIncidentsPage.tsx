import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchIncidents } from '../../api/workspace';
import type { IncidentListItem, PaginatedResponse } from '../../types/api';

export function WorkspaceIncidentsPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const { data, isLoading } = useQuery<PaginatedResponse<IncidentListItem>>({
    queryKey: ['workspace', 'incidents', { page, search }],
    queryFn: () => fetchIncidents({ page, pageSize: 10, search }),
  });

  const incidents = data?.items ?? [];
  const totalPages = data ? Math.ceil(data.total / data.pageSize) : 1;

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Incident Inbox</h1>
          <p className="text-sm text-slate-400">
            Filtered view of member-submitted incidents. TLP rules are enforced automatically.
          </p>
        </div>
        <div className="flex gap-2">
          <input
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
            placeholder="Search incidents"
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
              <th className="px-4 py-3">TLP</th>
              <th className="px-4 py-3">Sector</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Occurred</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-200">
            {isLoading && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-400">
                  Loading incidents…
                </td>
              </tr>
            )}
            {!isLoading && incidents.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-400">
                  No incidents match the current filters.
                </td>
              </tr>
            )}
            {incidents.map((incident) => (
              <IncidentRow key={incident.id} incident={incident} />
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

function IncidentRow({ incident }: { incident: IncidentListItem }) {
  return (
    <tr>
      <td className="px-4 py-3">
        <div className="font-medium text-white">{incident.title}</div>
        <div className="text-xs text-slate-400">{incident.summary}</div>
      </td>
      <td className="px-4 py-3 text-slate-300">{incident.severity}</td>
      <td className="px-4 py-3 text-slate-300">{incident.tlp}</td>
      <td className="px-4 py-3 text-slate-300">{incident.sector}</td>
      <td className="px-4 py-3 text-slate-300">{incident.status}</td>
      <td className="px-4 py-3 text-slate-300">{new Date(incident.occurredAt).toLocaleDateString()}</td>
    </tr>
  );
}
