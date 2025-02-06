import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import ListJobOfferUseCase from '../../domain/ports/inbounds/list-job-offer.use-case';
import ListJobOffersDto from '../../dtos/requests/list-job-offers.dto';
import ListJobOffersResponse, {
  ListJobOffersResponseDto,
} from '../../dtos/response/list-job-offers.dto';

@Controller('/api/job-offers')
@ApiTags('Job Offers')
export class JobOffersController {
  constructor(private readonly listJobOfferUseCase: ListJobOfferUseCase) {}

  @Get()
  @ApiOkResponse({ type: ListJobOffersResponseDto })
  async listJobOffers(
    @Query() listJobOffersRequestDto: ListJobOffersDto,
  ): Promise<ListJobOffersResponse> {
    const result = await this.listJobOfferUseCase.execute(
      listJobOffersRequestDto,
    );

    return ListJobOffersResponse.fromDomain(result);
  }
}
