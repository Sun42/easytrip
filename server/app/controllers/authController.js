const bcrypt = require('bcrypt');
const User = require('../models/user');


const authController = {

    signupAction: async (request, response) => {
        try {
            const {
                name,
                surname,
                email,
                password,
            } = request.body;

            // Si l'un de ces champs manquent, il faut les remplir
            /* if (!name || !surname || !email || !password) {
            response.status(400).send("Merci de remplir vos informations")
        } */

            const Users = [];


            // Crée un nouveau utilisateur avec un mot de passe crypté avec 10 saltrounds
            const newUser = User.build({
                name,
                surname,
                email,
                password: await bcrypt.hashSync(password, 10),

            });

            Users.push(newUser);
            request.session.user = newUser;

            // Sauvegarde de le nouvel utilisateur
            await newUser.save();

            return response.json(newUser);
        }
        catch(err) {
            response.status(500).json(err);
        }

    },

    signinAction: async (request, response) => {
        try {
            const {
                email,
                password,
            } = request.body;

            console.log(email, password);

            const user = await User.findOne({
                where: {
                    email,
                },
            });

            // On vérifie que l'utilisateur ait rempli le bon mail et le bon mot de passe associé
            if (user && await bcrypt.compareSync(password, user.password)) {
                // Permet de ne récupérer que les 'dataValues' et pas les autres données
                request.session.user = user.get({
                    plain: true,
                });
                delete request.session.user.password;
                response.json({
                    isLogged: true,
                });
            }
            else {
                response.status(403).json({
                    isLogged: false,
                });
            }
        }
        catch (err) {
            console.log(err);
            response.status(400).send(err);

        }

    },


    signoutAction: async (request, response) => {
        try {
            request.session.destroy();
            response.json('Déconnexion ok');
        }
        catch (err) {
            response.status(500).json(err);
        }
    },
};

module.exports = authController;