import { Injectable } from '@nestjs/common';
import { Tratamiento } from '../../../models/salud/tratamiento.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TratamientoService {
  _TratamientoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Tratamiento) private TratamientoRepository: Repository<Tratamiento>
  ) {
    this._TratamientoRepository = TratamientoRepository;
  }
  async findAll():Promise<Tratamiento[]>{
    return await this._TratamientoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Tratamiento>{
    return await this._TratamientoRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Tratamiento):Promise<Tratamiento> {
    return await this._TratamientoRepository.save(user);
  }
  async update(id: number, user: Tratamiento): Promise<void> {
    return await this._TratamientoRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._TratamientoRepository.softDelete(id);
    return 'Ok';
  }
}