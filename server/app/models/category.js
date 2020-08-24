const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('easytrip', 'easytrip', 'easytrip', {
    host:'localhost',
    dialect:'postgres',
    logging: console.log
}); 

const Category = sequelize.define('Category', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    label: {
        type: DataTypes.STRING
    },
   
}, {
    tableName:'category',
    timestamps: false
});

//Associations
Category.associate = function({Activity}) {
    Category.hasMany(Activity, {
        foreignKey: 'category_id'
    });
}

module.exports = Category;