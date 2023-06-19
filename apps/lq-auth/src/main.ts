import { NestFactory } from '@nestjs/core';
import { LqAuthModule } from './lq-auth.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(LqAuthModule, {
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      protoPath: join(__dirname, '../../proto/auth.proto'),
    },
  });
}
bootstrap();
