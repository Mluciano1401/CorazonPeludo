import { Module } from '@nestjs/common';
import { ViaAdministracionService } from './viaAministracion.service';
import { ViaAdministracionController } from './viaAministracion.controller';

@Module({
  imports: [
  ],
  controllers: [ViaAdministracionController],
  providers: [ViaAdministracionService]
})
export class ViaAdministracionModule {}
