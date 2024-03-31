import { Module } from '@nestjs/common';
import { LogAccionesService } from './logAcciones.service';
import { LogAccionesController } from './logAcciones.controller';

@Module({
  imports: [
  ],
  controllers: [LogAccionesController],
  providers: [LogAccionesService]
})
export class LogAccionesModule {}
