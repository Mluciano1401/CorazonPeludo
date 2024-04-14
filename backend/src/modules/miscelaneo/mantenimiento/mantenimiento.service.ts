import { Injectable } from '@nestjs/common';
import { Mantenimiento } from '../../../models/miscelaneo/mantenimiento.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MantenimientoService {
  _MantenimientoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Mantenimiento) private MantenimientoRepository: Repository<Mantenimiento>
  ) {
    this._MantenimientoRepository = MantenimientoRepository;
  }
  async findAll():Promise<Mantenimiento[]>{
    return await this._MantenimientoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Mantenimiento>{
    return await this._MantenimientoRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Mantenimiento):Promise<Mantenimiento> {
    return await this._MantenimientoRepository.save(user);
  }
  async update(id: number, user: Mantenimiento): Promise<void> {
    return await this._MantenimientoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._MantenimientoRepository.softDelete(id);
    return 'Ok';
  }
}