import { Module } from '@nestjs/common';
import { TipoRecursoService } from './tipoRecurso.service';
import { TipoRecursoController } from './tipoRecurso.controller';

@Module({
  imports: [
  ],
  controllers: [TipoRecursoController],
  providers: [TipoRecursoService]
})
export class TipoRecursoModule {}
