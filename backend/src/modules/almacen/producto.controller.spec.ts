import { Test, TestingModule } from '@nestjs/testing';
import { productoController } from './producto.controller';
import { productoService } from './producto.service';

describe('productoController', () => {
  let controller: productoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [productoController],
      providers: [productoService],
    }).compile();

    controller = module.get<productoController>(productoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
