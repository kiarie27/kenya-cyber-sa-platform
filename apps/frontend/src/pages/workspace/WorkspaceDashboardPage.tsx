import { useQuery } from '@tanstack/react-query';

import { fetchIncidents } from '../../api/workspace';

export function WorkspaceDashboardPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['workspace', 'incidents', { page: 1, pageSize: 5 }],
    queryFn: () => fetchIncidents({ page: 1, pageSize: 5 }),
  });

  const totalIncidents = data?.total ?? 0;
  const publishedCount = data?.items.filter((incident) => incident.status === 'PUBLISHED').length ?? 0;
  const highSeverity = data?.items.filter((incident) => incident.severity === 'HIGH').length ?? 0;

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Workspace Dashboard</h1>
        <p className="text-slate-400">
          Snapshot of current incident workload and publication progress sourced from the protected workspace APIs.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard title="Open Incidents" value={isLoading ? '—' : totalIncidents.toString()} description="Across all sectors" />
        <StatCard title="High Severity (sample)" value={isLoading ? '—' : highSeverity.toString()} description="Requires priority response" />
        <StatCard title="Recent Publications" value={isLoading ? '—' : publishedCount.toString()} description="Published from latest fetch" />
      </div>
      <div className="card p-6 text-slate-300">
        <p>Use the inbox to triage new submissions, collaborate on draft advisories, and move items through the approval workflow.</p>
      </div>
    </section>
  );
}

function StatCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="card p-6">
      <p className="text-sm uppercase tracking-wide text-slate-400">{title}</p>
      <p className="mt-2 text-4xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-xs text-slate-500">{description}</p>
    </div>
  );
}
