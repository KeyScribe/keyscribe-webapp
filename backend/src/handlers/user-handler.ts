import { Request, Response } from 'express';
import { getName } from '../db/user-db';

const userInfoHandler = async (req: Request, res: Response) => {
  const name = await getName(req.user!.id);
  res.status(200).send({
    name,
  });
};

export {
  userInfoHandler,
};
