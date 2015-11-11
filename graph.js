var steps = [19938, 4964, 3231, 3327, 5234, 26117, 11445, 4140, 12274, 10078, 9759, 3993, 3896, 11564, 3126, 7345, 4482, 9230, 25756, 11367, 13453, 14021, 8734, 9012, 12012, 25012, 11781, 10127, 6462, 7895];
var max = Math.max.apply(Math, steps);
var min = Math.min.apply(Math, steps);
var maxIDX = steps.indexOf(max);
var minIDX = steps.indexOf(min);
console.log(max, min);
console.log(maxIDX, minIDX);

// followed tutorial from http://bl.ocks.org/mbostock/7322386#index.html

// define the scale
var x = d3.scale.linear().domain([0, d3.max(steps)]).range([0, 820]);

d3.select(".chart")
	.selectAll("div")
       .data(steps)
    .enter().append("div")
       .style("width", "100px")
       .attr("class", "barClass")
       .style("background-color", "steelblue")
       .text(function(d, i) { ; return "9/" + (i + 1) + " - " + d; })
       .transition()
	      .duration(1000)
	      .style("width", function(d) { return x(d) + "px"; })


function showMaxMin() {
	d3.selectAll("div.barClass")
		.transition()
		.duration(500)
		.style("background-color", function(d, i) {
			if (i === maxIDX) {
				return "red"
			} else if (i === minIDX) {
				return "blue"
			}
			return "steelblue"
		})
}