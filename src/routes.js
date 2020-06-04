import { Router } from 'express';
import UsuarioController from './app/controller/UsuarioController';
import PessoaController from './app/controller/PessoaController';

const routes = new Router();
// Usuarios
routes.post('/usuarios', UsuarioController.incluir);

// Pessoas
routes.post('/pessoas', PessoaController.incluir);

export default routes;

// model, view
