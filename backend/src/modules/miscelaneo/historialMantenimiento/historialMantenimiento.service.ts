import { Injectable } from '@nestjs/common';
import { HistorialMantenimiento } from '../../../models/miscelaneo/historialMantenimiento.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HistorialMantenimientoService {
  _HistorialMantenimientoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(HistorialMantenimiento) private HistorialMantenimientoRepository: Repository<HistorialMantenimiento>
  ) {
    this._HistorialMantenimientoRepository = HistorialMantenimientoRepository;
  }
  async findAll():Promise<HistorialMantenimiento[]>{
    return await this._HistorialMantenimientoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<HistorialMantenimiento>{
    return await this._HistorialMantenimientoRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: HistorialMantenimiento):Promise<HistorialMantenimiento> {
    return await this._HistorialMantenimientoRepository.save(user);
  }
  async update(id: number, user: HistorialMantenimiento): Promise<void> {
    return await this._HistorialMantenimientoRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._HistorialMantenimientoRepository.softDelete(id);
    return 'Ok';
  }
}