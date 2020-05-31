import { TParseHistoryToChart } from './types';
import { TStocksSupportedSymbols } from 'types';

const parseHistoryToChart: TParseHistoryToChart = (history) =>
  Object.keys(history).map((key) => {
    const historyKey = key as TStocksSupportedSymbols;
    const historyValue = history[historyKey];

    return {
      data: historyValue!,
      name: historyKey,
    };
  });

export default parseHistoryToChart;
