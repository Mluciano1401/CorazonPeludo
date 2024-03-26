import { Test, TestingModule } from '@nestjs/testing';
import { loginController } from './login.controller';
import { loginService } from './login.service';

describe('loginController', () => {
  let controller: loginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [loginController],
      providers: [loginService],
    }).compile();

    controller = module.get<loginController>(loginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
