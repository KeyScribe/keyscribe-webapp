import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import {
  validateHardwareId, getPID, getOwner, setOwner, createKeyboard,
} from '../db/keyboard-db';
import { sendMessageToRaspberryPi } from '../websockets/websocket-setup';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
const JWT_SECRET: string = process.env.JWT_SECRET!;

const authorizeKeyboard = async (req: Request, res: Response) => {
  const hardwareId = parseInt(req.query.hardwareId as string, 10);

  // Hardware ID is confirmed to be valid
  if (!await validateHardwareId(hardwareId)) {
    res.status(401);
    res.send();
  }

  // If the keyboard is already registered, get its ID,
  // otherwise create a new keyboard in DB
  let pid = await getPID(hardwareId);
  let owner: string;

  if (pid !== -1) {
    owner = await getOwner(pid);
  } else {
    owner = '';
    pid = await createKeyboard(hardwareId);
  }

  const jwt = sign(
    {
      sub: owner,
      PID: pid,
    },
    JWT_SECRET,
    { expiresIn: 900 }, // JWT expires in 15 minutes
  );

  res.status(200);
  res.send({ token: jwt });
};

/**
 * Accepts the hardware ID of a Pi and claims it for the user,
 * sending the Pi a new JWT indicating its new owner.
 */
const claimKeyboard = async (req: Request, res: Response) => {
  // User initiates request to claim an unclaimed keyboard
  const hardwareId = parseInt(req.body.boardId as string, 10);
  const userId = req.user!.id;

  // Owner is set in DB
  const pid = await setOwner(userId, hardwareId);
  if (pid !== -1) {
    const jwt = sign(
      {
        sub: userId,
        PID: pid,
      },
      JWT_SECRET,
      { expiresIn: 900 }, // JWT expires in 15 minutes
    );

    sendMessageToRaspberryPi(pid, "jwt", { jwt: jwt });

    res.status(200);
    res.send();
  } else {
    res.status(400);
    res.send('Keyboard already owned by another or has not come online yet');
  }
};

export {
  authorizeKeyboard,
  claimKeyboard,
};
