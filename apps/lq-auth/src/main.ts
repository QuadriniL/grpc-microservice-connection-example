import { NestFactory } from '@nestjs/core';
import { LqAuthModule } from './lq-auth.module';

async function bootstrap() {
  const app = await NestFactory.create(LqAuthModule);
  await app.listen(3000);
}
bootstrap();
