import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './helper/jwt-auth.guard';
import { JwtStrategy } from './helper/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: {
        expiresIn: '160s',
      },
    }),
  ],
  providers: [AuthService, JwtAuthGuard, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
