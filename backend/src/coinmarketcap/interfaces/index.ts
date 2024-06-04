export interface Fiat {
  id: string;
  name: string;
  sign: string;
  symbol: string;
}

export interface Cryptocurrency {
  id: number;
  rank: number;
  name: string;
  symbol: string;
  slug: string;
  is_active: 0 | 1;
  status: 'active' | 'inactive' | 'untracked';
  first_historical_data: string;
  last_historical_data: string;
}

export interface FiatMapQueryGet {
  start: number;
  limit: number;
  sort: string;
  include_metals: boolean;
}

export interface CryptocurrentcyMapQueryGet {
  listing_status: string;
  start: number;
  limit: number;
  sort: string;
  symbol: string;
  aux: string;
}
