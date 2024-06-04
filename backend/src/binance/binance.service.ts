import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, catchError } from 'rxjs';
import { AxiosError } from 'axios';

import { SearchPairBodyPost, SearchPairBodyResponse } from './interface/';
@Injectable()
export class BinanceService {
  constructor(private readonly httpService: HttpService) {}
  async searchPair(body: SearchPairBodyPost): Promise<SearchPairBodyResponse> {
    const response = await firstValueFrom(
      this.httpService
        .post<SearchPairBodyResponse>(
          'https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search',
          body,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!';
          }),
        ),
    );

    return response.data;
  }
}
