import { Test, TestingModule } from '@nestjs/testing';
import { ListJobOffersService } from '../domain/services/list-job-offers.service';
import ListJobOffersPort from '../domain/ports/outbounds/list-job-offers.port';
import {
  IListJobOffersCommand,
  IListJobOffersResult,
} from '../domain/models/list-job-offers.command.interface';
import JobOffer from '../domain/entities/job-offer.entity';
import * as dayjs from 'dayjs';

describe('ListJobOffersService', () => {
  let service: ListJobOffersService;
  let mockListJobOffersPort: ListJobOffersPort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListJobOffersService,
        {
          provide: ListJobOffersPort,
          useValue: {
            list: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ListJobOffersService>(ListJobOffersService);
    mockListJobOffersPort = module.get<ListJobOffersPort>(ListJobOffersPort);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('execute', () => {
    it('should call list method of ListJobOffersPort with correct filters', async () => {
      const filters: IListJobOffersCommand = { title: 'Developer' }; // Example filter
      const mockResult: IListJobOffersResult = {
        jobOffers: [
          new JobOffer({
            id: '123',
            title: 'Software Engineer',
            location: 'NYC',
            type: 'Full-Time',
            salaryMin: 60000,
            salaryMax: 120000,
            companyId: '456',
            postedDate: dayjs('2025-01-01T00:00:00Z'),
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
          }),
        ],
        nextPageToken: '',
        total: 1,
      };

      jest.spyOn(mockListJobOffersPort, 'list').mockResolvedValue(mockResult);

      const result = await service.execute(filters);

      expect(mockListJobOffersPort.list).toHaveBeenCalledWith(filters);
      expect(result).toEqual(mockResult);
    });

    it('should handle errors from list method', async () => {
      const filters: IListJobOffersCommand = { title: 'Developer' };

      jest
        .spyOn(mockListJobOffersPort, 'list')
        .mockRejectedValue(new Error('Error occurred'));

      try {
        await service.execute(filters);
      } catch (error) {
        expect(error.message).toBe('Error occurred');
      }
    });
  });
});
