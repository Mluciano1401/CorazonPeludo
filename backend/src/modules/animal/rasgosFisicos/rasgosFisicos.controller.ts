import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import {RasgosFisicosService} from  './rasgosFisicos.service';
import { RasgosFisicos } from 'src/models/animal/rasgosFisicos.model';


@Controller('RasgosFisicos')
export class RasgosFisicosController {
  _RasgosFisicosService: RasgosFisicosService;
  constructor(private RasgosFisicosService: RasgosFisicosService) {
    this._RasgosFisicosService = RasgosFisicosService;
  }

  @Get()
  get(){
    return this._RasgosFisicosService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._RasgosFisicosService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:RasgosFisicos){
    return this._RasgosFisicosService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:RasgosFisicos ){
    return this._RasgosFisicosService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:RasgosFisicos ){
    return this._RasgosFisicosService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:RasgosFisicos ){
    return this._RasgosFisicosService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._RasgosFisicosService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}