import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ConfigService from './common/config/config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Job Offers')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(ConfigService.get<number>('app.httpServer.port'));
}
bootstrap();
