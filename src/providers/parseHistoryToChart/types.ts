import { THistoryStocks } from 'pages/home/types';

export type TChartSeries = {
  name: string;
  data: (string | number)[];
};

export type TParseHistoryToChart = (history: THistoryStocks) => TChartSeries[];
