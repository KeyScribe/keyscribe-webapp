import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import { wsSetup } from './websockets/websocket-setup';

// ROUTES
import routes from './routes/routes';

// ENV FILE
dotenv.config();

// DEFINE APP AND SETUP BASIC REQUIREMENTS
const app: Application = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.use(cors());

// DEFINE ROUTES HERE

app.use('/', routes);

app.use((req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

// START SERVER
const server = https.createServer({
  key: fs.readFileSync('keys/key.pem'),
  cert: fs.readFileSync('keys/cert.pem'),
}, app);

wsSetup(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
