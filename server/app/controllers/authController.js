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

    signupAction: (request, response, next) => {
        console.log(request.body);
        response.status(201).json({message: 'Object created'});
        
        
        
        
        /*let {email, password1, password2} = request.body;

        console.log({
            email,
            password1,
            password2
        });

        let errors = [];

        if(!email || !password1 || !password2) {
            errors.push({message: "Please enter all fields"});
        }
        
        
        */
        
        //On regarde si l'utilisateur existe déjà en BDD
        /*const user = await User.findOne({
            where : {
                email: request.body.email
            }
        });

        // 1. Si le user existe déjà
        if (user) {
            // On le redirige vers la page de login avec un message
          console.log('User existe déjà');
            
        } */
    // 2. Si l'utilisateur n'existe pas encore, on fait les vérifications 

    /*// Vérification du mail
    if(!emailValidator.validate(request.body.email)) {
        console.log('Email invalide, redirection vers la page inscription')
        //return response.redirect('/inscription')
    }

    // Vérification du mot de passe avec confirmation
    if (request.body.password !== request.body.passwordConfirm){
        console.log('Confirmation mdp ne passe pas, redirection vers page inscription')
        // return response.redirect('/inscription')
            
        
    }

    // Cryptage du mot de passe avec bcrypt avec 5 saltRounds
    try {
        const hashedPassword = await bcrypt.hash(request.body.password, 5);
        user.push
    } catch (error) {
        
    }

 user.password = encryptedPassword;

   await user.insert(); 

   response.status('200').json({data:user}); */
    
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