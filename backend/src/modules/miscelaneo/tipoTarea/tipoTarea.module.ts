import { Module } from '@nestjs/common';
import { TipoTareaService } from './tipoTarea.service';
import { TipoTareaController } from './tipoTarea.controller';

@Module({
  imports: [
  ],
  controllers: [TipoTareaController],
  providers: [TipoTareaService]
})
export class TipoTareaModule {}
