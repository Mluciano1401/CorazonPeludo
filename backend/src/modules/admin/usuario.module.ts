import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { usuarioService } from './usuario.service';
import { usuarioController } from './usuario.controller';
import { usuario, usuarioSchema } from './schema/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: usuario.name,
        schema: usuarioSchema
      }
    ])
  ],
  controllers: [usuarioController],
  providers: [usuarioService]
})
export class usuarioModule {}
