'use strict';

function update(data) {
    var $p;

    // Update...
    $p = d3
        .select('body')
        .selectAll('p')
        .data(data)
        .text(String);

    $p.transition()
            .duration(500)
            .style('color', 'gray');

    // Enter...
    $p
        .enter()
        .append('p')
        .text(String)
        .transition()
            .duration(500)
            .style('color', 'green');

    // Exit...
    $p
        .exit()
        .transition()
            .duration(500)
            .style('color', 'red')
        .remove();

    return $p;
}

update([
    'Alfred',
    'Betrand',
    'Cees',
    'Dick',
    'Eric',
    'Ferdinand',
    'Gerard',
    'Henry'
]);
