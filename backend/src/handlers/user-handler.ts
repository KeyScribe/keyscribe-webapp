import { Request, Response } from 'express';
import { getName, getKeyboards } from '../db/user-db';

const userInfoHandler = async (req: Request, res: Response) => {
  const name = await getName(req.user!.id);
  return res.status(200).send({ name });
};

const getKeyboardsHandler = async (req: Request, res: Response) => {
  const keyboards = await getKeyboards(req.user!.id);
  return res.status(200).send(keyboards);
};

export {
  userInfoHandler,
  getKeyboardsHandler,
};
