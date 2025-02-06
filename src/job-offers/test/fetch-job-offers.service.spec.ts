import { Test, TestingModule } from '@nestjs/testing';
import { FetchJobOffersService } from '../domain/services/fetch-job-offers.service';

describe('FetchJobOffersService', () => {
  let service: FetchJobOffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchJobOffersService],
    }).compile();

    service = module.get<FetchJobOffersService>(FetchJobOffersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
