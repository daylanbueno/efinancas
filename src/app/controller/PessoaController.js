import Pessoa from '../models/Pessoa';

class PessoaController {
  async incluir(request, response) {
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
