import React, { Component } from 'react';
import SearchBar from './SearchBar'
import Brand from './Brand'
import { ipcRenderer } from 'electron'

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.handleMinimize = this.handleMinimize.bind(this);
  }

  handleMinimize() {
    ipcRenderer.send('minimize');
  }

  render() {
    return(
      <div id='top-bar' className='ui grid'>
        <div className='five wide column'>
          <SearchBar setStockName={this.props.setStockName}/>
        </div>
        <div className='six wide column'>
          <Brand />
        </div>
        <div className='two wide column'/>
        <div className='three wide column'>
          <i className="window-btn fa-2x fa fa-window-close" aria-hidden="true" onClick={window.close}></i>
          <i className="window-btn fa-2x fa fa-window-minimize" aria-hidden="true" onClick={this.handleMinimize}></i>
        </div>
      </div>
    );
  }
}

export default TopBar;
