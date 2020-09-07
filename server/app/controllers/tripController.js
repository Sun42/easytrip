const moment = require('moment');
const { Travelogue, Activity, User } = require('../models');
const { checkOwnership } = require('../helpers/tripHelper');
const tripController = {

    createNewTravelogue : async (request, response) => {

        if (!request.session.user) {
            return response.status(401).json({ error : 'Utilisateur non authentifié' });
        }
        const { name, city, date_departure, date_return } = request.body;
        // Si l'utilisateur n'a pas donné de nom à son carnet, on le lui demande
        if (!name) {
            return response.status(403).json('Vous devez donner au moins un nom à votre carnet de voyage');
        }
        const str_departure = moment(date_departure, 'DD/MM/YYYY').format();
        const str_return = moment(date_return, 'DD/MM/YYYY').format();
        console.log('date_departure', date_departure);
        console.log('str_departure', str_departure);
        console.log('date_departure', date_return);
        console.log('str_return', str_return);
        try {
        // Création d'un nouveau voyage (= nouveau carnet de voyage)
            const newTravelogue = await Travelogue.create({
                name,
                city,
                date_departure : str_departure,
                date_return: str_return,
                user_id : request.session.user.id,
            });

            console.log(newTravelogue);


            return response.status(201).json(newTravelogue);

        }
        catch(error) {
            console.trace(error);
            return response.status(500).json('Erreur dans la création du carnet de voyage');

        }
    },

    getAllTravelogues: async (request, response) => {

        if (!request.session.user) {
            return response.status(401).json({ error : 'Utilisateur non authentifié' });
        }
        try {
            const user_id = request.session.user.id;
            const user = User.findByPk(user_id);
            if (!user) {
                return response.status(400).json({ error : 'Invalid user' });
            }
            const travelogues = await Travelogue.findAll({
                where: {
                    user_id : user_id,
                },
                order: [
                    ['name', 'ASC'],
                ],
            });

            return response.json({ travelogues : travelogues });
        }
        catch (err) {
            return response.status(500).send(err);
        }
    },

    getOneTravelogue: async (request, response) => {

        if (!request.session.user) {
            return response.status(401).json({ error : 'Utilisateur non authentifié' });
        }
        try {
            const travel_id = parseInt(request.params.id);
            const travelogue = await Travelogue.findOne({
                where: { id: travel_id },
                include: Activity,
            });
            if (!travelogue) {
                return response.status(404).json('Carnet de voyage introuvable');
            }
            /*
            const activities = await Activity.findAll({
                where: { travelogue_id: travel_id },
            });
            console.log('activities', activities);
            Object.assign(travelogue, { 'activities' : activities });
            */
            return response.status(200).json({ 'travelogue' : travelogue });
        }
        catch (error) {
            console.trace(error);
            return response.status(500).json({ 'error' : error });
        }
    },

    updateTravelogue: async (request, response) => {

        if (!request.session.user) {
            return response.status(401).json({ error : 'Utilisateur non authentifié' });
        }
        try {
            const travelogueId = request.params.id;
            const updated = await Travelogue.update(request.body, { where: { id: travelogueId } });

            if (updated) {
                const updatedTravelogue = await Travelogue.findOne({ where: { id: travelogueId } });
                return response.status(200).json({ travelogue: updatedTravelogue });
            }
            throw new Error('Carnet de voyage introuvable');
        }
        catch (err) {
            return response.status(500).json(err);
        }
    },

    deleteTravelogue: async (request, response) => {

        if (!request.session.user) {
            return response.status(401).json({ error : 'Utilisateur non authentifié' });
        }
        try {
            const travel_id = request.params.id;
            const travelToBeDeleted = await Travelogue.findByPk(travel_id);

            if (!travelToBeDeleted) {
                return response.status(404).json('Carnet de voyage introuvable');
            }

            await travelToBeDeleted.destroy();
            return response.json('Le carnet de voyage a été supprimé');

        }
        catch (err) {
            return response.status(500).json(err);
        }
    },

    createActivity: async (request, response) => {
        if (!request.session.user) {
            return response.status(401).json({ error : 'Utilisateur non authentifié' });
        }
        try {
            const { travelogue_id, name, information, location } = request.body;
            const user_id = request.session.user.id;
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
            return response.status(201).json({ 'activity' : activity });
        }
        catch (error) {
            console.trace(error);
            return response.status(500).json({ 'error' : error });
        }
    },
};

module.exports = tripController;
