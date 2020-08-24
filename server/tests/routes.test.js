const axios = require('axios');
jest.mock('axios');
const request = require('supertest');
const app = require('../app/app.js');



describe('Unkown endpoints should return a 404', () => {
  test('/', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(404);
    });
  test('/blablabla', async () => {
    const response = await request(app).get('/blablabla');
    expect(response.statusCode).toBe(404);
    });
});

describe('/api/search ', () => {
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
      "lat" : "42.42",
      "lon" : "42.42",
      "display_name" : "Paris ville lumière",
      "address" : {},
    };
    const resp = {data : [mocked_response]};
    axios.get.mockResolvedValue(resp);
    const response = await request(app).get('/api/search?location=PARIS');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('location');
    expect(response.body.location).toHaveProperty('lat');
    expect(response.body.location).toHaveProperty('lon');
    expect(response.body.location).toHaveProperty('display_name');
    expect(response.body.location).toHaveProperty('address');
  });
});
