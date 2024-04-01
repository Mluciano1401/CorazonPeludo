import { Module } from '@nestjs/common';
import { OrigenService } from './origen.service';
import { OrigenController } from './origen.controller';

@Module({
  imports: [
  ],
  controllers: [OrigenController],
  providers: [OrigenService]
})
export class OrigenModule {}
