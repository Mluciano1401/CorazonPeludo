import { Test, TestingModule } from '@nestjs/testing';
import { loginService } from './login.service';

describe('loginService', () => {
  let service: loginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [loginService],
    }).compile();

    service = module.get<loginService>(loginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
