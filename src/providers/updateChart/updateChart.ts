import { THistoryStocks } from 'pages/home/types';
import parseHistoryToChart from 'providers/parseHistoryToChart';
import { throttle } from 'throttle-debounce';

const updateChart = throttle(2000, (historyStocks: THistoryStocks) => {
  const newSeries = parseHistoryToChart(historyStocks);
  window.ApexCharts.exec('default', 'updateSeries', newSeries);
});

export default updateChart;
