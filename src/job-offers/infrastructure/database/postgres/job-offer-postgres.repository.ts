import { Injectable, Logger } from '@nestjs/common';
import CreateJobOfferPort from '../../../domain/ports/outbounds/create-job-offer.port';
import { PrismaService } from '../../../../common/prisma/prisma.service';
import JobOffer from '../../../domain/entities/job-offer.entity';
import { JobOfferMapper } from '../../../job-offer.mapper';
import {
  IListJobOffersCommand,
  IListJobOffersResult,
} from '../../../domain/models/list-job-offers.command.interface';
import ListJobOffersPort from '../../../domain/ports/outbounds/list-job-offers.port';
import { Prisma } from '../../../../../prisma/clients/prisma.client';
import JobOfferWhereInput = Prisma.JobOfferWhereInput;

@Injectable()
export class JobOfferPostgresRepository
  implements CreateJobOfferPort, ListJobOffersPort
{
  private readonly logger = new Logger('JobOfferPostgresRepository');
  constructor(
    private readonly prisma: PrismaService,
    private readonly jobOfferMapper: JobOfferMapper,
  ) {}

  async create(jobOffer: JobOffer): Promise<JobOffer> {
    try {
      const company = await this.prisma.company.upsert({
        where: { name: jobOffer.company.name },
        update: {},
        create: {
          name: jobOffer.company.name,
          industry: jobOffer.company.industry,
        },
      });
      const {
        id: _,
        skills,
        postedDate,
        companyId,
        type,
        salaryMin,
        salaryMax,
        location,
        title,
      } = this.jobOfferMapper.toPersistence(jobOffer);
      const insertedSkills = await Promise.all(
        jobOffer.skills.map(async (skill) =>
          this.prisma.skill.upsert({
            where: { name: skill.name },
            update: {},
            create: { name: skill.name },
          }),
        ),
      );

      const insertedJobOffer = await this.prisma.jobOffer.create({
        data: {
          title: title,
          location: location,
          type: type,
          salaryMin: salaryMin,
          salaryMax: salaryMax,
          companyId: company.id,
          postedDate: postedDate,
          skills: {
            create: insertedSkills.map((skill) => ({
              skill: { connect: { id: skill.id } },
            })),
          },
        },
      });
      return this.jobOfferMapper.toDomain({
        ...insertedJobOffer,
        company,
        skills,
      });
    } catch (error) {
      if (error?.code === 'P2002') {
        this.logger.error(
          `Duplicate record found while inserting job offer: ${jobOffer.title} - ${jobOffer.company} `,
        );
      } else {
        this.logger.error(
          `Database error while inserting job offer: ${error.message}`,
        );
        throw new Error('Database operation failed. Please try again later.');
      }
    }
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
  ): Promise<{ jobOffers: any[]; total: number }> {
    const [jobOffers, total] = await Promise.all([
      this.prisma.jobOffer.findMany({
        where: conditions,
        take: +limit,
        skip: +offset,
        include: { company: true, skills: { include: { skill: true } } },
      }),
      this.prisma.jobOffer.count({
        where: conditions,
      }),
    ]);

    return { jobOffers, total };
  }
}
