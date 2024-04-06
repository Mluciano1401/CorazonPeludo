import { Module } from '@nestjs/common';
import { TipoVehiculoService } from './tipoVehiculo.service';
import { TipoVehiculoController } from './tipoVehiculo.controller';

@Module({
  imports: [
  ],
  controllers: [TipoVehiculoController],
  providers: [TipoVehiculoService]
})
export class TipoVehiculoModule {}
