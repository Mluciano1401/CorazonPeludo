import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import {TipoEmpleadoService} from  './tipoEmpleado.service';
import { TipoEmpleado } from 'src/models/tercero/tipoEmpleado.model';


@Controller('TipoEmpleado')
export class TipoEmpleadoController {
  userService: TipoEmpleadoService;
  constructor(private TipoEmpleadoService: TipoEmpleadoService) {
    this.userService = this.TipoEmpleadoService;
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
  save(@Body() body:TipoEmpleado){
    return this.userService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:TipoEmpleado, @Param('id') id){
    return this.userService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:TipoEmpleado, @Param('id') id){
    return this.userService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:TipoEmpleado, @Param('id') id){
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