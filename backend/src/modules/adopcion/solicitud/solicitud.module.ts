import { Module } from '@nestjs/common';
import { SolicitudService } from './Solicitud.service';
import { SolicitudController } from './Solicitud.controller';

@Module({
  imports: [
  ],
  controllers: [SolicitudController],
  providers: [SolicitudService]
})
export class SolicitudModule {}
