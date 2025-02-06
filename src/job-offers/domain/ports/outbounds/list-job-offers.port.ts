import {
  IListJobOffersCommand,
  IListJobOffersResult,
} from '../../models/list-job-offers.command.interface';

export default abstract class ListJobOffersPort {
  abstract list(filters: IListJobOffersCommand): Promise<IListJobOffersResult>;
}
