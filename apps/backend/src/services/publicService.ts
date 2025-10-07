import { prisma } from '../lib/prisma.js';
import {
  serializeAdvisory,
  serializeAdvisoryListItem,
  serializeKevRecord,
  serializeTrendSnapshot,
} from '../utils/serializers.js';

const DEFAULT_PAGE_SIZE = 10;

export const getHomeSummary = async () => {
  const [kevCount, latestAdvisories, latestTrend] = await Promise.all([
    prisma.kevRecord.count(),
    prisma.advisory.findMany({
      where: { status: 'PUBLIC' },
      orderBy: { publishedAt: 'desc' },
      take: 3,
    }),
    prisma.trendSnapshot.findFirst({ orderBy: { generatedAt: 'desc' } }),
  ]);

  return {
    kevCount,
    latestAdvisories: latestAdvisories.map(serializeAdvisoryListItem),
    trendHighlight: latestTrend ? serializeTrendSnapshot(latestTrend) : null,
  };
};

export const listPublicAdvisories = async (params: {
  search?: string;
  severity?: string;
  audience?: string;
  page?: number;
  pageSize?: number;
}) => {
  const page = Math.max(1, params.page ?? 1);
  const take = Math.min(50, params.pageSize ?? DEFAULT_PAGE_SIZE);
  const skip = (page - 1) * take;

  const where = {
    status: 'PUBLIC' as const,
    ...(params.search
      ? {
          OR: [
            { title: { contains: params.search, mode: 'insensitive' as const } },
            { summary: { contains: params.search, mode: 'insensitive' as const } },
          ],
        }
      : {}),
    ...(params.severity
      ? {
          severity: params.severity.toUpperCase(),
        }
      : {}),
    ...(params.audience
      ? {
          audience: {
            contains: params.audience,
            mode: 'insensitive' as const,
          },
        }
      : {}),
  };

  const [items, total] = await Promise.all([
    prisma.advisory.findMany({
      where,
      orderBy: { publishedAt: 'desc' },
      skip,
      take,
    }),
    prisma.advisory.count({ where }),
  ]);

  return {
    items: items.map(serializeAdvisoryListItem),
    total,
    page,
    pageSize: take,
  };
};

export const getPublicAdvisory = async (slug: string) => {
  const advisory = await prisma.advisory.findUnique({
    where: { slug, status: 'PUBLIC' },
    include: { approvals: true },
  });

  if (!advisory) return null;
  return serializeAdvisory(advisory);
};

export const listKevRecords = async (params: { q?: string; vendor?: string; status?: string }) => {
  const where = {
    ...(params.q
      ? {
          OR: [
            { cve: { contains: params.q, mode: 'insensitive' as const } },
            { product: { contains: params.q, mode: 'insensitive' as const } },
            { vendor: { contains: params.q, mode: 'insensitive' as const } },
          ],
        }
      : {}),
    ...(params.vendor ? { vendor: { contains: params.vendor, mode: 'insensitive' as const } } : {}),
    ...(params.status ? { status: params.status.toUpperCase() } : {}),
  };

  const records = await prisma.kevRecord.findMany({ where, orderBy: { dateAdded: 'desc' } });
  return records.map(serializeKevRecord);
};

export const getKevExports = async () => {
  const records = await prisma.kevRecord.findMany({ orderBy: { dateAdded: 'desc' } });
  const serialized = records.map(serializeKevRecord);

  const csvHeader = 'CVE,Vendor,Product,Status,DateAdded,Deadline,Reference,Sectors,RecommendedDeadline';
  const csvRows = serialized.map((record) => [
    record.cve,
    record.vendor,
    record.product,
    record.status,
    record.dateAdded.toISOString().split('T')[0],
    record.deadline.toISOString().split('T')[0],
    record.reference,
    record.sectors.join(';'),
    record.recommendedDeadline ? record.recommendedDeadline.toISOString().split('T')[0] : '',
  ]);

  const csv = [csvHeader, ...csvRows.map((row) => row.map((value) => `"${value}"`).join(','))].join('\n');

  return { json: serialized, csv };
};

export const listTrends = async (limit = 12) => {
  const snapshots = await prisma.trendSnapshot.findMany({
    orderBy: { generatedAt: 'desc' },
    take: limit,
  });

  return snapshots.map(serializeTrendSnapshot);
};
