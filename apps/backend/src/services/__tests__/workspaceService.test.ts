import { prisma } from '../../lib/prisma';
import { resetDatabase, disconnectDatabase } from '../../test-utils/db';
import { listIncidents, publishAdvisory } from '../workspaceService';

const toSessionUser = (user: { id: string; email: string; displayName: string; organisation: string; roles: string }) => ({
  id: user.id,
  email: user.email,
  displayName: user.displayName,
  organisation: user.organisation,
  roles: user.roles.split(',').map((role) => role.trim()).filter(Boolean),
});

beforeAll(async () => {
  await resetDatabase();
});

afterAll(async () => {
  await disconnectDatabase();
});

describe('workspaceService', () => {
  it('allows analysts to list incidents', async () => {
    const analystDb = await prisma.user.findUniqueOrThrow({ where: { email: 'analyst@icta.go.ke' } });
    const analyst = toSessionUser(analystDb);

    const incidents = await listIncidents(analyst, { page: 1, pageSize: 10 });
    expect(incidents.total).toBeGreaterThan(0);
    expect(incidents.items[0]).toHaveProperty('title');
  });

  it('allows publisher to publish advisory', async () => {
    const publisherDb = await prisma.user.findUniqueOrThrow({ where: { email: 'editor@icta.go.ke' } });
    const publisher = toSessionUser(publisherDb);

    const incidentWithAdvisory = await prisma.incident.findFirst({ where: { advisoryId: { not: null } } });
    expect(incidentWithAdvisory?.advisoryId).toBeTruthy();

    const advisory = await publishAdvisory(publisher, incidentWithAdvisory!.advisoryId!, 'members');
    expect(advisory.status).toBe('INTERNAL');
    expect(advisory.tlp).toBe('GREEN');
  });
});
