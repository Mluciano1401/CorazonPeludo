import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './config/db-config/typeorm/typeorm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './models/animal/animal.model';
import { Empleado } from './models/tercero/empleado.model';
import { Enfermedad } from './models/salud/enfermedad.model';
import { Persona } from './models/tercero/persona.model';
import { Producto } from './models/almacen/producto.model';
import { Solicitante } from './models/adopcion/solicitante.model';
import { Solicitud } from './models/adopcion/solicitudAdopcion.model';
import { SolicitudR } from './models/rescate/solicitudRescate.model';
import { Usuario } from './models/admin/usuario.model';
import { SolicitanteController } from './modules/tercero/solicitante/solicitante.controller';
import { EmpleadoController } from './modules/tercero/empleado/empleado.controller';
import { UsuarioController } from './modules/admin/usuario/usuario.controller';
import { EnfermedadController } from './modules/salud/enfermedad/enfermedad.controller';
import { ProductoController } from './modules/almacen/producto/producto.controller';
import { AnimalController } from './modules/animal/animal/animal.controller';
import { SolicitudController } from './modules/adopcion/solicitud/solicitud.controller';
import { SolicitudRController } from './modules/rescate/solicitud/solicitud.controller';
import { PersonaController } from './modules/tercero/persona/persona.controller';
import { PersonaService } from './modules/tercero/persona/persona.service';
import { ProductoService } from './modules/almacen/producto/producto.service';
import { UsuarioService } from './modules/admin/usuario/usuario.service';
import { EmpleadoService } from './modules/tercero/empleado/empleado.service';
import { EnfermedadService } from './modules/salud/enfermedad/enfermedad.service';
import { SolicitanteService } from './modules/tercero/solicitante/solicitante.service';
import { SolicitudService } from './modules/adopcion/solicitud/Solicitud.service';
import { AnimalService } from './modules/animal/animal/animal.service';
import { SolicitudRService } from './modules/rescate/solicitud/solicitud.service';
const models = [Animal,Empleado,Enfermedad,Persona,Producto,
Solicitante,Solicitud,SolicitudR,Usuario];
@Module({
  imports: [
    TypeOrmModule.forRootAsync({useClass: TypeormService}),
    TypeOrmModule.forFeature(models)
  ],
  controllers: [AppController,SolicitanteController,EmpleadoController,
  UsuarioController, EnfermedadController, ProductoController, AnimalController,
   PersonaController],
  providers: [AppService, TypeormService, PersonaService, ProductoService, UsuarioService,
  EmpleadoService, EnfermedadService, SolicitanteService, 
  AnimalService],
})
export class AppModule {}
