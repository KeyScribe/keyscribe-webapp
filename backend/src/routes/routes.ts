import { Router } from 'express';
import { loginHandler, registerHandler, userInfoHandler } from '../handlers/login-handler';
import { ledOn } from '../handlers/led-handler';
import { claimKeyboard, authorizeKeyboard } from '../handlers/auth-handler';
import { authenticate, isAuthenticated } from './middleware';

const router = Router();

router.post('/login', authenticate, loginHandler);
router.post('/register', registerHandler);
router.post('/led', ledOn);
router.post('/claim', claimKeyboard);
router.get('/authorize', authorizeKeyboard);
router.get('/getUserInfo', isAuthenticated, userInfoHandler);

export default router;
