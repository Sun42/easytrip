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

    signinAction:(request,response, next) => {
        const post = response.locals.post = request.body;

        const errors = [];
        // On vérifie que le username et mdp correspondent bien en BDD
        if(!post.email){
            errors.push("This email doesn't exist in our database");
        };
        // Si oui ok, sinon erreur
        
    }
};

module.exports = authController;