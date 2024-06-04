import { Controller, Get, Query } from '@nestjs/common';
import { CoinmarketcapService } from './coinmarketcap.service';
import { FiatMapGetDto } from './dto/get-fiat-map.dto';
import { CryptocurrentcyMapGetDto } from './dto/get-cryptocurrentcy-map.dto';

@Controller('coinmarketcap')
export class CoinmarketcapController {
  constructor(private coinmarketcapService: CoinmarketcapService) {}

  @Get('/fiat')
  async getFiatMap(@Query() params: FiatMapGetDto): Promise<any> {
    return this.coinmarketcapService.getFiatMap(params);
  }

  @Get('/cryptocurrency')
  async getCryptocurrencyMap(
    @Query() params: CryptocurrentcyMapGetDto,
  ): Promise<any> {
    return this.coinmarketcapService.getCryptocurrencyMap(params);
  }
}
