const userMiddleware = (request, response, next) => {
    if (request.session.user) {
        console.log('Utilisateur connecté', request.session.user);
        response.locals.user = request.session.user;
    } else {
        response.locals.user = false;
        console.log('Utilisateur non connecté', request.session.user)
    }

    next();
};


module.exports = userMiddleware;