import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put, Delete } from '@nestjs/common';
import {AlmacenService} from  './almacen.service';
import { Almacen } from 'src/models/almacen/almacen.model';


@Controller('Almacen')
export class AlmacenController {
  _AlmacenService: AlmacenService;
  constructor(private AlmacenService: AlmacenService) {
    this._AlmacenService = this.AlmacenService;
  }

  @Get()
  get(){
    return this._AlmacenService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._AlmacenService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:Almacen){
    return this._AlmacenService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Put('/update/:id')
  update(@Body() body:Almacen, @Param('id') id){
    return this._AlmacenService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Put('/activar/:id')
  activar(@Body() body:Almacen, @Param('id') id){
    return this._AlmacenService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Put('/desactivar/:id')
  desactivar(@Body() body:Almacen, @Param('id') id){
    return this._AlmacenService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Delete('delete/:id')
  delete(@Param('id') id){
    return this._AlmacenService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}