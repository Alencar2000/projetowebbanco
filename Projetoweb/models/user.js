const Sequelize = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define('users', {
  cpf: {
    type: Sequelize.INTEGER,
    allowNull: true,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
User.sync();

module.exports = User;
