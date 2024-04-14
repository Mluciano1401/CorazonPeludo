import { Injectable } from '@nestjs/common';
import { Sintoma } from '../../../models/salud/sintomas.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SintomasService {
  _SintomasRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Sintoma) private SintomasRepository: Repository<Sintoma>
  ) {
    this._SintomasRepository = SintomasRepository;
  }
  async findAll():Promise<Sintoma[]>{
    return await this._SintomasRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Sintoma>{
    return await this._SintomasRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Sintoma):Promise<Sintoma> {
    return await this._SintomasRepository.save(user);
  }
  async update(id: number, user: Sintoma): Promise<void> {
    return await this._SintomasRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._SintomasRepository.softDelete(id);
    return 'Ok';
  }
}