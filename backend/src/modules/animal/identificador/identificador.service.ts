import { Injectable } from '@nestjs/common';
import { Indentificador } from '../../../models/animal/identificador.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IndentificadorService {
  _IndentificadorRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Indentificador) private IndentificadorRepository: Repository<Indentificador>
  ) {
    this._IndentificadorRepository = IndentificadorRepository;
  }
  async findAll():Promise<Indentificador[]>{
    return await this._IndentificadorRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Indentificador>{
    return await this._IndentificadorRepository.findOneBy({id:id,status:true});
  }
  async create(user: Indentificador):Promise<Indentificador> {
    return await this._IndentificadorRepository.save(user);
  }
  async  update( user: Indentificador): Promise<void> {
    return await this._IndentificadorRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._IndentificadorRepository.softDelete(id);
    return 'Ok';
  }
}