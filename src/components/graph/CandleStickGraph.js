import React, { Component } from 'react';
import quandlApi from '../utils/quandlApi';
import Loading from '../Loading';
const ReStock = require('react-stockcharts');

console.log(ReStock)
const { ChartCanvas, Chart } = ReStock;
const { CandlestickSeries } = ReStock.series;
const { XAxis, YAxis } = ReStock.axes;
const { discontinuousTimeScaleProvider } = ReStock.scale;

class CandleStickGraph extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      data: null
    };
  }

  componentDidMount() {
    quandlApi.getStockData('AAPL')
      .then(data => {
        // ERROR
        if (data === null) {
          return this.setState(() => {
            return {
              error: true,
              loading: false,
              data: null
            }
          });
        } else {
          this.setState(() => {
            return {
              error: false,
              loading: false,
              data: data
            }
          });
        }
      });
  }

  render() {
    let loading = this.state.loading,
        error = this.state.error;

    if (loading) {
      return (
        <Loading />
      );
    } else if (error) {
      return (
        <h1>Something went wrong</h1>
      );
    } else {
      console.log(this.state.data)
      return (
        <h1>TODO: PUT A GRAPH</h1>
      );
    }
  }
}

export default CandleStickGraph
