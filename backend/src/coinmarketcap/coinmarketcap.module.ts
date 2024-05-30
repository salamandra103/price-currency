import { Module } from '@nestjs/common';
import { CoinmarketcapController } from './coinmarketcap.controller';
import { CoinmarketcapService } from './coinmarketcap.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CoinmarketcapController],
  providers: [CoinmarketcapService],
})
export class CoinmarketcapModule {}
