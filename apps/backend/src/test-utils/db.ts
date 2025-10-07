import { seedDatabase } from '../../prisma/seed';
import { prisma } from '../lib/prisma';

export const resetDatabase = async () => {
  await seedDatabase();
};

export const disconnectDatabase = async () => {
  await prisma.$disconnect();
};
