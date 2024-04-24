import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { PersonaService } from '../persona/persona.service';

@Module({
  imports: [
  ],
  controllers: [EmpleadoController],
  providers: [EmpleadoService,PersonaService]
})
export class EmpleadoModule {}
