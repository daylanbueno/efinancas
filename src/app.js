import express from 'express';
import routes from './routes'; // importando rotas para configuar no servidor express

class App {
  constructor() {                                                          
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // minha aplicação está pronta para receber requisições com JON
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
