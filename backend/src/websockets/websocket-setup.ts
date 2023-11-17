import { WebSocketServer, WebSocket } from 'ws';
import { Server } from 'https';

const connections: WebSocket[] = [];

const wsSetup = (httpsServer: Server): WebSocketServer => {
  const wss = new WebSocketServer({ server: httpsServer, path: '/ws' });

  wss.on('connection', (ws) => {
    console.log('Connection requested');

    connections.push(ws);

    ws.on('message', (raw_message) => {
      const message = JSON.parse(raw_message.toString());
      console.log(message.duration, message.start_time);
      sendMessageToRaspberryPi(message.pin.toString(), message.state.toString());
    });
  });

  return wss;
};

const getWebsocketConnections = (): WebSocket[] => connections;

// Function to send WebSocket messages to Raspberry Pi
const sendMessageToRaspberryPi = (pin: string, state: string) => {
  const connections = getWebsocketConnections();

  if (connections.length !== 0) {
    // Loop through connected clients and send the message
    connections.forEach((ws) => {
      if (ws.readyState === WebSocket.OPEN) {
        const message = JSON.stringify({ pin, state });
        ws.send(message);
      }
    });
  }
};
export {
  getWebsocketConnections,
  wsSetup,
  sendMessageToRaspberryPi,
};
