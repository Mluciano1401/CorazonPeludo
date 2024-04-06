import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';

@Module({
  imports: [
  ],
  controllers: [VehiculoController],
  providers: [VehiculoService]
})
export class VehiculoModule {}
