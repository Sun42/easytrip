require('dotenv').config();
// Import of needed packages (express)
const express = require('express');

const session = require('express-session');

const cookieParser = require('cookie-parser');
// Import routing
const router = require('./router');



const app = express();


// Add function to serve static files (REACT ??)
// app.use(express.static('public'));

// Gestion des sessions : saveInitialized à décider si vrai/faux, l'utilisateur reste loggé pendant 10 minutes
app.use(session({
    saveUninitialized: true, 
    resave:true, 
    secret:'my secret pw'
    }));


// Pour récupérer les données envoyées avec une méthode post et les mettre dans un objet response.body
app.use(express.urlencoded({extended:true}));

app.use(express.json());
// Routing
app.use(router);

// config
const PORT = process.env.PORT || 3000;

// Enable server
app.listen(PORT, () => {
    console.log(`Currently listening on ${PORT}`);
});
