import express, { Express } from 'express';
import booksRoutes from './routes/booksRoutes';
import { Mongo } from './dataStore/mongo';
import parser from 'body-parser';

export class App {
  public app: Express;
  public mongo: Mongo;

  constructor() {
    this.app = express();
    this.mongo = new Mongo();
    this.initApp();
    this.initRoutes();
  }

  private initApp() {
    this.app.set("port", process.env.PORT || 9000);
    this.app.use(parser.json());
  }

  private initRoutes() {
    this.app.get("/", (req: any, res: any) => res.send("hello world"));
    this.app.use(booksRoutes);
  }
}

export default new App().app;
