import { Test, TestingModule } from '@nestjs/testing';
import { personaController } from './persona.controller';
import { personaService } from './persona.service';

describe('personaController', () => {
  let controller: personaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [personaController],
      providers: [personaService],
    }).compile();

    controller = module.get<personaController>(personaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
