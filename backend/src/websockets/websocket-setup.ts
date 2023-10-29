import { WebSocketServer } from 'ws';
import { Server } from 'https';

const wsSetup = (httpsServer: Server) => {
    const wss = new WebSocketServer({server: httpsServer, path: '/ws'});

    wss.on('connection', (ws, req) => {
        console.log('Connection requested');

        ws.on('message', (message) => {
            console.log(message.toString());
        });
    });

    return wss;
}

export default wsSetup;