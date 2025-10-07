import { resetDatabase, disconnectDatabase } from '../../test-utils/db';
import { getHomeSummary, listPublicAdvisories, listTrends } from '../publicService';

beforeAll(async () => {
  await resetDatabase();
});

afterAll(async () => {
  await disconnectDatabase();
});

describe('publicService', () => {
  it('returns home summary with advisories and trends', async () => {
    const summary = await getHomeSummary();
    expect(summary.kevCount).toBeGreaterThan(0);
    expect(summary.latestAdvisories.length).toBeGreaterThan(0);
    expect(summary.trendHighlight).not.toBeNull();
  });

  it('lists public advisories with pagination', async () => {
    const advisories = await listPublicAdvisories({ page: 1, pageSize: 5 });
    expect(advisories.total).toBeGreaterThan(0);
    expect(advisories.items.length).toBeGreaterThan(0);
    expect(advisories.items[0]).toHaveProperty('slug');
  });

  it('returns recent trend snapshots', async () => {
    const trends = await listTrends(5);
    expect(trends.length).toBeLessThanOrEqual(5);
    expect(trends[0]).toHaveProperty('data');
  });
});
