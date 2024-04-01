import { Module } from '@nestjs/common';
import { TipoProductoService } from './tipoProducto.service';
import { TipoProductoController } from './tipoProducto.controller';

@Module({
  imports: [
  ],
  controllers: [TipoProductoController],
  providers: [TipoProductoService]
})
export class TipoProductoModule {}
