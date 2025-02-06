import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FetchJobOffersService } from './domain/services/fetch-job-offers.service';

@Module({ imports: [HttpModule], providers: [FetchJobOffersService] })
export class JobOffersModule {}
