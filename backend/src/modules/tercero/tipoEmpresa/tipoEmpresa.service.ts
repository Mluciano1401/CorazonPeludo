import { Injectable } from '@nestjs/common';
import { TipoEmpresa } from '../../../models/tercero/tipoEmpresa.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoEmpresaService {
  _TipoEmpresaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoEmpresa) private TipoEmpresaRepository: Repository<TipoEmpresa>
  ) {
    this._TipoEmpresaRepository = TipoEmpresaRepository;
  }
  async findAll():Promise<TipoEmpresa[]>{
    return await this._TipoEmpresaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoEmpresa>{
    return await this._TipoEmpresaRepository.findOneBy({id:id,status:true});
  }
  async create(user: TipoEmpresa):Promise<TipoEmpresa> {
    return await this._TipoEmpresaRepository.save(user);
  }
  async  update( user: TipoEmpresa): Promise<void> {
    return await this._TipoEmpresaRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoEmpresaRepository.softDelete(id);
    return 'Ok';
  }
}