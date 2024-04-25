import { Injectable } from '@nestjs/common';
import { ActividadEconomica } from '../../../models/adopcion/actividadEconomica.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ActividadEconomicaService {
  _ActividadEconomicaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(ActividadEconomica) private ActividadEconomicaRepository: Repository<ActividadEconomica>
  ) {
    this._ActividadEconomicaRepository = ActividadEconomicaRepository;
  }
  async findAll():Promise<ActividadEconomica[]>{
    return await this._ActividadEconomicaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<ActividadEconomica>{
    return await this._ActividadEconomicaRepository.findOneBy({id: id,status:true});
  }
  async create(user: ActividadEconomica):Promise<ActividadEconomica> {
    return await this._ActividadEconomicaRepository.save(user);
  }
  async  update( user: ActividadEconomica): Promise<void> {
    return await this._ActividadEconomicaRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._ActividadEconomicaRepository.softDelete(id);
    return 'Ok';
  }
}