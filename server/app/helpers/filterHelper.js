// mapping filters with OSM keywords
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
 * "boundingbox": [
        "48.8155755",S
        "48.902156",N
        "2.224122",W 
        "2.4697602"E
      ],
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
    // "45.7073666,4.7718134,45.8082628,4.8983774"; South, west, north, east
    function cardinalPointToBboxstr(cp) {
        return [cp.south, cp.west, cp.north, cp.east].join()
    };
    
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
 * cp cardinal_points object
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
