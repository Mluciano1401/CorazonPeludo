import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import {CitaService} from  './cita.service';
import { Cita } from 'src/models/miscelaneo/cita.model';
import { VerificarCitaDto } from '../dto/VerificarCita';


@Controller('Cita')
export class CitaController {
  _CitaService: CitaService;
  constructor(private CitaService: CitaService) {
    this._CitaService = CitaService;
  }

  @Get()
  get(){
    return this._CitaService.findAll().then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Get('/:id')
  getById(@Param('id') id){
    return this._CitaService.findById(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post()
  save(@Body() body:Cita){
    return this._CitaService.create(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }

  @Post('/update/:id')
  update(@Body() body:Cita ){
    return this._CitaService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/activar/:id')
  activar(@Body() body:Cita ){
    return this._CitaService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Post('/desactivar/:id')
  desactivar(@Body() body:Cita ){
    return this._CitaService. update(body).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  @Get('delete/:id')
  delete(@Param('id') id){
    return this._CitaService.delete(id).then(res=>{
      return {success: true, data: res}
    }).catch(error=>{
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    });
  }
  async verificarCita(@Body() verificarCitaDto: VerificarCitaDto): Promise<{ disponible: boolean }> {
    // Lógica para verificar si la fecha y hora están disponibles en la base de datos
    // Supongamos que tienes un servicio de citas que maneja la lógica de negocio
    const disponible = await this._CitaService.verificarDisponibilidad(verificarCitaDto.fecha, verificarCitaDto.hora);
    return { disponible};
  }

}