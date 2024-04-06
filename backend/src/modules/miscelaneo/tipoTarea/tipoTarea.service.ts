import { Injectable } from '@nestjs/common';
import { TipoTarea } from '../../../models/miscelaneo/tipoTarea.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoTareaService {
  _TipoTareaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoTarea) private TipoTareaRepository: Repository<TipoTarea>
  ) {
    this._TipoTareaRepository = TipoTareaRepository;
  }
  async findAll():Promise<TipoTarea[]>{
    return await this._TipoTareaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoTarea>{
    return await this._TipoTareaRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: TipoTarea):Promise<TipoTarea> {
    return await this._TipoTareaRepository.save(user);
  }
  async update(id: number, user: TipoTarea): Promise<void> {
    return await this._TipoTareaRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoTareaRepository.softDelete(id);
    return 'Ok';
  }
}