import { ISkillSchema } from './skills.schema';
import { ICompanySchema } from './company.schema';

export interface IJobOfferSchema {
  id: string;
  title: string;
  location: string;
  type: string;
  salaryMin: number;
  salaryMax: number;
  companyId: string;
  postedDate: Date;

  company: ICompanySchema;
  skills: ISkillSchema[];
}
