import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import AuthConfig from '../../config/authConfig';

export default async function(req, res, next) {
  const headerToken = req.headers.authorization || '';

  const [, token] = headerToken.split(' ');

  if (!token) {
    return res.status(401).json({ error: 'O Token é obrigatorio' });
  }

  try {
    await promisify(jwt.verify)(token, AuthConfig.segredo);
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'O token é invalido' });
  }
}
