import { Injectable } from '@nestjs/common';
import { TipoRecurso } from '../../../models/miscelaneo/tipoRecurso.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoRecursoService {
  _TipoRecursoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoRecurso) private TipoRecursoRepository: Repository<TipoRecurso>
  ) {
    this._TipoRecursoRepository = TipoRecursoRepository;
  }
  async findAll():Promise<TipoRecurso[]>{
    return await this._TipoRecursoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoRecurso>{
    return await this._TipoRecursoRepository.findOneBy({id:id,status:true});
  }
  async create(user: TipoRecurso):Promise<TipoRecurso> {
    return await this._TipoRecursoRepository.save(user);
  }
  async  update( user: TipoRecurso): Promise<void> {
    return await this._TipoRecursoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoRecursoRepository.softDelete(id);
    return 'Ok';
  }
}