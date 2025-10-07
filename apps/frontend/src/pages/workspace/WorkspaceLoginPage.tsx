import type { FormEvent } from 'react';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth.tsx';

export function WorkspaceLoginPage() {
  const { login, isAuthenticated, isLoading, error } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  const redirectPath = (location.state as { from?: Location })?.from?.pathname ?? '/workspace';

  if (!isLoading && isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setFormError('Enter the email assigned in the mock directory.');
      return;
    }
    try {
      await login(email);
    } catch (loginError) {
      setFormError((loginError as Error).message);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container flex min-h-screen items-center justify-center py-16">
        <form onSubmit={handleSubmit} className="card w-full max-w-md space-y-6 p-8">
          <header className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-white">Workspace Sign-in</h1>
            <p className="text-sm text-slate-400">Mock SSO – select your pre-provisioned email to continue.</p>
          </header>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-slate-600 bg-surface px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
              placeholder="analyst@example.go.ke"
              required
            />
            {(formError || error) && <p className="text-sm text-danger">{formError ?? error}</p>}
          </div>
          <button type="submit" className="btn w-full" disabled={isLoading}>
            {isLoading ? 'Signing in…' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}
