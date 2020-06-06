import Lancamento from '../models/Lancamento';
import Pessoa from '../models/Pessoa';

class LancamentoController {
  async incluir(req, res) {
    const lancamento = await Lancamento.create(req.body);
    return res.json(lancamento);
  }

  async listar(req, res) {
    const lancamentos = await Lancamento.findAll({
      attributes: [
        'id',
        'descricao',
        'categoria',
        'situacao',
        'data_pagamento',
        'data_vencimento',
        'valor',
        'id_pessoa',
      ],
      include: [
        {
          model: Pessoa,
          as: 'pessoa',
          attributes: ['id', 'nome', 'cpfcnpj', 'telefone'],
        },
      ],
    });
    return res.json(lancamentos);
  }
}

export default new LancamentoController();
