import { Module } from '@nestjs/common';
import { SolicitanteService } from './solicitante.service';
import { SolicitanteController } from './solicitante.controller';
import { PersonaService } from 'src/modules/tercero/persona/persona.service';

@Module({
  imports: [
  ],
  controllers: [SolicitanteController],
  providers: [SolicitanteService,PersonaService]
})
export class SolicitanteModule {}
