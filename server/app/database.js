/**
 * On remplace le connecteur à la main pr une instance de sequelize
/** */

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL,{
    define: {
      timestamps: false
    },
});

module.exports = sequelize;