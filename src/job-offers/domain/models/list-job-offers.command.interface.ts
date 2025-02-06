import JobOffer from '../entities/job-offer.entity';

export interface IListJobOffersCommand {
  title?: string;
  location?: string;
  salaryMin?: number;
  salaryMax?: number;
  offset?: number;
  limit?: number;
}

export interface IListJobOffersResult {
  jobOffers: JobOffer[];
  nextPageToken: string;
  total: number;
}
