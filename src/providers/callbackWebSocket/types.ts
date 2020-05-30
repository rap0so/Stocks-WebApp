import { TStocksSymbols, TMessageData } from 'types';

export type TGetPossibleStocks = (arg: TMessageData) => TStocksSymbols[];
