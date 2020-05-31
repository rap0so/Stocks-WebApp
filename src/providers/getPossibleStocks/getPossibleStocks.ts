import { TGetPossibleStocks } from './types';

const getPossibleStocks: TGetPossibleStocks = (messageResponse) =>
  messageResponse.stocksData;

export default getPossibleStocks;
