const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'C00ljoe.', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;