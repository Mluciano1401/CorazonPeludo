import { Module } from '@nestjs/common';
import { TipoSintomasService } from './tipoSintomas.service';
import { TipoSintomasController } from './tipoSintomas.controller';

@Module({
  imports: [
  ],
  controllers: [TipoSintomasController],
  providers: [TipoSintomasService]
})
export class TipoSintomasModule {}
