import { Router, Request, Response } from 'express';

const router = Router();

router.get('/test', (req: Request, res: Response) => {
  res.send('This is a test!');
});

export default router;

