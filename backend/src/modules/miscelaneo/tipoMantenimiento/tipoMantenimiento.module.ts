import { Module } from '@nestjs/common';
import { TipoMantenimientoService } from './tipoMantenimiento.service';
import { TipoMantenimientoController } from './tipoMantenimiento.controller';

@Module({
  imports: [
  ],
  controllers: [TipoMantenimientoController],
  providers: [TipoMantenimientoService]
})
export class TipoMantenimientoModule {}
