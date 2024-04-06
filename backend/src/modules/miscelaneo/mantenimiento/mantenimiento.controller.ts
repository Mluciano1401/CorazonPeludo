import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import {MantenimientoService} from  './mantenimiento.service';
import { Mantenimiento } from 'src/models/miscelaneo/mantenimiento.model';


@Controller('Mantenimiento')
export class MantenimientoController {
  _MantenimientoService: MantenimientoService;
  constructor(private MantenimientoService: MantenimientoService) {
    this._MantenimientoService = MantenimientoService;
  }

  @Get()
  get(){
    return this._MantenimientoService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._MantenimientoService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:Mantenimiento){
    return this._MantenimientoService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:Mantenimiento, @Param('id') id){
    return this._MantenimientoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:Mantenimiento, @Param('id') id){
    return this._MantenimientoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:Mantenimiento, @Param('id') id){
    return this._MantenimientoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._MantenimientoService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}