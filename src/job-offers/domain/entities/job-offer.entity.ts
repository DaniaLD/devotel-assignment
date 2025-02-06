import { IJobOffer } from '../models/job-offers.interface';
import { Dayjs } from 'dayjs';
import Company from './company.entity';
import Skill from './skill.entity';

export default class JobOffer implements IJobOffer {
  id: string;
  title: string;
  location: string;
  type: string;
  salaryMin: number;
  salaryMax: number;
  companyId: string;
  postedDate: Date | Dayjs;

  company: Company;
  skills: Skill[];

  constructor(props: IJobOffer) {
    this.id = props.id;
    this.title = props.title;
    this.location = props.location;
    this.type = props.type;
    this.salaryMax = props.salaryMax;
    this.salaryMin = props.salaryMin;
    this.companyId = props.companyId;
    this.company = props.company;
    this.skills = props.skills;
    this.postedDate = props.postedDate;
  }
}
