import { Test, TestingModule } from '@nestjs/testing';
import { JobOffersController } from '../adapters/primary/job-offers.controller';
import ListJobOfferUseCase from '../domain/ports/inbounds/list-job-offer.use-case';
import ListJobOffersDto from '../dtos/requests/list-job-offers.dto';
import ListJobOffersResponse from '../dtos/response/list-job-offers.dto';

describe('JobOffersController', () => {
  let controller: JobOffersController;
  let mockListJobOfferUseCase: ListJobOfferUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobOffersController],
      providers: [
        {
          provide: ListJobOfferUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<JobOffersController>(JobOffersController);
    mockListJobOfferUseCase =
      module.get<ListJobOfferUseCase>(ListJobOfferUseCase);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('listJobOffers', () => {
    it('should return job offers successfully', async () => {
      const mockRequestDto: ListJobOffersDto = {
        limit: 10,
        offset: 0,
        title: 'Software Engineer',
        location: 'New York',
      };

      const mockJobOffers = {
        jobOffers: [
          {
            id: '123',
            title: 'Software Engineer',
            location: 'New York',
            type: 'Full-Time',
            salaryMin: 60000,
            salaryMax: 120000,
            companyId: '456',
            postedDate: new Date(),
            company: { id: '456', name: 'Tech Corp', industry: 'IT' },
            skills: [
              {
                id: '12',
                name: 'Node.js',
              },
              {
                id: '34',
                name: 'Vue.js',
              },
            ],
          },
        ],
        nextPageToken: '',
        total: 1,
      };

      jest
        .spyOn(mockListJobOfferUseCase, 'execute')
        .mockResolvedValue(mockJobOffers);

      const result = await controller.listJobOffers(mockRequestDto);

      expect(mockListJobOfferUseCase.execute).toHaveBeenCalledWith(
        mockRequestDto,
      );
      expect(result).toEqual(ListJobOffersResponse.fromDomain(mockJobOffers));
    });

    it('should handle an empty response correctly', async () => {
      const mockRequestDto: ListJobOffersDto = { limit: 10, offset: 0 };
      const mockJobOffers = { jobOffers: [], nextPageToken: '', total: 0 };

      jest
        .spyOn(mockListJobOfferUseCase, 'execute')
        .mockResolvedValue(mockJobOffers);

      const result = await controller.listJobOffers(mockRequestDto);

      expect(result).toEqual(ListJobOffersResponse.fromDomain(mockJobOffers));
    });

    it('should handle errors gracefully', async () => {
      const mockRequestDto: ListJobOffersDto = { limit: 10, offset: 0 };

      jest
        .spyOn(mockListJobOfferUseCase, 'execute')
        .mockRejectedValue(new Error('Database error'));

      await expect(controller.listJobOffers(mockRequestDto)).rejects.toThrow(
        'Database error',
      );
    });
  });
});
