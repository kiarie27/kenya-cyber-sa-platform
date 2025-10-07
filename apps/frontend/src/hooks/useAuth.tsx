import { createContext, useContext, useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchCurrentUser, loginWithMockSso, logout as logoutRequest } from '../api/workspace';
import type { WorkspaceUser } from '../types/api';

interface AuthContextValue {
  user: WorkspaceUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = useQueryClient();

  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: fetchCurrentUser,
  });

  const loginMutation = useMutation({
    mutationFn: loginWithMockSso,
    onSuccess: (authenticatedUser) => {
      queryClient.setQueryData(['auth', 'me'], authenticatedUser);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logoutRequest,
    onSuccess: async () => {
      queryClient.setQueryData(['auth', 'me'], null);
      await refetch();
    },
  });

  const value = useMemo<AuthContextValue>(
    () => ({
      user: user ?? null,
      isLoading,
      isAuthenticated: Boolean(user),
      error: (loginMutation.error as Error | undefined)?.message ?? null,
      login: async (email: string) => {
        await loginMutation.mutateAsync(email);
      },
      logout: async () => {
        await logoutMutation.mutateAsync();
      },
    }),
    [user, isLoading, loginMutation, logoutMutation],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
