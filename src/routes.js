import { Router } from 'express';
import UsuarioController from './app/controller/UsuarioController';
import PessoaController from './app/controller/PessoaController';
import LancamentoController from './app/controller/LancamentoController';
import AutenticadorController from './app/controller/AutenticadorController';
import authInterceptor from './app/middlewares/authInterceptor';

const routes = new Router();

// Sessiong

routes.post('/auth', AutenticadorController.auth);
routes.use(authInterceptor); // tudo que estive daqui para baixo requer token valido

// Usuarios
routes.post('/usuarios', UsuarioController.incluir);

// Pessoas
routes.post('/pessoas', PessoaController.incluir);

// Lancamento
routes.post('/lancamentos', LancamentoController.incluir);

export default routes;

// model, view
