const userMiddleware = (request, response, next) => {
    console.log('session', request.session);
    if (request.session.user) {
        console.log('Utilisateur connecté');
        response.locals.user = request.session.user;
    }
    else {
        response.locals.user = false;
        console.log('Utilisateur non connecté');
    }

    next();
};


module.exports = userMiddleware;
