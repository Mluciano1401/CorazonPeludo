import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import {TipoMantenimientoService} from  './tipoMantenimiento.service';
import { TipoMantenimiento } from 'src/models/miscelaneo/tipoMantenimiento.model';


@Controller('TipoMantenimiento')
export class TipoMantenimientoController {
  _TipoMantenimientoService: TipoMantenimientoService;
  constructor(private TipoMantenimientoService: TipoMantenimientoService) {
    this._TipoMantenimientoService = TipoMantenimientoService;
  }

  @Get()
  get(){
    return this._TipoMantenimientoService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._TipoMantenimientoService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:TipoMantenimiento){
    return this._TipoMantenimientoService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:TipoMantenimiento ){
    return this._TipoMantenimientoService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:TipoMantenimiento ){
    return this._TipoMantenimientoService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:TipoMantenimiento ){
    return this._TipoMantenimientoService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._TipoMantenimientoService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}