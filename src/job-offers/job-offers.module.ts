import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FetchJobOffersService } from './domain/services/fetch-job-offers.service';
import { JobOfferMapper } from './job-offer.mapper';
import CreateJobOfferPort from './domain/ports/outbounds/create-job-offer.port';
import { JobOfferPostgresRepository } from './infrastructure/database/postgres/job-offer-postgres.repository';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  imports: [HttpModule],
  providers: [
    PrismaService,
    FetchJobOffersService,
    JobOfferMapper,
    {
      provide: CreateJobOfferPort,
      useClass: JobOfferPostgresRepository,
    },
  ],
})
export class JobOffersModule {}
