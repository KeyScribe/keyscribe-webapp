import { WebSocket } from 'ws';
import { Request, Response } from 'express';
import { getWebsocketConnections, sendMessageToRaspberryPi } from '../websockets/websocket-setup';



const ledOn = (req: Request, res: Response) => {
  if (req.body.color) {
    const ledColor = req.body.color;
    sendMessageToRaspberryPi(ledColor);
    res.status(200);
    res.send();
  } else {
    res.status(400);
    res.send('No color specified');
  }
};

// eslint-disable-next-line import/prefer-default-export
export { ledOn };
