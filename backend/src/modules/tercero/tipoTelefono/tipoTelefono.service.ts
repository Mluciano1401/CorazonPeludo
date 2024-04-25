import { Injectable } from '@nestjs/common';
import { TipoTelefono } from '../../../models/tercero/tipoTelefono.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoTelefonoService {
  _TipoTelefonoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoTelefono) private TipoTelefonoRepository: Repository<TipoTelefono>
  ) {
    this._TipoTelefonoRepository = TipoTelefonoRepository;
  }
  async findAll():Promise<TipoTelefono[]>{
    return await this._TipoTelefonoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoTelefono>{
    return await this._TipoTelefonoRepository.findOneBy({id:id,status:true});
  }
  async create(user: TipoTelefono):Promise<TipoTelefono> {
    return await this._TipoTelefonoRepository.save(user);
  }
  async  update( user: TipoTelefono): Promise<void> {
    return await this._TipoTelefonoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoTelefonoRepository.softDelete(id);
    return 'Ok';
  }
}