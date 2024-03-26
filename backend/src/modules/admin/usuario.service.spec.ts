import { Test, TestingModule } from '@nestjs/testing';
import { usuarioService } from './usuario.service';

describe('usuarioService', () => {
  let service: usuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [usuarioService],
    }).compile();

    service = module.get<usuarioService>(usuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
