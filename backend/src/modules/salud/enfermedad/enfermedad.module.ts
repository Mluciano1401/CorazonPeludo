import { Module } from '@nestjs/common';
import { EnfermedadService } from './enfermedad.service';
import { EnfermedadController } from './enfermedad.controller';

@Module({
  imports: [
  ],
  controllers: [EnfermedadController],
  providers: [EnfermedadService]
})
export class EnfermedadModule {}
