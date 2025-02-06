import GlobalResponseDto from '../../../common/dto/global-response-wrapper.dto';
import { ApiProperty } from '@nestjs/swagger';
import JobOffer from '../../domain/entities/job-offer.entity';
import * as dayjs from 'dayjs';
import { IListJobOffersResult } from '../../domain/models/list-job-offers.command.interface';

class ListJobOffersResponseItemsDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  location: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  salaryMin: number;
  @ApiProperty()
  salaryMax: number;
  @ApiProperty()
  company: string;
  @ApiProperty()
  industry: string;
  @ApiProperty({ type: String, isArray: true })
  skills: string[];
  @ApiProperty()
  postedDate: string;
}

export default class ListJobOffersResponse {
  @ApiProperty({ type: ListJobOffersResponseItemsDto, isArray: true })
  items: {
    id: string;
    title: string;
    location: string;
    type: string;
    salaryMin: number;
    salaryMax: number;
    company: string;
    industry: string;
    skills: string[];
    postedDate: string;
  }[];
  @ApiProperty()
  nextPageToken: string;
  @ApiProperty()
  total: number;

  constructor(jobOffers: JobOffer[], nextPageToken: string, total: number) {
    this.total = total;
    this.nextPageToken = nextPageToken;

    const items = [];
    jobOffers.forEach((jo) => {
      items.push({
        ...jo,
        postedDate: dayjs(jo.postedDate).toISOString(),
      });
    });
    this.items = items;
  }

  static fromDomain(result: IListJobOffersResult): ListJobOffersResponse {
    const { jobOffers, total, nextPageToken } = result;
    return new ListJobOffersResponse(jobOffers, nextPageToken, total);
  }
}

export class ListJobOffersResponseDto extends GlobalResponseDto {
  @ApiProperty({ type: ListJobOffersResponse })
  payload: ListJobOffersResponse;
}
