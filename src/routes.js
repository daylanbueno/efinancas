import { Router } from 'express';
import UsuarioController from './app/controller/UsuarioController';

const routes = new Router();

routes.post('/usuarios', UsuarioController.incluir);

export default routes;

// model, view
