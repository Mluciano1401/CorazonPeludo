import { Module } from '@nestjs/common';
import { CirugiaService } from './cirugia.service';
import { CirugiaController } from './cirugia.controller';

@Module({
  imports: [
  ],
  controllers: [CirugiaController],
  providers: [CirugiaService]
})
export class CirugiaModule {}
