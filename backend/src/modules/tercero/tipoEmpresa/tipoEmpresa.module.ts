import { Module } from '@nestjs/common';
import { TipoEmpresaService } from './tipoEmpresa.service';
import { TipoEmpresaController } from './tipoEmpresa.controller';

@Module({
  imports: [
  ],
  controllers: [TipoEmpresaController],
  providers: [TipoEmpresaService]
})
export class TipoEmpresaModule {}
