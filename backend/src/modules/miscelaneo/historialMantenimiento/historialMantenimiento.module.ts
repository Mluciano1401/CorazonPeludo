import { Module } from '@nestjs/common';
import { HistorialMantenimientoService } from './historialMantenimiento.service';
import { HistorialMantenimientoController } from './historialMantenimiento.controller';

@Module({
  imports: [
  ],
  controllers: [HistorialMantenimientoController],
  providers: [HistorialMantenimientoService]
})
export class HistorialMantenimientoModule {}
