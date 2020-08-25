const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const User = require('../models/user');



const authController = {
    
    signupAction: async (request, response) => {
        const {name, surname, email, password} = request.body

    // Si l'un de ces champs manquent, il faut les remplir
    if(!name || !surname || !email || !password ) {
        response.status(400).send("Merci de remplir vos informations")
    }

    if (!emailValidator.validate(email)) {
        response.status(400).send('Cet email est invalide')
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
        delete request.session.thisUser.password
        response.json({isLogged: true})
            } else {
        response.json({isLogged: false})
            }
        } catch (err) {
        response.status(400).send(err);
    }

},

    isLoggedVerif: async (request, response) => {
        console.log(request.session);
        const thisUser = await User.findOne({
            where: {
                email
        }
    });
        if (request.session.thisUser) {
            response.json({isLogged: true})
        } else {
            response.json({isLogged: false})
        }
    }

    // Méthode déconnexion ? 
}

module.exports = authController;