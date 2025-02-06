export interface IJobOfferSchema {
  id: string;
  title: string;
  location: string;
  type: string;
  salaryMin: number;
  salaryMax: number;
  company: string;
  industry: string;
  skills: string[];
  postedDate: Date;
}
