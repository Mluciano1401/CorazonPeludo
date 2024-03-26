import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { solicitudService } from './solicitud.service';
import { solicitudController } from './solicitud.controller';
import { solicitud, solicitudSchema } from './schema/solicitud.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: solicitud.name,
        schema: solicitudSchema
      }
    ])
  ],
  controllers: [solicitudController],
  providers: [solicitudService]
})
export class solicitudModule {}
