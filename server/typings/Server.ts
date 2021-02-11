import { Application, RequestHandler, Request, Response } from 'express';
import http from 'http';
import path from 'path';

export default class Server {
  private app: Application;
  private readonly port: number;

  constructor(app: Application, port: number) {
    this.app = app;
    this.port = port;
  };

  public run(): http.Server {
    return this.app.listen(this.port, () => {
      console.log(`The server is running on port ${this.port}`)
    });
  };
}
