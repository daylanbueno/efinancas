import Sequelize, { Model } from 'sequelize';

class Lancamento extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        categoria: Sequelize.STRING,
        situacao: Sequelize.STRING,
        data_pagamento: Sequelize.DATE,
        data_vencimento: Sequelize.DATE,
        id_pesssoa: Sequelize.INTEGER,
        valor: Sequelize.FLOAT,
      },
      {
        sequelize,
        tableName: 'lancamento',
      }
    );
  }
}

export default Lancamento;
