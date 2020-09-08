const app = require('./app');

// config
const SERVER_HOST = process.env.SERVER_HOST;
const PORT = process.env.PORT || 3000;

// Enable server
app.listen(PORT, SERVER_HOST, () => {
    console.log(`Currently listening on ${SERVER_HOST}:${PORT}`);
});
