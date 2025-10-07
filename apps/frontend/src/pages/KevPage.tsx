import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchKev } from '../api/public';
import type { KevRecord } from '../types/api';

export function KevPage() {
  const [status, setStatus] = useState('');
  const [vendor, setVendor] = useState('');
  const [search, setSearch] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['public', 'kev', { status, vendor, search }],
    queryFn: () => fetchKev({ status: status || undefined, vendor: vendor || undefined, q: search || undefined }),
  });

  const records = data ?? [];

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">KEV Kenya</h1>
        <p className="text-slate-400">
          Must-patch vulnerabilities actively exploited in the wild. Data exports are available for CSV and JSON.
        </p>
      </header>
      <div className="flex flex-wrap gap-3 text-sm text-slate-300">
        <label className="flex items-center gap-2">
          <span>Status</span>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="rounded-lg border border-slate-600 bg-surface px-3 py-1 text-sm text-white focus:border-accent focus:outline-none"
          >
            <option value="">All</option>
            <option value="EXPLOITED">Exploited</option>
            <option value="HIGH">High</option>
          </select>
        </label>
        <label className="flex items-center gap-2">
          <span>Vendor</span>
          <input
            value={vendor}
            onChange={(event) => setVendor(event.target.value)}
            className="rounded-lg border border-slate-600 bg-surface px-3 py-1 text-sm text-white focus:border-accent focus:outline-none"
            placeholder="Vendor"
          />
        </label>
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search CVE or product"
          className="rounded-lg border border-slate-600 bg-surface px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
        />
        <div className="ml-auto flex gap-2">
          <a className="btn-secondary px-3 py-1" href="/api/public/kev/export.csv">
            Download CSV
          </a>
          <a className="btn-secondary px-3 py-1" href="/api/public/kev/export.json">
            Download JSON
          </a>
        </div>
      </div>

      <div className="card overflow-hidden">
        <table className="min-w-full divide-y divide-slate-800 text-sm">
          <thead className="bg-slate-900/60 text-left text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-4 py-3">CVE</th>
              <th className="px-4 py-3">Vendor</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Deadline</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            {isLoading && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-slate-400">
                  Loading KEV records…
                </td>
              </tr>
            )}
            {!isLoading && records.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-slate-400">
                  No vulnerabilities match the filters.
                </td>
              </tr>
            )}
            {records.map((record) => (
              <KevRow key={record.id} record={record} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function KevRow({ record }: { record: KevRecord }) {
  return (
    <tr>
      <td className="px-4 py-3 text-white">{record.cve}</td>
      <td className="px-4 py-3">{record.vendor}</td>
      <td className="px-4 py-3">{record.product}</td>
      <td className="px-4 py-3">{record.status}</td>
      <td className="px-4 py-3">{new Date(record.deadline).toLocaleDateString()}</td>
    </tr>
  );
}
