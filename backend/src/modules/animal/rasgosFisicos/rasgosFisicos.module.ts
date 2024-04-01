import { Module } from '@nestjs/common';
import { RasgosFisicosService } from './rasgosFisicos.service';
import { RasgosFisicosController } from './rasgosFisicos.controller';

@Module({
  imports: [
  ],
  controllers: [RasgosFisicosController],
  providers: [RasgosFisicosService]
})
export class RasgosFisicosModule {}
