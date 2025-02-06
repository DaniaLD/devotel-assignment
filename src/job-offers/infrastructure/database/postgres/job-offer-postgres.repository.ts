import { Injectable } from '@nestjs/common';
import CreateJobOfferPort from '../../../domain/ports/outbounds/create-job-offer.port';
import { PrismaService } from '../../../../common/prisma/prisma.service';
import JobOffer from '../../../domain/entities/job-offer.entity';
import { JobOfferMapper } from '../../../job-offer.mapper';

@Injectable()
export class JobOfferPostgresRepository implements CreateJobOfferPort {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jobOfferMapper: JobOfferMapper,
  ) {}

  async create(jobOffer: JobOffer): Promise<JobOffer> {
    return this.jobOfferMapper.toDomain(
      await this.prisma.jobOffer.create({
        data: this.jobOfferMapper.toPersistence(jobOffer),
      }),
    );
  }
}
