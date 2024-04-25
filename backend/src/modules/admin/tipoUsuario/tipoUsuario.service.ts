import { Injectable } from '@nestjs/common';
import { TipoUsuario } from '../../../models/admin/TipoUsuario.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoUsuarioService {
  _TipoUsuarioRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoUsuario) private TipoUsuarioRepository: Repository<TipoUsuario>
  ) {
    this._TipoUsuarioRepository = TipoUsuarioRepository;
  }
  async findAll():Promise<TipoUsuario[]>{
    return await this._TipoUsuarioRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoUsuario>{
    return await this._TipoUsuarioRepository.findOneBy({id : id, status:true});
  }
  async create(user: TipoUsuario):Promise<TipoUsuario> {
    return await this._TipoUsuarioRepository.save(user);
  }
  async update(user: TipoUsuario): Promise<void> {
    return await this._TipoUsuarioRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoUsuarioRepository.save(id);
    return 'Ok';
  }
}