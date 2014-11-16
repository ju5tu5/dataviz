'use strict';

/**
 * Define a magic size, to fill the overlay on screen.
 */

var MAGIC_SIZE;

MAGIC_SIZE = 4000;

/**
 * Data.
 *
 * `data` is a GeoJSON.
 *
 * @see
 *   http://geojson.org/geojson-spec.html
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/Geo-Paths#path
 */

var data;

data = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "08/11/2014 2:53 pm",
                "time": "2014-11-08T1:53:17 pmZ"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        4.362051878,
                        52.008466772,
                        -2
                    ],
                    [
                        4.362186659,
                        52.008501012,
                        -2
                    ],
                    [
                        4.362321859,
                        52.008542754,
                        -2
                    ],
                    [
                        4.362419844,
                        52.008568863,
                        -1
                    ],
                    [
                        4.362731315,
                        52.008621628,
                        -1
                    ],
                    [
                        4.362851009,
                        52.008658215,
                        0
                    ],
                    [
                        4.362961231,
                        52.00869015,
                        -1
                    ],
                    [
                        4.363030214,
                        52.008639271,
                        -2
                    ],
                    [
                        4.362900881,
                        52.008521631,
                        -3
                    ],
                    [
                        4.362966847,
                        52.008440243,
                        -2
                    ],
                    [
                        4.363044631,
                        52.008375158,
                        -6
                    ],
                    [
                        4.363088887,
                        52.008311916,
                        -4
                    ],
                    [
                        4.363101209,
                        52.008241131,
                        -1
                    ],
                    [
                        4.363081092,
                        52.008166448,
                        -1
                    ],
                    [
                        4.36305075,
                        52.008090466,
                        -1
                    ],
                    [
                        4.362931643,
                        52.008045078,
                        -1
                    ],
                    [
                        4.362830808,
                        52.007993655,
                        -1
                    ],
                    [
                        4.36273559,
                        52.007957781,
                        -1
                    ],
                    [
                        4.362595193,
                        52.007947722,
                        0
                    ],
                    [
                        4.36246301,
                        52.007938041,
                        -1
                    ],
                    [
                        4.362419592,
                        52.008005222,
                        -1
                    ],
                    [
                        4.362540292,
                        52.008024836,
                        -1
                    ],
                    [
                        4.362455131,
                        52.008043611,
                        -2
                    ],
                    [
                        4.36256879,
                        52.008048054,
                        -1
                    ],
                    [
                        4.362693345,
                        52.008068422,
                        -1
                    ],
                    [
                        4.362726286,
                        52.008129191,
                        0
                    ],
                    [
                        4.362787139,
                        52.00818141,
                        0
                    ],
                    [
                        4.362843884,
                        52.008208693,
                        0
                    ],
                    [
                        4.362865677,
                        52.008265606,
                        0
                    ],
                    [
                        4.362904569,
                        52.008320675,
                        1
                    ],
                    [
                        4.362956369,
                        52.008381612,
                        0
                    ],
                    [
                        4.363022754,
                        52.008454325,
                        0
                    ],
                    [
                        4.363058964,
                        52.008531313,
                        0
                    ],
                    [
                        4.363124678,
                        52.008597865,
                        1
                    ],
                    [
                        4.363218136,
                        52.008647989,
                        1
                    ],
                    [
                        4.363299692,
                        52.008708925,
                        0
                    ],
                    [
                        4.363383343,
                        52.00877795,
                        1
                    ],
                    [
                        4.363476885,
                        52.008821829,
                        1
                    ],
                    [
                        4.363582246,
                        52.008845299,
                        1
                    ],
                    [
                        4.363656174,
                        52.008883772,
                        1
                    ],
                    [
                        4.363742676,
                        52.008913988,
                        1
                    ],
                    [
                        4.363785759,
                        52.008935949,
                        -1
                    ],
                    [
                        4.36369054,
                        52.008976056,
                        -1
                    ],
                    [
                        4.363663131,
                        52.009030413,
                        0
                    ],
                    [
                        4.363564057,
                        52.009065282,
                        -1
                    ],
                    [
                        4.363464983,
                        52.009147676,
                        -2
                    ],
                    [
                        4.363384685,
                        52.009211462,
                        -1
                    ],
                    [
                        4.363294747,
                        52.00928275,
                        -1
                    ],
                    [
                        4.363232553,
                        52.009351943,
                        0
                    ],
                    [
                        4.363143789,
                        52.009428511,
                        0
                    ],
                    [
                        4.363058629,
                        52.009457303,
                        0
                    ],
                    [
                        4.363064999,
                        52.00943551,
                        -1
                    ],
                    [
                        4.363163235,
                        52.009411748,
                        -1
                    ],
                    [
                        4.363217968,
                        52.009366443,
                        -3
                    ],
                    [
                        4.363271277,
                        52.009317242,
                        -2
                    ],
                    [
                        4.363340177,
                        52.009244948,
                        -1
                    ],
                    [
                        4.363415949,
                        52.009165613,
                        -1
                    ],
                    [
                        4.363497673,
                        52.009107946,
                        -1
                    ],
                    [
                        4.363568835,
                        52.009052793,
                        -1
                    ],
                    [
                        4.363641087,
                        52.00900007,
                        -3
                    ],
                    [
                        4.363709148,
                        52.008957742,
                        -2
                    ],
                    [
                        4.363776036,
                        52.008914785,
                        -3
                    ],
                    [
                        4.363885671,
                        52.008931255,
                        -2
                    ],
                    [
                        4.363971418,
                        52.008941397,
                        -4
                    ],
                    [
                        4.364049789,
                        52.008924424,
                        -3
                    ],
                    [
                        4.364117514,
                        52.008928657,
                        -1
                    ],
                    [
                        4.364207033,
                        52.008895339,
                        -1
                    ],
                    [
                        4.364277776,
                        52.008848442,
                        -3
                    ],
                    [
                        4.364337539,
                        52.00880033,
                        -2
                    ],
                    [
                        4.364430998,
                        52.008731891,
                        -2
                    ],
                    [
                        4.364530826,
                        52.008673805,
                        -3
                    ],
                    [
                        4.364590086,
                        52.008600337,
                        -3
                    ],
                    [
                        4.364622273,
                        52.008540658,
                        -3
                    ],
                    [
                        4.36456955,
                        52.008589483,
                        -1
                    ],
                    [
                        4.364501406,
                        52.008613832,
                        0
                    ],
                    [
                        4.36442446,
                        52.00865922,
                        0
                    ],
                    [
                        4.364413396,
                        52.008735789,
                        0
                    ],
                    [
                        4.364365786,
                        52.008816088,
                        -2
                    ],
                    [
                        4.364298731,
                        52.008863948,
                        -1
                    ],
                    [
                        4.364198986,
                        52.00888461,
                        -1
                    ],
                    [
                        4.364091195,
                        52.008892782,
                        -1
                    ],
                    [
                        4.363976279,
                        52.00889823,
                        0
                    ],
                    [
                        4.363877038,
                        52.008932931,
                        1
                    ],
                    [
                        4.363969071,
                        52.008999735,
                        1
                    ],
                    [
                        4.364062361,
                        52.009037579,
                        -1
                    ],
                    [
                        4.364146767,
                        52.009095037,
                        0
                    ],
                    [
                        4.364240728,
                        52.009154004,
                        1
                    ],
                    [
                        4.364284985,
                        52.009106814,
                        1
                    ],
                    [
                        4.36438431,
                        52.009079782,
                        1
                    ],
                    [
                        4.364471314,
                        52.009101408,
                        2
                    ],
                    [
                        4.364469554,
                        52.009148304,
                        1
                    ],
                    [
                        4.364410797,
                        52.009213851,
                        0
                    ],
                    [
                        4.364301581,
                        52.009239961,
                        -1
                    ],
                    [
                        4.364194963,
                        52.009227765,
                        0
                    ],
                    [
                        4.364143247,
                        52.009156938,
                        -1
                    ],
                    [
                        4.364167722,
                        52.009079824,
                        0
                    ]
                ]
            }
        }
    ]
};

/**
 * Create `overlay`.
 *
 * @see:
 *   https://developers.google.com/maps/
 *   documentation/javascript/reference#OverlayView
 */

var overlay;

overlay = new google.maps.OverlayView();

/**
 * Project a lat-long tuple
 *
 * @param {{0: number, 1: number}} coordinates
 * @param {{0: number, 1: number}} - Adjusted coordinates.
 */

function project(coordinates) {
    coordinates = overlay.getProjection().fromLatLngToDivPixel(
        new google.maps.LatLng(coordinates[1], coordinates[0])
    );

    return [
        coordinates.x + MAGIC_SIZE,
        coordinates.y + MAGIC_SIZE
    ];
}

/**
 * `svg` d3 selection.
 */

var $svg;
var $adminDivisions;

/**
 * Add data to map.
 *
 * @this {google.maps.OverlayView}
 */

function add() {
  /**
   * Add an `<svg>` element.
   */

  $svg = d3
      .select(overlay.getPanes().overlayLayer)
      .append('div')
      .attr('class', 'overlay')
      .append('svg');

  /**
   * Oversize `$svg`.
   */

  $svg[0][0].style.top = (-MAGIC_SIZE) + 'px';
  $svg[0][0].style.left = (-MAGIC_SIZE) + 'px';
  $svg[0][0].style.width = (2 * MAGIC_SIZE) + 'px';
  $svg[0][0].style.height = (2 * MAGIC_SIZE) + 'px';

  /**
   * Add `<g>` elements.
   */

  $adminDivisions = $svg
      .append('g')
      .attr('class', 'AdminDivisions');
}

/**
 * Draw data on a map.
 *
 * @this {google.maps.OverlayView}
 */

function draw() {
    var path;

    /**
     * Create a path-generator.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/
     *   Geo-Paths#path_projection
     */

    path = d3.geo.path().projection(project);

    /**
     * Draw the path.
     */

    $adminDivisions
        .selectAll('path')
        .data(data.features)
        .attr('d', path)
        .enter()
            .append('svg:path')
            .attr('d', path);
}

/**
 * Attach `draw` and `add` methods.
 */

overlay.draw = draw;
overlay.onAdd = add;

/**
 * Get the map DOM Node.
 */

var $map;

$map = document.querySelector('.map');

/**
 * Get the middle of the map.
 */

var coordinates,
    latitude,
    longitude;

coordinates = data.features[0].geometry.coordinates;

/**
 * Add `b` to `a`.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

function sum(a, b) {
    return a + b;
}

/**
 * Factory: Get the item at `n` in `list`.
 *
 * @param {number} n
 * @return {function(Array.<*>): *}
 */

function at(n) {
    /**
     * @param {Array.<*>} list
     * @return {*}
     */

    return function (list) {
        return list[n];
    };
}

longitude = coordinates.map(at(0)).reduce(sum) / coordinates.length;

latitude = coordinates.map(at(1)).reduce(sum) / coordinates.length;

/**
 * Create `map`.
 *
 * @see:
 *   https://developers.google.com/maps/
 *   documentation/javascript/reference#Map
 */

var map;

map = new google.maps.Map($map, {
    'zoom': 17,
    'mapTypeId': google.maps.MapTypeId.ROADMAP,
    'center': new google.maps.LatLng(latitude, longitude),
    'streetViewControl': false,
    'mapTypeControl': false
});

/**
 * Attach `map` to `overlay`.
 */

var lastPoint;

lastPoint = coordinates[coordinates.length - 1];

lastPoint = new google.maps.LatLng(lastPoint[1], lastPoint[0]);

overlay.setMap(map);
