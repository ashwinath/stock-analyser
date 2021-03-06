import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(input) {
    input.preventDefault();
    this.props.setStockName(this.refs.stockName.value);
  }

  render() {
    return (
      <form id='search-bar' className='ui input icon' onSubmit={this.handleSubmit}>
        <i className='search icon'></i>
        <input ref='stockName' type='text' name="search" placeholder='Search Stocks...'/>
      </form>
    );
  }
}

export default SearchBar;
