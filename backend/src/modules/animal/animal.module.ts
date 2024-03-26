import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { animalService } from './animal.service';
import { animalController } from './animal.controller';
import { animal, animalSchema } from './schema/animal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: animal.name,
        schema: animalSchema
      }
    ])
  ],
  controllers: [animalController],
  providers: [animalService]
})
export class animalModule {}
