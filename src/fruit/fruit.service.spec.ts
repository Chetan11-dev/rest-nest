import { Test, TestingModule } from '@nestjs/testing';
import { FruitService } from './fruit.service';

describe('FruitService', () => {
  let service: FruitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitService],
    }).compile();

    service = module.get<FruitService>(FruitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
