import { Module } from '@nestjs/common';
import { TipoPielService } from './tipoPiel.service';
import { TipoPielController } from './tipoPiel.controller';

@Module({
  imports: [
  ],
  controllers: [TipoPielController],
  providers: [TipoPielService]
})
export class TipoPielModule {}
