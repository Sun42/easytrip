const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const request = require('supertest');
const app = require('../app/app.js');

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

    test('/api/search?location=PARIS', async () => {
        const mocked_response = require('./nominatim_paris_data.json');
        mock.onGet(/nominatim.openstreetmap.org/).reply(200, mocked_response);
        const response = await request(app).get('/api/search?location=PARIS');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('location');
        expect(response.body.location).toHaveProperty('lat');
        expect(response.body.location).toHaveProperty('lon');
        expect(response.body.location).toHaveProperty('display_name');
        expect(response.body.location).toHaveProperty('boundingbox');
    });
});
