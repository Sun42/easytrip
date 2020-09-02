const request = require('supertest');
const app = require('../app/app.js');

test('/api/search no location in query', async () => {
    // @todo remplir la DB ou mocker la DB
    // definir les input

    const response = await request(app)
        .post('/api/activity/new')
        .set('Accept', 'application/json')
        .send({ name: 'Seeeeeaaaaaa sex and sun!!!'});


    // expect(response.statusCode).toBe(201);
    // test de l'activité créée dans le body
});
