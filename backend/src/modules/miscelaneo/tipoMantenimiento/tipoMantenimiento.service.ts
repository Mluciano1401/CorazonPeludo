import { Injectable } from '@nestjs/common';
import { TipoMantenimiento } from '../../../models/miscelaneo/tipoMantenimiento.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoMantenimientoService {
  _TipoMantenimientoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoMantenimiento) private TipoMantenimientoRepository: Repository<TipoMantenimiento>
  ) {
    this._TipoMantenimientoRepository = TipoMantenimientoRepository;
  }
  async findAll():Promise<TipoMantenimiento[]>{
    return await this._TipoMantenimientoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoMantenimiento>{
    return await this._TipoMantenimientoRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: TipoMantenimiento):Promise<TipoMantenimiento> {
    return await this._TipoMantenimientoRepository.save(user);
  }
  async update(id: number, user: TipoMantenimiento): Promise<void> {
    return await this._TipoMantenimientoRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoMantenimientoRepository.softDelete(id);
    return 'Ok';
  }
}