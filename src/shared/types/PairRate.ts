export interface CurrencyItem {
  id: number;
  last: string;
  lowestAsk: string;
  highestBid: string;
  percentChange: string;
  baseVolume: string;
  quoteVolume: string;
  isFrozen: string;
  postOnly: string;
  high24hr: string;
  low24hr: string;
}

export interface CurrencyList {
  [key: string]: CurrencyItem;
}

export interface IRowData {
  [key: string]: string | number;
}

export interface TableRoll extends IRowData {
  id: number;
  name: string;
  last: string;
  highestBid: string;
  percentChange: string;
}
