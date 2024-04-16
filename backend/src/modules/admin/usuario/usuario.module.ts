import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';
import { JwtService } from '@nestjs/jwt';
@Module({
  imports: [
    AuthModule
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService,AuthService,JwtService]
})
export class usuarioModule {}
