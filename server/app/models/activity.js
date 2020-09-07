const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Activity extends Model { }

Activity.init({
    name: DataTypes.TEXT,
    information: DataTypes.TEXT,
    location: DataTypes.TEXT,
    is_favorite: DataTypes.BOOLEAN,
    is_done: DataTypes.BOOLEAN,
}, {
    sequelize,
    tableName: 'activity',
    timestamps: false,
});


module.exports = Activity;