import { Module } from '@nestjs/common';
import { HistorialVacunasService } from './historialVacunas.service';
import { HistorialVacunasController } from './historialVacunas.controller';

@Module({
  imports: [
  ],
  controllers: [HistorialVacunasController],
  providers: [HistorialVacunasService]
})
export class HistorialVacunasModule {}
