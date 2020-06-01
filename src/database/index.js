import Sequelize from 'sequelize'

import configDabase from '../config/database'
import Usuario from '../app/models/Usuario'


const  models = [Usuario]

class Datebase  {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(configDabase)
        
        models.map((model) => model.init(this.connection));
    }
}
export default  new Datebase();