const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('easytrip', 'easytrip', 'easytrip', {
    host:'localhost',
    dialect:'postgres',
    logging: console.log
});  //('postgres://easytrip:easytrip@localhost:5432/easytrip');

const AuthToken = sequelize.define('AuthToken', {
   token: {
       type : DataTypes.STRING    
    }, 
});

// Test model, ok if "true"
console.log(AuthToken === sequelize.models.AuthToken);

 module.exports = AuthToken;