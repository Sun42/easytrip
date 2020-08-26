const { Travelogue } = require('../models/travelogue');

const tripController = {

        createNewTravelogue: async (request, response) => {
            try {
                const {name, city, date_departure, date_return} = request.body;

            // Si l'utilisateur n'a pas donné de nom à son carnet de voyage on lui demande
            if(!name) {
                response.status(400).send('Vous devez donner au moins un nom à votre carnet de voyage');
            };

            // Crée un nouveau carnet de voyage (crée un nouveau voyage)
            let newTravelogue = Travelogue.build({
                name,
                city,
                date_departure,
                date_return,
                user_id: Travelogue.findOne({
                    include : User
                })
                

            });
                await newTravelogue.save();

                return response.json(newTravelogue);
        } catch (err) {
            response.status(401).send(err)
        }
    },
        /*addToTravelogue: async (request, response) => {
                // Ajout d'une activité au travelogue
    
            },
    
        getAllTrips: async (request, response) => {
    
            }, */
           
};

    

module.exports = tripController;
