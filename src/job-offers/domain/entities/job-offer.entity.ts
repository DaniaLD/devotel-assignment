import { IJobOffer } from '../models/job-offers.interface';
import { Dayjs } from 'dayjs';

export default class JobOffer implements IJobOffer {
  id: string;
  title: string;
  location: string;
  type: string;
  salaryMin: number;
  salaryMax: number;
  company: string;
  industry: string;
  skills: string[];
  postedDate: Date | Dayjs;

  constructor(props: IJobOffer) {
    this.id = props.id;
    this.title = props.title;
    this.location = props.location;
    this.type = props.type;
    this.salaryMax = props.salaryMax;
    this.salaryMin = props.salaryMin;
    this.company = props.company;
    this.industry = props.industry;
    this.skills = props.skills;
    this.postedDate = props.postedDate;
  }
}
