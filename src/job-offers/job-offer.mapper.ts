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
      companyId: jo.companyId,
      postedDate: dayjs(jo.postedDate),

      company: jo.company,
      skills: jo.skills.map((skill) => (skill as any).skill),
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
      companyId: jo.companyId,
      postedDate: dayjs(jo.postedDate).toDate(),

      company: jo.company,
      skills: jo.skills,
    };
  }
}
