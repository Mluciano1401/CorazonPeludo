import { Module } from '@nestjs/common';
import { SolicitudAService } from './solicitudA.service';
import { SolicitudAController } from './solicitudA.controller';

@Module({
  imports: [
  ],
  controllers: [SolicitudAController],
  providers: [SolicitudAService]
})
export class SolicitudModule {}
