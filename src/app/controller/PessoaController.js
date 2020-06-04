import Pessoa from '../models/Pessoa';

class PessoaController {
  async incluir(request, response) {
    const pessoa = await Pessoa.create(request.body);
    return response.json(pessoa);
  }
}

export default new PessoaController();
