import { Injectable } from '@nestjs/common';
import { AsignacionTarea } from '../../../models/admin/asignacionTareas.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AsignacionTareaService {
  _AsignacionTareaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(AsignacionTarea) private AsignacionTareaRepository: Repository<AsignacionTarea>
  ) {
    this._AsignacionTareaRepository = AsignacionTareaRepository;
  }
  async findAll():Promise<AsignacionTarea[]>{
    return await this._AsignacionTareaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<AsignacionTarea>{
    return await this._AsignacionTareaRepository.findOneBy({id: id,status:true});
  }
  async create(user: AsignacionTarea):Promise<AsignacionTarea> {
    return await this._AsignacionTareaRepository.save(user);
  }
  async  update( user: AsignacionTarea): Promise<void> {
    return await this._AsignacionTareaRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._AsignacionTareaRepository.softDelete(id);
    return 'Ok';
  }
}