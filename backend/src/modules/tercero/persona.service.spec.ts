import { Test, TestingModule } from '@nestjs/testing';
import { personaService } from './persona.service';

describe('personaService', () => {
  let service: personaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [personaService],
    }).compile();

    service = module.get<personaService>(personaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
