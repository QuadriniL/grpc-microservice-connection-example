import { Test, TestingModule } from '@nestjs/testing';
import { LqPaymentsController } from './lq-payments.controller';
import { LqPaymentsService } from './lq-payments.service';

describe('LqPaymentsController', () => {
  let lqPaymentsController: LqPaymentsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LqPaymentsController],
      providers: [LqPaymentsService],
    }).compile();

    lqPaymentsController = app.get<LqPaymentsController>(LqPaymentsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(lqPaymentsController.getHello()).toBe('Hello World!');
    });
  });
});
