import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import {TipoTareaService} from  './tipoTarea.service';
import { TipoTarea } from 'src/models/miscelaneo/tipoTarea.model';


@Controller('TipoTarea')
export class TipoTareaController {
  _TipoTareaService: TipoTareaService;
  constructor(private TipoTareaService: TipoTareaService) {
    this._TipoTareaService = TipoTareaService;
  }

  @Get()
  get(){
    return this._TipoTareaService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._TipoTareaService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:TipoTarea){
    return this._TipoTareaService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:TipoTarea, @Param('id') id){
    return this._TipoTareaService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:TipoTarea, @Param('id') id){
    return this._TipoTareaService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:TipoTarea, @Param('id') id){
    return this._TipoTareaService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._TipoTareaService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('select')
  select(){
    return this._TipoTareaService.findAll().then(res=>{
      const r = [];
      res.forEach(o=> r.push({option: o.descripcion, value: o.tipoTareaId}));
      return {success: true, data: r}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}