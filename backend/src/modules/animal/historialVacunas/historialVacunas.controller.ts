import { Controller, Get, Post, Body, HttpException, HttpStatus, Param   } from '@nestjs/common';
import {HistorialVacunasService} from  './historialVacunas.service';
import { HistorialVacunas } from 'src/models/animal/historialVacunas.model';


@Controller('HistorialVacunas')
export class HistorialVacunasController {
  _HistorialVacunasService: HistorialVacunasService;
  constructor(private HistorialVacunasService: HistorialVacunasService) {
    this._HistorialVacunasService = HistorialVacunasService;
  }

  @Get()
  get(){
    return this._HistorialVacunasService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._HistorialVacunasService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:HistorialVacunas){
    return this._HistorialVacunasService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:HistorialVacunas, @Param('id') id){
    return this._HistorialVacunasService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:HistorialVacunas, @Param('id') id){
    return this._HistorialVacunasService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:HistorialVacunas, @Param('id') id){
    return this._HistorialVacunasService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._HistorialVacunasService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}