import type { SessionUser } from '../middleware/mockSso.js';

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends SessionUser {}

    interface Request {
      login(user: User, done: (err?: unknown) => void): void;
      logIn(user: User, done: (err?: unknown) => void): void;
      logout(done: (err?: unknown) => void): void;
      logOut(done: (err?: unknown) => void): void;
    }
  }
}

export {};
