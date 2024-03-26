import { Test, TestingModule } from '@nestjs/testing';
import { enfermedadService } from './enfermedad.service';

describe('enfermedadService', () => {
  let service: enfermedadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [enfermedadService],
    }).compile();

    service = module.get<enfermedadService>(enfermedadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
