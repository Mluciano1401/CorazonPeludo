import { Module } from '@nestjs/common';
import { TipoDonacionService } from './tipoDonacion.service';
import { TipoDonacionController } from './tipoDonacion.controller';

@Module({
  imports: [
  ],
  controllers: [TipoDonacionController],
  providers: [TipoDonacionService]
})
export class TipoDonacionModule {}
