module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lancamento', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      situacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_pagamento: {
        type: Sequelize.DATE,
      },
      data_vencimento: {
        type: Sequelize.DATE,
      },
      valor: {
        type: Sequelize.FLOAT,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('lancamento');
  },
};
