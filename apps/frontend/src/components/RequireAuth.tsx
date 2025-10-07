import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth.tsx';

export function RequireAuth() {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex justify-center py-20 text-slate-400">
        Checking workspace access…
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/workspace/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
