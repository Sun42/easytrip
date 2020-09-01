const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Activity extends Model { }

Activity.init({
    name: DataTypes.TEXT,
    information: DataTypes.TEXT,
    localisation: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'activity',
    timestamps: false,
});


module.exports = Activity;