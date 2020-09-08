require('dotenv').config();
// Import of needed packages (express)
const path = require('path');
const express = require('express');

const morgan = require('morgan');

const session = require('express-session');
const bodyParser = require('body-parser');
const userMiddleware = require('./middlewares/userMiddleware');
// database
const db = require('./config/database');

// Import routing
const router = require('./router');

const app = express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.urlencoded({ extended:true }));

// Gestion des sessions : saveInitialized à décider si vrai/faux, l'utilisateur reste loggé pendant 10 minutes
app.use(session({
    saveUninitialized: true,
    resave:true,
    secret: process.env.SECRET_SESSION,
    cookie: {},
}));

app.use(userMiddleware);
// Pour récupérer les données envoyées avec une méthode post et les mettre dans un objet response.body
app.use(bodyParser.urlencoded({ extended:true }));
// app.use(cookieParser);

app.use(bodyParser.json());

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    response.header('Access-Control-Allow-Credentials', true);
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
});

/*
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
*/
// Routing
app.use(router);

// https://github.com/sequelize/sequelize/issues/6758
app.on('close', () => {
    db.sync().then(() => {
        db.close();
    });
});

module.exports = app;
