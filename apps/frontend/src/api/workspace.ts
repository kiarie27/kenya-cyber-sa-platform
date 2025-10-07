import { apiClient } from './client';
import type { IncidentListItem, PaginatedResponse, WorkspaceUser } from '../types/api';

export const fetchCurrentUser = async (): Promise<WorkspaceUser | null> => {
  try {
    const { data } = await apiClient.get<{ user: WorkspaceUser }>('/auth/me');
    return data.user;
  } catch {
    return null;
  }
};

export const loginWithMockSso = async (email: string): Promise<WorkspaceUser> => {
  const { data } = await apiClient.post<{ user: WorkspaceUser; message: string }>('/auth/mock-sso', { email });
  return data.user;
};

export const logout = async (): Promise<void> => {
  await apiClient.post('/auth/logout');
};

export const fetchIncidents = async (params: {
  page?: number;
  pageSize?: number;
  search?: string;
  severity?: string;
  sector?: string;
  status?: string;
  tlp?: string;
}): Promise<PaginatedResponse<IncidentListItem>> => {
  const { data } = await apiClient.get<PaginatedResponse<IncidentListItem>>('/workspace/incidents', {
    params,
  });
  return data;
};
