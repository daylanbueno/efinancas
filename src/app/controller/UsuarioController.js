import * as yup from 'yup';
import Usuario from '../models/Usuario';

const validaSchema = yup.object().shape({
  nome: yup.string().required('O campo nome é obrigatório '),
  email: yup
    .string()
    .email('O email é invalido')
    .required('O campo email é obrigatório'),
  senha: yup.string().required('O campo senha é obrigatório'),
});

class UsuarioController {
  async incluir(request, response) {
    validaSchema.validate(request.body).catch(err => {
      return response.status(400).json({ error: `${err.errors}` });
    });
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
