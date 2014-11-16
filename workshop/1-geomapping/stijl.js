'use strict';

/**
 * Create `map`.
 *
 * @see
 *   https://developers.google.com/maps/
 *   documentation/javascript/reference#Map
 *
 * @see
 *   http://gmaps-samples-v3.googlecode.com/svn/
 *   trunk/styledmaps/wizard/index.html
 */

new google.maps.Map(document.querySelector('.map'), {
    'zoom': 13,
    'mapTypeId': google.maps.MapTypeId.ROADMAP,
    'center': new google.maps.LatLng(52.37, 4.89),
    'streetViewControl': false,
    'mapTypeControl': false,
    'styles': [
        {
            'stylers': [
                {
                    'saturation': -100
                }
            ]
        },
        {
            'featureType': 'administrative',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'road',
            'stylers': [
                {
                    'visibility': 'simplified'
                }
            ]
        },
        {
            'featureType': 'poi',
            'stylers': [
                {
                    'visibility': 'simplified'
                }
            ]
        },
        {
            'featureType': 'transit',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'water',
            'stylers': [
                {
                    'visibility': 'simplified'
                }
            ]
        },
        {
            'featureType': 'landscape',
            'stylers': [
                {
                    'visibility': 'simplified'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'labels',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        }
    ]
});
