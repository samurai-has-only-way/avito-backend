import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { AppConfig } from './modules/configuration/configuration.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(AppConfig);
  const PORT = config.values.app.port;

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  app.enableCors({ origin: true });
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Boilerplate API')
    .setDescription('Boilerplate API description')
    .setVersion('1.0')
    .addTag('health')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(PORT, () => console.log('Server listening on port: ', PORT));
}

Promise.resolve().then(bootstrap);
