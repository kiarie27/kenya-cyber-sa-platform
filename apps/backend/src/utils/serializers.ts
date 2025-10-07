import type {
  Advisory,
  Incident,
  IncidentNote,
  Indicator,
  KevRecord,
  TrendSnapshot,
  AdvisoryApproval,
} from '@prisma/client';

const safeParseJson = <T>(raw?: string | null, fallback: T = [] as unknown as T): T => {
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw) as T;
    return parsed;
  } catch (error) {
    console.warn('Failed to parse JSON field', error);
    return fallback;
  }
};

const splitCsv = (raw?: string | null): string[] => {
  if (!raw) return [];
  return raw
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
};

export const serializeAdvisory = (
  advisory: Advisory & {
    approvals?: AdvisoryApproval[];
    incidents?: Incident[];
  },
) => ({
  id: advisory.id,
  slug: advisory.slug,
  title: advisory.title,
  summary: advisory.summary,
  actions: safeParseJson<string[]>(advisory.actions, []),
  detection: safeParseJson<string[]>(advisory.detection ?? '[]', []),
  audience: splitCsv(advisory.audience),
  severity: advisory.severity,
  tlp: advisory.tlp,
  status: advisory.status,
  publishedAt: advisory.publishedAt,
  createdAt: advisory.createdAt,
  updatedAt: advisory.updatedAt,
  approvals: advisory.approvals?.map((approval) => ({
    id: approval.id,
    role: approval.role,
    approverId: approval.approverId,
    approvedAt: approval.approvedAt,
  })) ?? [],
});

export const serializeAdvisoryListItem = (advisory: Advisory) => ({
  id: advisory.id,
  slug: advisory.slug,
  title: advisory.title,
  summary: advisory.summary,
  severity: advisory.severity,
  tlp: advisory.tlp,
  status: advisory.status,
  publishedAt: advisory.publishedAt,
});

export const serializeIncident = (
  incident: Incident & {
    notes?: IncidentNote[];
    indicators?: Indicator[];
    advisory?: Advisory | null;
  },
) => ({
  id: incident.id,
  title: incident.title,
  summary: incident.summary,
  tlp: incident.tlp,
  severity: incident.severity,
  sector: incident.sector,
  incidentType: incident.incidentType,
  status: incident.status,
  occurredAt: incident.occurredAt,
  organisation: incident.organisation,
  createdAt: incident.createdAt,
  updatedAt: incident.updatedAt,
  notes:
    incident.notes?.map((note) => ({
      id: note.id,
      body: note.body,
      authorId: note.authorId,
      createdAt: note.createdAt,
    })) ?? [],
  indicators:
    incident.indicators?.map((indicator) => ({
      id: indicator.id,
      type: indicator.type,
      value: indicator.value,
      tlp: indicator.tlp,
      description: indicator.description,
      createdAt: indicator.createdAt,
    })) ?? [],
  advisory: incident.advisory
    ? serializeAdvisory(incident.advisory as Advisory & { approvals?: AdvisoryApproval[]; incidents?: Incident[] })
    : null,
});

export const serializeKevRecord = (record: KevRecord) => ({
  id: record.id,
  cve: record.cve,
  vendor: record.vendor,
  product: record.product,
  vulnerabilityName: record.vulnerabilityName,
  status: record.status,
  dateAdded: record.dateAdded,
  deadline: record.deadline,
  reference: record.reference,
  sectors: record.sectors ? record.sectors.split(';').filter(Boolean) : [],
  recommendedDeadline: record.recommendedDeadline,
  description: record.description,
});

export const serializeTrendSnapshot = (snapshot: TrendSnapshot) => ({
  id: snapshot.id,
  year: snapshot.year,
  week: snapshot.week,
  data: safeParseJson(snapshot.dataJson, {} as unknown as Record<string, unknown>),
  generatedAt: snapshot.generatedAt,
});
