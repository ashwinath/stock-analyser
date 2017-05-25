import axios from 'axios';
import { csvParse } from 'd3-dsv';

let quandlApi = {
  getStockData: getStockData
};

function getNumMonthsAgoDateFormatted(months) {
  let xMonthsAgo = new Date();
  xMonthsAgo.setMonth(xMonthsAgo.getMonth() - months);
  const year = xMonthsAgo.getFullYear();
  let month = xMonthsAgo.getMonth();
  if (month < 10) {
    month = '0' + month;
  }
  let day = xMonthsAgo.getDay();
  if (day < 10) {
    day = '0' + day;
  }
  return `${year}-${month}-${day}`;
}

function getStockData(stock) {
  // set months ago to 6
  const date = getNumMonthsAgoDateFormatted(6);
  const encodedUri = window.encodeURI(`https://www.quandl.com/api/v3/datasets/WIKI/${stock}.csv?start_date=${date}`);

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
      return formattedData;
    })
    .catch(error => {
      console.error('Unable to download data: ', error);
      return null;
    });
}

export default quandlApi;
