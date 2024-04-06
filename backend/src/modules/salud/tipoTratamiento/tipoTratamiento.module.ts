import { Module } from '@nestjs/common';
import { TipoTratamientoService } from './tipoTratamiento.service';
import { TipoTratamientoController } from './tipoTratamiento.controller';

@Module({
  imports: [
  ],
  controllers: [TipoTratamientoController],
  providers: [TipoTratamientoService]
})
export class TipoTratamientoModule {}
