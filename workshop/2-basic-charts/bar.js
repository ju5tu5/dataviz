'use strict';

/**
 * This is a modified, commented, version of:
 *
 *   http://bl.ocks.org/mbostock/3885304
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
 * Define scale for x-axis.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/
 *   Ordinal-Scales#ordinal
 */

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

/**
 * Define scale for y-axis.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/
 *   Quantitative-Scales#linear
 */

var y = d3.scale.linear()
    .range([height, 0]);

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
    .orient('left')
    .ticks(10, '%');

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
 * each containing both `letter` and `frequency`
 * properties.
 *
 * Here we transform the `frequency` property (currently
 * `string`) to `number`s.
 */

function clean(d) {
    d.frequency = Number(d.frequency);

    return d;
}

/**
 * Get the data.
 *
 * @see
 *   https://github.com/mbostock/d3/wiki/CSV#tsv
 */

d3.tsv('bar.tsv', clean, function (error, data) {
    /**
     * Add a domain for the x-axis.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/
     *   Ordinal-Scales#ordinal_domain
     */

    x.domain(data.map(function (d) {
        return d.letter;
    }));

    /**
     * Add a domain for the y-axis.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/
     *   Quantitative-Scales#linear_domain
     */

    y.domain([0, d3.max(data, function (d) {
        return d.frequency;
    })]);

    /**
     * Add the x-axis to `<svg>`.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/
     *   Selections#call
     */

    $svg
        .append('g')
        .attr('class', 'axis axis-x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);

    /**
     * Add the y-axis to `<svg>`.
     *
     * Additionally add a `frequency` label to this axis.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/
     *   Selections#call
     */

    $svg
        .append('g')
        .attr('class', 'axis axis-y')
        .call(yAxis)
        .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71em')
            .style('text-anchor', 'end')
            .text('Frequency');

    /**
     * Add the data.
     *
     * @see
     *   https://github.com/mbostock/d3/wiki/
     *   Selections#data
     */

    $svg
        .selectAll('.bar')
        .data(data)
        .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', function (d) {
                return x(d.letter);
            })
            .attr('width', x.rangeBand())
            .attr('y', function (d) {
                return y(d.frequency);
            })
            .attr('height', function (d) {
                return height - y(d.frequency);
            });
});
