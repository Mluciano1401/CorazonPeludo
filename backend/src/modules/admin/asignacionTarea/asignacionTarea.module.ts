import { Module } from '@nestjs/common';
import { AsignacionTareaService } from './asignacionTarea.service';
import { AsignacionTareaController } from './asignacionTarea.controller';

@Module({
  imports: [
  ],
  controllers: [AsignacionTareaController],
  providers: [AsignacionTareaService]
})
export class AsignacionTareaModule {}
