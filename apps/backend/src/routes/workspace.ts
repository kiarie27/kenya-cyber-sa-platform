import { Router } from 'express';
import { z } from 'zod';

import { prisma } from '../lib/prisma.js';
import { requireAuth, requireRoles } from '../middleware/auth.js';
import {
  listIncidents,
  getIncident,
  createIncident,
  addIncidentNote,
  addIndicator,
  upsertDraftAdvisory,
  recordApproval,
  publishAdvisory,
} from '../services/workspaceService.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { serializeAdvisory } from '../utils/serializers.js';

const router = Router();

router.use(requireAuth);

const createIncidentSchema = z.object({
  title: z.string().min(5),
  summary: z.string().min(10),
  tlp: z.enum(['RED', 'AMBER', 'AMBER_STRICT', 'GREEN', 'CLEAR']),
  severity: z.enum(['HIGH', 'MEDIUM', 'LOW']),
  sector: z.string().min(2),
  incidentType: z.string().min(2),
  occurredAt: z.coerce.date().optional(),
});

router.get(
  '/incidents',
  asyncHandler(async (req, res) => {
    const data = await listIncidents(req.user!, {
      search: req.query.search?.toString(),
      sector: req.query.sector?.toString(),
      status: req.query.status?.toString(),
      severity: req.query.severity?.toString(),
      tlp: req.query.tlp?.toString(),
      page: req.query.page ? Number(req.query.page) : undefined,
      pageSize: req.query.pageSize ? Number(req.query.pageSize) : undefined,
    });
    res.json(data);
  }),
);

router.post(
  '/incidents',
  asyncHandler(async (req, res) => {
    const payload = createIncidentSchema.parse(req.body);
    const incident = await createIncident(req.user!, payload);
    res.status(201).json(incident);
  }),
);

router.get(
  '/incidents/:id',
  asyncHandler(async (req, res) => {
    try {
      const incident = await getIncident(req.user!, req.params.id);
      if (!incident) {
        return res.status(404).json({ message: 'Incident not found' });
      }
      return res.json(incident);
    } catch (error) {
      if (error instanceof Error && error.message === 'Forbidden') {
        return res.status(403).json({ message: 'Forbidden' });
      }
      throw error;
    }
  }),
);

const noteSchema = z.object({ body: z.string().min(3) });

router.post(
  '/incidents/:id/notes',
  asyncHandler(async (req, res) => {
    const { body } = noteSchema.parse(req.body);
    try {
      const note = await addIncidentNote(req.user!, req.params.id, body);
      res.status(201).json(note);
    } catch (error) {
      if (error instanceof Error && error.message === 'Forbidden') {
        return res.status(403).json({ message: 'Forbidden' });
      }
      throw error;
    }
  }),
);

const indicatorSchema = z.object({
  type: z.string().min(2),
  value: z.string().min(2),
  tlp: z.enum(['RED', 'AMBER', 'AMBER_STRICT', 'GREEN', 'CLEAR']),
  description: z.string().optional(),
});

router.post(
  '/incidents/:id/indicators',
  asyncHandler(async (req, res) => {
    const payload = indicatorSchema.parse(req.body);
    try {
      const indicator = await addIndicator(req.user!, req.params.id, payload);
      res.status(201).json(indicator);
    } catch (error) {
      if (error instanceof Error && error.message === 'Forbidden') {
        return res.status(403).json({ message: 'Forbidden' });
      }
      throw error;
    }
  }),
);

const draftSchema = z.object({
  title: z.string().min(5),
  summary: z.string().min(10),
  actions: z.array(z.string().min(2)).min(1),
  detection: z.array(z.string().min(2)).default([]),
  audience: z.array(z.string().min(2)).min(1),
  severity: z.enum(['HIGH', 'MEDIUM', 'LOW']),
  tlp: z.enum(['GREEN', 'CLEAR', 'AMBER']),
});

router.post(
  '/incidents/:id/draft-advisory',
  asyncHandler(async (req, res) => {
    const payload = draftSchema.parse(req.body);
    try {
      const advisory = await upsertDraftAdvisory(req.user!, req.params.id, payload);
      res.status(201).json(advisory);
    } catch (error) {
      if (error instanceof Error && error.message === 'Forbidden') {
        return res.status(403).json({ message: 'Forbidden' });
      }
      throw error;
    }
  }),
);

const approvalSchema = z.object({
  role: z.enum(['ANALYST', 'EDITOR', 'LEGAL', 'PUBLISHER']),
});

router.post(
  '/advisories/:id/approve',
  requireRoles('ANALYST', 'EDITOR', 'LEGAL', 'PUBLISHER'),
  asyncHandler(async (req, res) => {
    const { role } = approvalSchema.parse(req.body);
    const approval = await recordApproval(req.user!, req.params.id, role);
    res.status(201).json(approval);
  }),
);

const publishSchema = z.object({ target: z.enum(['public', 'members']) });

router.post(
  '/advisories/:id/publish',
  requireRoles('PUBLISHER'),
  asyncHandler(async (req, res) => {
    const { target } = publishSchema.parse(req.body);
    const advisory = await publishAdvisory(req.user!, req.params.id, target);
    res.json(advisory);
  }),
);

router.get(
  '/advisories/:id',
  asyncHandler(async (req, res) => {
    const incident = await prisma.advisory.findUnique({
      where: { id: req.params.id },
      include: { approvals: true },
    });
    if (!incident) {
      return res.status(404).json({ message: 'Advisory not found' });
    }
    res.json(serializeAdvisory(incident));
  }),
);

export const workspaceRouter = router;
