const Sequelize = require('sequelize');
const sequelize = require('./db');
const User = require('./user');

const Conta = sequelize.define('contas', {
  IdConta: {
    type: Sequelize.INTEGER,
    allowNull: true,
    primaryKey: true
  },
  numeroConta: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nomeConta: {
    type: Sequelize.STRING
  },
  dAbertura: {
    type: Sequelize.STRING,
    allowNull: false
  },
  saldo: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

User.hasMany(Conta, {
  foreignKey: 'contaId'
});

Conta.belongsTo(User, {
  foreignKey: 'contaId'
});

module.exports = Conta;


Conta.sync();
module.exports = Conta; 