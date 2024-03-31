import { Module } from '@nestjs/common';
import { AsignacionRecursosService } from './asignacionRecurso.service';
import { AsignacionRecursosController } from './asignacionRecurso.controller';

@Module({
  imports: [
  ],
  controllers: [AsignacionRecursosController],
  providers: [AsignacionRecursosService]
})
export class AsignacionRecursosModule {}
