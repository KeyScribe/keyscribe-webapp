import { Router } from 'express';
import { ledOn, keyboard } from '../handlers/led-handler';

const router = Router();

router.get('/keyboard', keyboard);

router.post('/led', ledOn);

export default router;
