import { Injectable } from '@nestjs/common';
import { TipoDonacion } from '../../../models/tercero/tipoDonacion.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoDonacionService {
  _TipoDonacionRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoDonacion) private TipoDonacionRepository: Repository<TipoDonacion>
  ) {
    this._TipoDonacionRepository = TipoDonacionRepository;
  }
  async findAll():Promise<TipoDonacion[]>{
    return await this._TipoDonacionRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoDonacion>{
    return await this._TipoDonacionRepository.findOneBy({id:id,status:true});
  }
  async create(user: TipoDonacion):Promise<TipoDonacion> {
    return await this._TipoDonacionRepository.save(user);
  }
  async  update( user: TipoDonacion): Promise<void> {
    return await this._TipoDonacionRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoDonacionRepository.softDelete(id);
    return 'Ok';
  }
}