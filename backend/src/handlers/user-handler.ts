import { Request, Response } from 'express';
import { getInfo } from '../db/user-db';

const userInfoHandler = async (req: Request, res: Response) => {
  const info = await getInfo(req.user!.id);

  res.status(200).send(
    info
  );
};

export {
  // eslint-disable-next-line import/prefer-default-export
  userInfoHandler,
};
