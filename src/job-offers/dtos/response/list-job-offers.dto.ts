import GlobalResponseDto from '../../../common/dto/global-response-wrapper.dto';
import { ApiProperty } from '@nestjs/swagger';
import JobOffer from '../../domain/entities/job-offer.entity';
import * as dayjs from 'dayjs';
import { IListJobOffersResult } from '../../domain/models/list-job-offers.command.interface';

class ListJobOffersCompanyResponseItemsDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  industry: string;
}

class ListJobOffersSkillResponseItemsDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}

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
  @ApiProperty({ type: ListJobOffersCompanyResponseItemsDto })
  company: ListJobOffersCompanyResponseItemsDto;
  @ApiProperty()
  industry: string;
  @ApiProperty({ type: ListJobOffersSkillResponseItemsDto, isArray: true })
  skills: ListJobOffersSkillResponseItemsDto[];
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
    company: {
      id: string;
      name: string;
      industry: string;
    };
    industry: string;
    skills: {
      id: string;
      name: string;
    }[];
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
      const { companyId: _, ...restJoDetails } = jo;

      items.push({
        ...restJoDetails,
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
