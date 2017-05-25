import React, { Component } from 'react';
import { Wave } from 'better-react-spinkit';
import quandlApi from '../utils/quandlApi';
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-finance';
const PlotlyComponent = createPlotlyComponent(Plotly);

class CandleStickGraph extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      data: null
    };
    this.loadData = this.loadData.bind(this);
  }

  loadData(stockName) {
    quandlApi.getStockData(stockName)
      .then(data => {
        if (data === null) {
          return this.setState(() => {
            return {
              loading: false,
              error: true,
              data: null
            }
          });
        } else {
          return this.setState(() => {
            return {
              loading: false,
              error: false,
              data: data
            }
          });
        }
      });
  }

  componentDidMount() {
    this.loadData(this.props.stockName);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => {
      return {
        loading: true,
        error: false,
        data: null
      }
    });
    this.loadData(nextProps.stockName);
  }

  render() {
    let loading = this.state.loading,
        error = this.state.error;

    if (loading) {
      return (
        <Wave id='spinner' size={100} color='orange'/>
      );
    } else if (error) {
      return (
        <h1>Something went wrong</h1>
      );
    } else {
      const data = [this.state.data];
      const layout = {
        dragmode: 'zoom', 
        margin: {
          r: 10, 
          t: 25, 
          b: 40, 
          l: 60
        }, 
        showlegend: false, 
        xaxis: {
          domain: [0, 1], 
          type: 'date'
        }, 
        yaxis: {
          domain: [0, 1], 
          type: 'linear'
        }
      };
      const config = {
        showLink: false,
        displayModeBar: true
      }
      return (
        <PlotlyComponent data={data} layout={layout} config={config}/>
      );
    }
  }
}

export default CandleStickGraph
