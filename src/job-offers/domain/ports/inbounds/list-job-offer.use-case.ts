import {
  IListJobOffersCommand,
  IListJobOffersResult,
} from '../../models/list-job-offers.command.interface';

export default abstract class ListJobOfferUseCase {
  abstract execute(
    filters: IListJobOffersCommand,
  ): Promise<IListJobOffersResult>;
}
