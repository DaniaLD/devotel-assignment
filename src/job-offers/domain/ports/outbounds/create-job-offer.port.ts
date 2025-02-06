import JobOffer from '../../entities/job-offer.entity';

export default abstract class CreateJobOfferPort {
  abstract create(jobOffer: JobOffer): Promise<JobOffer>;
}
