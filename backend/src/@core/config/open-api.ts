import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const configureOpenApi = (app: INestApplication<any>) => {
  const config = new DocumentBuilder()
    .setTitle('Social Media')
    .setDescription("Social Media API's")
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
