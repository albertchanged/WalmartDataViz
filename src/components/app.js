import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ProductList from '../containers/product_list';
import ProductVisualization from '../containers/product_visualization';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<ProductVisualization />
      </div>
    );
  }
}
