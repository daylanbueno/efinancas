import * as yup from 'yup';
import Pessoa from '../models/Pessoa';

const validaSchema = yup.object().shape({
  nome: yup.string().required('O campo nome é obrigatório'),
  tipo: yup.string().required('O campo tipo é obrigatório'),
});

class PessoaController {
  async incluir(request, response) {
    validaSchema.validate(request.body).catch(err => {
      return response.status(400).json({ error: err.errors });
    });
    const pessoa = await Pessoa.create(request.body);
    return response.json(pessoa);
  }

  async listar(req, res) {
    const pessoas = await Pessoa.findAll({
      attributes: ['id', 'nome', 'tipo', 'telefone', 'cpfcnpj'],
    });
    return res.json(pessoas);
  }
}

export default new PessoaController();
