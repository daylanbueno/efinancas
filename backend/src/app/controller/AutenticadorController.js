import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';
import AuthConfig from '../../config/authConfig';

class AutenticadorController {
  async auth(req, res) {
    const usuario = await Usuario.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!usuario) {
      return res.status(401).json({ error: 'O email informado não existe' });
    }

    if (!(await usuario.validaSenha(req.body.senha))) {
      return res.status(401).json({ error: 'A senha  informada não é valida' });
    }

    const { id, nome } = usuario;

    const jwtToken = jwt.sign({ id, nome }, AuthConfig.segredo, {
      expiresIn: AuthConfig.validoPor,
    });

    return res.json({
      usuario: {
        id,
        nome,
      },
      token: jwtToken,
    });
  }
}

export default new AutenticadorController();
