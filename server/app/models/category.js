const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Category extends Model { }

Category.init({
    label: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'category',
    timestamps: false,
});


module.exports = Category;