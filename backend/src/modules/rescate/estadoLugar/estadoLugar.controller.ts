import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import {EstadoLugarService} from  './estadoLugar.service';
import { EstadoLugar } from 'src/models/rescate/estadoLugar.model';


@Controller('EstadoLugar')
export class EstadoLugarController {
  userService: EstadoLugarService;
  constructor(private EstadoLugarService: EstadoLugarService) {
    this.userService = this.EstadoLugarService;
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
  save(@Body() body:EstadoLugar){
    return this.userService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:EstadoLugar, @Param('id') id){
    return this.userService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:EstadoLugar, @Param('id') id){
    return this.userService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:EstadoLugar, @Param('id') id){
    return this.userService.update(id,body).then(res=>{
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