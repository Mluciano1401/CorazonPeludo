import { Module } from '@nestjs/common';
import { SolicitanteService } from './solicitante.service';
import { SolicitanteController } from './solicitante.controller';

@Module({
  imports: [
  ],
  controllers: [SolicitanteController],
  providers: [SolicitanteService]
})
export class SolicitanteModule {}
