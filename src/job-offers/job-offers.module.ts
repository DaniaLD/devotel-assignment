import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FetchJobOffersService } from './domain/services/fetch-job-offers.service';
import { JobOfferMapper } from './job-offer.mapper';
import CreateJobOfferPort from './domain/ports/outbounds/create-job-offer.port';
import { JobOfferPostgresRepository } from './infrastructure/database/postgres/job-offer-postgres.repository';
import { PrismaService } from '../common/prisma/prisma.service';
import { JobOffersController } from './adapters/primary/job-offers.controller';
import ListJobOfferUseCase from './domain/ports/inbounds/list-job-offer.use-case';
import { ListJobOffersService } from './domain/services/list-job-offers.service';
import ListJobOffersPort from './domain/ports/outbounds/list-job-offers.port';

@Module({
  controllers: [JobOffersController],
  imports: [HttpModule],
  providers: [
    PrismaService,
    FetchJobOffersService,
    JobOfferMapper,
    {
      provide: ListJobOfferUseCase,
      useFactory: (a) => new ListJobOffersService(a),
      inject: [ListJobOffersPort],
    },
    {
      provide: CreateJobOfferPort,
      useClass: JobOfferPostgresRepository,
    },
    {
      provide: ListJobOffersPort,
      useClass: JobOfferPostgresRepository,
    },
  ],
})
export class JobOffersModule {}
