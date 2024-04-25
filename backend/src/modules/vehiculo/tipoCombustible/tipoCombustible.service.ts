import { Injectable } from '@nestjs/common';
import { TipoCombustible } from '../../../models/vehiculo/tipoCombustible.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoCombustibleService {
  _TipoCombustibleRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoCombustible) private TipoCombustibleRepository: Repository<TipoCombustible>
  ) {
    this._TipoCombustibleRepository = TipoCombustibleRepository;
  }
  async findAll():Promise<TipoCombustible[]>{
    return await this._TipoCombustibleRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoCombustible>{
    return await this._TipoCombustibleRepository.findOneBy({id:id,status:true});
  }
  async create(user: TipoCombustible):Promise<TipoCombustible> {
    return await this._TipoCombustibleRepository.save(user);
  }
  async  update( user: TipoCombustible): Promise<void> {
    return await this._TipoCombustibleRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoCombustibleRepository.softDelete(id);
    return 'Ok';
  }
}