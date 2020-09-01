const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const request = require('supertest');
const app = require('../app/app.js');

const { available_filters } = require('../app/helpers/filterHelper');

describe('/api/search ', () => {
    const mock = new MockAdapter(axios);

    afterEach(() => {
        mock.reset();
    });
    afterAll(() => {
        app.close();
    });

    test('/api/search no location in query', async () => {
        const response = await request(app).get('/api/search');
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error');
        expect(response.body.error).toMatch(/missing location/);
    });

    test('/api/search/ empty location parameter', async () => {
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
        for (const [key] of (Object.entries(available_filters))) {
            expect(response.body.elements).toHaveProperty(key);
            expect(response.body.elements[key].length).toBeGreaterThan(0);
        }
    });

    test('/api/search?location=selkrfjelskjlkj error 404:location not found', async () => {
        mock.onGet(/nominatim.openstreetmap.org/).reply(404, '"not found"');
        const response = await request(app).get('/api/search?location=selkrfjelskjlkj');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('error');
        expect(response.body.error).toHaveProperty('isAxiosError');
        expect(response.body.error.isAxiosError).toBe(true);
        expect(response.body.error).toHaveProperty('response');
        expect(response.body.error.response).toHaveProperty('status');
        expect(response.body.error.response.status).toBe(404);
        expect(response.body.error.response).toHaveProperty('data');
        expect(response.body.error.response.data).toBe('not found');
        expect(response.body.error.response.config).toHaveProperty('url');
        expect(response.body.error.response.config.url).toBe('https://nominatim.openstreetmap.org/search?q=selkrfjelskjlkj&format=json&addressdetails=1&limit=1');
    });

    test('/api/search?location=lyon error 503:nominatim unavailable', async () => {
        mock.onGet(/nominatim.openstreetmap.org/).reply(503, '"nominatim down"');
        const response = await request(app).get('/api/search?location=lyon');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('error');
        expect(response.body.error).toHaveProperty('isAxiosError');
        expect(response.body.error.isAxiosError).toBe(true);
        expect(response.body.error.response.status).toBe(503);
        expect(response.body.error.response.data).toBe('nominatim down');
        expect(response.body.error.response.config.url).toBe('https://nominatim.openstreetmap.org/search?q=lyon&format=json&addressdetails=1&limit=1');
    });
    test('/api/search?location=lyon&filters=1 error 503:overpass unavailable', async () => {
        const mocked_location = require('./nominatim_lyon_location.json');
        mock.onGet(/nominatim.openstreetmap.org/).reply(200, mocked_location);
        mock.onGet(/overpass-api.de/).reply(503, '"overpass down"');
        const response = await request(app).get('/api/search?location=lyon&filters=1');
        expect(response.statusCode).toBe(200);
        expect(response.body.error.isAxiosError).toBe(true);
        expect(response.body.error.response.data).toBe('overpass down');
        expect(response.body.error.response.status).toBe(503);
        expect(response.body.error.response.config.url).toMatch('http://overpass-api.de/api/');
    });
});
