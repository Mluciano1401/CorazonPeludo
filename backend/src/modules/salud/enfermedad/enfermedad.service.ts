import { Injectable } from '@nestjs/common';
import { Enfermedad } from '../../../models/enfermedad.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EnfermedadService {
  _EnfermedadRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Enfermedad) private EnfermedadRepository: Repository<Enfermedad>
  ) {
    this._EnfermedadRepository = EnfermedadRepository;
  }
  async findAll():Promise<Enfermedad[]>{
    return await this._EnfermedadRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Enfermedad>{
    return await this._EnfermedadRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Enfermedad):Promise<Enfermedad> {
    return await this._EnfermedadRepository.save(user);
  }
  async update(id: number, user: Enfermedad): Promise<void> {
    return await this._EnfermedadRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._EnfermedadRepository.softDelete(id);
    return 'Ok';
  }
}