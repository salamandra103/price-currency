import { SearchPairBodyPost } from '../interface';

export class SearchPairPostDto {
  fiat: SearchPairBodyPost['fiat'] = 'USD';
  page: SearchPairBodyPost['page'] = 1;
  rows: SearchPairBodyPost['rows'] = 10;
  transAmount: SearchPairBodyPost['transAmount'] = null;
  order: SearchPairBodyPost['order'] = null;
  tradeType: SearchPairBodyPost['tradeType'] = 'BUY';
  asset: SearchPairBodyPost['asset'] = 'USDT';
  countries: SearchPairBodyPost['countries'] = [];
  proMerchantAds: SearchPairBodyPost['proMerchantAds'] = false;
  shieldMerchantAds: SearchPairBodyPost['shieldMerchantAds'] = false;
  filterType: SearchPairBodyPost['filterType'] = 'all';
  periods: SearchPairBodyPost['periods'] = [];
  additionalKycVerifyFilter: SearchPairBodyPost['additionalKycVerifyFilter'] = 1;
  publisherType: SearchPairBodyPost['publisherType'] = null;
  payTypes: SearchPairBodyPost['payTypes'] = [];
  classifies: SearchPairBodyPost['classifies'] = ['mass', 'profession'];
}
