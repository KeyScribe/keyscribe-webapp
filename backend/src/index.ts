import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import https from 'https';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import { wsSetup } from './websockets/websocket-setup';

// ROUTES
import testRouter from './routes/test-router';
import keyboardRouter from './routes/led-router';

// ENV FILE
dotenv.config();

// DEFINE APP AND SETUP BASIC REQUIREMENTS
const app: Application = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.use(express.static(path.join(__dirname, '../../frontend/public')));

// DEFINE ROUTES HERE
app.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

app.use('/test', testRouter);
app.use('/keyboard', keyboardRouter);

// START SERVER
const server = https.createServer({
  key: fs.readFileSync('keys/key.pem'),
  cert: fs.readFileSync('keys/cert.pem'),
}, app);

wsSetup(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
