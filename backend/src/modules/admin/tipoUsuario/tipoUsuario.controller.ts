import { Controller, Get, Post, Body, HttpException, HttpStatus, Param  } from '@nestjs/common';
import {TipoUsuarioService} from  './tipoUsuario.service';
import { TipoUsuario } from 'src/models/admin/tipoUsuario.model';


@Controller('tipousuario')
export class TipoUsuarioController {
  userService: TipoUsuarioService;
  constructor(private TipoUsuarioService: TipoUsuarioService) {
    this.userService = this.TipoUsuarioService;
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
  save(@Body() body:TipoUsuario){
    return this.userService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/')
  update(@Body() body:TipoUsuario){
    return this.userService.update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/')
  activar(@Body() body:TipoUsuario){
    return this.userService.update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/')
  desactivar(@Body() body:TipoUsuario){
    return this.userService.update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('/delete/:id')
  delete(@Param('id') id){
    return this.userService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
   
}