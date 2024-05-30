import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinanceController } from './binance/binance.controller';
import { BinanceService } from './binance/binance.service';
import { CoinmarketcapController } from './coinmarketcap/coinmarketcap.controller';
import { CoinmarketcapService } from './coinmarketcap/coinmarketcap.service';
import { CoinmarketcapModule } from './coinmarketcap/coinmarketcap.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [CoinmarketcapModule, HttpModule],

  controllers: [AppController, BinanceController, CoinmarketcapController],
  providers: [AppService, BinanceService, CoinmarketcapService],
})
export class AppModule {}
