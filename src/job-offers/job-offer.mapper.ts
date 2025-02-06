import { Injectable } from '@nestjs/common';
import { IJobOfferSchema } from './infrastructure/database/postgres/job-offer.schema';
import JobOffer from './domain/entities/job-offer.entity';
import * as dayjs from 'dayjs';

@Injectable()
export class JobOfferMapper {
  toDomain(jo: IJobOfferSchema): JobOffer {
    return new JobOffer({
      id: jo.id,
      title: jo.title,
      location: jo.location,
      type: jo.type,
      salaryMin: jo.salaryMin,
      salaryMax: jo.salaryMax,
      company: jo.company,
      industry: jo.industry,
      skills: jo.skills,
      postedDate: dayjs(jo.postedDate),
    });
  }

  toPersistence(jo: JobOffer): IJobOfferSchema {
    return {
      id: jo.id,
      title: jo.title,
      location: jo.location,
      type: jo.type,
      salaryMin: jo.salaryMin,
      salaryMax: jo.salaryMax,
      company: jo.company,
      industry: jo.industry,
      skills: jo.skills,
      postedDate: dayjs(jo.postedDate).toDate(),
    };
  }
}
