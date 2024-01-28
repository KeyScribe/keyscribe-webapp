import { Request, Response } from 'express';
import { sendMessageToRaspberryPi } from '../websockets/websocket-setup';

const ledOn = (req: Request, res: Response) => {
  if (req.body.note) {
    const ledNote = req.body.note;
    const piId = req.body.id;
    sendMessageToRaspberryPi(piId, ledNote);

    res.status(200);
    res.send();
  } else {
    res.status(400);
    res.send('No pin specified');
  }
};

export {
  ledOn,
};
