import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import https from 'https';
import fs from 'fs';

// ROUTES
import testRouter from './routes/test';

// For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

const server = https.createServer({
  key: fs.readFileSync('keys/key.pem'),
  cert: fs.readFileSync('keys/cert.pem'),
}, app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hi! I\'m Working!');
});

app.use(testRouter);
