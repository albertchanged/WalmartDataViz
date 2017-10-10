import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './search_bar';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions';

class ProductVisualization extends Component {

	constructor(props) {
		super(props);
	}

	renderProducts(product) {
		var names = product.items.map(product => product.name);
		var images = product.items.map(product => product.mediumImage);
		var itemIDs = product.items.map(product => product.itemId);
		var descriptions = product.items.map(product => product.shortDescription);
		var productUrls = product.items.map(product => product.productUrl);
		var prices = product.items.map(product => product.salePrice);
		// var formattedPrice = price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, price);
		var productArray = product.items;
		// console.log("This is the product array");
		// console.log(productArray);

		d3.select("body").select("svg").remove();

		var div = d3.select("body").append("div").attr("class", "toolTip");

		var axisMargin = 100,
			 margin = 40,
			 valueMargin = 4,
			 width = parseInt(d3.select('body').style('width'), 10),
			 height =  parseInt(d3.select('body').style('height'), 20),
			 barHeight = (height - axisMargin - margin*2) * 0.6/productArray.length,
			 barPadding = (height - axisMargin - margin*2) * 0.1/productArray.length,
			 data, bar, svg, scale, xAxis, labelWidth = 0;

		var max = d3.max(productArray, function(d) { return d.salePrice; });

		svg = d3.select("body").append("svg")
			.attr("width", width)
			.attr("height", height);

		bar = svg.selectAll("g")
			.data(productArray)
			.enter()
			.append("g");

		bar.attr("class", "bar")
			.attr("cx", 0)
			.attr("transform", function(d, i) {
				return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
			})

		bar.append("text")
		// .attr("class", "label")
		.attr("y", barHeight / 2)
		.attr("dy", ".35em")
		.attr("fill", "black")
		.attr("text-anchor", "start")
		.attr("transform", "translate(-5,0)")
		.text(function(d, i) {
			return "#" + (i + 1) + "  ";
		}).each(function() {
			labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
		})
		.attr("font", "40px sans-serif")
		.attr("text-anchor", "center");

		scale = d3.scaleLinear()
			.domain([0, max])
			.range([0, width - margin*2 - labelWidth]);

		xAxis = d3.axisBottom().scale(scale).tickSize(-height + 2*margin + axisMargin);

		bar.append("rect")
			.attr("transform", "translate(" + labelWidth + ", 0)")
			.attr("height", barHeight)
			.attr("width", 0)
			.transition()
			.delay(function(d, i) { return i * 200; })
			.duration(500)
			.attr("width", function(d) {
				return scale(d.salePrice);
			});

		bar.append("text")
			.attr("class", "value")
			.attr("y", barHeight / 2)
			.attr("dx", -valueMargin + labelWidth)
			.attr("dy", ".35em")
			.attr("text-anchor", "end")
			.attr("transform", "translate(-5,0)")
			.text(function(d) {
				return "$" + d.salePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, d.salePrice);
			})
			.attr("x", function(d) {
				var width = this.getBBox().width;
				return Math.max(width + valueMargin, scale(d.salePrice));
			})
			.attr("fill", "white");

			bar.on("mousemove", function(d, i){
                div.style("left", d3.event.pageX+50+"px");
                div.style("top", d3.event.pageY-150+"px");
                div.style("display", "inline-block");
                div.html("<strong><span style=\"font-size: 25px\">#" + (i + 1) + " </span></strong><br><strong><div style=\"text-align: center\"><img id=\"thumbnailImage\" src=\"" + (d.mediumImage) +"\"/></div><span style=\"color: #007EC8;\">Name: </span></strong><br>" + (d.name)+"<br><div className=\"toolTipInfo\"><strong><br><span style=\"color: #007EC8;\">Item ID:</strong></span><br>"+ (d.itemId) + "<br><strong><br><span style=\"color: #007EC8\">Price:</strong> </span><br>$" + (d.salePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, d.salePrice)) + "<br></div>");
            });

    	bar.on("mouseout", function(d){
                div.style("display", "none");
            });

    	bar.append(te);       
	   
	   d3.select("body").attr("align", "center");
	}

	render() {
		return (
			<div className="col-lg-12">
			<div className="instructions"><strong>Interact</strong> with each bar for full details!</div>
				{this.props.product.map(this.renderProducts)}
			</div>
		);
	}
}


function mapStateToProps({ product }) {
	return { product };
}

export default connect(mapStateToProps, { fetchProduct })(ProductVisualization);
