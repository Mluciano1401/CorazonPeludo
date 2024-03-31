import { Module } from '@nestjs/common';
import { PostAdopcionService } from './postAdopcion.service';
import { PostAdopcionController } from './postAdopcion.controller';

@Module({
  imports: [
  ],
  controllers: [PostAdopcionController],
  providers: [PostAdopcionService]
})
export class PostAdopcionModule {}
