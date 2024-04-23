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
import { SolicitudAController } from './modules/adopcion/solicitud/solicitudA.controller';
import { SolicitudRController } from './modules/rescate/solicitud/solicitud.controller';
import { PersonaController } from './modules/tercero/persona/persona.controller';
import { PersonaService } from './modules/tercero/persona/persona.service';
import { ProductoService } from './modules/almacen/producto/producto.service';
import { UsuarioService } from './modules/admin/usuario/usuario.service';
import { EmpleadoService } from './modules/tercero/empleado/empleado.service';
import { EnfermedadService } from './modules/salud/enfermedad/enfermedad.service';
import { SolicitanteService } from './modules/tercero/solicitante/solicitante.service';
import { SolicitudAService } from './modules/adopcion/solicitud/solicitudA.service';
import { AnimalService } from './modules/animal/animal/animal.service';
import { SolicitudRService } from './modules/rescate/solicitud/solicitud.service';
import { TipoUsuario } from './models/admin/tipoUsuario.model';
import { TipoUsuarioController } from './modules/admin/tipoUsuario/tipoUsuario.controller';
import { TipoUsuarioService } from './modules/admin/tipoUsuario/tipoUsuario.service';
import { TipoPersona } from './models/tercero/tipoPersona.model';
import { Sucursal } from './models/tercero/surcusal.model';
import { TipoPersonaController } from './modules/tercero/tipoPersona/tipoPersona.controller';
import { TipoPersonaService } from './modules/tercero/tipoPersona/tipoPersona.service';
import { AsignacionRecursos } from './models/admin/asignacionRecursos.model';
import { AsignacionTarea } from './models/admin/asignacionTareas.model';
import { LogAcciones } from './models/admin/logAcciones.model';
import { ActividadEconomica } from './models/adopcion/actividadEconomica.model';
import { PostAdopcion } from './models/adopcion/postAdopcion.model';
import { ProcesoAdopcion } from './models/adopcion/proceso.model';
import { Alimento } from './models/almacen/alimento.model';
import { Almacen } from './models/almacen/almacen.model';
import { Proveedor } from './models/almacen/proveedor.model';
import { TipoAlimento } from './models/almacen/tipoAlimento.model';
import { TipoProducto } from './models/almacen/tipoProducto.model';
import { Especie } from './models/animal/especie.model';
import { HistorialAlimentacion } from './models/animal/historialAlimentacion.model';
import { HistorialMedico } from './models/animal/historialMedico.model';
import { HistorialVacunas } from './models/animal/historialVacunas.model';
import { Indentificador } from './models/animal/identificador.model';
import { RasgosFisicos } from './models/animal/rasgosFisicos.model';
import { TipoPiel } from './models/animal/tipoPiel.model';
import { Cita } from './models/miscelaneo/cita.model';
import { Complejidad } from './models/miscelaneo/complejidad.model';
import { Direccion } from './models/miscelaneo/direccion.model';
import { Estado } from './models/miscelaneo/estado.model';
import { HistorialMantenimiento } from './models/miscelaneo/historialMantenimiento.model';
import { Mantenimiento } from './models/miscelaneo/mantenimiento.model';
import { Marca } from './models/miscelaneo/marca.model';
import { NivelUrgencia } from './models/miscelaneo/nivelUrgencia.model';
import { Origen } from './models/miscelaneo/origen.model';
import { Tarea } from './models/miscelaneo/tarea.model';
import { TipoMantenimiento } from './models/miscelaneo/tipoMantenimiento.model';
import { TipoRecurso } from './models/miscelaneo/tipoRecurso.model';
import { TipoTarea } from './models/miscelaneo/tipoTarea.model';
import { EstadoEmergencia } from './models/rescate/estadoEmergencia.model';
import { EstadoLugar } from './models/rescate/estadoLugar.model';
import { Mision } from './models/rescate/misionRescate.model';
import { Cirugia } from './models/salud/cirugia.model';
import { Complicaciones } from './models/salud/complicaciones.model';
import { Diagnostico } from './models/salud/diagnostico.model';
import { EfectosSecundarios } from './models/salud/efectosSecundarios.model';
import { EstadoSalud } from './models/salud/estadoSalud.model';
import { Medicamento } from './models/salud/medicamento.model';
import { PolizaSeguro } from './models/salud/polizaSeguro.model';
import { Sintoma } from './models/salud/sintomas.model';
import { TipoEnfermedad } from './models/salud/tipoEnfermedad.model';
import { TipoMedicamento } from './models/salud/tipoMedicamento.model';
import { TipoSintoma } from './models/salud/tipoSintomas.model';
import { TipoTratamiento } from './models/salud/tipoTratamiento.model';
import { Tratamiento } from './models/salud/tratamiento.model';
import { Vacuna } from './models/salud/vacuna.model';
import { ViaAdministracion } from './models/salud/viaAdministracion.model';
import { EstadoCivil } from './models/tercero/estadoCivil.model';
import { Telefono } from './models/tercero/telefono.model';
import { TipoDonacion } from './models/tercero/tipoDonacion.model';
import { Donacion } from './models/tercero/donacion.model';
import { TipoEmpleado } from './models/tercero/tipoEmpleado.model';
import { TipoEmpresa } from './models/tercero/tipoEmpresa.model';
import { TipoTelefono } from './models/tercero/tipoTelefono.model';
import { Vehiculo } from './models/vehiculo/vehiculo.model';
import { Modelo } from './models/vehiculo/modelo.model';
import { TipoVehiculo } from './models/vehiculo/tipoVehiculo.model';
import { TipoCombustible } from './models/vehiculo/tipoCombustible.model';
import { SucursalController } from './modules/tercero/sucursal/sucursal.controller';
import { AsignacionRecursosController } from './modules/admin/asignacionRecursos/asignacionRecurso.controller';
import { AsignacionTareaController } from './modules/admin/asignacionTarea/asignacionTarea.controller';
import { LogAccionesController } from './modules/admin/logAcciones/logAcciones.controller';
import { ActividadEconomicaController } from './modules/adopcion/actividadEconomica/actividadEconomica.controller';
import { PostAdopcionController } from './modules/adopcion/post-adopcion/postAdopcion.controller';
import { ProcesoAdopcionController } from './modules/adopcion/proceso/procesoAdopcion.controller';
import { AlimentoController } from './modules/almacen/alimento/alimento.controller';
import { AlmacenController } from './modules/almacen/almacen/almacen.controller';
import { ProveedorController } from './modules/almacen/proveedor/proveedor.controller';
import { TipoAlimentoController } from './modules/almacen/tipoAlimento/tipoAlimento.controller';
import { TipoProductoController } from './modules/almacen/tipoProducto/tipoProducto.controller';
import { EspecieController } from './modules/animal/especie/especie.controller';
import { HistorialAlimentacionController } from './modules/animal/historialAlimentacion/historialAlimentacion.controller';
import { HistorialMedicoController } from './modules/animal/historialMedico/historialMedico.controller';
import { HistorialVacunasController } from './modules/animal/historialVacunas/historialVacunas.controller';
import { IndentificadorController } from './modules/animal/identificador/identificador.controller';
import { RasgosFisicosController } from './modules/animal/rasgosFisicos/rasgosFisicos.controller';
import { TipoPielController } from './modules/animal/tipoPiel/tipoPiel.controller';
import { CitaController } from './modules/miscelaneo/cita/cita.controller';
import { ComplejidadController } from './modules/miscelaneo/complejidad/complejidad.controller';
import { DireccionController } from './modules/miscelaneo/direccion/direccion.controller';
import { EstadoController } from './modules/miscelaneo/estado/estado.controller';
import { HistorialMantenimientoController } from './modules/miscelaneo/historialMantenimiento/historialMantenimiento.controller';
import { MantenimientoController } from './modules/miscelaneo/mantenimiento/mantenimiento.controller';
import { MarcaController } from './modules/miscelaneo/marca/marca.controller';
import { NivelUrgenciaController } from './modules/miscelaneo/nivelUrgencia/nivelUrgencia.controller';
import { OrigenController } from './modules/miscelaneo/origen/origen.controller';
import { TareaController } from './modules/miscelaneo/tarea/tarea.controller';
import { TipoMantenimientoController } from './modules/miscelaneo/tipoMantenimiento/tipoMantenimiento.controller';
import { TipoRecursoController } from './modules/miscelaneo/tipoRecurso/tipoRecurso.controller';
import { TipoTareaController } from './modules/miscelaneo/tipoTarea/tipoTarea.controller';
import { TipoCombustibleController } from './modules/vehiculo/tipoCombustible/tipoCombustible.controller';
import { TipoVehiculoController } from './modules/vehiculo/tipoVehiculo/tipoVehiculo.controller';
import { ModeloController } from './modules/vehiculo/modelo/modelo.controller';
import { VehiculoController } from './modules/vehiculo/vehiculo/vehiculo.controller';
import { TipoDonacionController } from './modules/tercero/tipoDonacion/tipoDonacion.controller';
import { EstadoEmergenciaController } from './modules/rescate/estadoEmergencia/estadoEmergencia.controller';
import { EstadoLugarController } from './modules/rescate/estadoLugar/estadoLugar.controller';
import { MisionController } from './modules/rescate/mision/mision.controller';
import { EstadoSaludController } from './modules/salud/estadoSalud/estadoSalud.controller';
import { TipoMedicamentoController } from './modules/salud/tipoMedicamento/tipoMedicamento.controller';
import { ViaAdministracionController } from './modules/salud/viaAdministracion/viaAministracion.controller';
import { TipoEmpleadoController } from './modules/tercero/tipoEmpleado/tipoEmpleado.controller';
import { DiagnosticoController } from './modules/salud/diagnostico/diagnostico.controller';
import { SintomasController } from './modules/salud/sintomas/sintomas.controller';
import { TratamientoController } from './modules/salud/tratamiento/tratamiento.controller';
import { EfectosSecundariosController } from './modules/salud/efectosSecundarios/efectosSecundarios.controller';
import { TipoEnfermedadController } from './modules/salud/tipoEnfermedad/tipoEnfermedad.controller';
import { VacunaController } from './modules/salud/vacuna/vacuna.controller';
import { DonacionController } from './modules/tercero/donacion/donacion.controller';
import { CirugiaController } from './modules/salud/cirugia/cirugia.controller';
import { TipoTelefonoController } from './modules/tercero/tipoTelefono/tipoTelefono.controller';
import { TipoEmpresaController } from './modules/tercero/tipoEmpresa/tipoEmpresa.controller';
import { TelefonoController } from './modules/tercero/telefono/telefono.controller';
import { TipoTratamientoController } from './modules/salud/tipoTratamiento/tipoTratamiento.controller';
import { PolizaSeguroController } from './modules/salud/polizaSeguro/polizaSeguro.controller';
import { ComplicacionesController } from './modules/salud/complicaciones/complicaciones.controller';
import { MedicamentoController } from './modules/salud/medicamento/medicamento.controller';
import { TipoSintomasController } from './modules/salud/tipoSintomas/tipoSintomas.controller';
import { EstadoCivilController } from './modules/tercero/estadoCivil/estadoCivil.controller';
import { SucursalService } from './modules/tercero/sucursal/sucursal.service';
import { AsignacionRecursosService } from './modules/admin/asignacionRecursos/asignacionRecurso.service';
import { AsignacionTareaService } from './modules/admin/asignacionTarea/asignacionTarea.service';
import { LogAccionesService } from './modules/admin/logAcciones/logAcciones.service';
import { ActividadEconomicaService } from './modules/adopcion/actividadEconomica/actividadEconomica.service';
import { PostAdopcionService } from './modules/adopcion/post-adopcion/postAdopcion.service';
import { TipoAlimentoService } from './modules/almacen/tipoAlimento/tipoAlimento.service';
import { HistorialVacunasService } from './modules/animal/historialVacunas/historialVacunas.service';
import { OrigenService } from './modules/miscelaneo/origen/origen.service';
import { DireccionService } from './modules/miscelaneo/direccion/direccionservice';
import { VehiculoService } from './modules/vehiculo/vehiculo/vehiculo.service';
import { ModeloService } from './modules/vehiculo/modelo/modelo.service';
import { TipoVehiculoService } from './modules/vehiculo/tipoVehiculo/tipoVehiculo.service';
import { TipoCombustibleService } from './modules/vehiculo/tipoCombustible/tipoCombustible.service';
import { TelefonoService } from './modules/tercero/telefono/telefono.service';
import { TipoSintomasService } from './modules/salud/tipoSintomas/tipoSintomas.service';
import { EstadoSaludService } from './modules/salud/estadoSalud/estadoSalud.service';
import { EstadoLugarService } from './modules/rescate/estadoLugar/estadoLugar.service';
import { TipoDonacionService } from './modules/tercero/tipoDonacion/tipoDonacion.service';
import { ProveedorService } from './modules/almacen/proveedor/proveedor.service';
import { HistorialMedicoService } from './modules/animal/historialMedico/historialMedico.service';
import { ComplejidadService } from './modules/miscelaneo/complejidad/complejidad.service';
import { NivelUrgenciaService } from './modules/miscelaneo/nivelUrgencia/nivelUrgencia.service';
import { EstadoEmergenciaService } from './modules/rescate/estadoEmergencia/estadoEmergencia.service';
import { EfectosSecundariosService } from './modules/salud/efectosSecundarios/efectosSecundarios.service';
import { TipoMedicamentoService } from './modules/salud/tipoMedicamento/tipoMedicamento.service';
import { EstadoCivilService } from './modules/tercero/estadoCivil/estadoCivil.service';
import { TipoTelefonoService } from './modules/tercero/tipoTelefono/tipoTelefono.service';
import { ProcesoAdopcionService } from './modules/adopcion/proceso/procesoAdopcion.service';
import { AlimentoService } from './modules/almacen/alimento/Alimento.service';
import { AlmacenService } from './modules/almacen/almacen/almacen.service';
import { TipoEmpresaService } from './modules/tercero/tipoEmpresa/tipoEmpresa.service';
import { TipoEmpleadoService } from './modules/tercero/tipoEmpleado/tipoEmpleado.service';
import { DonacionService } from './modules/tercero/donacion/donacion.service';
import { VacunaService } from './modules/salud/vacuna/vacuna.service';
import { TratamientoService } from './modules/salud/tratamiento/tratamiento.service';
import { SintomasService } from './modules/salud/sintomas/sintomas.service';
import { ComplicacionesService } from './modules/salud/complicaciones/complicaciones.service';
import { TipoRecursoService } from './modules/miscelaneo/tipoRecurso/tipoRecurso.service';
import { HistorialMantenimientoService } from './modules/miscelaneo/historialMantenimiento/historialMantenimiento.service';
import { RasgosFisicosService } from './modules/animal/rasgosFisicos/rasgosFisicos.service';
import { EspecieService } from './modules/animal/especie/especie.service';
import { CitaService } from './modules/miscelaneo/cita/cita.service';
import { MarcaService } from './modules/miscelaneo/marca/marca.service';
import { TipoProductoService } from './modules/almacen/tipoProducto/tipoProducto.service';
import { HistorialAlimentacionService } from './modules/animal/historialAlimentacion/historialAlimentacion.service';
import { IndentificadorService } from './modules/animal/identificador/identificador.service';
import { TipoPielService } from './modules/animal/tipoPiel/tipoPiel.service';
import { TipoMantenimientoService } from './modules/miscelaneo/tipoMantenimiento/tipoMantenimiento.service';
import { CirugiaService } from './modules/salud/cirugia/cirugia.service';
import { PolizaSeguroService } from './modules/salud/polizaSeguro/polizaSeguro.service';
import { EstadoService } from './modules/miscelaneo/estado/estado.service';
import { TareaService } from './modules/miscelaneo/tarea/tarea.service';
import { MisionService } from './modules/rescate/mision/mision.service';
import { MedicamentoService } from './modules/salud/medicamento/medicamento.service';
import { TipoTratamientoService } from './modules/salud/tipoTratamiento/tipoTratamiento.service';
import { MantenimientoService } from './modules/miscelaneo/mantenimiento/mantenimiento.service';
import { TipoTareaService } from './modules/miscelaneo/tipoTarea/tipoTarea.service';
import { DiagnosticoService } from './modules/salud/diagnostico/diagnostico.service';
import { TipoEnfermedadService } from './modules/salud/tipoEnfermedad/tipoEnfermedad.service';
import { ViaAdministracionService } from './modules/salud/viaAdministracion/viaAministracion.service';
import { AuthService } from './modules/admin/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { TipoAlmacen } from './models/almacen/tipoAlmacen.model';
import { AnimalAlbergue } from './models/animal/animalAlbergue';

const models = [Animal,Empleado,Enfermedad,Persona,Producto,Solicitante,Solicitud,SolicitudR,Usuario, 
  TipoUsuario, TipoPersona, Sucursal, AsignacionRecursos, AsignacionTarea, LogAcciones,ActividadEconomica,
PostAdopcion, ProcesoAdopcion, Solicitante, Alimento, Almacen, Proveedor, TipoAlimento, TipoProducto,
Especie,HistorialAlimentacion, HistorialMedico, HistorialVacunas, Indentificador, RasgosFisicos, TipoPiel,
Cita, Complejidad, Direccion, Estado, HistorialMantenimiento, Mantenimiento, Marca, NivelUrgencia,
Origen, Tarea, TipoMantenimiento, TipoRecurso, TipoTarea, EstadoEmergencia, EstadoLugar,Mision, Cirugia,
Complicaciones, Diagnostico, EfectosSecundarios, EstadoSalud, Medicamento, PolizaSeguro, Sintoma,
TipoEnfermedad, TipoMedicamento, TipoSintoma, TipoTratamiento, Tratamiento, Vacuna, ViaAdministracion, EstadoCivil,
Telefono, TipoDonacion, Donacion, TipoEmpleado, TipoEmpresa, TipoTelefono, Vehiculo, Modelo, TipoVehiculo,
TipoCombustible, TipoAlmacen, AnimalAlbergue];
@Module({
  imports: [
    TypeOrmModule.forRootAsync({useClass: TypeormService}),
    TypeOrmModule.forFeature(models),
  ],
  controllers: [AppController,AnimalController,EmpleadoController,EnfermedadController,PersonaController,
  ProductoController,SolicitanteController,SolicitudRController,UsuarioController, 
  TipoUsuarioController, TipoPersonaController, SucursalController, AsignacionRecursosController, 
  AsignacionTareaController, LogAccionesController,ActividadEconomicaController, PostAdopcionController, 
  ProcesoAdopcionController, SolicitanteController, AlimentoController, AlmacenController, ProveedorController, 
  TipoAlimentoController, TipoProductoController, EspecieController,HistorialAlimentacionController, 
  HistorialMedicoController, HistorialVacunasController, IndentificadorController, RasgosFisicosController, 
  TipoPielController, CitaController, ComplejidadController, DireccionController, EstadoController, 
  HistorialMantenimientoController, MantenimientoController, MarcaController, NivelUrgenciaController,
  OrigenController, TareaController, TipoMantenimientoController, TipoRecursoController, TipoTareaController, 
  EstadoEmergenciaController, EstadoLugarController,MisionController, CirugiaController, ComplicacionesController, 
  DiagnosticoController, EfectosSecundariosController, EstadoSaludController, MedicamentoController, PolizaSeguroController, 
  SintomasController,TipoEnfermedadController, TipoMedicamentoController, TipoSintomasController, TipoTratamientoController, 
  TratamientoController, VacunaController, ViaAdministracionController, EstadoCivilController,TelefonoController, 
  TipoDonacionController, DonacionController, TipoEmpleadoController, TipoEmpresaController, TipoTelefonoController, 
  VehiculoController, ModeloController, TipoVehiculoController, TipoCombustibleController, SolicitudAController],
  providers: [AppService, TypeormService,AnimalService,EmpleadoService,EnfermedadService,PersonaService,
  ProductoService,SolicitanteService,SolicitudRService,UsuarioService, TipoUsuarioService, TipoPersonaService, 
  SucursalService, AsignacionRecursosService, AsignacionTareaService, LogAccionesService,ActividadEconomicaService,
  PostAdopcionService, ProcesoAdopcionService, SolicitanteService, AlimentoService, AlmacenService, ProveedorService, 
  TipoAlimentoService, TipoProductoService,EspecieService,HistorialAlimentacionService, HistorialMedicoService, 
  HistorialVacunasService, IndentificadorService, RasgosFisicosService, TipoPielService,CitaService, ComplejidadService, 
  DireccionService, EstadoService, HistorialMantenimientoService, MantenimientoService, MarcaService, NivelUrgenciaService,
  OrigenService, TareaService, TipoMantenimientoService, TipoRecursoService, TipoTareaService, EstadoEmergenciaService, 
  EstadoLugarService,MisionService, CirugiaService,ComplicacionesService, DiagnosticoService, EfectosSecundariosService, 
  EstadoSaludService, MedicamentoService, PolizaSeguroService, SintomasService, TipoEnfermedadService, TipoMedicamentoService, 
  TipoSintomasService, TipoTratamientoService, TratamientoService, VacunaService, ViaAdministracionService, EstadoCivilService,
  TelefonoService, TipoDonacionService, DonacionService, TipoEmpleadoService, TipoEmpresaService, TipoTelefonoService, 
  VehiculoService, ModeloService, TipoVehiculoService, TipoCombustibleService,AuthService,JwtService, SolicitudAService],
})
export class AppModule {}
