import { Controller, Get, Post, Body, HttpException, HttpStatus, Param   } from '@nestjs/common';
import {TipoPielService} from  './tipoPiel.service';
import { TipoPiel } from 'src/models/animal/tipoPiel.model';


@Controller('TipoPiel')
export class TipoPielController {
  _TipoPielService: TipoPielService;
  constructor(private TipoPielService: TipoPielService) {
    this._TipoPielService = TipoPielService;
  }

  @Get()
  get(){
    return this._TipoPielService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._TipoPielService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:TipoPiel){
    return this._TipoPielService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:TipoPiel, @Param('id') id){
    return this._TipoPielService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:TipoPiel, @Param('id') id){
    return this._TipoPielService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:TipoPiel, @Param('id') id){
    return this._TipoPielService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._TipoPielService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('select')
  select(){
    return this._TipoPielService.findAll().then(res=>{
      const r = [];
      res.forEach(o=> r.push({option: o.descripcion, value: o.tipoPielId}));
      return {success: true, data: r}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}