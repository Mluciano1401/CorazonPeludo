import { Injectable } from '@nestjs/common';
import { Vehiculo } from '../../../models/vehiculo/vehiculo.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VehiculoService {
  _VehiculoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Vehiculo) private VehiculoRepository: Repository<Vehiculo>
  ) {
    this._VehiculoRepository = VehiculoRepository;
  }
  async findAll():Promise<Vehiculo[]>{
    return await this._VehiculoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Vehiculo>{
    return await this._VehiculoRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Vehiculo):Promise<Vehiculo> {
    return await this._VehiculoRepository.save(user);
  }
  async update(id: number, user: Vehiculo): Promise<void> {
    return await this._VehiculoRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._VehiculoRepository.softDelete(id);
    return 'Ok';
  }
}