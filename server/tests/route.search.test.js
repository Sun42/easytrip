const moxios = require('moxios');
const request = require('supertest');
const app = require('../app/app.js');

describe('/api/search ', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
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

    test('/api/search/ OK location with mock', async () => {
        const mocked_response = {
            status: 200,
            response: {
                data : [{
                    'lat' : '42.42',
                    'lon' : '42.42',
                    'display_name' : 'Paris',
                }],
            },
        };
        moxios.stubRequest(/nominatim.openstreetmap.org/, mocked_response);
        const response = await request(app).get('/api/search?location=PARIS');
        expect(moxios.requests.mostRecent().url).toBe('https://nominatim.openstreetmap.org/search?q=PARIS&format=json&addressdetails=1&limit=1');
        console.log(moxios.requests.mostRecent());
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('location');
        expect(response.body.location).toHaveProperty('lat');
        expect(response.body.location).toHaveProperty('lon');
        expect(response.body.location).toHaveProperty('display_name');
        expect(response.body.location).toHaveProperty('address');
    });
});
