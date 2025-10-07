declare module 'passport-custom' {
  import type { Request } from 'express';
  import { Strategy as PassportStrategy } from 'passport-strategy';

  export type VerifyCallback = (
    error: unknown,
    user?: unknown,
    info?: Record<string, unknown>,
  ) => void;

  export type VerifyFunction = (req: Request, done: VerifyCallback) => void | Promise<void>;

  export class Strategy extends PassportStrategy {
    name: string;
    constructor(options: { passReqToCallback: true }, verify: VerifyFunction);
    constructor(verify: VerifyFunction);
  }
}
