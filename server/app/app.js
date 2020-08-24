require('dotenv').config();
// Import of needed packages (express)
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

// database
const db = require('./config/database')

// Test DB
db.authenticate()
.then(() => console.log('Database connected....'))
.catch(err => console.log('Error: ' + err))


// const cookieParser = require('cookie-parser');

// For cross-origin sharing
const cors = require('cors');
// Import routing
const router = require('./router');



const app = express();



// Pour que le front puisse faire appel à notre API
app.use(cors());

// Add function to serve static files (REACT ??)
// app.use(express.static('public'));

// Gestion des sessions : saveInitialized à décider si vrai/faux, l'utilisateur reste loggé pendant 10 minutes
app.use(session({
    secret:'mylittlesecret',
    saveUninitialized: true, 
    resave:true
    }));


// app.use(cookieParser());

// Pour récupérer les données envoyées avec une méthode post et les mettre dans un objet response.body
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Routing
app.use(router);


// config
const PORT = process.env.PORT || 3000;

// Enable server
app.listen(PORT, () => {
    console.log(`Currently listening on ${PORT}`);
});
