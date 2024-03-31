import { Module } from '@nestjs/common';
import { TipoUsuarioService } from './tipoUsuario.service';
import { TipoUsuarioController } from './tipoUsuario.controller';

@Module({
  imports: [
  ],
  controllers: [TipoUsuarioController],
  providers: [TipoUsuarioService]
})
export class TipoUsuarioModule {}
