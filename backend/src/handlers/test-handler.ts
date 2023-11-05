import { Request, Response } from 'express';
import { sendMessageToRaspberryPi } from '../websockets/websocket-setup';

const helloWorld = (req: Request, res: Response) => {
  res.send('This is a test!');
};

const helloWorld2 = (req: Request, res: Response) => {
  res.send('This is another test!');
};

const keyboard = (req: Request, res: Response) => {
  res.sendFile('keyboard.html', { root: __dirname });
};

const ledOn = (req: Request, res: Response) => {
  const ledColor = req.body.color;
  sendMessageToRaspberryPi(ledColor);
  console.log("Turning on LED");
}

export {
  helloWorld,
  helloWorld2,
  keyboard,
  ledOn,
};
