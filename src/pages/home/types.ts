import { TStocksSupportedSymbols } from 'types';

export type THistoryStocks = {
  [key in TStocksSupportedSymbols]?: number[];
};

export type TNewStock = {
  string: number;
};
