import { WebSocketServer, WebSocket } from 'ws';
import { Server } from 'https';

const connections: WebSocket[] = [];

const wsSetup = (httpsServer: Server): WebSocketServer => {
  const wss = new WebSocketServer({ server: httpsServer, path: '/ws' });

  wss.on('connection', (ws) => {
    console.log('Connection requested');

    ws.on('message', (message) => {
      console.log(message.toString());
    });
  });

  return wss;
};

const getWebsocketConnections = (): WebSocket[] => connections;

// Function to send WebSocket messages to Raspberry Pi
const sendMessageToRaspberryPi = (id: string, pin: string, state: string, start_time: string, duration: string) => {
  const connections = getWebsocketConnections();

  if (connections.length !== 0) {
    // Loop through connected clients and send the message
    connections.forEach((ws) => {
      if (ws.readyState === WebSocket.OPEN) {
        const message = JSON.stringify({ pin, state, start_time, duration });
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
