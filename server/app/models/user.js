const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('easytrip', 'easytrip', 'easytrip', {
    host:'localhost',
    dialect:'postgres',
    logging: console.log
});  //('postgres://easytrip:easytrip@localhost:5432/easytrip');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
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

// Associations 
User.associate = function(models) {
    User.hasMany(models.AuthToken);
};

 return User

// Test model, ok if "true"
console.log(User === sequelize.models.User);

 module.exports = User;