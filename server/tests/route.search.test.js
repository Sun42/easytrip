const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const request = require('supertest');
const app = require('../app/app.js');

const { available_filters } = require('../app/helpers/filterHelper');

describe('/api/search ', () => {
    const mock = new MockAdapter(axios);
    /*
    beforeEach(() => {
        });
    */
    afterEach(() => {
        mock.reset();
    });

    test('/api/search no location in query', async () => {
        const response = await request(app).get('/api/search');
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error');
        expect(response.body.error).toMatch(/missing location/);
    });

    test('/api/search/ empty location', async () => {
        const response = await request(app).get('/api/search?location=');
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error');
        expect(response.body.error).toMatch(/missing location/);
    });

    test('/api/search?location=LYON', async () => {
        const mocked_response = require('./nominatim_lyon_location.json');
        mock.onGet(/nominatim.openstreetmap.org/).reply(200, mocked_response);
        const response = await request(app).get('/api/search?location=LYON');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('location');
        expect(response.body.location).toHaveProperty('lat');
        expect(response.body.location).toHaveProperty('lon');
        expect(response.body.location).toHaveProperty('display_name');
        expect(response.body.location).toHaveProperty('boundingbox');
    });

    test('/api/search?location=LYON&filters=1', async () => {
        const mocked_location = require('./nominatim_lyon_location.json');
        const mocked_poi_elements = require('./overpass_lyon_elements.json');
        mock.onGet(/nominatim.openstreetmap.org/).reply(200, mocked_location);
        mock.onGet(/overpass-api.de/).reply(200, mocked_poi_elements);
        const response = await request(app).get('/api/search?location=LYON&filters=1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('location');
        expect(response.body.location).toHaveProperty('lat');
        expect(response.body.location).toHaveProperty('lon');
        expect(response.body.location).toHaveProperty('display_name');
        expect(response.body.location).toHaveProperty('boundingbox');
        expect(response.body).toHaveProperty('elements');
        for (const [key] in (Object.keys(available_filters))) {
            expect(response.body.elements).toHaveProperty(key);
        }
    });
});
