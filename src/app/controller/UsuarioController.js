import Usuario from '../models/Usuario';

class UsuarioController {
  async incluir(request, response) {
    const usuario = await Usuario.findOne({
      where: {
        email: request.body.email,
      },
    });

    if (usuario) {
      return response.status(401).json({
        error: 'O usuário com o email informado já existe',
      });
    }

    const { nome, email } = await Usuario.create(request.body);
    return response.json({ nome, email });
  }

  async listar(req, res) {
    const usuarios = await Usuario.findAll({
      attributes: ['id', 'nome', 'email'],
    });
    return res.json(usuarios);
  }
}

export default new UsuarioController();
