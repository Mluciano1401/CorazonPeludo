import { Module } from '@nestjs/common';
import { TelefonoService } from './telefono.service';
import { TelefonoController } from './telefono.controller';

@Module({
  imports: [
  ],
  controllers: [TelefonoController],
  providers: [TelefonoService]
})
export class TelefonoModule {}
