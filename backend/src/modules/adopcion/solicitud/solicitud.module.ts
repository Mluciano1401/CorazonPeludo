import { Module } from '@nestjs/common';
import { SolicitudAService } from './solicitud.service';
import { SolicitudAController } from './solicitud.controller';

@Module({
  imports: [
  ],
  controllers: [SolicitudAController],
  providers: [SolicitudAService]
})
export class SolicitudModule {}
