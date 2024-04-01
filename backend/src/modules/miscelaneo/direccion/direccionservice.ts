import { Injectable } from '@nestjs/common';
import { Direccion } from '../../../models/miscelaneo/direccion.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DireccionService {
  _DireccionRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Direccion) private DireccionRepository: Repository<Direccion>
  ) {
    this._DireccionRepository = DireccionRepository;
  }
  async findAll():Promise<Direccion[]>{
    return await this._DireccionRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Direccion>{
    return await this._DireccionRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Direccion):Promise<Direccion> {
    return await this._DireccionRepository.save(user);
  }
  async update(id: number, user: Direccion): Promise<void> {
    return await this._DireccionRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._DireccionRepository.softDelete(id);
    return 'Ok';
  }
}