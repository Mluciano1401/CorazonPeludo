import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './config/db-config/typeorm/typeorm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './models/animal.model';
import { Empleado } from './models/empleado.model';
import { Enfermedad } from './models/enfermedad.model';
import { Persona } from './models/persona.model';
import { Producto } from './models/producto.model';
import { Solicitante } from './models/solicitante.model';
import { Solicitud } from './models/solicitudAdopcion.model';
import { SolicitudR } from './models/solicitudRescate.model';
import { Usuario } from './models/usuario.model';
const models = [Animal,Empleado,Enfermedad,Persona,Producto,
Solicitante,Solicitud,SolicitudR,Usuario];
@Module({
  imports: [
    TypeOrmModule.forRootAsync({useClass: TypeormService}),
    TypeOrmModule.forFeature(models)
  ],
  controllers: [AppController],
  providers: [AppService, TypeormService],
})
export class AppModule {}
