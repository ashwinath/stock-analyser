import React, { Component } from 'react';
import SearchBar from './SearchBar'
import Brand from './Brand'

class TopBar extends Component {
  render() {
    return(
      <section id='top-bar' className='ui grid'>
        <div className='five wide column'/>
        <div className='six wide column'>
          <Brand />
        </div>
        <div className='two wide column'/>
        <div className='three wide column'>
          <SearchBar />
        </div>
      </section>
    );
  }
}

export default TopBar;
