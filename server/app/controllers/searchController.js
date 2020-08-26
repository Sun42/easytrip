const axios = require('axios').default;

// mapping filters with OSM keywords
const available_filters = {
    'food' : 'amenity=restaurant',
    'pub' : 'amenity=pub',
};

function checkFiltersParams (query) {
    return !!(query.filters && query.filters == true);
 };

function filterParams (query, available_filters) {
    const query_array = Object.keys(query);
    const available_filters_array = Object.keys(available_filters);
    return query_array.filter(elem => available_filters_array.includes(elem));
};

/**
 * "boundingbox": [
        "48.8155755",S
        "48.902156",N
        "2.224122",W 
        "2.4697602"E
      ],
 */
function bboxToCardinalPoints(bbox) {
    const cardinal_point = {south : bbox[0], north : bbox[1], west : bbox[2], east :  bbox[3]};
    return cardinal_point;
};

// "45.7073666,4.7718134,45.8082628,4.8983774"; South, west, north, east
function cardinalPointToBboxstr(cp) {
    return [cp.south, cp.west, cp.north, cp.east].join()
};

function filtersToOverpassStr(filters) {
    str = "";
    for (filter of filters) {
        value = available_filters[filter];
        str += `node[${value}];out;`
    }
    return str;
};

/**
 * cp cardinal_points object
 */
function overpassURL(cp, filters) {
    const bbox = cardinalPointToBboxstr(cp);
    const filter1 = "node[amenity=pub];out;";
    const filter2 = "node[amenity=restaurant];out;";
    const overpass_filters = filtersToOverpassStr(filters);
    overpass_query = `[out:json][timeout:25][bbox:${bbox}];${overpass_filters}`;
    overpass_url = `http://overpass-api.de/api/interpreter?data=${overpass_query}`;
    return overpass_url;
};

const searchController = {
    search : async (request, response) => {
        if (request.query.location) {
            try {
                url = `https://nominatim.openstreetmap.org/search?q=${request.query.location}&format=json&addressdetails=1&limit=1`;
                const data = await axios.get(url);
                const ret = { location: data.data[0] };
                if (checkFiltersParams(request.query)) {
                    asked_filters = filterParams(request.query, available_filters);
                       if (asked_filters.length > 0) {
                           const cp = bboxToCardinalPoints(ret.location['boundingbox']);
                           overpass_url = overpassURL(cp, asked_filters);
                           const overpass_data = await axios.get(overpass_url);
                           ret.elements = overpass_data.data.elements;
                       }
                }
                response.json(ret);
            }
            catch (error) {
                console.trace(error);
                response.json({ "error": error });
            }
        }
        else
            response.status(400).json({'error':  'missing location parameter'})
    },
}

module.exports = {
    searchController : searchController,
    checkFiltersParams : checkFiltersParams,
    filterParams : filterParams,
    bboxToCardinalPoints : bboxToCardinalPoints, 
    cardinalPointToBboxstr : cardinalPointToBboxstr,
    overpassURL : overpassURL,
    filtersToOverpassStr : filtersToOverpassStr,
}