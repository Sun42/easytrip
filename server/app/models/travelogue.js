const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('easytrip', 'easytrip', 'easytrip', {
    host:'localhost',
    dialect:'postgres',
    logging: console.log
}); 

const Travelogue = sequelize.define('Travelogue', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    name: {
        type : DataTypes.STRING
    },

    city: {
        type: DataTypes.STRING
    },
    date_departure: {
        type: DataTypes.DATE
    },
    date_return: {
        type: DataTypes.DATE
    },
}, {
    tableName:'travelogue',
    timestamps: false
});

//Associations
Travelogue.associate = function({User}) {
    Travelogue.belongsTo(User, {
        foreignKey: 'user_id'
    })};

module.exports = Travelogue;