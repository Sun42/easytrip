const authController = {
    
    signupPage : (request, response) => {
        response.render('signup')
    },

    signupAction: (request, response) => {
       
        // On s'assure que la personne inscrite a bien renseigné un mail + mdp
        // On regarde si le user existe déjà en BDD 
        // S'il existe déjà on renvoie une erreur
        // S'il n'existe pas, on l'ajoute en BDD
    },
    
    signinPage: (request, response) => {
        response.render('connexion')
    }, 

    signinAction:(request,response) => {
        // On vérifie que le username et mdp correspondent bien en BDD
        // Si oui ok, sinon erreur
    }
};

module.exports = authController;