import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  _usersService: UsuarioService;
  _jwtService: JwtService;
  constructor(
    private UsuarioService: UsuarioService,
    private JwtService: JwtService,
  ) {
    this._jwtService = this.JwtService;
    this._usersService = this.UsuarioService;
  }

  // Extract the user from the database
  async validateUser({ username, password }: LoginDto): Promise<any> {
    const user = await this._usersService.getUser(username);
    if (!user) {
      throw new UnauthorizedException('Username or password incorrect');
    }
    /*const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Username or password incorrect');
    }*/
    if (password !== user.password) {
      throw new UnauthorizedException('Username or password incorrect');
    }
    return user;
  }

  // Create the JWT payload and return the token
  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
    };
    return {
      access_token: this._jwtService.sign(payload),
    };
  }
}