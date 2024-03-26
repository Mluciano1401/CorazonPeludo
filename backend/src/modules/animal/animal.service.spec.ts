import { Test, TestingModule } from '@nestjs/testing';
import { animalService } from './animal.service';

describe('animalService', () => {
  let service: animalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [animalService],
    }).compile();

    service = module.get<animalService>(animalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
