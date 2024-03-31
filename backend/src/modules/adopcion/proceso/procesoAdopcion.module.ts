import { Module } from '@nestjs/common';
import { ProcesoAdopcionService } from './procesoAdopcion.service';
import { ProcesoAdopcionController } from './procesoAdopcion.controller';

@Module({
  imports: [
  ],
  controllers: [ProcesoAdopcionController],
  providers: [ProcesoAdopcionService]
})
export class ProcesoAdopcionModule {}
