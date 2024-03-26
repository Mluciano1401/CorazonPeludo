import { Test, TestingModule } from '@nestjs/testing';
import { solicitudService } from './solicitud.service';

describe('solicitudService', () => {
  let service: solicitudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [solicitudService],
    }).compile();

    service = module.get<solicitudService>(solicitudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
