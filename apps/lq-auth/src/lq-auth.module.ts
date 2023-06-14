import { Module } from '@nestjs/common';
import { LqAuthController } from './lq-auth.controller';
import { LqAuthService } from './lq-auth.service';

@Module({
  imports: [],
  controllers: [LqAuthController],
  providers: [LqAuthService],
})
export class LqAuthModule {}
