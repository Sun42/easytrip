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
            if (!name || !surname || !email || !password) {
                return response.status(400, 'Merci de remplir vos informations');

            }

            // Crée un nouveau utilisateur avec un mot de passe crypté avec 10 saltrounds
            const newUser = User.build({
                name,
                surname,
                email,
                password: await bcrypt.hashSync(password, 10),
            });


            request.session.user = newUser;
            console.log(request.session.user.id);

            // Sauvegarde de le nouvel utilisateur
            await newUser.save();
            request.session.user = newUser.get({
                plain: true,
            });
            delete request.session.user.password;
            console.log('signup session : ', request.session);
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
                console.log('signin session', request.session);
                delete request.session.user.password;
                response.status(200).json({
                    logged: true,
                });
                console.log(request.session.user);
            }
            else {
                response.status(403).json({
                    logged: false,
                });
            }
        }
        catch (err) {
            console.log(err);
            response.status(400).send(err);

        }

    },

    isLogged: async (request, response) => {
        console.log(request.session);
        if (request.session.user) {
            response.status(200).json({ logged: true, info: request.session.user });
        }
        else {
            response.status(200).json({ logged: false });
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
