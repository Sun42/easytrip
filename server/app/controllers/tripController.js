const {Travelogue} = require('../models');

const tripController = {

    createNewTravelogue : async (request, response) => {

            const {name, city, date_departure, date_return} = request.body;

            // Si l'utilisateur n'a pas donné de nom à son carnet, on le lui demande
            if(!name) {
                response.status(403).json('Vous devez donner au moins un nom à votre carnet de voyage');
            };

            // Création d'un nouveau voyage (= nouveau carnet de voyage)
            let newTravelogue = Travelogue.build({
                name,
                city,
                date_departure,
                date_return,

            });
            try {

                await newTravelogue.save();
                return response.json(newTravelogue);

            } catch {
                response.status(400).json('Erreur dans la création du carnet de voyage');
                console.log(newTravelogue);
            }
            
    },

    /*editTravelogue: async (request, response) => {
        try {
            const travelogueId = request.params.id;
            const travelogue = await Travelogue.findByPk(travelogueId, {

            })
        }
    }, */

    getAllTravelogues: async (request, response) => {
        try {
            const travelogues = await Travelogue.findAll({
                order: [
                    ['name', 'ASC']
                ],
                
            });

            if(!travelogues) {
                response.status(204).json("Vous n'avez pas encore de carnet de voyage");
            }

            response.json(travelogues);
        } catch (err) {
            response.status(500).send(err)
        }
    },

    getOneTravelogue: async (request, response) => {
        try {
    
            const travelogue = await Travelogue.findByPk(request.params.id);

            console.log(request.params.id);

            response.json(travelogue);
        } catch (err) {
            response.status(500).send(err) 
        }

    }




}

module.exports = tripController;