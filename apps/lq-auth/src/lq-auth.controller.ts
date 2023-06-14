import { Controller, Get } from '@nestjs/common';
import { LqAuthService } from './lq-auth.service';

@Controller()
export class LqAuthController {
  constructor(private readonly lqAuthService: LqAuthService) {}

  @Get()
  getHello(): string {
    return this.lqAuthService.getHello();
  }
}
