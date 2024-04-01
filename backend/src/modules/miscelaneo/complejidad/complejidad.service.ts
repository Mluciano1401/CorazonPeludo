import { Injectable } from '@nestjs/common';
import { Complejidad } from '../../../models/miscelaneo/complejidad.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ComplejidadService {
  _ComplejidadRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Complejidad) private ComplejidadRepository: Repository<Complejidad>
  ) {
    this._ComplejidadRepository = ComplejidadRepository;
  }
  async findAll():Promise<Complejidad[]>{
    return await this._ComplejidadRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Complejidad>{
    return await this._ComplejidadRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Complejidad):Promise<Complejidad> {
    return await this._ComplejidadRepository.save(user);
  }
  async update(id: number, user: Complejidad): Promise<void> {
    return await this._ComplejidadRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._ComplejidadRepository.softDelete(id);
    return 'Ok';
  }
}