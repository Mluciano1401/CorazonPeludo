import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Delete } from '@nestjs/common';
import {ProcesoAdopcionService} from  './procesoAdopcion.service';
import { ProcesoAdopcion } from 'src/models/adopcion/proceso.model';
import { Put } from '@nestjs/common';


@Controller('ProcesoAdopcion')
export class ProcesoAdopcionController {
  userService: ProcesoAdopcionService;
  constructor(private ProcesoAdopcionService: ProcesoAdopcionService) {
    this.userService = this.ProcesoAdopcionService;
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
  save(@Body() body:ProcesoAdopcion){
    return this.userService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:ProcesoAdopcion ){
    return this.userService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:ProcesoAdopcion ){
    return this.userService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:ProcesoAdopcion ){
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