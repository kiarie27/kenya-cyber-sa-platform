import type { Request } from 'express';
import passport from 'passport';
import { Strategy as CustomStrategy } from 'passport-custom';

import { prisma } from '../lib/prisma.js';

export type SessionUser = {
  id: string;
  email: string;
  displayName: string;
  organisation: string;
  roles: string[];
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface User extends SessionUser {}
  }
}

passport.serializeUser<string>((user, done) => {
  done(null, user.id);
});

passport.deserializeUser<string>(async (id, done) => {
  try {
    const dbUser = await prisma.user.findUnique({ where: { id } });
    if (!dbUser) {
      return done(null, false);
    }
    return done(null, {
      id: dbUser.id,
      email: dbUser.email,
      displayName: dbUser.displayName,
      organisation: dbUser.organisation,
      roles: dbUser.roles.split(',').map((role) => role.trim()).filter(Boolean),
    } satisfies SessionUser);
  } catch (error) {
    return done(error as Error);
  }
});

export const registerMockSsoStrategy = (): void => {
  passport.use(
    'mock-sso',
    new CustomStrategy({ passReqToCallback: true }, async (req: Request, done) => {
      try {
        const { email } = req.body as { email?: string };
        if (!email) {
          return done(null, false, { message: 'Email is required' });
        }
        const dbUser = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (!dbUser) {
          return done(null, false, { message: 'User not found in mock directory' });
        }
        return done(null, {
          id: dbUser.id,
          email: dbUser.email,
          displayName: dbUser.displayName,
          organisation: dbUser.organisation,
          roles: dbUser.roles.split(',').map((role) => role.trim()).filter(Boolean),
        } satisfies SessionUser);
      } catch (error) {
        return done(error as Error);
      }
    }),
  );
};
