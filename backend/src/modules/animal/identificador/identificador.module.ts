import { Module } from '@nestjs/common';
import { IndentificadorService } from './identificador.service';
import { IndentificadorController } from './identificador.controller';

@Module({
  imports: [
  ],
  controllers: [IndentificadorController],
  providers: [IndentificadorService]
})
export class IndentificadorModule {}
