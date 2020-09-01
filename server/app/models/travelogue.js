const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Travelogue extends Model { }

Travelogue.init({
    name: DataTypes.TEXT,
    city: DataTypes.TEXT,
    date_departure: DataTypes.DATE,
    date_return: DataTypes.DATE,
}, {
    sequelize,
    tableName: 'travelogue',
    timestamps: false,
});


module.exports = Travelogue;
