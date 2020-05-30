import { TGetPossibleStocks } from './types';

const getPossibleStocks: TGetPossibleStocks = (messageResponse) =>
  messageResponse.supportedSymbols;

export default getPossibleStocks;
