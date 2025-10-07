import { prisma } from '../lib/prisma.js';
import { serializeIncident, serializeAdvisory } from '../utils/serializers.js';

import { logAudit } from './auditService.js';

const DEFAULT_PAGE_SIZE = 15;

const sanitizeArray = (values: string[]) =>
  values.map((value) => value.replace(/(\b\d{1,3}(?:\.\d{1,3}){3}\b)/g, '[REDACTED IP]'))
    .map((value) => value.replace(/(https?:\/\/\S+)/gi, '[REDACTED URL]'))
    .map((value) => value.replace(/([a-f0-9]{32,64})/gi, '[REDACTED HASH]'))
    .map((value) => value.replace(/([\w.-]+@[^\s]+)/g, '[REDACTED EMAIL]'));

const toSlug = (title: string) =>
  `adv-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40)}-${Date.now()}`;

const canViewIncident = (user: Express.User, incidentOrg: string, tlp: string) => {
  if (tlp === 'RED') {
    return user.roles.includes('EDITOR') || user.roles.includes('PUBLISHER') || user.organisation === incidentOrg;
  }
  if (tlp === 'AMBER_STRICT') {
    return user.organisation === incidentOrg || user.roles.includes('EDITOR');
  }
  return true;
};

export const listIncidents = async (
  user: Express.User,
  params: {
    search?: string;
    sector?: string;
    status?: string;
    severity?: string;
    tlp?: string;
    page?: number;
    pageSize?: number;
  },
) => {
  const where = {
    ...(params.sector ? { sector: params.sector } : {}),
    ...(params.status ? { status: params.status } : {}),
    ...(params.severity ? { severity: params.severity.toUpperCase() } : {}),
    ...(params.tlp ? { tlp: params.tlp.toUpperCase() } : {}),
    ...(params.search
      ? {
          OR: [
            { title: { contains: params.search, mode: 'insensitive' as const } },
            { summary: { contains: params.search, mode: 'insensitive' as const } },
          ],
        }
      : {}),
  };

  const rawIncidents = await prisma.incident.findMany({
    where,
    orderBy: { occurredAt: 'desc' },
  });

  const accessible = rawIncidents.filter((incident) => canViewIncident(user, incident.organisation, incident.tlp));
  const page = Math.max(1, params.page ?? 1);
  const pageSize = Math.min(50, params.pageSize ?? DEFAULT_PAGE_SIZE);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: accessible.slice(start, end).map(serializeIncident),
    total: accessible.length,
    page,
    pageSize,
  };
};

export const getIncident = async (user: Express.User, incidentId: string) => {
  const incident = await prisma.incident.findUnique({
    where: { id: incidentId },
    include: {
      notes: { orderBy: { createdAt: 'desc' } },
      indicators: true,
      advisory: { include: { approvals: true } },
    },
  });

  if (!incident) return null;
  if (!canViewIncident(user, incident.organisation, incident.tlp)) {
    throw new Error('Forbidden');
  }

  return serializeIncident(incident);
};

export const createIncident = async (
  user: Express.User,
  payload: {
    title: string;
    summary: string;
    tlp: string;
    severity: string;
    sector: string;
    incidentType: string;
    occurredAt?: Date;
  },
) => {
  const incident = await prisma.incident.create({
    data: {
      title: payload.title,
      summary: payload.summary,
      tlp: payload.tlp,
      severity: payload.severity,
      sector: payload.sector,
      incidentType: payload.incidentType,
      status: 'NEW',
      occurredAt: payload.occurredAt ?? new Date(),
      reporterId: user.id,
      organisation: user.organisation,
    },
  });

  await logAudit({
    actorId: user.id,
    action: 'incident.create',
    entityType: 'Incident',
    entityId: incident.id,
  });

  return serializeIncident(incident);
};

export const addIncidentNote = async (user: Express.User, incidentId: string, body: string) => {
  const incident = await prisma.incident.findUnique({ where: { id: incidentId } });
  if (!incident) throw new Error('Incident not found');
  if (!canViewIncident(user, incident.organisation, incident.tlp)) throw new Error('Forbidden');

  const note = await prisma.incidentNote.create({
    data: {
      incidentId,
      authorId: user.id,
      body,
    },
  });

  await logAudit({
    actorId: user.id,
    action: 'incident.note.add',
    entityType: 'Incident',
    entityId: incidentId,
  });

  return {
    id: note.id,
    body: note.body,
    createdAt: note.createdAt,
    authorId: note.authorId,
  };
};

export const addIndicator = async (
  user: Express.User,
  incidentId: string,
  payload: { type: string; value: string; tlp: string; description?: string },
) => {
  const incident = await prisma.incident.findUnique({ where: { id: incidentId } });
  if (!incident) throw new Error('Incident not found');
  if (!canViewIncident(user, incident.organisation, incident.tlp)) throw new Error('Forbidden');

  const indicator = await prisma.indicator.create({
    data: {
      incidentId,
      type: payload.type.toUpperCase(),
      value: payload.value,
      tlp: payload.tlp,
      description: payload.description,
    },
  });

  await logAudit({
    actorId: user.id,
    action: 'incident.indicator.add',
    entityType: 'Incident',
    entityId: incidentId,
  });

  return indicator;
};

export const upsertDraftAdvisory = async (
  user: Express.User,
  incidentId: string,
  payload: {
    title: string;
    summary: string;
    actions: string[];
    detection: string[];
    audience: string[];
    severity: string;
    tlp: string;
  },
) => {
  const incident = await prisma.incident.findUnique({
    where: { id: incidentId },
    include: { advisory: true },
  });
  if (!incident) throw new Error('Incident not found');
  if (!canViewIncident(user, incident.organisation, incident.tlp)) throw new Error('Forbidden');

  let advisory;
  if (incident.advisory) {
    advisory = await prisma.advisory.update({
      where: { id: incident.advisoryId! },
      data: {
        title: payload.title,
        summary: payload.summary,
        actions: JSON.stringify(payload.actions),
        detection: JSON.stringify(payload.detection),
        audience: payload.audience.join(','),
        severity: payload.severity,
        tlp: payload.tlp,
        status: 'INTERNAL',
        updatedAt: new Date(),
      },
    });
  } else {
    advisory = await prisma.advisory.create({
      data: {
        slug: `draft-${incident.id}`,
        title: payload.title,
        summary: payload.summary,
        actions: JSON.stringify(payload.actions),
        detection: JSON.stringify(payload.detection),
        audience: payload.audience.join(','),
        severity: payload.severity,
        tlp: payload.tlp,
        status: 'DRAFT',
        createdById: user.id,
        incidents: { connect: { id: incident.id } },
      },
    });

    await prisma.incident.update({
      where: { id: incident.id },
      data: { advisoryId: advisory.id },
    });
  }

  await logAudit({
    actorId: user.id,
    action: 'advisory.draft.upsert',
    entityType: 'Advisory',
    entityId: advisory.id,
  });

  return serializeAdvisory(advisory);
};

export const recordApproval = async (user: Express.User, advisoryId: string, role: string) => {
  if (!user.roles.includes(role)) {
    throw new Error('Insufficient role for approval');
  }

  const approval = await prisma.advisoryApproval.upsert({
    where: {
      advisoryId_role: {
        advisoryId,
        role,
      },
    },
    update: {
      approverId: user.id,
      approvedAt: new Date(),
    },
    create: {
      advisoryId,
      approverId: user.id,
      role,
    },
  });

  await logAudit({
    actorId: user.id,
    action: 'advisory.approval.record',
    entityType: 'Advisory',
    entityId: advisoryId,
    metadata: { role },
  });

  return approval;
};

export const publishAdvisory = async (
  user: Express.User,
  advisoryId: string,
  target: 'public' | 'members',
) => {
  if (!user.roles.includes('PUBLISHER')) {
    throw new Error('Publisher role required');
  }

  const advisory = await prisma.advisory.findUnique({
    where: { id: advisoryId },
    include: { incidents: true },
  });
  if (!advisory) throw new Error('Advisory not found');

  const actions = JSON.parse(advisory.actions) as string[];
  const detection = advisory.detection ? (JSON.parse(advisory.detection) as string[]) : [];
  const audience = advisory.audience ? advisory.audience.split(',') : [];

  const sanitizedActions = target === 'public' ? sanitizeArray(actions) : actions;
  const sanitizedDetection = target === 'public' ? sanitizeArray(detection) : detection;
  const sanitizedSummary =
    target === 'public'
      ? sanitizeArray([advisory.summary])[0]
      : advisory.summary;

  const slug = advisory.slug.startsWith('draft-') && target === 'public' ? toSlug(advisory.title) : advisory.slug;

  const updated = await prisma.advisory.update({
    where: { id: advisory.id },
    data: {
      slug,
      summary: sanitizedSummary,
      actions: JSON.stringify(sanitizedActions),
      detection: JSON.stringify(sanitizedDetection),
      audience: audience.join(','),
      tlp: target === 'public' ? 'CLEAR' : 'GREEN',
      status: target === 'public' ? 'PUBLIC' : 'INTERNAL',
      publishedAt: target === 'public' ? new Date() : null,
    },
  });

  if (advisory.incidents?.length) {
    await prisma.incident.updateMany({
      where: { id: { in: advisory.incidents.map((incident) => incident.id) } },
      data: { status: target === 'public' ? 'PUBLISHED' : 'ACTION_REQUIRED' },
    });
  }

  await logAudit({
    actorId: user.id,
    action: 'advisory.publish',
    entityType: 'Advisory',
    entityId: advisory.id,
    metadata: { target },
  });

  return serializeAdvisory(updated);
};
