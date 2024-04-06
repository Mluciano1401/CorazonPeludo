import { Module } from '@nestjs/common';
import { EstadoCivilService } from './estadoCivil.service';
import { EstadoCivilController } from './estadoCivil.controller';

@Module({
  imports: [
  ],
  controllers: [EstadoCivilController],
  providers: [EstadoCivilService]
})
export class EstadoCivilModule {}
