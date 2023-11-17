import { WebSocket } from 'ws';
import { Request, Response } from 'express';
import { getWebsocketConnections, sendMessageToRaspberryPi } from '../websockets/websocket-setup';



const ledOn = (req: Request, res: Response) => {
  if (req.body.pin) {
    const ledPin = req.body.pin;
    const ledState = req.body.state;
    sendMessageToRaspberryPi(ledPin, ledState);
    res.status(200);
    res.send();
  } else {
    res.status(400);
    res.send('No pin specified');
  }
};

// eslint-disable-next-line import/prefer-default-export
export { ledOn };
