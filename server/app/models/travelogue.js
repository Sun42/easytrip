const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Travelogue extends Model { }

Travelogue.init({
    name: DataTypes.TEXT,
    city: DataTypes.TEXT,
    date_departure: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    date_return: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'travelogue',
    timestamps: false,
});


module.exports = Travelogue;
