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
      <div id='top-bar' className='container'>
        <SearchBar className='left' setStockName={this.props.setStockName}/>
        <div className='right'>
          <i className="window-btn fa-2x fa fa-window-close" aria-hidden="true" onClick={window.close}></i>
          <i className="window-btn fa-2x fa fa-window-minimize" aria-hidden="true" onClick={this.handleMinimize}></i>
        </div>
        <Brand className='center' />
      </div>
    );
  }
}

export default TopBar;
