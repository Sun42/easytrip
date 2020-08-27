const { Sequelize } = require('sequelize');

/*async () => {
    await sequelize.sync();
    
}
console.log("All models syncronized successflly"); */

module.exports = new Sequelize('easytrip', 'easytrip', 'easytrip', {
    host:'localhost',
    dialect:'postgres'
});