const { Sequelize } = require('sequelize');

module.exports = new Sequelize('easytrip', 'easytrip', 'easytrip', {
    host:'localhost',
    dialect: 'postgres',
});
