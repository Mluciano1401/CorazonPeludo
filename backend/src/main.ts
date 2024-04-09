import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const config = new DocumentBuilder()
    .addBasicAuth()
    .setTitle('My documentation API')
    .setDescription('this is a API for CorazonPeludoApp')
    .setVersion('1.0')
    .addTag('endpoints')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT',	 'DELETE'],
    allowedHeaders: ['Content-Type'],
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
