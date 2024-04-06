import { Module } from '@nestjs/common';
import { EfectosSecundariosService } from './efectosSecundarios.service';
import { EfectosSecundariosController } from './efectosSecundarios.controller';

@Module({
  imports: [
  ],
  controllers: [EfectosSecundariosController],
  providers: [EfectosSecundariosService]
})
export class EfectosSecundariosModule {}
