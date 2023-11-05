import { Router } from 'express';
import { helloWorld, helloWorld2, keyboard, ledOn } from '../handlers/test-handler';

const router = Router();

router.get('/test', helloWorld);

router.get('/test2', helloWorld2);

router.get('/keyboard', keyboard);

router.post('/led', ledOn);

export default router;
