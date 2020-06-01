import { Router } from 'express';
import Usuario from './app/models/Usuario';

const routes = new Router();

routes.get('/usuarios', async (resquest, response) => {
  const usuario = await  Usuario.create({
    nome:"DAILAN BUENO DOS SANTOS",
    email: "daylansantos@gmail.com",
    senha_hash:'12345'
  })
  return response.json(usuario)
});

export default routes;
