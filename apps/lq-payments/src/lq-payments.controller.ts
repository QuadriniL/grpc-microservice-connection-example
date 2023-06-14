import { Controller, Get } from '@nestjs/common';
import { LqPaymentsService } from './lq-payments.service';

@Controller()
export class LqPaymentsController {
  constructor(private readonly lqPaymentsService: LqPaymentsService) {}

  @Get()
  getHello(): string {
    return this.lqPaymentsService.getHello();
  }
}
