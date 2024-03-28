import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';

@Module({
  imports: [
  ],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}
