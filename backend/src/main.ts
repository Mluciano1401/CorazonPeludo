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
    origin: ['*','http://localhost:5500','http://127.0.0.1:5500'],
    credentials: true ,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
