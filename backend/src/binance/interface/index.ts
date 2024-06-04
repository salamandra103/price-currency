type Period = 15 | 30 | 45 | 60 | 120 | 180 | 240 | 300 | 360;

interface TradeMethod {
  identifier: string;
  tradeMethodName: string;
  tradeMethodShortName: 'string' | null;
}

interface AdvPair {
  advNo: string;
  dynamicMaxSingleTransAmount: string;
  minSingleTransAmount: string;
  payTimeLimit: number;
  price: string;
  tradableQuantity: string;
  tradeType: 'SELL' | 'BUY';
  tradeMethods: Array<TradeMethod>;
}

interface AdvertiserPair {
  monthOrderCount: number;
  nickName: string;
  monthFinishRate: number;
  positiveRate: number;
  userNo: string;
  userType: 'merchant' | 'user';
}

export interface SearchPairBodyPost {
  fiat: string;
  page: number;
  rows: number;
  transAmount: number | null;
  order: 'completion_rate' | 'trade_count' | null;
  tradeType: 'BUY' | 'SELL';
  asset: string;
  countries: Array<string> | [];
  proMerchantAds: boolean;
  shieldMerchantAds: boolean;
  filterType: 'all' | 'tradable';
  periods: Array<Period> | [];
  additionalKycVerifyFilter: 0 | 1;
  publisherType: 'merchant' | null;
  payTypes: Array<string> | [];
  classifies: ['mass', 'profession'];
}

export interface SearchPairBodyResponse {
  code: string;
  data: Array<{
    adv: AdvPair;
    advertiser: AdvertiserPair;
  }>;
  message: string | null;
  messageDetail: string | null;
  success: boolean;
  total: number;
}
