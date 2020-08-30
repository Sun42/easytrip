const axios = require('axios').default;

const {
    available_filters,
    bboxToCardinalPoints,
    overpassURL,
} = require('../helpers/filterHelper.js');

/**
 * Returns true if filters attribute is present and trueish
 * @param {object} query  A req.query express object
 * @returns {boolean}
 */
function checkFiltersParams(query) {
    return !!(query.filters && query.filters == true);
}

/**
 * Retrieves query attributes matching available_filters keys,
 * Notes : it assumes that query.filter=1
 * Notes :  if 0 filter category found then returns all availabe_filters
 * @param {object} query A req.query express object
 * @param {object.<string, string[]>} af An object representing the available filters and their corresponding OSM values
 * @returns {string[]}> An array of filters keys
 */
function filterParams(query, af) {
    const query_array = Object.keys(query);
    const available_filters_array = Object.keys(af);
    const filters = query_array.filter(elem => available_filters_array.includes(elem));
    if (filters.length == 0) {
        return available_filters_array;
    }
    return filters;
}

const searchController = {
    search: async (request, response) => {
        if (request.query.location) {
            try {
                const url = `https://nominatim.openstreetmap.org/search?q=${request.query.location}&format=json&addressdetails=1&limit=1`;
                const data = await axios.get(url);
                const ret = { location: data.data[0] };
                if (checkFiltersParams(request.query)) {
                    const asked_filters = filterParams(request.query, available_filters);
                    if (asked_filters.length > 0) {
                        const cp = bboxToCardinalPoints(ret.location['boundingbox']);
                        const overpass_url = overpassURL(cp, asked_filters);
                        const overpass_data = await axios.get(overpass_url);
                        ret.elements = overpass_data.data.elements;
                    }
                }
                response.json(ret);
            }
            catch (error) {
                console.trace(error);
                response.json({ 'error': error });
            }
        }
        else {
            response.status(400).json({ 'error': 'missing location parameter' });
        }
    },
};

module.exports = {
    searchController,
    checkFiltersParams,
    filterParams,
};
