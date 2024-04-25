import { Injectable } from '@nestjs/common';
import { Sucursal } from '../../../models/tercero/surcusal.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SucursalService {
  _SucursalRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Sucursal) private SucursalRepository: Repository<Sucursal>
  ) {
    this._SucursalRepository = SucursalRepository;
  }
  async findAll():Promise<Sucursal[]>{
    return await this._SucursalRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Sucursal>{
    return await this._SucursalRepository.findOneBy({id:id,status:true});
  }
  async create(user: Sucursal):Promise<Sucursal> {
    return await this._SucursalRepository.save(user);
  }
  async  update( user: Sucursal): Promise<void> {
    return await this._SucursalRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._SucursalRepository.softDelete(id);
    return 'Ok';
  }
}