# Arborescence de l'application EasyTrip 

![Arborescence de l'application EasyTrip]
(conception/Arbo.png)

# Routes de l'application

### Routes Front

- Accueil = /

- Connexion = /connexion

- Inscription = /inscription

- Profil = /mon-profil

- Mes carnets de voyage = /mesvoyages
  
- Mon carnet de voyage = /mesvoyages/monvoyage
  
- Recherche = /recherche
  
- Résultats = /resultats

### Routes Back

#### Synthèse du routage back

Nous aurons un total de 5 controllers : 

1. Le **mainController** : Gestion de la page d'accueil
2. Le **profileController** : Gestion du profil utilisateur et des données utilisateur 
3. Le **authController** : Gestion des inscriptions et connexions
4. Le **tripController** : Gestion des carnets de voyage
5. Le **searchController** : Gestion des recherches et filtrages selon les préférences utilisateurs

```javascript
router.route('/api/inscription')
    .get(authController.signupPage)
    .post(authController.signupAction);

router.route('/api/connexion')
    .get(authController.signinPage)
    .post(authController.signinAction);

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

// Routes de recherche
router.get('/api/search', searchController.search);

// Routes de profil

router.route('/api/monprofil/:id')
    .get(profileController.getProfile)
    .patch(profileController.editInfo)
    .delete(profileController.deleteInfo)
```
