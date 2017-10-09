import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProduct } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '', location: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);Yes
	}

	onInputChange(event) {
		function toTitleCase(str) {
			return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		}
		this.setState({ term: toTitleCase(event.target.value) });
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchProduct(this.state.term);
		// this.setState({ term: '' });
	}

	render() {
		return (
			<div className="col-lg-12">
			<div className="inlined">
				<img id="walmartLogo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2000px-Walmart_logo.svg.png" />
				<h3 className="logoh3">Data Viz</h3>
				<form onSubmit ={this.onFormSubmit} className="input-group" id="searchBar">
					<input 
						placeholder="Search for any product!"
						className="form-control"
						value={this.state.term} 
						onChange={this.onInputChange} />
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">
							Search
						</button>
					</span>
				</form>
			</div>
			<h3 className="hThree">Price Differences for Bestselling {this.state.term} Products Under $25 (Rank vs. Price)</h3>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchProduct }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);