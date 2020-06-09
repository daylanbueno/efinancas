import * as yup from 'yup';
import Lancamento from '../models/Lancamento';
import Pessoa from '../models/Pessoa';

const validaSchema = yup.object().shape({
  descricao: yup.string().required('O campo descrição é obrigatório'),
  categoria: yup.string().required('O campo categoria é obrigatório'),
  situacao: yup.string().required('O campo situaçao é obrigatório'),
  valor: yup.number().required('O campo valor é obrigatório'),
});

class LancamentoController {
  async incluir(req, res) {
    validaSchema.validate(req.body).catch(err => {
      return res.status(400).json({ error: err.errors });
    });
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
