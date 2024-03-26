import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { enfermedadService } from './enfermedad.service';
import { enfermedadController } from './enfermedad.controller';
import { enfermedad, enfermedadSchema } from './schema/enfermedad.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: enfermedad.name,
        schema: enfermedadSchema
      }
    ])
  ],
  controllers: [enfermedadController],
  providers: [enfermedadService]
})
export class enfermedadModule {}
