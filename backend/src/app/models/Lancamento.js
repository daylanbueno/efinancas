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
        valor: Sequelize.FLOAT,
      },
      {
        sequelize,
        tableName: 'lancamento',
      }
    );
    return this;
  }

  static associete(model) {
    this.belongsTo(model.Pessoa, {
      foreignKey: 'id_pessoa',
      as: 'pessoa',
    });
  }
}

export default Lancamento;
