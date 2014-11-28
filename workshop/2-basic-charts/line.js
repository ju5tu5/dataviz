'use strict';

/**
 * This is a modified, commented, version of:
 *
 *   http://bl.ocks.org/mbostock/3883245
 */

/**
 * Define canvas size
 */

var margin,
    width,
    height;

margin = {
    'top': 20,
    'right': 20,
    'bottom': 30,
    'left': 50
};

width = 960 - margin.left - margin.right;
height = 500 - margin.top - margin.bottom;

/**
 * Define function to convert strings to dates.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/
 *   Time-Formatting#format
 *
 *   https://github.com/mbostock/d3/wiki/
 *   Time-Formatting#parse
 */

var parseDate = d3.time.format('%d-%b-%y').parse;

/**
 * Define scale for x-axis.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/
 *   Time-Scales#scale
 */

var x = d3.time.scale().range([0, width]);

/**
 * Define scale for y-axis.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/
 *   Quantitative-Scales#linear
 */

var y = d3.scale.linear().range([height, 0]);

/**
 * Define x-axis and y-axis.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/
 *   SVG-Axes#axis
 */

var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom');

var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left');

/**
 * Define `line`. Line is a function which transforms
 * data into a valid value for `<path>`s `d` attribute.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/SVG-Shapes#line
 *
 *   https://developer.mozilla.org/Web/SVG/Attribute/d
 *
 * @param {Array.<{date: Date, close: number}>} data
 * @return {string} stringified list
 */

var line = d3.svg.line()
    .x(function (d) {
        return x(d.date);
    })
    .y(function (d) {
        return y(d.close);
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
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr(
        'transform',
        'translate(' + margin.left + ',' + margin.top + ')'
    );

/**
 * Clean data. Data is currently a list of objects,
 * each containing both `date` and `close` properties.
 *
 * Here we transform these properties (they are currently
 * strings) to dates (in the case of `date`) and numbers
 * (in the case of `close`).
 */

function clean(d) {
    d.date = parseDate(d.date);
    d.close = Number(d.close);

    return d;
}

/**
 * Get the data.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/CSV#tsv
 */

d3.tsv('line.tsv', clean, function (error, data) {
    /**
     * Add a domain for the x-axis.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/
     *   Time-Scales#domain
     */

    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));

    /**
     * Add a domain for the y-axis.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/
     *   Quantitative-Scales#linear_domain
     */

    y.domain(d3.extent(data, function (d) {
        return d.close;
    }));

    /**
     * Add the x-axis to `<svg>`.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/
     *   Selections#call
     */

    $svg.append('g')
        .attr('class', 'axis axis-x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);

    /**
     * Add the y-axis to `<svg>`.
     *
     * Additionally add a `price` label to this axis.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/
     *   Selections#call
     */

    $svg.append('g')
        .attr('class', 'axis axis-y')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('Price ($)');

    /**
     * Add the data.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/
     *   Selections#datum
     */

    $svg.append('path')
        .datum(data)
        .attr('class', 'line')
        .attr('d', line);
});
