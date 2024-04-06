import { Module } from '@nestjs/common';
import { EstadoSaludService } from './estadoSalud.service';
import { EstadoSaludController } from './estadoSalud.controller';

@Module({
  imports: [
  ],
  controllers: [EstadoSaludController],
  providers: [EstadoSaludService]
})
export class EstadoSaludModule {}
