"use strict"
//////////////////////////////////////////////////////////////
			//////////////////////// Set-Up //////////////////////////////
			//////////////////////////////////////////////////////////////

			var margin = { top: 0, right: 0, bottom: 0, left: 0 };

			//////////////////////////////////////////////////////////////
			////////////////////////// Data //////////////////////////////
			//////////////////////////////////////////////////////////////



			var radarChartOptions = {
				w: 500,				//Width of the circle
				h: 500,				//Height of the circle
				margin: {top: 0, right: 0, bottom: 0, left: 0}, //The margins of the SVG
				levels: 3,				//How many levels or inner circles should there be drawn
				maxValue: 100, 			//What is the value that the biggest circle will represent
				labelFactor: 1.2, 	//How much farther than the radius of the outer circle should the labels be placed
				wrapWidth: 640, 		//The number of pixels after which a label needs to be given a new line
				opacityArea: 0.3, 	//The opacity of the area of the blob
				dotRadius: 4, 			//The size of the colored circles of each blog
				opacityCircles: 0.1, 	//The opacity of the circles of each blob
				strokeWidth: 2, 		//The width of the stroke around each blob
				roundStrokes: true,	//If true the area and stroke will follow a round path (cardinal-closed)
				color: d3.scaleOrdinal(d3.schemeCategory10),	//Color function,
				legend: { title: 'Skillset', translateX: 100, translateY: 40 },
			};

			// Draw the chart, get a reference the created svg element :
			let svg_radar1 = RadarChart("#radarChart", mainData, radarChartOptions);
 