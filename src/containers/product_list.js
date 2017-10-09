import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions';

class ProductList extends Component {

	constructor(props) {
		super(props);
		// this.state = {
		// 	name: [],
		// 	image: [],
		// 	itemID: [],
		// 	productUrl: [],
		// 	price: []
		// }
		this.filterArrays = this.filterArrays.bind(this);
	}

	filterArrays(array) {
		var filtered = '';
		for (var i = 0; i < array.length; i++) {
			filtered = array[i];
		}
		return filtered;
	}

	renderProducts(product) {
		// console.log(product);

		var names = product.items.map(product => product.name);
		var images = product.items.map(product => product.mediumImage);
		var itemIDs = product.items.map(product => product.itemId);
		var descriptions = '';
		var descriptions = product.items.map(product => product.shortDescription);
		var productUrls = product.items.map(product => product.productUrl);
		var prices = product.items.map(product => product.salePrice);
		// var formattedPrice = price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, price);

		console.log(descriptions);
		var productData = {
			names: names,
			images: images,
			itemIDs: itemIDs,
			descriptions: descriptions,
			productUrls: productUrls,
			prices: prices
		};

		// console.log(productData);

		var baseUrl = productData.productUrls[0];
		baseUrl = baseUrl.substring(0, baseUrl.indexOf('%2F'));
		console.log(baseUrl);
		return (
			<tr key={productData.names}>
				<td>{productData.names[0]}</td>
				<td><img src={productData.images[0]} /></td>
				<td>{productData.itemIDs[0]}</td>
				<td>{productData.descriptions[0]}&nbsp;<a href={productData.productUrls[0]} target="_blank">LEARN MORE &rarr;</a></td>
				<td>${productData.prices[0]}</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Image</th>
						<th>Item ID</th>
						<th>Description</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
				{this.props.product.map(this.renderProducts)}
				</tbody>
			</table>
		);
	}
}


function mapStateToProps({ product }) {
	return { product };
}

export default connect(mapStateToProps, { fetchProduct })(ProductList);