import { Dayjs } from 'dayjs';

export interface IJobOffer {
  id: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  company: string;
  industry: string;
  skills: string[];
  postedDate: Date | Dayjs;
}

export interface IProviderAJobOffers {
  metadata: {
    requestId: string;
    timestamp: string;
  };
  jobs: {
    jobId: string;
    title: string;
    details: {
      location: string;
      type: string;
      salaryRange: string;
    };
    company: {
      name: string;
      industry: string;
    };
    skills: string[];
    postedDate: string;
  }[];
}

export interface IProviderBJobOffers {
  status: string;
  data: {
    jobsList: {
      [key: string]: {
        position: string;
        location: {
          city: string;
          state: string;
          remote: boolean;
        };
        compensation: {
          min: number;
          max: number;
          currency: string;
        };
        employer: {
          companyName: string;
          website: string;
        };
        requirements: {
          experience: number;
          technologies: string[];
        };
        datePosted: string;
      };
    };
  };
}
