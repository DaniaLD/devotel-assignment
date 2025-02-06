import { ISkill } from '../models/skills.interfacfe';

export default class Skill implements ISkill {
  id: string;
  name: string;

  constructor(props: ISkill) {
    this.id = props.id;
    this.name = props.name;
  }
}
