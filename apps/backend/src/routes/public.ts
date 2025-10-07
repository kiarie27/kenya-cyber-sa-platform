import { Router } from 'express';

import {
  getHomeSummary,
  listPublicAdvisories,
  getPublicAdvisory,
  listKevRecords,
  getKevExports,
  listTrends,
} from '../services/publicService.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

router.get(
  '/home',
  asyncHandler(async (_req, res) => {
    const summary = await getHomeSummary();
    res.json(summary);
  }),
);

router.get(
  '/advisories',
  asyncHandler(async (req, res) => {
    const data = await listPublicAdvisories({
      search: req.query.search?.toString(),
      severity: req.query.severity?.toString(),
      audience: req.query.audience?.toString(),
      page: req.query.page ? Number(req.query.page) : undefined,
      pageSize: req.query.pageSize ? Number(req.query.pageSize) : undefined,
    });
    res.json(data);
  }),
);

router.get(
  '/advisories/:slug',
  asyncHandler(async (req, res) => {
    const advisory = await getPublicAdvisory(req.params.slug);
    if (!advisory) {
      return res.status(404).json({ message: 'Advisory not found' });
    }
    return res.json(advisory);
  }),
);

router.get(
  '/advisories/:slug/export',
  asyncHandler(async (req, res) => {
    const advisory = await getPublicAdvisory(req.params.slug);
    if (!advisory) {
      return res.status(404).json({ message: 'Advisory not found' });
    }
    res.setHeader('Content-Disposition', `attachment; filename="${advisory.slug}.json"`);
    res.json(advisory);
  }),
);

router.get(
  '/kev',
  asyncHandler(async (req, res) => {
    const items = await listKevRecords({
      q: req.query.q?.toString(),
      vendor: req.query.vendor?.toString(),
      status: req.query.status?.toString(),
    });
    res.json({ items, total: items.length });
  }),
);

router.get(
  '/kev/export.json',
  asyncHandler(async (_req, res) => {
    const { json } = await getKevExports();
    res.setHeader('Content-Disposition', 'attachment; filename="kev.json"');
    res.json(json);
  }),
);

router.get(
  '/kev/export.csv',
  asyncHandler(async (_req, res) => {
    const { csv } = await getKevExports();
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="kev.csv"');
    res.send(csv);
  }),
);

router.get(
  '/trends',
  asyncHandler(async (req, res) => {
    const limit = req.query.limit ? Number(req.query.limit) : 12;
    const snapshots = await listTrends(limit);
    res.json({ items: snapshots });
  }),
);

router.get('/policy', (_req, res) => {
  res.json({
    message: 'Publication policy and quick reference will be surfaced in a dedicated help centre page.',
  });
});

export const publicRouter = router;
