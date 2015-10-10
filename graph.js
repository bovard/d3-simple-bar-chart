var steps = [19938, 4964, 3231, 3327, 5234, 26117, 11445, 4140, 12274, 10078, 9759, 3993, 3896, 11564, 3126, 7345, 4482, 9230, 25756, 11367, 13453, 14021, 8734, 9012, 12012, 25012, 11781, 10127, 6462, 7895];

// define the scale
var x = d3.scale.linear().domain([0, d3.max(steps)]).range([0, 820]);

d3.select(".chart")
	.selectAll("div")
       .data(steps)
    .enter().append("div")
       .style("width", function(d) { console.log(d); return x(d) + "px"; })
       .text(function(d, i) { ; return "9/" + (i + 1) + " - " + d; })
