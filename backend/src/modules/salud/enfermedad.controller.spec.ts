import { Test, TestingModule } from '@nestjs/testing';
import { enfermedadController } from './enfermedad.controller';
import { enfermedadService } from './enfermedad.service';

describe('enfermedadController', () => {
  let controller: enfermedadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [enfermedadController],
      providers: [enfermedadService],
    }).compile();

    controller = module.get<enfermedadController>(enfermedadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
