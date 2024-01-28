import passport from 'passport';
import { Request, Response, NextFunction } from 'express';

const authenticate = passport.authenticate('local');

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.status(401).send();
};

export {
  authenticate,
  isAuthenticated,
};
