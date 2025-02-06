import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobOffersModule } from './job-offers/job-offers.module';
import ConfigService from './common/config/config.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(), JobOffersModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
