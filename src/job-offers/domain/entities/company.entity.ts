import { ICompany } from '../models/companies.interface';

export default class Company implements ICompany {
  id: string;
  name: string;
  industry: string;

  constructor(props: ICompany) {
    this.id = props.id;
    this.name = props.name;
    this.industry = props.industry;
  }
}
