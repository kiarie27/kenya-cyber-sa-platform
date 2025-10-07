import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { json, NextFunction, Request, Response, urlencoded } from 'express';
import session from 'express-session';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';

import { env, isProduction } from './config/env.js';
import { registerMockSsoStrategy } from './middleware/mockSso.js';
import { authRouter } from './routes/auth.js';
import { publicRouter } from './routes/public.js';
import { workspaceRouter } from './routes/workspace.js';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(morgan(isProduction ? 'combined' : 'dev'));
app.use(json({ limit: '2mb' }));
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: env.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: isProduction,
      httpOnly: true,
      sameSite: isProduction ? 'strict' : 'lax',
    },
  }),
);

registerMockSsoStrategy();
app.use(passport.initialize());
app.use(passport.session());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRouter);
app.use('/api/public', publicRouter);
app.use('/api/workspace', workspaceRouter);

app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).json({ message: 'Internal server error' });
});

export default app;
