import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ConfigService from './common/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ConfigService.get<number>('app.httpServer.port'));
}
bootstrap();
