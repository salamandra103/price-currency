import { Controller, Get, Query } from '@nestjs/common';
import { CoinmarketcapService } from './coinmarketcap.service';
import { GetFiatMapDto } from './dto/get-fiat-map.dto';
import { GetCryptocurrentcyMapDto } from './dto/get-cryptocurrentcy-map.dto';

@Controller('coinmarketcap')
export class CoinmarketcapController {
  constructor(private coinmarketcapService: CoinmarketcapService) {}
  @Get('/fiat')
  async getFiatMap(@Query() params: GetFiatMapDto): Promise<any> {
    return this.coinmarketcapService.getFiatMap(params);
  }
  @Get('/cryptocurrency')
  async getCryptocurrencyMap(
    @Query() params: GetCryptocurrentcyMapDto,
  ): Promise<any> {
    return this.coinmarketcapService.getCryptocurrencyMap(params);
  }
}
