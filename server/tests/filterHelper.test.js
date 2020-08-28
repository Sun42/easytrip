const { bboxToCardinalPoints, overpassURL } = require('../app/helpers/filterHelper');

describe('filterHelper functions', () => {
    test('bboxToCardinalPoints', () => {
        const boundingbox = ['48.815', '48.902', '2.224', '2.469'];
        const expected = { south: '48.815', north: '48.902', west: '2.224', east: '2.469' };
        const cp = bboxToCardinalPoints(boundingbox);
        expect(cp).toEqual(expected);
    });
});

describe('test overpass url generation', () => {
    test('build URL with 1 param', () => {
        const cp = {
            south: '45.7073666', north: '45.8082628',
            west: '4.7718134', east: '4.8983774',
        };
        const filters = ['pub'];
        const expected_response = 'http://overpass-api.de/api/interpreter?data=[out:json][timeout:25][bbox:45.7073666,4.7718134,45.8082628,4.8983774];node[amenity=pub];out;node[amenity=biergarten];out;node[amenity=bar];out;';
        const response = overpassURL(cp, filters);
        expect(response).toBe(expected_response);
    });

    test('build URL with 2 param', () => {
        const cp = {
            south: '45.7073666', north: '45.8082628',
            west: '4.7718134', east: '4.8983774',
        };
        const filters = ['pub', 'food'];
        const expected_response = 'http://overpass-api.de/api/interpreter?data=[out:json][timeout:25][bbox:45.7073666,4.7718134,45.8082628,4.8983774];node[amenity=pub];out;node[amenity=biergarten];out;node[amenity=bar];out;node[amenity=restaurant];out;node[amenity=fast_food];out;node[amenity=food_court];out;node[amenity=cafe];out;';
        const response = overpassURL(cp, filters);
        expect(response).toBe(expected_response);
    });
});