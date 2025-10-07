import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth.tsx';

export function WorkspaceLayout() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`;

  const handleSignOut = async () => {
    await logout();
    navigate('/workspace/login');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-emerald-900 bg-emerald-950/60 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Link to="/workspace" className="text-lg font-semibold tracking-wide text-white">
              Workspace • Kenya Cyber SA
            </Link>
            <nav className="flex items-center gap-2">
            <NavLink to="/workspace" className={navLinkStyles} end>
              Dashboard
            </NavLink>
            <NavLink to="/workspace/incidents" className={navLinkStyles}>
              Inbox
            </NavLink>
              <NavLink to="/workspace/publish" className={navLinkStyles}>
                Publish Review
              </NavLink>
              <NavLink to="/" className={navLinkStyles}>
                ← Public
              </NavLink>
            </nav>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <div className="hidden text-right md:block">
              <div className="font-medium text-white">{user?.displayName ?? 'Workspace Member'}</div>
              <div className="text-xs text-slate-400">{user?.organisation}</div>
            </div>
            <span className="badge badge-clear bg-emerald-500/20 text-emerald-200">Members</span>
            <button type="button" className="btn-secondary" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>
      </header>
      <main className="container py-10">
        <Outlet />
      </main>
    </div>
  );
}
