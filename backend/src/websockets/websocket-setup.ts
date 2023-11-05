//Listens for WebSocket connections, communicates with the Raspberry Pi, and can be responsible for handling LED control.
import { WebSocketServer, WebSocket } from 'ws';
import { Server } from 'https';

let wss_s: WebSocketServer;

const wsSetup = (httpsServer: Server) => {
  const wss = new WebSocketServer({ server: httpsServer, path: '/ws' });
  
  wss.on('connection', (ws) => {
    console.log('Connection requested');

    ws.on('message', (message) => {
      console.log(message.toString());

    });

    // ws.on('open', function open(){

    //   //get this message somewhere

    //   // Handle LED control commands
    //   if (typeof message === 'string' && (message === 'red' || message === 'green' || message === 'yellow' || message === 'blue')) {
    //     // Forward the command to the Raspberry Pi's WebSocket
    //     if (ws.readyState === WebSocket.OPEN) {      
    //       ws.send(message);
    //     }
    //   }
    // });

  });

  wss_s = wss;
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
