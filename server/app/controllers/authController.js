const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const AuthToken = require('../models/authToken');



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
       // password hashing with bcrypt
       const hash = bcrypt.hashSync(request.body.password, 8);

       try {
           // create a new user with pw hash from bcrypt
           let user = await User.create(
               Object.assign(request.body, {password : hash})
           );

           // data will be an object with the user and its authtoken
           let data = await user.authorize();

           // returns new user and authtoken to client
           return response.json(data);

       } catch(err) {
           return response.status(400).send(err)
       }

       // Should have later : search for email in DB to see if they are an already existing user
    
}, 

    signinPage: (request, response) => {
        response.json('This is your login page')
    }, 

    signinAction: async (request,response) => {
        const { email, password} = request.body;

        // Si le user/password ne sont pas définis, on envoie une erreur 400
        if (!email || !password) {
            return response.status(400).send('Merci renseigner votre email et votre mot de passe');
        }

        try {
            let user = await User.authenticate(email, password);

            user = await user.authorize();

            return response.json(user);
        } catch (err) {
            return response.status(400).send('Email ou mot de passe invalide');
        }
        
    }

    // Méthode déconnexion ?
};

module.exports = authController;