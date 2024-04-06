import { Module } from '@nestjs/common';
import { ComplicacionesService } from './complicaciones.service';
import { ComplicacionesController } from './complicaciones.controller';

@Module({
  imports: [
  ],
  controllers: [ComplicacionesController],
  providers: [ComplicacionesService]
})
export class ComplicacionesModule {}
