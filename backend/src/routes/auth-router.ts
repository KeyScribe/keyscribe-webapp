import { Router } from 'express';
import { claimKeyboard, authorizeKeyboard } from '../handlers/auth-handler';

const router = Router();

router.post('/claim', claimKeyboard);
router.post('/authorize', authorizeKeyboard);

export default router;
