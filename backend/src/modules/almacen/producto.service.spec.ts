import { Test, TestingModule } from '@nestjs/testing';
import { productoService } from './producto.service';

describe('productoService', () => {
  let service: productoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [productoService],
    }).compile();

    service = module.get<productoService>(productoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
