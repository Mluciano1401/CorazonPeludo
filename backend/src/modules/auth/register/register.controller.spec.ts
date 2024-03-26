import { Test, TestingModule } from '@nestjs/testing';
import { registerController } from './register.controller';
import { registerService } from './register.service';

describe('registerController', () => {
  let controller: registerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [registerController],
      providers: [registerService],
    }).compile();

    controller = module.get<registerController>(registerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
