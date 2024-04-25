import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import {NivelUrgenciaService} from  './nivelUrgencia.service';
import { NivelUrgencia } from 'src/models/miscelaneo/nivelUrgencia.model';


@Controller('NivelUrgencia')
export class NivelUrgenciaController {
  _NivelUrgenciaService: NivelUrgenciaService;
  constructor(private NivelUrgenciaService: NivelUrgenciaService) {
    this._NivelUrgenciaService = NivelUrgenciaService;
  }

  @Get()
  get(){
    return this._NivelUrgenciaService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._NivelUrgenciaService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:NivelUrgencia){
    return this._NivelUrgenciaService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:NivelUrgencia ){
    return this._NivelUrgenciaService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:NivelUrgencia ){
    return this._NivelUrgenciaService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:NivelUrgencia ){
    return this._NivelUrgenciaService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._NivelUrgenciaService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}