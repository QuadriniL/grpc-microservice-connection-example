import { Module } from '@nestjs/common';
import { LqPaymentsController } from './lq-payments.controller';
import { LqPaymentsService } from './lq-payments.service';

@Module({
  imports: [],
  controllers: [LqPaymentsController],
  providers: [LqPaymentsService],
})
export class LqPaymentsModule {}
