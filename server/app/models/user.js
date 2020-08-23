const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('easytrip', 'easytrip', 'easytrip', {
    host:'localhost',
    dialect:'postgres',
    logging: console.log
});  //('postgres://easytrip:easytrip@localhost:5432/easytrip');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    photo: {
        type: DataTypes.STRING
    }, 
         
    }, {
        tableName: 'user'
    }
);

// Test model, ok if "true"
console.log(User === sequelize.models.User);

 module.exports = User;