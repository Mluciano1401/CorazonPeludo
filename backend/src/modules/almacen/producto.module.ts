import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { productoService } from './producto.service';
import { productoController } from './producto.controller';
import { producto, productoSchema } from './schema/producto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: producto.name,
        schema: productoSchema
      }
    ])
  ],
  controllers: [productoController],
  providers: [productoService]
})
export class productoModule {}
