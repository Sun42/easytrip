const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const User = require('../models/user');



const authController = {
    
    signupPage : (request, response) => {
        // On vérifie si l'utilisateur existe déjà en session 
        if (request.session.user) {
            // Si le user est connecté, on le redirige sur la homepage
            return response.redirect('/');
        }
        response.json('signup')
    },

    signupAction: async (request, response) => {
    const {name, surname, email, password} = request.body

    // Si l'un de ces champs manquent, il faut les remplir
    if(!name || !surname || !email || !password ) {
        response.status(400).send("Merci de remplir vos informations")
    }
       
    // Crée un nouveau utilisateur avec un mot de passe crypté avec 10 saltrounds
    let newUser = User.build({
        name,
        surname,
        email, 
        password: await bcrypt.hashSync(password, 10)

    });

    // Sauvegarde de le nouvel utilisateur
    await newUser.save();

    return response.json(newUser)

      
}, 

    signinPage: (request, response) => {
        response.json('This is your login page')
    }, 

    signinAction: async (request,response) => {
        try { 
        const { email, password} = request.body;

        const thisUser = await User.findOne({
            where: {
                email
        }
    });
        // On vérifie que l'utilisateur ait rempli le bon mail et le bon mot de passe associé
        if(thisUser && await bcrypt.compareSync(password, thisUser.password)) {
        // Permet de ne récupérer que les 'dataValues' et pas les autres données
        request.session.thisUser = thisUser.get({plain:true});

        response.json('Email et mot de passe correspondent')
            } else {
        response.json('Email et mot de passe ne correspondent pas')
            }
        } catch (err) {
        response.status(400).send(err);
    }

}

    // Méthode déconnexion ? 
}

module.exports = authController;