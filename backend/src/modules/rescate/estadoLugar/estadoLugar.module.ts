import { Module } from '@nestjs/common';
import { EstadoLugarService } from './estadoLugar.service';
import { EstadoLugarController } from './estadoLugar.controller';

@Module({
  imports: [
  ],
  controllers: [EstadoLugarController],
  providers: [EstadoLugarService]
})
export class SolicitudModule {}
