import Sequelize, { Model } from 'sequelize';

class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        tipo: Sequelize.STRING,
        cpfcnpj: Sequelize.STRING,
        telefone: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'pessoa',
      }
    );
  }

  static associete(model) {
    this.hasMany(model.Lancamento, { foreignKey: 'id_pessoa' });
  }
}

export default Pessoa;
