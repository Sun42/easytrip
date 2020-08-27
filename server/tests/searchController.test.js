
const sc = require('../app/controllers/searchController');

describe('test searchController check filters parameter', () => {
    test('query.filters undefined should return false', () => {
        const query = {location : 'PARIS'};
        expect(sc.checkFiltersParams(query)).toBe(false);
    });
    test('query.filters null should return false', () => {
        const query = {location : 'PARIS', filters : null};
        expect(sc.checkFiltersParams(query)).toBe(false);
    });
    test('query.filters empty should return false', () => {
        const query = {location : 'PARIS', filters : ""};
        expect(sc.checkFiltersParams(query)).toBe(false);
    });
    test('query.filters 42 (string) should return false ', () => {
        const query = {location : 'PARIS', filters : "42"};
        expect(sc.checkFiltersParams(query)).toBe(false);
    });
    test('query.filters 42 (number) should return false ', () => {
        const query = {location : 'PARIS', filters : 42};
        expect(sc.checkFiltersParams(query)).toBe(false);
    });
    test('query.filters true (string) should return false ', () => {
        const query = {location : 'PARIS', filters : "true"};
        expect(sc.checkFiltersParams(query)).toBe(false);
    });
    test('query.filters 1 (number) should return true ', () => {
        const query = {location : 'PARIS', filters : 1};
        expect(sc.checkFiltersParams(query)).toBe(true);
    });
    test('query.filters 1 (string) should return true ', () => {
        const query = {location : 'PARIS', filters : "1"};
        expect(sc.checkFiltersParams(query)).toBe(true);
    });
    test('query.filters true (bool) should return true ', () => {
        const query = {location : 'PARIS', filters : true};
        expect(sc.checkFiltersParams(query)).toBe(true);
    });
});

describe('test searchController retrieve filters categories', () => {
    const available_filters = {
        'food' : 'amenity=restaurant',
        'pub' : 'amenity=pub',
        };

        test('unkown filters category should not be contained', () => {
       const query = { wrongfilter : 1, wrongfilter2 : "1" };
       const response = sc.filterParams(query, available_filters);
       expect(response).toEqual(expect.not.arrayContaining(Object.keys(query)));
    });

    test('ok filters should  be contained', () => {
        const query = { food : 1, pub : "1" };
        const response = sc.filterParams(query, available_filters);
        expect(response).toEqual(expect.arrayContaining(Object.keys(query)));
    });

    test('_only_ ok filters should be contained', () => {
        const query = { food : 1, pub : "1", wrongfilter : 1, wrongfilter2 : "1" };
        const response = sc.filterParams(query, available_filters);
        expect(response).toEqual(expect.arrayContaining(['food', 'pub']));
    });
});

describe('test overpass url generation', () => {
    test('build URL with 1 param', () => {
        const cp = {south : "45.7073666", north: "45.8082628",
        west : "4.7718134", east: "4.8983774"};
        const filters = ['pub'];
        const expected_response = "http://overpass-api.de/api/interpreter?data=[out:json][timeout:25][bbox:45.7073666,4.7718134,45.8082628,4.8983774];node[amenity=pub];out;node[amenity=biergarten];out;node[amenity=bar];out;";
        const response = sc.overpassURL(cp, filters);
        expect(response).toBe(expected_response);
    });

    test('build URL with 2 param', () => {
        const cp = {south : "45.7073666", north: "45.8082628",
        west : "4.7718134", east: "4.8983774"};
        const filters = ['pub', 'food'];
        const expected_response = "http://overpass-api.de/api/interpreter?data=[out:json][timeout:25][bbox:45.7073666,4.7718134,45.8082628,4.8983774];node[amenity=pub];out;node[amenity=biergarten];out;node[amenity=bar];out;node[amenity=restaurant];out;node[amenity=fast_food];out;node[amenity=food_court];out;node[amenity=cafe];out;";
        const response = sc.overpassURL(cp, filters);
        expect(response).toBe(expected_response);
    });
});
