import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, catchError } from 'rxjs';
import { AxiosError } from 'axios';
import { GetFiatMapDto } from './dto/get-fiat-map.dto';
import { GetCryptocurrentcyMapDto } from './dto/get-cryptocurrentcy-map.dto';
import { Fiat, Cryptocurrency } from './interfaces';
import { API_KEY } from './constants';

@Injectable()
export class CoinmarketcapService {
  constructor(private readonly httpService: HttpService) {}
  async getFiatMap(params: GetFiatMapDto): Promise<Fiat[]> {
    const {
      data: { data },
    } = await firstValueFrom(
      this.httpService
        .get<{
          data: Fiat[];
          status: any;
        }>('https://pro-api.coinmarketcap.com/v1/fiat/map', {
          headers: {
            Accepts: 'application/json',
            'X-CMC_PRO_API_KEY': API_KEY,
          },
          params,
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!';
          }),
        ),
    );
    return await Promise.all(data);
  }

  async getCryptocurrencyMap(
    params: GetCryptocurrentcyMapDto,
  ): Promise<Cryptocurrency[]> {
    const {
      data: { data },
    } = await firstValueFrom(
      this.httpService
        .get<{
          data: Cryptocurrency[];
          status: any;
        }>('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map', {
          headers: {
            Accepts: 'application/json',
            'X-CMC_PRO_API_KEY': API_KEY,
          },
          params,
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened!';
          }),
        ),
    );
    return await Promise.all(data);
  }
}
