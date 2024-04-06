import { Module } from '@nestjs/common';
import { DiagnosticoService } from './diagnostico.service';
import { DiagnosticoController } from './diagnostico.controller';

@Module({
  imports: [
  ],
  controllers: [DiagnosticoController],
  providers: [DiagnosticoService]
})
export class DiagnosticoModule {}
