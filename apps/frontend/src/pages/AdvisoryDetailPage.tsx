import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchAdvisory } from '../api/public';

export function AdvisoryDetailPage() {
  const { id } = useParams();
  const slug = id ?? '';

  const { data, isLoading, isError } = useQuery({
    queryKey: ['public', 'advisory', slug],
    enabled: Boolean(slug),
    queryFn: () => fetchAdvisory(slug),
  });

  if (isLoading) {
    return <div className="text-slate-400">Loading advisory…</div>;
  }

  if (isError || !data) {
    return <div className="text-slate-400">Advisory not found.</div>;
  }

  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-slate-400">Advisory ID: {data.id}</p>
        <h1 className="text-3xl font-semibold text-white">{data.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <span className="badge badge-clear">TLP:{data.tlp}</span>
          <span>Severity: {data.severity}</span>
          <span>
            Published: {data.publishedAt ? new Date(data.publishedAt).toLocaleDateString() : 'Pending release'}
          </span>
          <a
            className="btn-secondary px-3 py-1"
            href={`/api/public/advisories/${data.slug}/export`}
            download
          >
            Download JSON
          </a>
        </div>
      </header>
      <section className="card space-y-6 p-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Summary</h2>
          <p className="mt-2 text-slate-300">{data.summary}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Action Required</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-300">
            {data.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </div>
        {data.detection.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-white">Detection Guidance</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-300">
              {data.detection.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h2 className="text-xl font-semibold text-white">Audience</h2>
          <p className="mt-2 text-slate-300">{data.audience.join(', ')}</p>
        </div>
        {data.approvals.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-white">Approvals</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
              {data.approvals.map((approval) => (
                <li key={approval.id}>
                  {approval.role} – {new Date(approval.approvedAt).toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </article>
  );
}
