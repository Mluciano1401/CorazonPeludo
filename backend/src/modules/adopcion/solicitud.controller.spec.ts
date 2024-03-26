import { Test, TestingModule } from '@nestjs/testing';
import { solicitudController } from './solicitud.controller';
import { solicitudService } from './solicitud.service';

describe('solicitudController', () => {
  let controller: solicitudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [solicitudController],
      providers: [solicitudService],
    }).compile();

    controller = module.get<solicitudController>(solicitudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
