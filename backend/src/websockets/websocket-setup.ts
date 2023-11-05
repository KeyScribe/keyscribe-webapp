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

// Function to send WebSocket messages to Raspberry Pi
const sendMessageToRaspberryPi = (message: string) => {
  if (wss_s) {
    console.log("Entered.");
    // Loop through connected clients and send the message
    wss_s.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        console.log("Entered1.");
        client.send(message);
      }
      else{
        console.log("Not client.");
      }
    });
  }
};

export { sendMessageToRaspberryPi, wsSetup };

//export default wsSetup;
