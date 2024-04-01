import { Module } from '@nestjs/common';
import { DireccionService } from './direccionservice';
import { DireccionController } from './direccion.controller';

@Module({
  imports: [
  ],
  controllers: [DireccionController],
  providers: [DireccionService]
})
export class DireccionModule {}
