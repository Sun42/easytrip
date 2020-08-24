const bcrypt = require('bcrypt');
const AuthToken = require('../models/authToken');
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('easytrip', 'easytrip', 'easytrip', {
    host:'localhost',
    dialect:'postgres',
    logging: console.log
});  //('postgres://easytrip:easytrip@localhost:5432/easytrip');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    photo: {
        type: DataTypes.STRING
    }, 
         
    }, {
        tableName: 'user',
        timestamps : false
    }
);

// Associations 
User.associate = function({AuthToken}) {
    User.hasMany(AuthToken);
};

User.authenticate = async function(email, password) {
    const user = await User.findOne({where: {email}});

    if(bcrypt.compareSync(password, user.password)) {
        // Cette fonction est retrouvée dans le signup and signin action du authcontroller et
        // permet de vérifier que le mdp crypté correspond au mot de passe rentré par l'utilisateur en comparant les deux 
        return user.authorize();
    }

    throw new Error('Mot de passe invalide');
}

User.prototype.authorize = async function() {
    const {AuthToken} = sequelize.models;
    const user = this

    // On crée un nouvel authtoken associé à 'this' utilisateur 
    const authToken = await AuthToken.generate(this.id);

    return {user, authToken}
};

// On pourra créer aussi une instance de déconnexion ici

// Synchronisation du modèle dans la BDD, grâce au alter true, la table user se crée si elle n'existe pas et les modifications sont appliquées aux données déjà existantes
// User.sync({alter:true});

 return User;

// Test model, ok if "true"
console.log(User === sequelize.models.User);

 module.exports = User;