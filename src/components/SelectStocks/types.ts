import { TStocksData, TStocksSupportedSymbols, TStocksSymbols } from 'types';

export type TSelectStocksProps = {
  currentWatching: TStocksSymbols;
  onClick: (arg: TStocksSupportedSymbols) => void;
  stocks: TStocksData[];
};
