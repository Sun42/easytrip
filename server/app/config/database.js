const { Sequelize } = require('sequelize');

/*const sequelize = new Sequelize(process.env.PG_URL, {
    dialect: 'postgres',
}); 

module.exports = sequelize;

*/

module.exports = new Sequelize('easytrip', 'easytrip', 'easytrip', {
    host:'localhost',
    dialect: 'postgres',
});
