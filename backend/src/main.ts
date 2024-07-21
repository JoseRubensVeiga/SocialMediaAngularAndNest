import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureOpenApi } from './@core/config/open-api';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configureOpenApi(app);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap();
