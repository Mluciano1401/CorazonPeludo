import { Module } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { AlmacenController } from './almacen.controller';

@Module({
  imports: [
  ],
  controllers: [AlmacenController],
  providers: [AlmacenService]
})
export class AlmacenModule {}
