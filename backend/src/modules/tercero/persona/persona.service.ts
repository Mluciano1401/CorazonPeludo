import { Injectable } from '@nestjs/common';
import { Persona } from '../../../models/tercero/persona.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {
  _PersonaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Persona) private PersonaRepository: Repository<Persona>
  ) {
    this._PersonaRepository = PersonaRepository;
  }
  async findAll():Promise<Persona[]>{
    return await this._PersonaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Persona>{
    return await this._PersonaRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Persona):Promise<Persona> {
    return await this._PersonaRepository.save(user);
  }
  async update(id: number, user: Persona): Promise<void> {
    return await this._PersonaRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._PersonaRepository.softDelete(id);
    return 'Ok';
  }
}