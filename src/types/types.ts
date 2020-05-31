export type TStocksSupportedSymbols =
  | 'IET'
  | 'N'
  | 'ZHT'
  | 'V'
  | 'ELY'
  | 'TZW'
  | 'FIK'
  | 'T'
  | 'ZQ'
  | 'NP'
  | 'MJ'
  | 'KG'
  | 'OY'
  | 'ITN'
  | 'OB'
  | 'ACM'
  | 'QQ'
  | 'X'
  | 'XLC'
  | 'S';

export type TStocksSymbols = TStocksSupportedSymbols[];

// TODO: type it as server response
export type TMessageData = any;

export type TStocksData = {
  basePrice: number;
  catchPhrase: string;
  companyName: string;
  symbol: TStocksSupportedSymbols;
};

declare global {
  interface Window {
    ApexCharts: any;
  }
}
