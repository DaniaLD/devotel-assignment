import { Test, TestingModule } from '@nestjs/testing';
import { JobOfferPostgresRepository } from '../infrastructure/database/postgres/job-offer-postgres.repository';
import { PrismaService } from '../../common/prisma/prisma.service';
import { JobOfferMapper } from '../job-offer.mapper';
import JobOffer from '../domain/entities/job-offer.entity';
import * as dayjs from 'dayjs';
import { IListJobOffersCommand } from '../domain/models/list-job-offers.command.interface';

describe('JobOfferPostgresRepositoryService', () => {
  let service: JobOfferPostgresRepository;
  let mockPrismaService: PrismaService;
  let mockJobOfferMapper: JobOfferMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JobOfferPostgresRepository,
        {
          provide: PrismaService,
          useValue: {
            company: {
              upsert: jest.fn(),
            },
            skill: {
              upsert: jest.fn(),
            },
            jobOffer: {
              create: jest.fn(),
              findMany: jest.fn(),
              count: jest.fn(),
            },
          },
        },
        {
          provide: JobOfferMapper,
          useValue: {
            toDomain: jest.fn(),
            toPersistence: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<JobOfferPostgresRepository>(
      JobOfferPostgresRepository,
    );
    mockPrismaService = module.get<PrismaService>(PrismaService);
    mockJobOfferMapper = module.get<JobOfferMapper>(JobOfferMapper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a job offer successfully', async () => {
      const mockJobOffer = new JobOffer({
        id: '123',
        title: 'Software Engineer',
        location: 'NYC',
        type: 'Full-Time',
        salaryMin: 60000,
        salaryMax: 120000,
        company: { id: '456', name: 'Tech Corp', industry: 'IT' },
        companyId: '456',
        skills: [{ id: '1', name: 'JavaScript' }],
        postedDate: new Date(),
      });

      const mockPersistenceJobOffer = {
        ...mockJobOffer,
        companyId: '456',
        postedDate: dayjs(mockJobOffer.postedDate).toDate(),
      };

      const mockInsertedJobOffer = {
        id: '123',
        title: 'Software Engineer',
        location: 'NYC',
        type: 'Full-Time',
        salaryMin: 60000,
        salaryMax: 120000,
        companyId: '456',
        postedDate: new Date(),
        company: { id: '456', name: 'Tech Corp', industry: 'IT' },
        skills: [{ skill: { id: '1', name: 'JavaScript' } }],
      };

      jest
        .spyOn(mockPrismaService.company, 'upsert')
        .mockResolvedValue(mockJobOffer.company);
      jest.spyOn(mockPrismaService.skill, 'upsert').mockResolvedValue({
        id: '1',
        name: 'JavaScript',
      });
      jest
        .spyOn(mockPrismaService.jobOffer, 'create')
        .mockResolvedValue(mockInsertedJobOffer);
      jest
        .spyOn(mockJobOfferMapper, 'toPersistence')
        .mockReturnValue(mockPersistenceJobOffer);
      jest.spyOn(mockJobOfferMapper, 'toDomain').mockReturnValue(mockJobOffer);

      const result = await service.create(mockJobOffer);

      expect(mockPrismaService.company.upsert).toHaveBeenCalledWith({
        where: { name: mockJobOffer.company.name },
        update: {},
        create: {
          name: mockJobOffer.company.name,
          industry: mockJobOffer.company.industry,
        },
      });

      expect(mockPrismaService.skill.upsert).toHaveBeenCalledTimes(1);
      expect(mockPrismaService.jobOffer.create).toHaveBeenCalledWith({
        data: {
          title: mockJobOffer.title,
          location: mockJobOffer.location,
          type: mockJobOffer.type,
          salaryMin: mockJobOffer.salaryMin,
          salaryMax: mockJobOffer.salaryMax,
          companyId: mockJobOffer.company.id,
          postedDate: mockJobOffer.postedDate,
          skills: {
            create: [{ skill: { connect: { id: '1' } } }],
          },
        },
      });

      expect(result).toEqual(mockJobOffer);
    });

    it('should handle database errors gracefully', async () => {
      const mockJobOffer = new JobOffer({
        id: '123',
        title: 'Software Engineer',
        location: 'NYC',
        type: 'Full-Time',
        salaryMin: 60000,
        salaryMax: 120000,
        company: { id: '456', name: 'Tech Corp', industry: 'IT' },
        companyId: '456',
        skills: [{ id: '1', name: 'JavaScript' }],
        postedDate: new Date(),
      });

      jest
        .spyOn(mockPrismaService.jobOffer, 'create')
        .mockRejectedValue(new Error('Database error'));

      await expect(service.create(mockJobOffer)).rejects.toThrow(
        'Database operation failed. Please try again later.',
      );
    });
  });

  describe('list', () => {
    it('should return a list of job offers', async () => {
      const mockJobOffers = [
        {
          id: '123',
          title: 'Software Engineer',
          location: 'NYC',
          type: 'Full-Time',
          salaryMin: 60000,
          salaryMax: 120000,
          companyId: '456',
          postedDate: new Date(),
          company: { id: '456', name: 'Tech Corp', industry: 'IT' },
          skills: [{ skill: { id: '1', name: 'JavaScript' } }] as any,
        },
      ];

      jest
        .spyOn(mockPrismaService.jobOffer, 'findMany')
        .mockResolvedValue(mockJobOffers);
      jest.spyOn(mockPrismaService.jobOffer, 'count').mockResolvedValue(1);
      jest
        .spyOn(mockJobOfferMapper, 'toDomain')
        .mockReturnValue(mockJobOffers[0]);

      const filters: IListJobOffersCommand = {
        limit: 10,
        offset: 0,
      };

      const result = await service.list(filters);

      expect(mockPrismaService.jobOffer.findMany).toHaveBeenCalledWith({
        where: {},
        take: 10,
        skip: 0,
        include: { company: true, skills: { include: { skill: true } } },
      });

      expect(result).toEqual({
        jobOffers: [mockJobOffers[0]],
        nextPageToken: '',
        total: 1,
      });
    });

    it('should return nextPageToken when more results exist', async () => {
      const mockJobOffers = [
        {
          id: '123',
          title: 'Software Engineer',
          location: 'NYC',
          type: 'Full-Time',
          salaryMin: 60000,
          salaryMax: 120000,
          companyId: '456',
          postedDate: new Date(),
          skills: [{ skill: { id: '1', name: 'JavaScript' } }] as any,
        },
      ];

      jest
        .spyOn(mockPrismaService.jobOffer, 'findMany')
        .mockResolvedValue(mockJobOffers);
      jest.spyOn(mockPrismaService.jobOffer, 'count').mockResolvedValue(20);
      jest.spyOn(mockJobOfferMapper, 'toDomain').mockReturnValue({
        id: '123',
        title: 'Software Engineer',
        location: 'NYC',
        type: 'Full-Time',
        salaryMin: 60000,
        salaryMax: 120000,
        companyId: '456',
        postedDate: new Date(),
        company: { id: '456', name: 'Tech Corp', industry: 'IT' },
        skills: [{ id: '1', name: 'JavaScript' }],
      });

      const filters: IListJobOffersCommand = {
        limit: 10,
        offset: 0,
      };

      const result = await service.list(filters);

      expect(result.nextPageToken).toBe('10');
    });
  });
});
