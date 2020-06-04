import Usuario from '../models/Usuario';

class UsuarioController {
  async incluir(request, response) {
    const usuario = await Usuario.findOne({
      where: {
        email: request.body.email,
      },
    });

    if (usuario) {
      return response.json({
        error: 'O usuário com o email informado já existe',
      });
    }

    const novoUsuario = await Usuario.create(request.body);
    return response.json(novoUsuario);
  }
}

export default new UsuarioController();
