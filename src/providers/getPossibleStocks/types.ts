import { TMessageData, TStocksData } from 'types';

export type TGetPossibleStocks = (arg: TMessageData) => TStocksData[];
