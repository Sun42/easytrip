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
        ],
        'fun' : ['amenity=casino',
                'amenity=cinema',
                'amenity=nightclub',
                'amenity=planetarium',
                'amenity=theatre',
                'leisure=amusement_arcade',
                'leisure=escape_game',
                'tourism=attraction',
                'tourism=theme_park',
                'leisure=bandstand',
        ]
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
                east: bbox[3]
        };
        return cardinal_point;
};

/**
 * Converts a cardinal points object to an overpass formated string  South, West, North, East
 * @example cp {south :  "45.707", north: "48.902", west:"4.771", east: "4.898"}
              // returns 45.707,4.771,48.902 4.898
              cardinalPointToBboxstr(cp)
 * @param {object} cp A cardinal points object
 * @returns {string} An overpass formated string
 */
function cardinalPointToBboxstr(cp) {
    return [cp.south, cp.west, cp.north, cp.east].join()
};

/**
 * Returns a string of available_filters values for the overpassapi
 * @param {string[]} filters 
 * @return {string}
 */
function filtersToOverpassStr(filters) {
    str = "";
    for (filter of filters) {
        values = available_filters[filter];
        for (value of values) {
            str += `node[${value}];out;`
        }
    }
    return str;
};

/**
 * @param {object} cardinal_points object
 * @param {string[]} An array of desired filters
 * @return {string} a full overpass api url
 */
function overpassURL(cp, filters) {
        const bbox = cardinalPointToBboxstr(cp);
        const overpass_filters = filtersToOverpassStr(filters);
        overpass_query = `[out:json][timeout:25][bbox:${bbox}];${overpass_filters}`;
        overpass_url = `http://overpass-api.de/api/interpreter?data=${overpass_query}`;
        return overpass_url;
    };

module.exports = {
        available_filters,
        bboxToCardinalPoints,
        cardinalPointToBboxstr,
        filtersToOverpassStr,
        overpassURL,
};
