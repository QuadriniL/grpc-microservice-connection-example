import { Injectable } from '@nestjs/common';

@Injectable()
export class LqAuthService {
  getHello(): string {
    return 'Hello World!';
  }
}