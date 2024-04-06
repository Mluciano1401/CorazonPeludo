import { Injectable } from '@nestjs/common';
import { Tarea } from '../../../models/miscelaneo/tarea.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TareaService {
  _TareaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Tarea) private TareaRepository: Repository<Tarea>
  ) {
    this._TareaRepository = TareaRepository;
  }
  async findAll():Promise<Tarea[]>{
    return await this._TareaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Tarea>{
    return await this._TareaRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Tarea):Promise<Tarea> {
    return await this._TareaRepository.save(user);
  }
  async update(id: number, user: Tarea): Promise<void> {
    return await this._TareaRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._TareaRepository.softDelete(id);
    return 'Ok';
  }
}