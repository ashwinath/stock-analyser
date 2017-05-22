import React, { Component } from 'react';
import TopBar from './navbar/TopBar'
import '../assets/css/Semantic-UI-CSS-master/semantic.min.css'
import '../assets/css/App.css';
import CandleStickGraph from './graph/CandleStickGraph'

class App extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <CandleStickGraph/>
      </div>
    );
  }
}

export default App;
