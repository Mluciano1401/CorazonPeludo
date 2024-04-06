import { Injectable } from '@nestjs/common';
import { TipoPersona } from '../../../models/tercero/tipoPersona.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoPersonaService {
  _TipoPersonaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoPersona) private TipoPersonaRepository: Repository<TipoPersona>
  ) {
    this._TipoPersonaRepository = TipoPersonaRepository;
  }
  async findAll():Promise<TipoPersona[]>{
    return await this._TipoPersonaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoPersona>{
    return await this._TipoPersonaRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: TipoPersona):Promise<TipoPersona> {
    return await this._TipoPersonaRepository.save(user);
  }
  async update(id: number, user: TipoPersona): Promise<void> {
    return await this._TipoPersonaRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoPersonaRepository.softDelete(id);
    return 'Ok';
  }
}