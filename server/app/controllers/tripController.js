const { Travelogue, Activity, User } = require('../models');
const { checkOwnership } = require('../helpers/tripHelper');
const tripController = {

    createNewTravelogue : async (request, response) => {

        const { name, city, date_departure, date_return } = request.body;

        // Si l'utilisateur n'a pas donné de nom à son carnet, on le lui demande
        if (!name) {
            response.status(403).json('Vous devez donner au moins un nom à votre carnet de voyage');
        }

        // Création d'un nouveau voyage (= nouveau carnet de voyage)
        const newTravelogue = Travelogue.build({
            name,
            city,
            date_departure,
            date_return,
        });
        try {

            await newTravelogue.save();
            return response.status(201).json(newTravelogue);

        }
        catch {
            response.status(400).json('Erreur dans la création du carnet de voyage');
            console.log(newTravelogue);
        }
    },

    getAllTravelogues: async (request, response) => {
        // @todo lorsque les sessions fonctionneront cote front, faire un check de l'user_id avec la session
        try {
            const user_id = request.params.user_id;
            const user = User.findByPk(user_id);
            if (!user) {
                response.status(400).json({ error : 'Invalid user' });
                return ;
            }
            const travelogues = await Travelogue.findAll({
                where: {
                    user_id : user_id,
                },
                order: [
                    ['name', 'ASC'],
                ],
            });

            response.json({ travelogues : travelogues });
        }
        catch (err) {
            response.status(500).send(err);
        }
    },

    getOneTravelogue: async (request, response) => {
        try {
            const travelogue = await Travelogue.findByPk(request.params.id);

            if (!travelogue) {
                response.status(404).json('Carnet de voyage introuvable');
            }

            response.json(travelogue);
        }
        catch (err) {
            response.status(500).send(err);
        }
    },

    updateTravelogue: async (request, response) => {
        try {
            const travelogueId = request.params.id;
            const updated = await Travelogue.update(request.body, { where: { id:travelogueId } });

            if (updated) {
                const updatedTravelogue = await Travelogue.findOne({ where: { id:travelogueId } });
                return response.status(200).json({ travelogue:updatedTravelogue });
            }
            throw new Error('Carnet de voyage introuvable');
        }
        catch (err) {
            response.status(500).json(err);
        }
    },

    deleteTravelogue: async (request, response) => {
        try {
            const travelToBeDeleted = await Travelogue.findByPk(request.params.id);

            if (!travelToBeDeleted) {
                response.status(404).json('Carnet de voyage introuvable');
            }

            await travelToBeDeleted.destroy();
            response.json('Le carnet de voyage a été supprimé');

        }
        catch (err) {
            response.status(500).json(err);
        }
    },

    createActivity: async (request, response) => {
        try {
            const { user_id, travelogue_id, name, information, location } = request.body;
            // @todo user login id check
            console.log('Request.session:', request.session);
            if (!checkOwnership(user_id, travelogue_id)) {
                return response.status(401).json({ 'error' : 'Error during travelogue to user ownership validation' });
            }

            const location_string = JSON.stringify(location);
            // @todo sequelize check
            const activity = await Activity.create ({
                travelogue_id,
                name,
                information,
                location : location_string,
            });
            response.status(201).json({ 'activity' : activity });
        }
        catch (error) {
            console.trace(error);
            response.status(500).json({ 'error' : error });
        }
    },
};

module.exports = tripController;
