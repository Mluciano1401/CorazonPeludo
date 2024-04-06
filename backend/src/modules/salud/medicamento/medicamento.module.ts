import { Module } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';
import { MedicamentoController } from './medicamento.controller';

@Module({
  imports: [
  ],
  controllers: [MedicamentoController],
  providers: [MedicamentoService]
})
export class MedicamentoModule {}
