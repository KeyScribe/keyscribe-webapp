import { Router } from 'express';
import { loginHandler } from '../handlers/login-handler';
import { ledOn } from '../handlers/led-handler';
import { claimKeyboard, authorizeKeyboard } from '../handlers/auth-handler';
import { registerHandler } from '../handlers/create-account-handler';

const router = Router();

router.post('/login', loginHandler);
router.post('/register', registerHandler);
router.post('/led', ledOn);
router.post('/claim', claimKeyboard);
router.get('/authorize', authorizeKeyboard);

export default router;
