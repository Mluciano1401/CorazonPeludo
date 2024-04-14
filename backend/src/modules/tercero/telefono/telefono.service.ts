import { Injectable } from '@nestjs/common';
import { Telefono } from '../../../models/tercero/telefono.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TelefonoService {
  _TelefonoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Telefono) private TelefonoRepository: Repository<Telefono>
  ) {
    this._TelefonoRepository = TelefonoRepository;
  }
  async findAll():Promise<Telefono[]>{
    return await this._TelefonoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Telefono>{
    return await this._TelefonoRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Telefono):Promise<Telefono> {
    return await this._TelefonoRepository.save(user);
  }
  async update(id: number, user: Telefono): Promise<void> {
    return await this._TelefonoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TelefonoRepository.softDelete(id);
    return 'Ok';
  }
}