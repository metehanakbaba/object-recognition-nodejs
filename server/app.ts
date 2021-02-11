import express, { Application } from 'express';
import Server from './typings/Server';
import Controller from './typings/Controller';

import RecognizeController from './controllers/RecognizeController';

const app: Application = express();
const server: Server = new Server(app, 3000);

const controllers: Array<Controller> = [
  new RecognizeController(),
]

server.loadControllers(controllers)
server.run();
