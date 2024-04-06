import { Module } from '@nestjs/common';
import { SintomasService } from './sintomas.service';
import { SintomasController } from './sintomas.controller';

@Module({
  imports: [
  ],
  controllers: [SintomasController],
  providers: [SintomasService]
})
export class SintomasModule {}
