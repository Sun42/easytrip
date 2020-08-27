const axios = require('axios').default;

const {
    available_filters,
    bboxToCardinalPoints,
    overpassURL
} = require('../helpers/filterHelper.js');

/**
 * Returns true if filters attribute is present and trueish
 * @param {object} query  A req.query express object
 * @returns {boolean}
 */
function checkFiltersParams(query) {
    return !!(query.filters && query.filters == true);
};

/**
 * Retrieves query attributes matching available_filters keys
 * @param {object} query A req.query express object
 * @param {object} available_filters An object representing the available filters and their corresponding OSM values
 * @returns {array} An array of filters keys
 */
function filterParams(query, available_filters) {
    const query_array = Object.keys(query);
    const available_filters_array = Object.keys(available_filters);
    return query_array.filter(elem => available_filters_array.includes(elem));
};

const searchController = {
    search: async (request, response) => {
        if (request.query.location) {
            try {
                url = `https://nominatim.openstreetmap.org/search?q=${request.query.location}&format=json&addressdetails=1&limit=1`;
                const data = await axios.get(url);
                const ret = {
                    location: data.data[0]
                };
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
            } catch (error) {
                console.trace(error);
                response.json({
                    "error": error
                });
            }
        } else
            response.status(400).json({
                'error': 'missing location parameter'
            })
    },
}

module.exports = {
    searchController,
    checkFiltersParams,
    filterParams,
}