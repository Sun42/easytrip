require('dotenv').config();
// Import of needed packages (express)
const express = require('express');

const session = require('express-session');

const cookieParser = require('cookie-parser');

// For cross-origin sharing
const cors = require('cors');
// Import routing
const router = require('./router');

const app = express();

app.use(cors());

// Add function to serve static files (REACT ??)
// app.use(express.static('public'));
// Gestion des sessions : saveInitialized à décider si vrai/faux, l'utilisateur reste loggé pendant 10 minutes
app.use(session({
    saveUninitialized: true,
    resave:true,
    secret:process.env.SECRET_SESSION,
}));

// Pour récupérer les données envoyées avec une méthode post et les mettre dans un objet response.body
app.use(express.urlencoded({ extended:true }));

app.use(express.json());
// Routing
app.use(router);

module.exports = app;
