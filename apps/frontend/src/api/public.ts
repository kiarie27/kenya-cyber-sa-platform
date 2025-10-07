import { apiClient } from './client';
import type {
  AdvisoryDetail,
  AdvisoryListItem,
  HomeSummary,
  KevRecord,
  PaginatedResponse,
  TrendSnapshot,
} from '../types/api';

export const fetchHomeSummary = async (): Promise<HomeSummary> => {
  const { data } = await apiClient.get<HomeSummary>('/public/home');
  return data;
};

export const fetchAdvisories = async (params: {
  page?: number;
  pageSize?: number;
  search?: string;
  severity?: string;
  audience?: string;
}): Promise<PaginatedResponse<AdvisoryListItem>> => {
  const { data } = await apiClient.get<PaginatedResponse<AdvisoryListItem>>('/public/advisories', {
    params,
  });
  return data;
};

export const fetchAdvisory = async (slug: string): Promise<AdvisoryDetail> => {
  const { data } = await apiClient.get<AdvisoryDetail>(`/public/advisories/${slug}`);
  return data;
};

export const fetchKev = async (params: { q?: string; vendor?: string; status?: string } = {}): Promise<KevRecord[]> => {
  const { data } = await apiClient.get<{ items: KevRecord[] }>('/public/kev', { params });
  return data.items;
};

export const fetchTrends = async (limit = 12): Promise<TrendSnapshot[]> => {
  const { data } = await apiClient.get<{ items: TrendSnapshot[] }>('/public/trends', { params: { limit } });
  return data.items;
};
