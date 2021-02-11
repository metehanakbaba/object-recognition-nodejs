import express, { Application } from 'express';
import Server from './typings/Server';

const app: Application = express();
const server: Server = new Server(app, 3000);
const httpServer = server.run();
