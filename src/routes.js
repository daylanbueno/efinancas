import { Router } from 'express';
import UsuarioController from './app/controller/UsuarioController';
import PessoaController from './app/controller/PessoaController';
import LancamentoController from './app/controller/LancamentoController';

const routes = new Router();
// Usuarios
routes.post('/usuarios', UsuarioController.incluir);

// Pessoas
routes.post('/pessoas', PessoaController.incluir);

// Lancamento
routes.post('/lancamentos', LancamentoController.incluir);

export default routes;

// model, view
