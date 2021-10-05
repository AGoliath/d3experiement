"use strict"
//////////////////////////////////////////////////////////////
			//////////////////////// Set-Up //////////////////////////////
			//////////////////////////////////////////////////////////////

			var margin = { top: 0, right: 0, bottom: 0, left: 0 };

			//////////////////////////////////////////////////////////////
			////////////////////////// Data //////////////////////////////
			//////////////////////////////////////////////////////////////

			var data = [
				{ name: 'IS',
					axes: [
						{axis: 'Frontend', value: 42},
						{axis: 'Backend', value: 20},
						{axis: 'Cloud', value: 60},
						{axis: 'Company&Culture', value: 26}
					]
				},
				{ name: 'WANT',
					axes: [
						{axis: 'Frontend', value: 62},
						{axis: 'Backend', value: 60},
						{axis: 'Cloud', value: 60},
						{axis: 'Company&Culture', value: 26}
					]
				}
			];


			var radarChartOptions = {
				w: 500,				//Width of the circle
				h: 500,				//Height of the circle
				margin: {top: 0, right: 0, bottom: 0, left: 0}, //The margins of the SVG
				levels: 3,				//How many levels or inner circles should there be drawn
				maxValue: 100, 			//What is the value that the biggest circle will represent
				labelFactor: 1.25, 	//How much farther than the radius of the outer circle should the labels be placed
				wrapWidth: 60, 		//The number of pixels after which a label needs to be given a new line
				opacityArea: 0.35, 	//The opacity of the area of the blob
				dotRadius: 4, 			//The size of the colored circles of each blog
				opacityCircles: 0.1, 	//The opacity of the circles of each blob
				strokeWidth: 2, 		//The width of the stroke around each blob
				roundStrokes: true,	//If true the area and stroke will follow a round path (cardinal-closed)
				color: d3.scaleOrdinal(d3.schemeCategory10),	//Color function,
				legend: { title: 'Organization XYZ', translateX: 100, translateY: 40 },
			};

			// Draw the chart, get a reference the created svg element :
			let svg_radar1 = RadarChart("#radarChart", data, radarChartOptions);
/*
			//////////////////////////////////////////////////////////////
			///// Second example /////////////////////////////////////////
			///// Chart legend, custom color, custom unit, etc. //////////
			//////////////////////////////////////////////////////////////
			var radarChartOptions2 = {
			  w: 290,
			  h: 350,
			  margin: margin,
			  maxValue: 60,
			  levels: 6,
			  roundStrokes: false,
			  color: d3.scaleOrdinal().range(["#AFC52F", "#ff6600"]),
				format: '.0f',
				legend: { title: 'Organization XYZ', translateX: 100, translateY: 40 },
				unit: '$'
			};

			// Draw the chart, get a reference the created svg element :
			let svg_radar2 = RadarChart(".radarChart2", data, radarChartOptions2);
			*/