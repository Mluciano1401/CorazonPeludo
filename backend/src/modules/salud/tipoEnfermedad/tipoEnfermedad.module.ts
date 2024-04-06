import { Module } from '@nestjs/common';
import { TipoEnfermedadService } from './tipoEnfermedad.service';
import { TipoEnfermedadController } from './tipoEnfermedad.controller';

@Module({
  imports: [
  ],
  controllers: [TipoEnfermedadController],
  providers: [TipoEnfermedadService]
})
export class TipoEnfermedadModule {}
