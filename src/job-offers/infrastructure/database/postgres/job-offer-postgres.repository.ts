import { Injectable } from '@nestjs/common';
import CreateJobOfferPort from '../../../domain/ports/outbounds/create-job-offer.port';
import { PrismaService } from '../../../../common/prisma/prisma.service';
import JobOffer from '../../../domain/entities/job-offer.entity';
import { JobOfferMapper } from '../../../job-offer.mapper';
import {
  IListJobOffersCommand,
  IListJobOffersResult,
} from '../../../domain/models/list-job-offers.command.interface';
import ListJobOffersPort from '../../../domain/ports/outbounds/list-job-offers.port';
import { IJobOfferSchema } from './job-offer.schema';
import { Prisma } from '../../../../../prisma/clients/prisma.client';
import JobOfferWhereInput = Prisma.JobOfferWhereInput;

@Injectable()
export class JobOfferPostgresRepository
  implements CreateJobOfferPort, ListJobOffersPort
{
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

  async list(filters: IListJobOffersCommand): Promise<IListJobOffersResult> {
    const {
      limit = 10,
      offset = 0,
      salaryMax,
      salaryMin,
      title,
      location,
    } = filters;
    const conditions = {
      ...(salaryMin && { salaryMin: { gte: +salaryMin } }),
      ...(salaryMax && { salaryMax: { lte: +salaryMax } }),
      ...(title && { title: { contains: title } }),
      ...(location && { location: { contains: location } }),
    };

    const { jobOffers, total } = await this.listAndCount(
      conditions,
      limit,
      offset,
    );
    const nextPageToken = +offset + +limit;

    return {
      jobOffers: jobOffers.map((jo) => this.jobOfferMapper.toDomain(jo)),
      nextPageToken: `${nextPageToken < total ? nextPageToken : ''}`,
      total,
    };
  }

  private async listAndCount(
    conditions: JobOfferWhereInput,
    limit: number,
    offset: number,
  ): Promise<{ jobOffers: IJobOfferSchema[]; total: number }> {
    const [jobOffers, total] = await Promise.all([
      this.prisma.jobOffer.findMany({
        where: conditions,
        take: +limit,
        skip: +offset,
      }),
      this.prisma.jobOffer.count({
        where: conditions,
      }),
    ]);

    return { jobOffers, total };
  }
}
