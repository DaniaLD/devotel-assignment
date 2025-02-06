import { Injectable } from '@nestjs/common';
import ListJobOfferUseCase from '../ports/inbounds/list-job-offer.use-case';
import {
  IListJobOffersCommand,
  IListJobOffersResult,
} from '../models/list-job-offers.command.interface';
import ListJobOffersPort from '../ports/outbounds/list-job-offers.port';

@Injectable()
export class ListJobOffersService implements ListJobOfferUseCase {
  constructor(private readonly listJobOffersPort: ListJobOffersPort) {}

  execute(filters: IListJobOffersCommand): Promise<IListJobOffersResult> {
    return this.listJobOffersPort.list(filters);
  }
}
