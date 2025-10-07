import type { NextFunction, Request, Response } from 'express';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  return next();
};

export const requireRoles = (...roles: string[]) => (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  const hasRole = roles.some((role) => req.user!.roles.includes(role));
  if (!hasRole) {
    return res.status(403).json({ message: 'Insufficient role' });
  }
  return next();
};
