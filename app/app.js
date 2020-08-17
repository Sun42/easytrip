require('dotenv').config();
// Import of needed packages (express)
const express = require('express');

// Import routing
const router = require('./router');

// config
const PORT = process.env.PORT || 3000;

const app = express();

// Add function to serve static files

// Routing
app.use(router);

// Enable server
app.listen(PORT, () => {
    console.log(`Currently listening on ${PORT}`);
});
