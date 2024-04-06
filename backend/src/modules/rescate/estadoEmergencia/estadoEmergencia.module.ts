import { Module } from '@nestjs/common';
import { EstadoEmergenciaService } from './estadoEmergencia.service';
import { EstadoEmergenciaController } from './estadoEmergencia.controller';

@Module({
  imports: [
  ],
  controllers: [EstadoEmergenciaController],
  providers: [EstadoEmergenciaService]
})
export class SolicitudModule {}
