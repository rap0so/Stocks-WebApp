export type TPossibleStock =
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

export type TStocksSymbols = TPossibleStock[];

// TODO: type it as server response
export type TMessageData = any;
