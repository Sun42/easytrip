// Ce module sert de parser
const userMiddleware = (request, response, next) => {
    
    response.locals.user = request.session.user;
    next();
};

module.exports = userMiddleware;