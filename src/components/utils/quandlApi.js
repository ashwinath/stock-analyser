import axios from 'axios';
import { csvParse } from 'd3-dsv';

let quandlApi = {
  getStockData: getStockData
};

function getStockData(stock) {
  const encodedUri = window.encodeURI('https://www.quandl.com/api/v3/datasets/WIKI/' + stock + '.csv?start_date=2010-01-01');

  return axios.get(encodedUri)
    .then(response => {
      let csvParsedObject = csvParse(response.data);
      let formattedData = {
        x: [], // date
        close: [],
        high: [],
        low: [],
        open: [],
        decreasing: { line: {color: '#7f7f7f'} },
        increasing: { line: {color: '#17BECF'} },
        line: { line: {color: 'rgba(31,119,180,1)'} },
        type: 'candlestick',
        xaxis: 'date',
        yaxis: 'y'
      }
      csvParsedObject.forEach((d, i) => {
        formattedData.x.unshift(d.Date);
        formattedData.close.unshift(d.Open);
        formattedData.high.unshift(d.High);
        formattedData.low.unshift(d.Low);
        formattedData.open.unshift(d.Close);
      });
      console.log(formattedData)
      return formattedData;
    })
    .catch(error => {
      console.error('Unable to download data: ', error);
      return null;
    });
}

export default quandlApi;
