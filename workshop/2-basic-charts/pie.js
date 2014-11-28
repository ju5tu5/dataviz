'use strict';

/**
 * This is a modified, commented, version of:
 *
 *   http://bl.ocks.org/mbostock/3887235
 */

/**
 * Define canvas size.
 */

var width = 960;
var height = 500;

/**
 * Define pie radius: half of either the width or the
 * height, whichever is lowest.
 */

var radius = Math.min(width, height) / 2;

/**
 * Define colors.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/
 *   Ordinal-Scales#ordinal
 */

var color = d3.scale.ordinal()
    .range([
        '#98abc5',
        '#8a89a6',
        '#7b6888',
        '#6b486b',
        '#a05d56',
        '#d0743c',
        '#ff8c00'
    ]);

/**
 * Define arc.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/SVG-Shapes#arc
 */

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

/**
 * Define layout.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/Pie-Layout#pie
 */

var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
        return d.population;
    });

/**
 * Add an `<svg>` element to document's body, and a `<g>`
 * element to that `<svg>`.
 *
 * @type {Array}
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/Selections
 */

var $svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr(
        'transform',
        'translate(' + width / 2 + ',' + height / 2 + ')'
    );

/**
 * Clean data. Data is currently a list of objects,
 * each containing both `letter` and `frequency`
 * properties.
 *
 * Here we transform the `population` properties
 * (currently `string`) to `number`s.
 */

function clean(data) {
    data.population = Number(data.population);

    return data;
}

/**
 * Get the data.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/CSV#csv
 */

d3.csv('pie.csv', clean, function (error, data) {
    /**
     * Add `<g>` elements to `$svg`, and bind the data.
     *
     * @type {Array}
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/Selections
     */

    var $g = $svg.selectAll('g.arc')
        .data(pie(data))
        .enter()
            .append('g')
            .attr('class', 'arc');
    /**
     * Add `<path>` elements to `$g`, add a color, and
     * draw the shape.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/Selections
     */

    $g.append('path')
        .attr('d', arc)
        .style('fill', function (d) {
            return color(d.data.age);
        });

    /**
     * Add `<text>` elements to `$g` containg the `age`
     * attributes.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/Selections
     */

    $g.append('text')
        .attr('transform', function (d) {
            return 'translate(' + arc.centroid(d) + ')';
        })
        .attr('dy', '.35em')
        .style('text-anchor', 'middle')
        .text(function (d) {
            return d.data.age;
        });
});
