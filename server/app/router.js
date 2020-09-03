const express = require('express');
// const db = require('./config/database');
const router = express.Router();

// Import controllers here

// Gestion des inscriptions et connexions en session
const authController = require('./controllers/authController');


// Gestion du profil et des données personnelles
// const profileController = require('./controllers/profileController');

// Gestion des carnets de voyage et accès aux détails d'un voyage
const tripController = require('./controllers/tripController');

// Gestion des recherches et filtrages (préférences) + résultats
const searchController = require('./controllers/searchController').searchController;


// Homepage routes
// router.get('/', mainController.homepage);

// Authentification routes
router.route('/api/inscription')
    .post(authController.signupAction);

router.route('/api/connexion')
    .post(authController.signinAction);

router.route('/api/islogged')
    .post(authController.isLogged);

router.route('/api/deconnexion')
    .post(authController.signoutAction);

// Trip routes
// Créer un nouveau carnet de voyage
router.route('/api/mon-voyage/new')
    .post(tripController.createNewTravelogue);

// Route pour un carnet de voyage
router.route('/api/mesvoyages/monvoyage/:id')
    .get(tripController.getOneTravelogue)
    .patch(tripController.updateTravelogue)
    .delete(tripController.deleteTravelogue);

// Récupérer tous les carnets de voyages
router.route('/api/mes-voyages')
    .get(tripController.getAllTravelogues);

router.get('/api/search', searchController.search);

/* Profile routes
router.get('/api/mon-profil', profileController.getProfile);

router.post('/api/mon-profil', profilController.submitInfo);

router.patch('/api/mon-profil', profilController.editInfo);

router.delete('/api/mon-profil', profilController.deleteInfo);

Carnet de voyage routes
router.get('/api/mes-voyages', tripController.getAllTrips);

router.get('/api/mes-voyages/mon-voyage/:tripId', tripController.getOneTrip);

Accès au formulaire pour ajouter un nouveau voyage
router.get('/api/mon-voyage/voyage/new', tripController.newTripForm);

Permet d'ajouter un nouveau voyage
router.post('/api/mon-voyage/new', tripController.submitNewTrip);

Permet de modifier un voyage existant
router.patch('/api/mon-voyage/:tripId', tripController.editTrip);

Permet de supprimer un voyage existant
router.delete('/api/mon-voyage/:tripId', tripController.deleteTrip);

Search routes


Result routes TODO */


// Exporting Router
module.exports = router;
