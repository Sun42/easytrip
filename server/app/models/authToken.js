const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('easytrip', 'easytrip', 'easytrip', {
    host:'localhost',
    dialect:'postgres',
    logging: console.log
});  //('postgres://easytrip:easytrip@localhost:5432/easytrip');

const AuthToken = sequelize.define('AuthToken', {
   token: {
       type : DataTypes.STRING    
    }, 
});

AuthToken.associate = function({User}) {
    AuthToken.belongsTo(User);
  };

// Generate a random 10 character token and associates it with user 

AuthToken.generate = async function (UserId) {
    if (!UserId) {
        throw new Error('AuthToken requires a user ID')
    }

    let token = '';

    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz0123456789';

    for (var i=0; i < 10; i++) {
        token += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
    }

    return AuthToken.create({ token, UserId})
}

return AuthToken;



// needs to be added later eventually :  return authToken; 

// Test model, ok if "true"
console.log(AuthToken === sequelize.models.AuthToken);

 module.exports = AuthToken;