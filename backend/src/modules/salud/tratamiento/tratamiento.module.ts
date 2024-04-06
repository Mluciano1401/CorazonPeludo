import { Module } from '@nestjs/common';
import { TratamientoService } from './tratamiento.service';
import { TratamientoController } from './tratamiento.controller';

@Module({
  imports: [
  ],
  controllers: [TratamientoController],
  providers: [TratamientoService]
})
export class TratamientoModule {}
