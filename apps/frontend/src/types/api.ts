export type AdvisoryListItem = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  severity: string;
  tlp: string;
  status: string;
  publishedAt: string | null;
};

export type AdvisoryApproval = {
  id: string;
  role: string;
  approverId: string;
  approvedAt: string;
};

export type AdvisoryDetail = AdvisoryListItem & {
  actions: string[];
  detection: string[];
  audience: string[];
  approvals: AdvisoryApproval[];
};

export type HomeSummary = {
  kevCount: number;
  latestAdvisories: AdvisoryListItem[];
  trendHighlight: TrendSnapshot | null;
};

export type KevRecord = {
  id: string;
  cve: string;
  vendor: string;
  product: string;
  vulnerabilityName?: string;
  status: string;
  dateAdded: string;
  deadline: string;
  reference: string;
  sectors: string[];
  recommendedDeadline?: string | null;
  description?: string | null;
};

export type TrendSnapshot = {
  id: string;
  year: number;
  week: number;
  data: Record<string, unknown>;
  generatedAt: string;
};

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};

export type WorkspaceUser = {
  id: string;
  email: string;
  displayName: string;
  organisation: string;
  roles: string[];
};

export type IncidentListItem = {
  id: string;
  title: string;
  summary: string;
  tlp: string;
  severity: string;
  sector: string;
  incidentType: string;
  status: string;
  occurredAt: string;
  organisation: string;
};
