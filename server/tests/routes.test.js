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
