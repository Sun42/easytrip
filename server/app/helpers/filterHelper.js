/**
 * Mapping our filters with OSM keywords
 * see https://wiki.openstreetmap.org/wiki/Map_Features for the full list
 * @type {object.<string, string[]>}
 */
const available_filters = {
    'food': ['amenity=restaurant',
        'amenity=fast_food',
        'amenity=food_court',
        'amenity=cafe',
    ],
    'pub': ['amenity=pub',
        'amenity=biergarten',
        'amenity=bar',
    ],
    'aquatic': ['leisure=sauna',
        'leisure=beach_resort',
        'leisure=swimming_pool',
        'leisure=water_park',
        'sport=water_ski',
        'sport=wakeboarding',
        'amenity=public_bath',
    ],
    'historic': ['historic=aqueduct',
        'historic=archaeological_site',
        'historic=building',
        'historic=castle',
        'historic=castle_wall',
        'historic=church',
        'historic=city_gate',
        'historic=monument',
        'historic=ruins',
    ],
    'art': ['tourism=artwork',
        'amenity=arts_centre',
        'tourism=gallery',
        'tourism=museum',
    ],
    'shop': ['shop=gift',
        'shop=books',
        'shop=anime',
        'shop=music',
        'shop=art',
        'shop=antiques',
        'shop=perfumery',
        'shop=herbalist',
        'shop=second_hand',
        'shop=clothes',
        'shop=health_food',
        'shop=farm',
    ],
    'excursion' : ['tourism=viewpoint',
        'leisure=park',
        'tourism=attraction',
    ],
    'fun' : ['amenity=casino',
        'amenity=cinema',
        'amenity=nightclub',
        'amenity=planetarium',
        'amenity=theatre',
        'leisure=amusement_arcade',
        'leisure=escape_game',
        'tourism=theme_park',
        'leisure=bandstand',
    ],
};

/**
 * Converts a nominatim formated boundingbox array to a cardinal object
 * @example "boundingbox": ["48.815", "48.902", "2.224", "2.469"]
                // returns {south :  "48.815", north: "48.902", west:"2.224", east: "2.469"}
                bboxToCardinalPoints(bbox)
 * @param {string[]} bbox An array of string representing a boundingbox
 * @returns {object} An object with cardinal points as properties
 */
function bboxToCardinalPoints(bbox) {
    const cardinal_point = {
        south: bbox[0],
        north: bbox[1],
        west: bbox[2],
        east: bbox[3],
    };
    return cardinal_point;
}

/**
 * Converts a cardinal points object to an overpass formated string  South, West, North, East
 * @example cp {south :  "45.707", north: "48.902", west:"4.771", east: "4.898"}
              // returns 45.707,4.771,48.902 4.898
              cardinalPointToBboxstr(cp)
 * @param {object} cp A cardinal points object
 * @returns {string} An overpass formated string
 */
function cardinalPointToBboxstr(cp) {
    return [cp.south, cp.west, cp.north, cp.east].join();
}

/**
 * Returns a string of available_filters values for the overpassapi
 * @param {string[]} filters
 * @return {string}
 */
function filtersToOverpassStr(filters) {
    let str = '';
    for (const filter of filters) {
        const values = available_filters[filter];
        // @todo use reduce ?
        for (const value of values) {
            str += `node[${value}];out;`;
        }
    }
    return str;
}

/**
 * @param {object} cardinal_points object
 * @param {string[]} An array of desired filters
 * @return {string} a full overpass api url
 */
function overpassURL(cp, filters) {
    const bbox = cardinalPointToBboxstr(cp);
    const overpass_filters = filtersToOverpassStr(filters);
    const overpass_query = `[out:json][timeout:25][bbox:${bbox}];${overpass_filters}`;
    const overpass_url = `http://overpass-api.de/api/interpreter?data=${overpass_query}`;
    return overpass_url;
}

/**
 * Group elements nodes by their category.
 * A node belong to a category (category.key) if one of its tag matches category.values()
 * @param {object[]} elements Array of [OSM node](https://wiki.openstreetmap.org/wiki/Node)
 * @param {object} categories a filter object @see  {@link available_filters}
 * @returns {object} {'category1': [nodes], 'category2': [nodes]}
  */
function groupByCategory(elements, categories) {
    const grouped_elements = {
        'food' : [],
        'pub' : [],
        'aquatic' : [],
        'historic' : [],
        'art' : [],
        'shop' : [],
        'excursion' : [],
        'fun' : [],
    };

    for (const element of elements) {
        const found = findGroup(element.tags, categories);
        if (found) {
            grouped_elements[found].push(element);
        }
    }

    return grouped_elements;
}

/**
 * @todo Add description here
 * @param {object[]} tags
 * @param {*} categories
 * @returns {string|undefined} the category name found
 */
function findGroup(tags, categories) {
    for (const [key, value] of Object.entries(tags)) {
        for (const [categ_key, categ_values] of Object.entries(categories)) {
            const found = categ_values.find(element => {
                const splitted = element.split('=');
                return (key == splitted[0] && value == splitted[1]);
            });
            if (found) {
                return categ_key;
            }
        }
    }
}


module.exports = {
    available_filters,
    bboxToCardinalPoints,
    cardinalPointToBboxstr,
    filtersToOverpassStr,
    overpassURL,
    groupByCategory,
};
