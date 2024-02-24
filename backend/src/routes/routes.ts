import { Router } from 'express';
import { loginHandler, registerHandler, logoutHandler } from '../handlers/login-handler';
import { userInfoHandler } from '../handlers/user-handler';
import { claimKeyboard, authorizeKeyboard } from '../handlers/keyboard-handler';
import { authenticate, isAuthenticated } from './middleware';

const router = Router();

router.post('/login', authenticate, loginHandler);
router.delete('/logout', isAuthenticated, logoutHandler);
router.post('/register', registerHandler);
router.post('/claim', isAuthenticated, claimKeyboard);
router.get('/authorize', authorizeKeyboard);
router.get('/getUserInfo', isAuthenticated, userInfoHandler);
router.get('/userLoggedIn', isAuthenticated);

export default router;
