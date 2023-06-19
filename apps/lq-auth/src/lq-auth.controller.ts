import { Controller, Get } from '@nestjs/common';
import { LqAuthService } from './lq-auth.service';
import { GrpcMethod } from "@nestjs/microservices";
import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
import { randomStringGenerator } from "@nestjs/common/utils/random-string-generator.util";

@Controller()
export class LqAuthController {
  constructor(private readonly lqAuthService: LqAuthService) {}

  @GrpcMethod('AuthService', 'Login')
  login(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    return { token: randomStringGenerator(), error: '' };
  }
}
