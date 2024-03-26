import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { personaService } from './persona.service';
import { personaController } from './persona.controller';
import { persona, personaSchema } from './schema/persona.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: persona.name,
        schema: personaSchema
      }
    ])
  ],
  controllers: [personaController],
  providers: [personaService]
})
export class personaModule {}
