import { Module } from '@nestjs/common';
import { TipoMedicamentoService } from './tipoMedicamento.service';
import { TipoMedicamentoController } from './tipoMedicamento.controller';

@Module({
  imports: [
  ],
  controllers: [TipoMedicamentoController],
  providers: [TipoMedicamentoService]
})
export class TipoMedicamentoModule {}
