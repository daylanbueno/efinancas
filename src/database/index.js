import Sequelize from 'sequelize';

import configDabase from '../config/database';
import Usuario from '../app/models/Usuario';
import Pessoa from '../app/models/Pessoa';

const models = [Usuario, Pessoa];

class Datebase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDabase);

    models.map(model => model.init(this.connection));
  }
}
export default new Datebase();
