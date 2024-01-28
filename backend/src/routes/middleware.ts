import passport from 'passport';
import { Request, Response, NextFunction } from 'express';

const authenticate = passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/welcome'});

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        res.redirect('/login');
    }
}

export {
    authenticate,
    isAuthenticated
}