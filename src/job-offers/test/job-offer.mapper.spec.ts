import { Test, TestingModule } from '@nestjs/testing';
import { JobOfferMapper } from '../job-offer.mapper';
import { IJobOfferSchema } from '../infrastructure/database/postgres/job-offer.schema';
import JobOffer from '../domain/entities/job-offer.entity';
import * as dayjs from 'dayjs';

describe('JobOfferMapperService', () => {
  let service: JobOfferMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobOfferMapper],
    }).compile();

    service = module.get<JobOfferMapper>(JobOfferMapper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('toDomain', () => {
    it('should correctly map persistence schema to domain entity', () => {
      const mockSchema: IJobOfferSchema = {
        id: '123',
        title: 'Software Engineer',
        location: 'NYC',
        type: 'Full-Time',
        salaryMin: 60000,
        salaryMax: 120000,
        companyId: '456',
        postedDate: new Date('2025-01-01T00:00:00Z'),
        company: { id: '456', name: 'Tech Corp', industry: 'IT' },
        skills: [
          {
            skill: {
              id: '12',
              name: 'Node.js',
            },
          },
          {
            skill: {
              id: '34',
              name: 'Vue.js',
            },
          },
        ] as any,
      };

      const result = service.toDomain(mockSchema);

      expect(result).toBeInstanceOf(JobOffer);
      expect(result.id).toBe(mockSchema.id);
      expect(result.title).toBe(mockSchema.title);
      expect(result.location).toBe(mockSchema.location);
      expect(result.type).toBe(mockSchema.type);
      expect(result.salaryMin).toBe(mockSchema.salaryMin);
      expect(result.salaryMax).toBe(mockSchema.salaryMax);
      expect(result.companyId).toBe(mockSchema.companyId);
      expect(
        (result.postedDate as dayjs.Dayjs).isSame(dayjs(mockSchema.postedDate)),
      ).toBe(true);
      expect(result.company).toEqual(mockSchema.company);
      expect(result.skills).toEqual(
        mockSchema.skills.map((skill) => (skill as any).skill),
      );
    });
  });

  describe('toPersistence', () => {
    it('should correctly map domain entity to persistence schema', () => {
      const mockDomain = new JobOffer({
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
      });

      const result = service.toPersistence(mockDomain);

      expect(result.id).toBe(mockDomain.id);
      expect(result.title).toBe(mockDomain.title);
      expect(result.location).toBe(mockDomain.location);
      expect(result.type).toBe(mockDomain.type);
      expect(result.salaryMin).toBe(mockDomain.salaryMin);
      expect(result.salaryMax).toBe(mockDomain.salaryMax);
      expect(result.companyId).toBe(mockDomain.companyId);
      expect(result.postedDate).toEqual(new Date('2025-01-01T00:00:00Z'));
      expect(result.company).toEqual(mockDomain.company);
      expect(result.skills).toEqual(mockDomain.skills);
    });
  });
});
