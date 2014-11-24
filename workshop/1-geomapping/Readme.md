# Geomapping

A collection of code examples for Workshop 1: Geomapping.

1. [D3.js: Begin](d3-simpel.html)
2. [D3.js: Update](d3-update.html)
3. [Stijl](stijl.html)
4. [Marker](marker.html)
5. [Kleur](kleur.html)
6. [Plot](plot.html)

Handy tools for the assignment:

- [Styler](http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html) - Style your maps;
- [GeoCorder](https://www.cocoanetics.com/apps/geocorder/) — free iOS app to track your movement;
- [toGeoJSON](http://mapbox.github.io/togeojson/) — to transform `.gpx` or `.kml` files to by d3.js understandable GeoJSON;
- [d3.js API Reference](https://github.com/mbostock/d3/wiki/API-Reference) — to learn how to use d3.js;
- [d3.js Source Code](https://github.com/mbostock/d3/tree/master/src) - best way to learn d3.js is by reading the source;
- [Google Maps API Reference](https://developers.google.com/maps/documentation/javascript/reference) - best way to learn google.maps.

## Submission

Submit your plot on [dataviz.nl](http://dataviz.nl) before Sunday, 30 November 23:59. Note: submissions opens on Wednesday.

> **Important: submissions can only include one (1) file, embed your JavaScript code and images in an HTML document.**
> For the selfie; you can also upload it somewhere such as your own web server or something like [tinypic](http://tinypic.com).

## Hints for higher marks

All the building blocks you need for the assignment are in this directory. Some hints for higher marks include the following:

- You could automatically detect which [zoom](plot.js#L697) should be used by Google Maps;
- Find a way to automatically clean your data (your phone’s GPS sensor isn’t that great, especially in cities);
- Get [EXIF-data](http://en.wikipedia.org/wiki/Exchangeable_image_file_format) in JavaScript from selfie automatically and position your selfie at its geolocation;
- Most of all: do something “creative” and “interesting”! :grinning:
