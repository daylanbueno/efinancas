import Lancamento from '../models/Lancamento';

class LancamentoController {
  async incluir(req, res) {
    const lancamento = await Lancamento.create(req.body);
    return res.json(lancamento);
  }
}

export default new LancamentoController();
