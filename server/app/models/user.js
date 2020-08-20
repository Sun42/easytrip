const Sequelize = require('sequelize');

const sequelize = require('../database');

class User extends Sequelize.Model {
    get fullname(){
        return this.surname + this.name;
    };
};

sequelize.define('user',
{
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    photo: Sequelize.STRING,
}, {
    sequelize,
    tableName: "user"
});

module.exports = User;