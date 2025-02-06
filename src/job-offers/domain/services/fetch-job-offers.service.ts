import { Injectable } from '@nestjs/common';
import ConfigService from '../../../common/config/config.service';
import { Cron } from '@nestjs/schedule';
import {
  IJobOffer,
  IProviderAJobOffers,
  IProviderBJobOffers,
} from '../models/job-offers.interface';
import { firstValueFrom } from 'rxjs';
import * as dayjs from 'dayjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class FetchJobOffersService {
  constructor(private readonly httpService: HttpService) {}

  @Cron(ConfigService.get<string>('cronJobs.fetchJobOffers'))
  async fetchJobOffers(): Promise<void> {
    const [dataFromProviderA, dataFromProviderB] =
      await this.fetchJobOffersFromResources();
    const jobsA = this.unifiedTransformerFoProviderA(dataFromProviderA);
    const jobsB = this.unifiedTransformerFoProviderB(dataFromProviderB);

    // Prevent duplicates based on title and company
    const jobMap = new Map();
    [...jobsA, ...jobsB].forEach((job) => {
      const key = `${job.title}-${job.company}`;
      if (!jobMap.has(key)) {
        jobMap.set(key, job);
      }
    });
  }

  private async fetchJobOffersFromResources(): Promise<
    [IProviderAJobOffers, IProviderBJobOffers]
  > {
    const [provider1Response, provider2Response] = await Promise.all([
      firstValueFrom(
        this.httpService.get(
          'https://assignment.devotel.io/api/provider1/jobs',
        ),
      ),
      firstValueFrom(
        this.httpService.get(
          'https://assignment.devotel.io/api/provider2/jobs',
        ),
      ),
    ]);

    return [provider1Response.data, provider2Response.data];
  }

  private unifiedTransformerFoProviderA(
    data: IProviderAJobOffers,
  ): IJobOffer[] {
    return data?.jobs.map((job) => ({
      id: job.jobId,
      title: job.title,
      location: job.details.location,
      type: job.details.type,
      salary: job.details.salaryRange,
      company: job.company.name,
      industry: job.company.industry,
      skills: job.skills,
      postedDate: dayjs(job.postedDate),
    }));
  }

  private unifiedTransformerFoProviderB(
    data: IProviderBJobOffers,
  ): IJobOffer[] {
    return Object.entries(data.data.jobsList)?.map(([jobId, job]) => ({
      id: jobId,
      title: job.position,
      location: `${job.location.city}, ${job.location.state}`,
      type: job.location.remote ? 'Remote' : 'On-site',
      salary: `$${job.compensation.min / 1000}k - $${job.compensation.max / 1000}k`,
      company: job.employer.companyName,
      industry: 'N/A', // No industry info in structure B
      skills: job.requirements.technologies,
      postedDate: dayjs(job.datePosted),
    }));
  }
}
