import { Injectable } from '@nestjs/common';
import { TipoPiel } from '../../../models/animal/tipoPiel.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoPielService {
  _TipoPielRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoPiel) private TipoPielRepository: Repository<TipoPiel>
  ) {
    this._TipoPielRepository = TipoPielRepository;
  }
  async findAll():Promise<TipoPiel[]>{
    return await this._TipoPielRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoPiel>{
    return await this._TipoPielRepository.findOneBy({id:id,status:true});
  }
  async create(user: TipoPiel):Promise<TipoPiel> {
    return await this._TipoPielRepository.save(user);
  }
  async  update( user: TipoPiel): Promise<void> {
    return await this._TipoPielRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoPielRepository.softDelete(id);
    return 'Ok';
  }
}