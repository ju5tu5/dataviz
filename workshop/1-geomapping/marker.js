'use strict';

/**
 * Create `map`.
 *
 * @see:
 *   https://developers.google.com/maps/
 *   documentation/javascript/reference#Map
 */

var map;

map = new google.maps.Map(document.querySelector('.map'), {
    'zoom': 18
});

/**
 * Create a selfie.
 *
 * @see
 *   https://developers.google.com/maps/documentation/
 *   javascript/reference#Marker
 */

var marker;

marker = new google.maps.Marker({
    'map': map,
    'icon': 'selfie.jpg'
});

/**
 * Watch geo-location.
 *
 * @see
 *   https://developer.mozilla.org/Web/API/
 *   Geolocation/Using_geolocation
 */

navigator.geolocation.watchPosition(function(position) {
    var point;

    point = new google.maps.LatLng(
        position.coords.latitude, position.coords.longitude
    );

    marker.setPosition(point);
    map.setCenter(point);
});
