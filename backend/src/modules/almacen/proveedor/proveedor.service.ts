import { Injectable } from '@nestjs/common';
import { Proveedor } from '../../../models/almacen/proveedor.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedorService {
  _ProveedorRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Proveedor) private ProveedorRepository: Repository<Proveedor>
  ) {
    this._ProveedorRepository = ProveedorRepository;
  }
  async findAll():Promise<Proveedor[]>{
    return await this._ProveedorRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Proveedor>{
    return await this._ProveedorRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Proveedor):Promise<Proveedor> {
    return await this._ProveedorRepository.save(user);
  }
  async update(id: number, user: Proveedor): Promise<void> {
    return await this._ProveedorRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._ProveedorRepository.softDelete(id);
    return 'Ok';
  }
}