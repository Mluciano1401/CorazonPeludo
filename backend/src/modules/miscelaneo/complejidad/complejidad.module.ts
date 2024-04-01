import { Module } from '@nestjs/common';
import { ComplejidadService } from './complejidad.service';
import { ComplejidadController } from './complejidad.controller';

@Module({
  imports: [
  ],
  controllers: [ComplejidadController],
  providers: [ComplejidadService]
})
export class ComplejidadModule {}
