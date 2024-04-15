import { Controller, Get, Post, Body, HttpException, HttpStatus, Param  } from '@nestjs/common';
import {TipoAlimentoService} from  './tipoAlimento.service';
import { TipoAlimento } from 'src/models/almacen/tipoAlimento.model';


@Controller('TipoAlimento')
export class TipoAlimentoController {
  _TipoAlimentoService: TipoAlimentoService;
  constructor(private TipoAlimentoService: TipoAlimentoService) {
    this._TipoAlimentoService = this.TipoAlimentoService;
  }

  @Get()
  get(){
    return this._TipoAlimentoService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._TipoAlimentoService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:TipoAlimento){
    return this._TipoAlimentoService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:TipoAlimento, @Param('id') id){
    return this._TipoAlimentoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:TipoAlimento, @Param('id') id){
    return this._TipoAlimentoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:TipoAlimento, @Param('id') id){
    return this._TipoAlimentoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._TipoAlimentoService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  
}