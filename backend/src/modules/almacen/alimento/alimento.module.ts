import { Module } from '@nestjs/common';
import { AlimentoService } from './alimento.service';
import { AlimentoController } from './alimento.controller';

@Module({
  imports: [
  ],
  controllers: [AlimentoController],
  providers: [AlimentoService]
})
export class AlimentoModule {}
