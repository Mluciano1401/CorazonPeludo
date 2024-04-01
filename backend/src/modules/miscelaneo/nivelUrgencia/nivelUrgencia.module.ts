import { Module } from '@nestjs/common';
import { NivelUrgenciaService } from './nivelUrgencia.service';
import { NivelUrgenciaController } from './nivelUrgencia.controller';

@Module({
  imports: [
  ],
  controllers: [NivelUrgenciaController],
  providers: [NivelUrgenciaService]
})
export class NivelUrgenciaModule {}
