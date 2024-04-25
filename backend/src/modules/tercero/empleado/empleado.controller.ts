import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import {EmpleadoService} from  './empleado.service';
import { Empleado } from 'src/models/tercero/empleado.model';
import { PersonaService } from '../persona/persona.service';
import { empleadoDTO } from './dto/empleadoDto';
import { Persona } from 'src/models/tercero/persona.model';


@Controller('empleado')
export class EmpleadoController {
  userService: EmpleadoService;
  personaService: PersonaService;
  constructor(private EmpleadoService: EmpleadoService,private PersonaService: PersonaService) {
    this.userService = this.EmpleadoService;
    this.personaService = this.PersonaService;
  }

  @Get()
  get(){
    return this.userService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this.userService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:empleadoDTO){
    const persona: Persona = {
      personaId: null,
      nombre: body.nombre,
      apellido: body.apellido,
      email: body.email,
      foto: body.foto,
      rnc: "",
      sexo: body.sexo,
      pasaporte: body.pasaporte,
      cedula: body.cedula,
      licenciaConducir: body.licenciaConducir,
      fechaNacimiento: body.fechaNacimiento,
      genero: "",
      tipoPersona: body.tipoPersona,
      direccion: null,
      estadoCivil: body.estadoCivil,
      tipoEmpresa: null,
      fechaModificacion: body.fechaModificacion,
      status: body.status
    };
    let idpersona: Persona;
    this.personaService.create(persona).then(res=>{
      idpersona = res;
      return idpersona;
    });
    
    const empleado: Empleado = {
      EmpleadoId: null,
      persona: idpersona,
      surcusal: null,
      tipoEmpleado: body.tipoEmpleado,
      puesto: body.puesto,
      sueldo: body.sueldo,
      fechaIngreso: body.fechaIngreso,
      fechaModificacion: body.fechaModificacion,
      status: body.status
    };
    return this.userService.create(empleado).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:Empleado, @Param('id') id){
    return this.userService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:Empleado, @Param('id') id){
    return this.userService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:Empleado, @Param('id') id){
    return this.userService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this.userService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}