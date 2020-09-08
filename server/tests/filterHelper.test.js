const { ...fh } = require('../app/helpers/filterHelper');


describe('filterHelper functions', () => {
    test('bboxToCardinalPoints', () => {
        const boundingbox = ['48.815', '48.902', '2.224', '2.469'];
        const expected = { south: '48.815', north: '48.902', west: '2.224', east: '2.469' };
        const cp = fh.bboxToCardinalPoints(boundingbox);
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
        const response = fh.overpassURL(cp, filters);
        expect(response).toBe(expected_response);
    });

    test('build URL with 2 param', () => {
        const cp = {
            south: '45.7073666', north: '45.8082628',
            west: '4.7718134', east: '4.8983774',
        };
        const filters = ['pub', 'food'];
        const expected_response = 'http://overpass-api.de/api/interpreter?data=[out:json][timeout:25][bbox:45.7073666,4.7718134,45.8082628,4.8983774];node[amenity=pub];out;node[amenity=biergarten];out;node[amenity=bar];out;node[amenity=restaurant];out;node[amenity=fast_food];out;node[amenity=food_court];out;node[amenity=cafe];out;';
        const response = fh.overpassURL(cp, filters);
        expect(response).toBe(expected_response);
    });
});

describe('group osm nodes by category', () => {
    test('that nodes are correctly grouped', () => {
        const data = require('./overpass_lyon_elements.json');
        const categories = fh.available_filters;
        const response = fh.groupByCategory(data.elements, categories);
        expect(response).toHaveProperty('food');
        expect(Object.values(response.food)).toHaveLength(5);
        expect(response).toHaveProperty('pub');
        expect(Object.values(response.pub)).toHaveLength(3);
        expect(response).toHaveProperty('aquatic');
        expect(Object.values(response.aquatic)).toHaveLength(3);
        expect(response).toHaveProperty('historic');
        expect(Object.values(response.historic)).toHaveLength(3);
        expect(response).toHaveProperty('art');
        expect(Object.values(response.art)).toHaveLength(9);
        expect(response).toHaveProperty('shop');
        expect(Object.values(response.shop)).toHaveLength(14);
        expect(response).toHaveProperty('excursion');
        expect(Object.values(response.excursion)).toHaveLength(7);
        expect(response).toHaveProperty('fun');
        expect(Object.values(response.fun)).toHaveLength(13);
    });
    // todo check when empty set
});