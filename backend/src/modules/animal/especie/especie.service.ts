import { Injectable } from '@nestjs/common';
import { Especie } from '../../../models/animal/especie.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EspecieService {
  _EspecieRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Especie) private EspecieRepository: Repository<Especie>
  ) {
    this._EspecieRepository = EspecieRepository;
  }
  async findAll():Promise<Especie[]>{
    return await this._EspecieRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Especie>{
    return await this._EspecieRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Especie):Promise<Especie> {
    return await this._EspecieRepository.save(user);
  }
  async update(id: number, user: Especie): Promise<void> {
    return await this._EspecieRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._EspecieRepository.softDelete(id);
    return 'Ok';
  }
}