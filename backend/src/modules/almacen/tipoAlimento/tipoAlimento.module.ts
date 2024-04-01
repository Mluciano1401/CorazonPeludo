import { Module } from '@nestjs/common';
import { TipoAlimentoService } from './tipoAlimento.service';
import { TipoAlimentoController } from './tipoAlimento.controller';

@Module({
  imports: [
  ],
  controllers: [TipoAlimentoController],
  providers: [TipoAlimentoService]
})
export class TipoAlimentoModule {}
