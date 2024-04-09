import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import {OrigenService} from  './origen.service';
import { Origen } from 'src/models/miscelaneo/origen.model';


@Controller('Origen')
export class OrigenController {
  _OrigenService: OrigenService;
  constructor(private OrigenService: OrigenService) {
    this._OrigenService = OrigenService;
  }

  @Get()
  get(){
    return this._OrigenService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._OrigenService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:Origen){
    return this._OrigenService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:Origen, @Param('id') id){
    return this._OrigenService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:Origen, @Param('id') id){
    return this._OrigenService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:Origen, @Param('id') id){
    return this._OrigenService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('/delete/:id')
  delete(@Param('id') id){
    return this._OrigenService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('/select')
  select(){
    return this._OrigenService.findAll().then(res=>{
      const r = [];
      res.forEach(o=> r.push({option: o.descripcion, value: o.origenId}));
      return {success: true, data: r}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}