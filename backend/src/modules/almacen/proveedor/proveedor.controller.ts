import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put, Delete } from '@nestjs/common';
import {ProveedorService} from  './proveedor.service';
import { Proveedor } from 'src/models/almacen/proveedor.model';


@Controller('Proveedor')
export class ProveedorController {
  _ProveedorService: ProveedorService;
  constructor(private ProveedorService: ProveedorService) {
    this._ProveedorService = this.ProveedorService;
  }

  @Get()
  get(){
    return this._ProveedorService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._ProveedorService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:Proveedor){
    return this._ProveedorService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Put('/update/:id')
  update(@Body() body:Proveedor, @Param('id') id){
    return this._ProveedorService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Put('/activar/:id')
  activar(@Body() body:Proveedor, @Param('id') id){
    return this._ProveedorService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Put('/desactivar/:id')
  desactivar(@Body() body:Proveedor, @Param('id') id){
    return this._ProveedorService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Delete('delete/:id')
  delete(@Param('id') id){
    return this._ProveedorService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}