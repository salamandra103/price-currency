import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BinanceService } from './binance.service';
import { SearchPairPostDto } from './dto/post-search-pair.dto';

@Controller('binance')
export class BinanceController {
  constructor(private binanceService: BinanceService) {}
  @UsePipes(new ValidationPipe({ transform: true }))
  @Post('/p2p')
  async searchPair(@Body() body: SearchPairPostDto): Promise<any> {
    return this.binanceService.searchPair(body);
  }
}
