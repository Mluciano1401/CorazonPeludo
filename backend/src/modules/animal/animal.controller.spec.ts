import { Test, TestingModule } from '@nestjs/testing';
import { animalController } from './animal.controller';
import { animalService } from './animal.service';

describe('animalController', () => {
  let controller: animalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [animalController],
      providers: [animalService],
    }).compile();

    controller = module.get<animalController>(animalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
