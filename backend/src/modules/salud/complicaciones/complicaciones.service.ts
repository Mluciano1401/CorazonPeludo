import { Injectable } from '@nestjs/common';
import { Complicaciones } from '../../../models/salud/complicaciones.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ComplicacionesService {
  _ComplicacionesRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Complicaciones) private ComplicacionesRepository: Repository<Complicaciones>
  ) {
    this._ComplicacionesRepository = ComplicacionesRepository;
  }
  async findAll():Promise<Complicaciones[]>{
    return await this._ComplicacionesRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Complicaciones>{
    return await this._ComplicacionesRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Complicaciones):Promise<Complicaciones> {
    return await this._ComplicacionesRepository.save(user);
  }
  async update(id: number, user: Complicaciones): Promise<void> {
    return await this._ComplicacionesRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._ComplicacionesRepository.softDelete(id);
    return 'Ok';
  }
}