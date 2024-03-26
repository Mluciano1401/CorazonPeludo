import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { registerService } from './register.service';
import { registerController } from './register.controller';
import { register, registerSchema } from './schema/register.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: register.name,
        schema: registerSchema
      }
    ])
  ],
  controllers: [registerController],
  providers: [registerService]
})
export class registerModule {}
