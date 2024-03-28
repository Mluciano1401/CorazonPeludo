import { Module } from '@nestjs/common';
import { SolicitudRService } from './solicitud.service';
import { SolicitudRController } from './solicitud.controller';

@Module({
  imports: [
  ],
  controllers: [SolicitudRController],
  providers: [SolicitudRService]
})
export class SolicitudModule {}
