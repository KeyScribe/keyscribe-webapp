import { Router } from 'express';
import { loginHandler, registerHandler, logoutHandler } from '../handlers/login-handler';
import { claimKeyboard, authorizeKeyboard, createSessionHandler, joinSesssionHandler, closeSessionHandler, leaveSessionHandler } from '../handlers/keyboard-handler';
import { userInfoHandler, getKeyboardsHandler, addFriend } from '../handlers/user-handler';
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
router.post('/session/create', isAuthenticated, createSessionHandler);
router.post('/session/join', isAuthenticated, joinSesssionHandler);
router.delete('/session/leave', isAuthenticated, leaveSessionHandler);
router.delete('/session/close', isAuthenticated, closeSessionHandler);
router.get('/getKeyboards', isAuthenticated, getKeyboardsHandler);
router.post('/friend', addFriend); // DOES NOT WORK YET
router.get('/authorize', authorizeKeyboard);
router.get('/getUserInfo', isAuthenticated, userInfoHandler);
router.get('/userLoggedIn', isAuthenticated);

export default router;
