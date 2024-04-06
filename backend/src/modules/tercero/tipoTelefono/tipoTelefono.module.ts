import { Module } from '@nestjs/common';
import { TipoTelefonoService } from './tipoTelefono.service';
import { TipoTelefonoController } from './tipoTelefono.controller';

@Module({
  imports: [
  ],
  controllers: [TipoTelefonoController],
  providers: [TipoTelefonoService]
})
export class TipoTelefonoModule {}
