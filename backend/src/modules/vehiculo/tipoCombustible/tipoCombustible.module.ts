import { Module } from '@nestjs/common';
import { TipoCombustibleService } from './tipoCombustible.service';
import { TipoCombustibleController } from './tipoCombustible.controller';

@Module({
  imports: [
  ],
  controllers: [TipoCombustibleController],
  providers: [TipoCombustibleService]
})
export class TipoCombustibleModule {}
