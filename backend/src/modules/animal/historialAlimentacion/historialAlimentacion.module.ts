import { Module } from '@nestjs/common';
import { HistorialAlimentacionService } from './historialAlimentacion.service';
import { HistorialAlimentacionController } from './historialAlimentacion.controller';

@Module({
  imports: [
  ],
  controllers: [HistorialAlimentacionController],
  providers: [HistorialAlimentacionService]
})
export class HistorialAlimentacionModule {}
