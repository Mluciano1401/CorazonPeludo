import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import {TipoRecursoService} from  './tipoRecurso.service';
import { TipoRecurso } from 'src/models/miscelaneo/tipoRecurso.model';


@Controller('TipoRecurso')
export class TipoRecursoController {
  _TipoRecursoService: TipoRecursoService;
  constructor(private TipoRecursoService: TipoRecursoService) {
    this._TipoRecursoService = TipoRecursoService;
  }

  @Get()
  get(){
    return this._TipoRecursoService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._TipoRecursoService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:TipoRecurso){
    return this._TipoRecursoService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:TipoRecurso, @Param('id') id){
    return this._TipoRecursoService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:TipoRecurso, @Param('id') id){
    return this._TipoRecursoService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:TipoRecurso, @Param('id') id){
    return this._TipoRecursoService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._TipoRecursoService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('select')
  select(){
    return this._TipoRecursoService.findAll().then(res=>{
      const r = [];
      res.forEach(o=> r.push({option: o.descripcion, value: o.tipoRecursoId}));
      return {success: true, data: r}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}