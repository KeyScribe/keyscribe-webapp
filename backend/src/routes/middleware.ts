import passport from 'passport';
import { Request, Response, NextFunction } from 'express';

const authenticate = passport.authenticate('local');

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }

  return res.status(401).send();
};

export {
  authenticate,
  isAuthenticated,
};
