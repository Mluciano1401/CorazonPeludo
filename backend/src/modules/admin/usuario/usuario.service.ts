import { Injectable } from '@nestjs/common';
import { Usuario } from '../../../models/admin/usuario.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  _usuarioRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>
  ) {
    this._usuarioRepository = usuarioRepository;
  }
  async findAll():Promise<Usuario[]>{
    return await this._usuarioRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Usuario>{
    return await this._usuarioRepository.findOneBy({id: id,status:true});
  }
  async getUser(username:string):Promise<any>{
    return await this._usuarioRepository.findOneOrFail({where:{userName: username}});
  }
  async create(user: Usuario):Promise<Usuario> {
    return await this._usuarioRepository.save(user);
  }
  async  update( user: Usuario): Promise<void> {
    return await this._usuarioRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._usuarioRepository.softDelete(id);
    return 'Ok';
  }
}