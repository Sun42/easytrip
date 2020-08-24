const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('easytrip', 'easytrip', 'easytrip', {
    host:'localhost',
    dialect:'postgres',
    logging: console.log
}); 

const Activity = sequelize.define('Activity', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    name: {
        type: DataTypes.STRING
    },

    information: {
        type: DataTypes.TEXT
    },

    localisation: {
        type: DataTypes.STRING
    },

   
}, {
    tableName:'activity',
    timestamps: false
});

//Associations
Activity.associate = function({Travelogue}) {
    Activity.belongsTo(Travelogue, {
        foreignKey: 'travelogue_id'
    });
};

Activity.associate = function({Category}) {
    Activity.belongsTo(Category, {
        foreignKey: 'category_id'
    })
};

module.exports = Activity;