import { Router } from 'express';
import { loginHandler, registerHandler, logoutHandler } from '../handlers/login-handler';
import { getKeyboardsHandler, userInfoHandler } from '../handlers/user-handler';
import { claimKeyboard, authorizeKeyboard, createSessionHandler, joinSesssionHandler, closeSessionHandler, leaveSessionHandler } from '../handlers/keyboard-handler';
import { authenticate, isAuthenticated } from './middleware';

const router = Router();

// KEYBOARD API
router.get('/authorize', authorizeKeyboard);

// LOGIN/LOGOUT
router.post('/login', authenticate, loginHandler);
router.delete('/logout', isAuthenticated, logoutHandler);

// USER API
router.post('/claim', isAuthenticated, claimKeyboard);
router.post('/register', registerHandler);
router.post('/createSession', isAuthenticated, createSessionHandler);
router.post('/joinSession', isAuthenticated, joinSesssionHandler);
router.delete('/leaveSession', isAuthenticated, leaveSessionHandler);
router.delete('/closeSession', isAuthenticated, closeSessionHandler);
router.get('/getKeyboards', isAuthenticated, getKeyboardsHandler);
router.get('/getUserInfo', isAuthenticated, userInfoHandler);
router.get('/userLoggedIn', isAuthenticated);

export default router;
