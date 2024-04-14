import { Injectable } from '@nestjs/common';
import { TipoVehiculo } from '../../../models/vehiculo/tipoVehiculo.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoVehiculoService {
  _TipoVehiculoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoVehiculo) private TipoVehiculoRepository: Repository<TipoVehiculo>
  ) {
    this._TipoVehiculoRepository = TipoVehiculoRepository;
  }
  async findAll():Promise<TipoVehiculo[]>{
    return await this._TipoVehiculoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoVehiculo>{
    return await this._TipoVehiculoRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: TipoVehiculo):Promise<TipoVehiculo> {
    return await this._TipoVehiculoRepository.save(user);
  }
  async update(id: number, user: TipoVehiculo): Promise<void> {
    return await this._TipoVehiculoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoVehiculoRepository.softDelete(id);
    return 'Ok';
  }
}