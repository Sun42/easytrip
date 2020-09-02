require('dotenv').config();
// Import of needed packages (express)
const express = require('express');

const morgan = require('morgan');

const session = require('express-session');
const bodyParser = require('body-parser');
// const userMiddleware = require('../app/middlewares/userMiddleware');

// database
const db = require('./config/database');

// For cross-origin sharing
const cors = require('cors');
// Import routing
const router = require('./router');

const app = express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors());
app.use(express.urlencoded({ extended:true }));

// Gestion des sessions : saveInitialized à décider si vrai/faux, l'utilisateur reste loggé pendant 10 minutes
app.use(session({
    saveUninitialized: true,
    resave:true,
    secret: process.env.SECRET_SESSION,
}));

// Pour récupérer les données envoyées avec une méthode post et les mettre dans un objet response.body
app.use(bodyParser.urlencoded({ extended:true }));
// app.use(cookieParser);

app.use(bodyParser.json());

// app.use(userMiddleware);

// Routing
app.use(router);

// https://github.com/sequelize/sequelize/issues/6758
app.on('close', () => {
    db.sync().then(() => {
        db.close();
    });
});

module.exports = app;
