import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Warehouse Management API')
    .setDescription('API for managing warehouses')
    .setVersion('1.0')
    .addTag('warehouses')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { tryItOutEnabled: true, showRequestDuration: true },
  });

  await app.listen(process.env.PORT ?? 5000);
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
}
bootstrap();
