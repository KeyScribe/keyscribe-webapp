import { WebSocketServer, WebSocket } from 'ws';
import { Server } from 'https';

const connections: WebSocket[] = [];

const wsSetup = (httpsServer: Server): WebSocketServer => {
  const wss = new WebSocketServer({ server: httpsServer, path: '/ws' });

  wss.on('connection', (ws) => {
    console.log('Connection requested');

    connections.push(ws);

    ws.on('message', (message) => {
      console.log(message.toString());
    });
  });

  return wss;
};

const getWebsocketConnections = (): WebSocket[] => connections;

export {
  getWebsocketConnections,
  wsSetup,
};
