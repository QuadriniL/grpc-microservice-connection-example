import { Test, TestingModule } from '@nestjs/testing';
import { LqAuthController } from './lq-auth.controller';
import { LqAuthService } from './lq-auth.service';

describe('LqAuthController', () => {
  let lqAuthController: LqAuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LqAuthController],
      providers: [LqAuthService],
    }).compile();

    lqAuthController = app.get<LqAuthController>(LqAuthController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(lqAuthController.getHello()).toBe('Hello World!');
    });
  });
});
