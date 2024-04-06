import { Module } from '@nestjs/common';
import { MantenimientoService } from './mantenimiento.service';
import { MantenimientoController } from './mantenimiento.controller';

@Module({
  imports: [
  ],
  controllers: [MantenimientoController],
  providers: [MantenimientoService]
})
export class MantenimientoModule {}
