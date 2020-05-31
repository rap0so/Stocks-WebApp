import { TMessageData, TStocksData } from 'types';

// TODO: type it with real stocks data
export type TGetPossibleStocks = (arg: TMessageData) => TStocksData[];
