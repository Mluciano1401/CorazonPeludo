import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { loginService } from './login.service';
import { loginController } from './login.controller';
import { login, loginSchema } from './schema/login.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: login.name,
        schema: loginSchema
      }
    ])
  ],
  controllers: [loginController],
  providers: [loginService]
})
export class loginModule {}
