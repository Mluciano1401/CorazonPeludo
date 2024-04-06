import { Module } from '@nestjs/common';
import { PolizaSeguroService } from './polizaSeguro.service';
import { PolizaSeguroController } from './polizaSeguro.controller';

@Module({
  imports: [
  ],
  controllers: [PolizaSeguroController],
  providers: [PolizaSeguroService]
})
export class PolizaSeguroModule {}
