import { TStocksData, TStocksSupportedSymbols } from 'types';

export type TSelectStocksProps = {
  onClick: (arg: TStocksSupportedSymbols) => void;
  stocks: TStocksData[];
};
