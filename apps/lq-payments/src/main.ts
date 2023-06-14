import { NestFactory } from '@nestjs/core';
import { LqPaymentsModule } from './lq-payments.module';

async function bootstrap() {
  const app = await NestFactory.create(LqPaymentsModule);
  await app.listen(3000);
}
bootstrap();
