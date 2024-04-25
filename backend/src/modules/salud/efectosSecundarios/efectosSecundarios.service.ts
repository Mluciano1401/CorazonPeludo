import { Injectable } from '@nestjs/common';
import { EfectosSecundarios } from '../../../models/salud/efectosSecundarios.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EfectosSecundariosService {
  _EfectosSecundariosRepository: Repository<any> | any;
  constructor(
   @InjectRepository(EfectosSecundarios) private EfectosSecundariosRepository: Repository<EfectosSecundarios>
  ) {
    this._EfectosSecundariosRepository = EfectosSecundariosRepository;
  }
  async findAll():Promise<EfectosSecundarios[]>{
    return await this._EfectosSecundariosRepository.findBy({status: true});
  }
  async findById(id:number):Promise<EfectosSecundarios>{
    return await this._EfectosSecundariosRepository.findOneBy({id:id,status:true});
  }
  async create(user: EfectosSecundarios):Promise<EfectosSecundarios> {
    return await this._EfectosSecundariosRepository.save(user);
  }
  async  update( user: EfectosSecundarios): Promise<void> {
    return await this._EfectosSecundariosRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._EfectosSecundariosRepository.softDelete(id);
    return 'Ok';
  }
}