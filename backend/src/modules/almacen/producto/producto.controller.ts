import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put, Delete } from '@nestjs/common';
import {ProductoService} from  './producto.service';
import { Producto } from 'src/models/almacen/producto.model';


@Controller('producto')
export class ProductoController {
  productoService: ProductoService;
  constructor(private ProductoService: ProductoService) {
    this.productoService = this.ProductoService;
  }

  @Get()
  get(){
    return this.productoService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this.productoService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:Producto){
    return this.productoService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Put('/update/:id')
  update(@Body() body:Producto, @Param('id') id){
    return this.productoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Put('/activar/:id')
  activar(@Body() body:Producto, @Param('id') id){
    return this.productoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Put('/desactivar/:id')
  desactivar(@Body() body:Producto, @Param('id') id){
    return this.productoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Delete('delete/:id')
  delete(@Param('id') id){
    return this.productoService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}