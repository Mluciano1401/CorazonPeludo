import { Module } from '@nestjs/common';
import { ActividadEconomicaService } from './actividadEconomica.service';
import { ActividadEconomicaController } from './actividadEconomica.controller';

@Module({
  imports: [
  ],
  controllers: [ActividadEconomicaController],
  providers: [ActividadEconomicaService]
})
export class ActividadEconomicaModule {}
