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
