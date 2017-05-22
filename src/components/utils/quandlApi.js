import axios from 'axios';
import { csvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';

let quandlApi = {
  getStockData: getStockData
};

function getStockData(stock) {
  const encodedUri = window.encodeURI('https://www.quandl.com/api/v3/datasets/WIKI/' + stock + '.csv');

  let parseDate = timeParse('%Y-%m-%d');

  return axios.get(encodedUri)
    .then(response => {
      let csvParsedObject = csvParse(response.data)
      return csvParsedObject
    })
    .catch(error => {
      console.error('Unable to download data');
      return null;
    });
}

export default quandlApi;
