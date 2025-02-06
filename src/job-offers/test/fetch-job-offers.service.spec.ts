import { Test, TestingModule } from '@nestjs/testing';
import { FetchJobOffersService } from '../domain/services/fetch-job-offers.service';
import { HttpService } from '@nestjs/axios';
import CreateJobOfferPort from '../domain/ports/outbounds/create-job-offer.port';
import { of } from 'rxjs';
import * as dayjs from 'dayjs';
import { IJobOffer } from '../domain/models/job-offers.interface';

describe('FetchJobOffersService', () => {
  let service: FetchJobOffersService;
  let mockHttpService: HttpService;
  let mockCreateJobOfferPort: CreateJobOfferPort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FetchJobOffersService,
        {
          provide: HttpService,
          useValue: { get: jest.fn() },
        },
        {
          provide: CreateJobOfferPort,
          useValue: { create: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<FetchJobOffersService>(FetchJobOffersService);
    mockHttpService = module.get<HttpService>(HttpService);
    mockCreateJobOfferPort = module.get<CreateJobOfferPort>(CreateJobOfferPort);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('fetchJobOffersFromResources', () => {
    it('should fetch job offers from both providers', async () => {
      const mockProviderAResponse = { jobs: [] };
      const mockProviderBResponse = { data: { jobsList: {} } };

      jest.spyOn(mockHttpService, 'get').mockImplementation((url: string) => {
        if (url.includes('provider1')) {
          return of({ data: mockProviderAResponse } as any);
        }
        if (url.includes('provider2')) {
          return of({ data: mockProviderBResponse } as any);
        }
        return of({ data: {} } as any);
      });

      const result = await (service as any).fetchJobOffersFromResources();
      expect(result).toEqual([mockProviderAResponse, mockProviderBResponse]);
      expect(mockHttpService.get).toHaveBeenCalledTimes(2);
    });
  });

  describe('unifiedTransformerFoProviderA', () => {
    it('should transform provider A data correctly', () => {
      const mockData = {
        jobs: [
          {
            jobId: '123',
            title: 'Software Engineer',
            details: {
              location: 'NYC',
              type: 'Full-Time',
              salaryRange: '$60k - $100k',
            },
            company: { name: 'Tech Corp', industry: 'IT' },
            skills: ['JavaScript', 'React'],
            postedDate: '2025-01-01T00:00:00Z',
          },
        ],
      };

      const result = (service as any).unifiedTransformerFoProviderA(mockData);
      expect(result).toEqual([
        {
          id: '123',
          title: 'Software Engineer',
          location: 'NYC',
          type: 'Full-Time',
          salary: '$60k - $100k',
          salaryMin: 60000,
          salaryMax: 100000,
          company: { name: 'Tech Corp', industry: 'IT', id: '' },
          companyId: '',
          skills: [
            { id: '', name: 'JavaScript' },
            { id: '', name: 'React' },
          ],
          postedDate: dayjs('2025-01-01T00:00:00Z'),
        },
      ]);
    });
  });

  describe('unifiedTransformerFoProviderB', () => {
    it('should transform provider B data correctly', () => {
      const mockData = {
        data: {
          jobsList: {
            'job-001': {
              position: 'Data Scientist',
              location: { city: 'San Francisco', state: 'CA', remote: false },
              compensation: { min: 80000, max: 120000 },
              employer: { companyName: 'AI Corp' },
              requirements: { technologies: ['Python', 'TensorFlow'] },
              datePosted: '2025-01-02',
            },
          },
        },
      };

      const result = (service as any).unifiedTransformerFoProviderB(mockData);
      expect(result).toEqual([
        {
          id: 'job-001',
          title: 'Data Scientist',
          location: 'San Francisco, CA',
          type: 'On-site',
          salaryMin: 80000,
          salaryMax: 120000,
          company: { name: 'AI Corp', industry: 'N/A', id: '' },
          companyId: '',
          skills: [
            { id: '', name: 'Python' },
            { id: '', name: 'TensorFlow' },
          ],
          postedDate: dayjs('2025-01-02'),
        },
      ]);
    });
  });

  describe('fetchJobOffers', () => {
    it('should fetch, transform, and insert unique job offers', async () => {
      const jobOffer: IJobOffer = {
        id: '123',
        title: 'Software Engineer',
        location: 'NYC',
        type: 'Full-Time',
        salaryMin: 60000,
        salaryMax: 100000,
        companyId: '',
        company: { id: '', name: 'AI Corp', industry: 'N/A' },
        skills: [
          { id: '', name: 'Python' },
          { id: '', name: 'TensorFlow' },
        ],
        postedDate: dayjs(),
      };

      jest
        .spyOn(service as any, 'fetchJobOffersFromResources')
        .mockResolvedValue([[], []]);
      jest
        .spyOn(service as any, 'unifiedTransformerFoProviderA')
        .mockReturnValue([jobOffer]);
      jest
        .spyOn(service as any, 'unifiedTransformerFoProviderB')
        .mockReturnValue([jobOffer]);
      jest.spyOn(mockCreateJobOfferPort, 'create').mockResolvedValue(jobOffer);

      await service.fetchJobOffers();

      expect(mockCreateJobOfferPort.create).toHaveBeenCalledTimes(1);
      expect(mockCreateJobOfferPort.create).toHaveBeenCalledWith(jobOffer);
    });
  });
});
