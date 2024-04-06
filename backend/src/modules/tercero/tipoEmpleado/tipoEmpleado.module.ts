import { Module } from '@nestjs/common';
import { TipoEmpleadoService } from './tipoEmpleado.service';
import { TipoEmpleadoController } from './tipoEmpleado.controller';

@Module({
  imports: [
  ],
  controllers: [TipoEmpleadoController],
  providers: [TipoEmpleadoService]
})
export class TipoEmpleadoModule {}
