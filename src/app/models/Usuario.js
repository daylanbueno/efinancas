import Sequelize, { Model } from 'sequelize'

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            senha_hash: Sequelize.STRING
        }, {
            sequelize,
            tableName: 'usuario'
        })
    }
}

export default Usuario