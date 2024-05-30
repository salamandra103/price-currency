export class GetCryptocurrentcyMapDto {
  listing_status: string = 'active';
  start: number = 1;
  limit: number;
  sort: string = 'id';
  symbol: string;
  aux: string = 'platform,first_historical_data,last_historical_data,is_active';
}
