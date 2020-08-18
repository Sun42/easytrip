const express = require('express');

// Import controllers here

// Gestion des inscriptions et connexions en session
const authController = require('./controllers/authController');

// Gestion de la page d'accueil
const mainController = require('./controllers/mainController');

// Gestion du profil et des données personnelles
const profileController = require('./controllers/profileController');

// Gestion des carnets de voyage et accès aux détails d'un voyage
const tripController = require('./controllers/tripController');

// Gestion des recherches et filtrages (préférences) + résultats
const searchController = require('./controllers/searchController');



const router = express.Router();

// Homepage routes
//router.get('/', mainController.homepage);

// Authentification routes
router.route('/inscription')
    .get(authController.signupPage)
    .post(authController.signupAction);



router.route('/connexion')
    .get(authController.signinPage)
    .post(authController.signinAction);


/* Profile routes 
router.get('/mon-profil', profileController.getProfile);

router.post('/mon-profil', profilController.submitInfo);

router.patch('/mon-profil', profilController.editInfo);

router.delete('/mon-profil', profilController.deleteInfo);

Carnet de voyage routes
router.get('/mes-voyages', tripController.getAllTrips); 

router.get('/mes-voyages/mon-voyage/:tripId', tripController.getOneTrip);

Accès au formulaire pour ajouter un nouveau voyage
router.get('mon-voyage/voyage/new', tripController.newTripForm);

Permet d'ajouter un nouveau voyage
router.post('mon-voyage/new', tripController.submitNewTrip);

Permet de modifier un voyage existant
router.patch('/mon-voyage/:tripId', tripController.editTrip);

Permet de supprimer un voyage existant
router.delete('/mon-voyage/:tripId', tripController.deleteTrip);

Search routes
router.get('/recherche', searchController.getSearchPage);

Result routes TODO */






// Exporting Router
module.exports = router;