import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import {HistorialMantenimientoService} from  './historialMantenimiento.service';
import { HistorialMantenimiento } from 'src/models/miscelaneo/historialMantenimiento.model';


@Controller('HistorialMantenimiento')
export class HistorialMantenimientoController {
  _HistorialMantenimientoService: HistorialMantenimientoService;
  constructor(private HistorialMantenimientoService: HistorialMantenimientoService) {
    this._HistorialMantenimientoService = HistorialMantenimientoService;
  }

  @Get()
  get(){
    return this._HistorialMantenimientoService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._HistorialMantenimientoService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:HistorialMantenimiento){
    return this._HistorialMantenimientoService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:HistorialMantenimiento, @Param('id') id){
    return this._HistorialMantenimientoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:HistorialMantenimiento, @Param('id') id){
    return this._HistorialMantenimientoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:HistorialMantenimiento, @Param('id') id){
    return this._HistorialMantenimientoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._HistorialMantenimientoService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}