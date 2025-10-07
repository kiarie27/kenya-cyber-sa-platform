import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type AdvisorySeed = {
  id: number;
  title: string;
  severity: number;
  tlp: string;
  audience: string[];
  date: string;
  summary: string;
  what_to_do_now: string[];
  who_is_affected: string;
  how_to_check: string[];
  references: string[];
};

type CaseSeed = {
  id: number;
  title: string;
  severity: number;
  tlp: string;
  sector: string;
  dedup_group: number;
  status: string;
  timeline: { ts: string; event: string }[];
  iocs: { type: string; value: string; tlp: string }[];
  draft_advisory?: {
    title: string;
    summary: string;
    what_to_do_now: string[];
    who_is_affected: string;
    how_to_check: string[];
    references: string[];
  };
};

type KevSeed = {
  cve: string;
  product: string;
  vendor: string;
  status: string;
  date_added: string;
  deadline: string;
  reference: string;
  kenya_context?: {
    sectors?: string[];
    recommended_deadline?: string;
  };
};

type TrendSeed = {
  week_start: string;
  phishing_count: number;
  top_exploited: { category: string; count: number }[];
  sector_signals: { sector: string; score: number }[];
};

const severityMap: Record<number, string> = {
  1: 'HIGH',
  2: 'MEDIUM',
  3: 'LOW',
};

const mockUsers = [
  {
    email: 'analyst@icta.go.ke',
    displayName: 'ICTA Analyst',
    organisation: 'ICT Authority',
    roles: 'ANALYST,EDITOR,PUBLISHER',
  },
  {
    email: 'editor@icta.go.ke',
    displayName: 'ICTA Content Editor',
    organisation: 'ICT Authority',
    roles: 'EDITOR,PUBLISHER',
  },
  {
    email: 'legal@odpc.go.ke',
    displayName: 'ODPC Legal Reviewer',
    organisation: 'Office of the Data Protection Commissioner',
    roles: 'LEGAL',
  },
  {
    email: 'machakos.ciso@county.go.ke',
    displayName: 'Machakos County CISO',
    organisation: 'Machakos County',
    roles: 'ANALYST',
  },
  {
    email: 'kajiado.ciso@county.go.ke',
    displayName: 'Kajiado County CISO',
    organisation: 'Kajiado County',
    roles: 'ANALYST',
  },
  {
    email: 'odpc.analyst@odpc.go.ke',
    displayName: 'ODPC Analyst',
    organisation: 'Office of the Data Protection Commissioner',
    roles: 'ANALYST',
  },
];

const loadJson = <T>(filename: string): T => {
  const filePath = join(process.cwd(), 'seed-data', filename);
  const data = readFileSync(filePath, 'utf-8');
  return JSON.parse(data) as T;
};

const inferIncidentType = (title: string): string => {
  const lower = title.toLowerCase();
  if (lower.includes('phishing')) return 'Phishing';
  if (lower.includes('ransomware')) return 'Ransomware';
  if (lower.includes('malware')) return 'Malware';
  if (lower.includes('vpn')) return 'VPN Security';
  if (lower.includes('insider')) return 'Insider';
  if (lower.includes('sql') || lower.includes('web')) return 'Web Exploit';
  if (lower.includes('ddos') || lower.includes('denial')) return 'DoS';
  return 'General';
};

const resetDatabase = async () => {
  await prisma.advisoryApproval.deleteMany();
  await prisma.indicator.deleteMany();
  await prisma.incidentNote.deleteMany();
  await prisma.incident.deleteMany();
  await prisma.advisory.deleteMany();
  await prisma.kevRecord.deleteMany();
  await prisma.trendSnapshot.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.user.deleteMany();
};

async function seedUsers() {
  const created = await prisma.$transaction(
    mockUsers.map((user) =>
      prisma.user.create({
        data: user,
      }),
    ),
  );
  return new Map(created.map((user) => [user.email, user]));
}

async function seedPublicAdvisories(users: Map<string, { id: string }>) {
  const advisoryRaw = loadJson<AdvisorySeed[]>('advisories.json');
  const creatorId = users.get('editor@icta.go.ke')!.id;

  const advisories = await prisma.$transaction(
    advisoryRaw.map((item) =>
      prisma.advisory.create({
        data: {
          slug: `adv-${item.id}`,
          title: item.title,
          summary: item.summary,
          actions: JSON.stringify(item.what_to_do_now),
          detection: JSON.stringify(item.how_to_check),
          audience: item.audience.join(','),
          severity: severityMap[item.severity] ?? 'MEDIUM',
          tlp: item.tlp ?? 'CLEAR',
          status: 'PUBLIC',
          publishedAt: new Date(item.date),
          createdById: creatorId,
        },
      }),
    ),
  );

  return advisories;
}

async function seedKev() {
  const kevRaw = loadJson<KevSeed[]>('kev.json');
  await prisma.$transaction(
    kevRaw.map((item) =>
      prisma.kevRecord.create({
        data: {
          cve: item.cve,
          vendor: item.vendor,
          product: item.product,
          vulnerabilityName: item.cve,
          status: item.status.toUpperCase(),
          dateAdded: new Date(item.date_added),
          deadline: new Date(item.deadline),
          reference: item.reference,
          sectors: item.kenya_context?.sectors?.join(';') ?? '',
          recommendedDeadline: item.kenya_context?.recommended_deadline
            ? new Date(item.kenya_context.recommended_deadline)
            : undefined,
        },
      }),
    ),
  );
}

async function seedTrends() {
  const trendsRaw = loadJson<TrendSeed[]>('trends.json');
  await prisma.$transaction(
    trendsRaw.map((item) => {
      const week = new Date(item.week_start);
      const weekNumber = Number(
        `${week.getUTCFullYear()}${String(Math.ceil(((week.getUTCDate() + week.getUTCDay()) / 7))).padStart(2, '0')}`,
      );
      return prisma.trendSnapshot.create({
        data: {
          year: week.getUTCFullYear(),
          week: weekNumber,
          dataJson: JSON.stringify(item),
        },
      });
    }),
  );
}

async function seedIncidents(users: Map<string, { id: string }>) {
  const reporterIds = [
    users.get('machakos.ciso@county.go.ke')!.id,
    users.get('kajiado.ciso@county.go.ke')!.id,
    users.get('odpc.analyst@odpc.go.ke')!.id,
  ];
  const analystId = users.get('analyst@icta.go.ke')!.id;

  const caseRaw = loadJson<CaseSeed[]>('cases.json');
  let reporterIndex = 0;

  for (const item of caseRaw) {
    const occurredAt = item.timeline?.[0]?.ts ? new Date(item.timeline[0].ts) : new Date();
    const incident = await prisma.incident.create({
      data: {
        title: item.title,
        summary: item.draft_advisory?.summary ?? 'Incident summary pending classification.',
        tlp: item.tlp,
        severity: severityMap[item.severity] ?? 'MEDIUM',
        sector: item.sector,
        incidentType: inferIncidentType(item.title),
        status: item.status,
        occurredAt,
        reporterId: reporterIds[reporterIndex % reporterIds.length],
        organisation: item.sector,
      },
    });

    reporterIndex += 1;

    if (item.timeline?.length) {
      for (const note of item.timeline) {
        await prisma.incidentNote.create({
          data: {
            incidentId: incident.id,
            authorId: analystId,
            body: note.event,
            createdAt: new Date(note.ts),
          },
        });
      }
    }

    if (item.iocs?.length) {
      for (const indicator of item.iocs) {
        await prisma.indicator.create({
          data: {
            incidentId: incident.id,
            type: indicator.type.toUpperCase(),
            value: indicator.value,
            tlp: indicator.tlp,
          },
        });
      }
    }

    if (item.draft_advisory) {
      const advisory = await prisma.advisory.create({
        data: {
          slug: `draft-${incident.id}`,
          title: item.draft_advisory.title,
          summary: item.draft_advisory.summary,
          actions: JSON.stringify(item.draft_advisory.what_to_do_now),
          detection: JSON.stringify(item.draft_advisory.how_to_check),
          audience: 'Gov,County,CNI',
          severity: severityMap[item.severity] ?? 'MEDIUM',
          tlp: 'GREEN',
          status: 'INTERNAL',
          createdById: analystId,
        },
      });

      await prisma.incident.update({
        where: { id: incident.id },
        data: { advisoryId: advisory.id },
      });
    }
  }
}

export const seedDatabase = async () => {
  console.log('🌱 Seeding database...');
  await resetDatabase();
  const users = await seedUsers();
  await seedPublicAdvisories(users);
  await seedKev();
  await seedTrends();
  await seedIncidents(users);
  console.log('✅ Seed complete');
};

if (process.argv[1]?.endsWith('prisma/seed.ts')) {
  seedDatabase()
    .catch((error) => {
      console.error(error);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
