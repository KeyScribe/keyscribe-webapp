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
      if (message.duration != -1 && message.start_time != -1){
        console.log('Duration: %d, Start time: %d', message.duration, message.start_time);
      }
      sendMessageToRaspberryPi(message.id.toString(), message.note.toString(), message.state.toString(), message.duration.toString(), message.start_time.toString());
    });
  }); 

  return wss;
};

const getWebsocketConnections = (): WebSocket[] => connections;

// Function to send WebSocket messages to Raspberry Pi
const sendMessageToRaspberryPi = (id: string, note: string, state: string, start_time: string, duration: string) => {
  const connections = getWebsocketConnections();

  if (connections.length !== 0) {
    // Loop through connected clients and send the message
    connections.forEach((ws) => {
      if (ws.readyState === WebSocket.OPEN) {
        const message = JSON.stringify({ id, note, state, start_time, duration });
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