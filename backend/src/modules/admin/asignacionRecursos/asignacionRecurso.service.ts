import { Injectable } from '@nestjs/common';
import { AsignacionRecursos } from '../../../models/admin/asignacionRecursos.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AsignacionRecursosService {
  _AsignacionRecursosRepository: Repository<any> | any;
  constructor(
   @InjectRepository(AsignacionRecursos) private AsignacionRecursosRepository: Repository<AsignacionRecursos>
  ) {
    this._AsignacionRecursosRepository = AsignacionRecursosRepository;
  }
  async findAll():Promise<AsignacionRecursos[]>{
    return await this._AsignacionRecursosRepository.findBy({status: true});
  }
  async findById(id:number):Promise<AsignacionRecursos>{
    return await this._AsignacionRecursosRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: AsignacionRecursos):Promise<AsignacionRecursos> {
    return await this._AsignacionRecursosRepository.save(user);
  }
  async update(id: number, user: AsignacionRecursos): Promise<void> {
    return await this._AsignacionRecursosRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._AsignacionRecursosRepository.softDelete(id);
    return 'Ok';
  }
}