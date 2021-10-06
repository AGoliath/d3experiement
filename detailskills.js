"use strict"




let sampleData = {
    frontend: {
        data: [
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "Angular"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "React"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "Vue"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "CI/CD"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "Testing"
            }
        ],
        quadrant: [0 * Math.PI, 0.5 * Math.PI]
    },
    cloud: {
        data: [
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "AWS"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "GCP"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "Azure"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "Container"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "IaC"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "CI/CD"
            }
        ],
        quadrant: [1 * Math.PI, 1.5 * Math.PI]
    },
    backend: {
        data: [
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "Java"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "ETL Tooling"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "Node"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "CI/CD"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "Testing"
            }
        ],
        quadrant: [1.5 * Math.PI, 2 * Math.PI]
    },
    culture: {
        data: [
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "Teaching"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "Leadership"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "Engagement"
            },
            {
                Value: Math.floor(5 + Math.random() * 90),
                Country: "Public Relations"
            },
        ],
        quadrant: [0.5 * Math.PI, 1 * Math.PI]
    }
};

let mainDataRaw = {}

Object.keys(sampleData).forEach((label) => {
    let dataBars = sampleData[label].data;
    let quadrant = sampleData[label].quadrant;
    mainDataRaw[label] = 0;
    let quadMax = 0;
    dataBars.forEach((dp) => {
        mainDataRaw[label] += dp.Value;
        quadMax += 60;
    })
    mainDataRaw[label] = Math.floor(100*(mainDataRaw[label]/quadMax));
});

 

var mainData = [
				
    { name: 'IS',
        axes: [
            {axis: 'Frontend', value: mainDataRaw["frontend"]},
            {axis: 'Culture', value: mainDataRaw["culture"]},
            {axis: 'Cloud', value: mainDataRaw["cloud"]},
             {axis: 'Backend', value: mainDataRaw["backend"]}
        ]
    },
    { name: 'WANT',
        axes: [
            {axis: 'Frontend', value: Math.floor(mainDataRaw["frontend"]*(1+(Math.floor(Math.random()*10)/10)))},
            {axis: 'Culture', value:  Math.floor(mainDataRaw["culture"]*(1+(Math.floor(Math.random()*10)/10)))},
            {axis: 'Cloud', value: Math.floor(mainDataRaw["cloud"]*(1+(Math.floor(Math.random()*10)/10)))},
             {axis: 'Backend', value:  Math.floor(mainDataRaw["backend"]*(1+(Math.floor(Math.random()*10)/10)))}
        ]
    },
];

console.log(mainData);


Object.keys(sampleData).forEach((label) => {
    let dataBars = sampleData[label].data;
    let quadrant = sampleData[label].quadrant;
    // set the dimensions and margins of the graph
    var margin = { top: 0, right: 0, bottom: 0, left: 0 },
        width = 500,
        height = 500,
        innerRadius = 10,
        outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

    // append the svg object
    var svg = d3.select("#detailskills-"+label)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")");



    // Scales
    var x = d3.scaleBand()
        .range(quadrant)    // X axis goes from 0 to 2pi = all around the circle.
        .align(0)                  // This does nothing
        .domain(dataBars.map(function (d) { return d.Country; })); // The domain of the X axis is the list of states.
    var y = d3.scaleRadial()
        .range([innerRadius, outerRadius])   // Domain will be define later.
        .domain([0, 100]); // Domain of Y is from 0 to the max seen in the data

    // Add the bars
    svg.append("g")
        .selectAll("path")
        .data(dataBars)
        .enter()
        .append("path")
        .attr("fill", "#69b3a2")
        .style("fill-opacity", 0.3)
        .attr("d", d3.arc()     // imagine your doing a part of a donut plot
            .innerRadius(innerRadius)
            .outerRadius(function (d) { return y(d['Value']); })
            .startAngle(function (d) { return x(d.Country); })
            .endAngle(function (d) { return x(d.Country) + x.bandwidth(); })
            .padAngle(0.01)
            .padRadius(innerRadius))

    // Add the labels
    svg.append("g")
        .selectAll("g")
        .data(dataBars)
        .enter()
        .append("g")
        .attr("text-anchor", function (d) { return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
        .attr("transform", function (d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")" + "translate(" + (y(d['Value']) + 10) + ",0)"; })
        .append("text")
        .text(function (d) { return (d.Country) })
        .attr("transform", function (d) { return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
        .style("font-size", "11px")
        .attr("alignment-baseline", "middle")


});


