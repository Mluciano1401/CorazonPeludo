import { Injectable } from '@nestjs/common';
import { Almacen } from '../../../models/almacen/almacen.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AlmacenService {
  _AlmacenRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Almacen) private AlmacenRepository: Repository<Almacen>
  ) {
    this._AlmacenRepository = AlmacenRepository;
  }
  async findAll():Promise<Almacen[]>{
    return await this._AlmacenRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Almacen>{
    return await this._AlmacenRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Almacen):Promise<Almacen> {
    return await this._AlmacenRepository.save(user);
  }
  async update(id: number, user: Almacen): Promise<void> {
    return await this._AlmacenRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._AlmacenRepository.softDelete(id);
    return 'Ok';
  }
}