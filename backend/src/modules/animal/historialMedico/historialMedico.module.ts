import { Module } from '@nestjs/common';
import { HistorialMedicoService } from './historialMedico.service';
import { HistorialMedicoController } from './historialMedico.controller';

@Module({
  imports: [
  ],
  controllers: [HistorialMedicoController],
  providers: [HistorialMedicoService]
})
export class HistorialMedicoModule {}
