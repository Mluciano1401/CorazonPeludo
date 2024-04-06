import { Module } from '@nestjs/common';
import { VacunaService } from './vacuna.service';
import { VacunaController } from './vacuna.controller';

@Module({
  imports: [
  ],
  controllers: [VacunaController],
  providers: [VacunaService]
})
export class VacunaModule {}
