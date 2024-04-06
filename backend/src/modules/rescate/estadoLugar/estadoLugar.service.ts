import { Injectable } from '@nestjs/common';
import { EstadoLugar } from '../../../models/rescate/estadoLugar.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoLugarService {
  _EstadoLugarRepository: Repository<any> | any;
  constructor(
   @InjectRepository(EstadoLugar) private EstadoLugarRepository: Repository<EstadoLugar>
  ) {
    this._EstadoLugarRepository = EstadoLugarRepository;
  }
  async findAll():Promise<EstadoLugar[]>{
    return await this._EstadoLugarRepository.findBy({status: true});
  }
  async findById(id:number):Promise<EstadoLugar>{
    return await this._EstadoLugarRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: EstadoLugar):Promise<EstadoLugar> {
    return await this._EstadoLugarRepository.save(user);
  }
  async update(id: number, user: EstadoLugar): Promise<void> {
    return await this._EstadoLugarRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._EstadoLugarRepository.softDelete(id);
    return 'Ok';
  }
}