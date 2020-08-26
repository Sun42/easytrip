// Risk of conflict because user model exists in branch login front & back (duplication)
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model { };

User.init({
  name: DataTypes.TEXT,
  surname: DataTypes.TEXT,  
  email: DataTypes.TEXT,
  password: DataTypes.STRING
}, {
  sequelize,
  tableName: "user",
  timestamps: false
});

module.exports = User;
