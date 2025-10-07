import { Link } from 'react-router-dom';

export function ReportPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Report an Incident</h1>
        <p className="text-slate-400">
          Public visitors can learn how to escalate issues. Vetted partners should sign into the workspace to submit reports
          with TLP enforcement.
        </p>
      </header>
      <div className="card space-y-4 p-6 text-slate-300">
        <p>
          For urgent incidents affecting Kenyan critical infrastructure or government systems, contact KE-CIRT/CC hotline and
          your sector regulator immediately.
        </p>
        <p>
          Workspace members can access the full incident submission workflow, including taxonomy tagging, severity, and draft
          advisory creation.
        </p>
        <Link to="/workspace/login" className="btn w-fit">
          Workspace Sign-in
        </Link>
      </div>
    </section>
  );
}
