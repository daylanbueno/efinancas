import { Router } from "express";

const routes = new Router();

routes.get('/', (resquest, response) => response.json({ msg: 'Alguma coisa legal!!!! ' }));

export default routes;
