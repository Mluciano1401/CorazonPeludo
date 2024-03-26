import { Test, TestingModule } from '@nestjs/testing';
import { registerService } from './register.service';

describe('registerService', () => {
  let service: registerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [registerService],
    }).compile();

    service = module.get<registerService>(registerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
