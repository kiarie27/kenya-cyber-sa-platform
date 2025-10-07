import { Link, NavLink, Outlet } from 'react-router-dom';

const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`;

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-slate-800 bg-surface/80 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-lg font-semibold tracking-wide text-white">
              ICTA × KoTDA • Kenya Cyber SA
            </Link>
            <nav className="hidden items-center gap-2 md:flex">
              <NavLink to="/" className={navLinkStyles} end>
                Home
              </NavLink>
              <NavLink to="/advisories" className={navLinkStyles}>
                Advisories
              </NavLink>
              <NavLink to="/kev" className={navLinkStyles}>
                KEV Kenya
              </NavLink>
              <NavLink to="/trends" className={navLinkStyles}>
                Trends
              </NavLink>
              <NavLink to="/report" className={navLinkStyles}>
                Report Incident
              </NavLink>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <span className="badge badge-public">Public</span>
            <Link to="/workspace/login" className="btn-secondary">
              Workspace
            </Link>
          </div>
        </div>
      </header>
      <main className="container py-12">
        <Outlet />
      </main>
      <footer className="border-t border-slate-800 bg-surface/80 py-6">
        <div className="container grid gap-6 text-sm text-slate-400 md:grid-cols-3">
          <div>
            <p className="font-medium text-slate-200">Kenya Cyber Situational Awareness</p>
            <p>Operated by ICTA × KoTDA • Pilot with ODPC, Machakos, Kajiado</p>
          </div>
          <div>
            <p>TLP:CLEAR on public pages. No sensitive indicators are displayed.</p>
            <p>Accessibility: keyboard-friendly • high contrast • print-friendly</p>
          </div>
          <div className="md:text-right">
            <p>© {new Date().getFullYear()} Government of Kenya</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
