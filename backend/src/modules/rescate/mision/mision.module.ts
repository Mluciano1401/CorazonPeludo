import { Module } from '@nestjs/common';
import { MisionService } from './mision.service';
import { MisionController } from './mision.controller';

@Module({
  imports: [
  ],
  controllers: [MisionController],
  providers: [MisionService]
})
export class SolicitudModule {}
