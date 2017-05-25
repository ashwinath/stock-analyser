import React, { Component } from 'react';
import TopBar from './navbar/TopBar'
import '../assets/css/Semantic-UI-CSS-master/semantic.min.css'
import '../assets/css/App.css';
import '../assets/css/font-awesome-4.7.0/css/font-awesome.css';
import CandleStickGraph from './graph/CandleStickGraph'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stockName: null
    }

    this.setStockName = this.setStockName.bind(this);
  }

  setStockName(name) {
    this.setState(() => {
      return {
        stockName: name
      }
    });
  }

  render() {
    return (
      <div id="app-root">
        <TopBar setStockName={this.setStockName}/>
        {this.state.stockName &&
        <CandleStickGraph className='graph-plot' stockName={this.state.stockName}/>}
        {!this.state.stockName &&
        <h1>NO STOCK</h1>}
      </div>
    );
  }
}

export default App;
