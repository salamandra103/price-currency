import { Test, TestingModule } from '@nestjs/testing';
import { CoinmarketcapController } from './coinmarketcap.controller';

describe('CoinmarketcapController', () => {
  let controller: CoinmarketcapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoinmarketcapController],
    }).compile();

    controller = module.get<CoinmarketcapController>(CoinmarketcapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
