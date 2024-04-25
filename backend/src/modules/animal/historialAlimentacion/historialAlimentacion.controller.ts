import { Controller, Get, Post, Body, HttpException, HttpStatus, Param  } from '@nestjs/common';
import {HistorialAlimentacionService} from  './historialAlimentacion.service';
import { HistorialAlimentacion } from 'src/models/animal/HistorialAlimentacion.model';


@Controller('HistorialAlimentacion')
export class HistorialAlimentacionController {
  _HistorialAlimentacionService: HistorialAlimentacionService;
  constructor(private HistorialAlimentacionService: HistorialAlimentacionService) {
    this._HistorialAlimentacionService = this.HistorialAlimentacionService;
  }

  @Get()
  get(){
    return this._HistorialAlimentacionService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._HistorialAlimentacionService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:HistorialAlimentacion){
    return this._HistorialAlimentacionService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:HistorialAlimentacion ){
    return this._HistorialAlimentacionService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:HistorialAlimentacion ){
    return this._HistorialAlimentacionService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:HistorialAlimentacion ){
    return this._HistorialAlimentacionService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._HistorialAlimentacionService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}