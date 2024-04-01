import { Module } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { EstadoController } from './estado.controller';

@Module({
  imports: [
  ],
  controllers: [EstadoController],
  providers: [EstadoService]
})
export class EstadoModule {}
