import { Controller, Get, Post, Body, HttpException, HttpStatus, Param   } from '@nestjs/common';
import {HistorialMedicoService} from  './historialMedico.service';
import { HistorialMedico } from 'src/models/animal/historialMedico.model';


@Controller('HistorialMedico')
export class HistorialMedicoController {
  _HistorialMedicoService: HistorialMedicoService;
  constructor(private HistorialMedicoService: HistorialMedicoService) {
    this._HistorialMedicoService = HistorialMedicoService;
  }

  @Get()
  get(){
    return this._HistorialMedicoService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._HistorialMedicoService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:HistorialMedico){
    return this._HistorialMedicoService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:HistorialMedico, @Param('id') id){
    return this._HistorialMedicoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:HistorialMedico, @Param('id') id){
    return this._HistorialMedicoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:HistorialMedico, @Param('id') id){
    return this._HistorialMedicoService.update(id,body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._HistorialMedicoService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
}