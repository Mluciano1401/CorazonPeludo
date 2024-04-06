import { Module } from '@nestjs/common';
import { TipoPersonaService } from './tipoPersona.service';
import { TipoPersonaController } from './tipoPersona.controller';

@Module({
  imports: [
  ],
  controllers: [TipoPersonaController],
  providers: [TipoPersonaService]
})
export class TipoPersonaModule {}
