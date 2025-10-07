import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.post('/mock-sso', (req, res, next) => {
  passport.authenticate(
    'mock-sso',
    (err: Error | null, user: Express.User | false, info?: { message?: string }) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ message: info?.message ?? 'Authentication failed' });
      }
      req.logIn(user, (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        }
        return res.json({ message: 'Authenticated', user });
      });
    },
  )(req, res, next);
});

router.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy(() => {
      res.json({ message: 'Logged out' });
    });
  });
});

router.get('/me', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  return res.json({ user: req.user });
});

export const authRouter = router;
