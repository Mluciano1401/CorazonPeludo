import { Module } from '@nestjs/common';
import { DonacionService } from './donacion.service';
import { DonacionController } from './donacion.controller';

@Module({
  imports: [
  ],
  controllers: [DonacionController],
  providers: [DonacionService]
})
export class DonacionModule {}
