require('dotenv').config();
// Import of needed packages (express)
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const userMiddleware = require('../app/middlewares/userMiddleware');

// database
const db = require('./config/database');

// Test DB
db.authenticate()
    .then(() => console.log('Database connected....'))
    .catch(err => console.log('Error: ' + err));


// const cookieParser = require('cookie-parser');


// For cross-origin sharing
const cors = require('cors');
// Import routing
const router = require('./router');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended:true }));

// conflict resolving might be useless


// Gestion des sessions : saveInitialized à décider si vrai/faux, l'utilisateur reste loggé pendant 10 minutes
app.use(session({
    saveUninitialized: true,
    resave:true,
    secret: process.env.SECRET_SESSION,
}));

// Pour récupérer les données envoyées avec une méthode post et les mettre dans un objet response.body
app.use(bodyParser.urlencoded({ extended:true }));

app.use(bodyParser.json());

app.use(userMiddleware);
// Routing
app.use(router);

module.exports = app;
