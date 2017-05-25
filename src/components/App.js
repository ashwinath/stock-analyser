import React, { Component } from 'react';
import TopBar from './navbar/TopBar'
import '../assets/css/Semantic-UI-CSS-master/semantic.min.css'
import '../assets/css/App.css';
import CandleStickGraph from './graph/CandleStickGraph'

class App extends Component {
  render() {
    return (
      <div id="app-root">
        <TopBar/>
        <CandleStickGraph className='graph-plot' />
      </div>
    );
  }
}

export default App;
