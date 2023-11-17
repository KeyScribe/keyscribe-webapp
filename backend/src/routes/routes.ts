import { Router } from 'express';
import { loginHandler } from '../handlers/login-handler';
import { ledOn } from '../handlers/led-handler';

const router = Router();

router.post('/login', loginHandler);
router.post('/led', ledOn);

export default router;
