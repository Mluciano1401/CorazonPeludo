import { Injectable } from '@nestjs/common';
import { Cita } from '../../../models/miscelaneo/cita.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CitaService {
  _CitaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Cita) private CitaRepository: Repository<Cita>
  ) {
    this._CitaRepository = CitaRepository;
  }
  async findAll():Promise<Cita[]>{
    return await this._CitaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Cita>{
    return await this._CitaRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Cita):Promise<Cita> {
    return await this._CitaRepository.save(user);
  }
  async update(id: number, user: Cita): Promise<void> {
    return await this._CitaRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._CitaRepository.softDelete(id);
    return 'Ok';
  }
}