import { Injectable } from '@nestjs/common';
import { Mision } from '../../../models/rescate/misionRescate.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MisionService {
  _MisionRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Mision) private MisionRepository: Repository<Mision>
  ) {
    this._MisionRepository = MisionRepository;
  }
  async findAll():Promise<Mision[]>{
    return await this._MisionRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Mision>{
    return await this._MisionRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Mision):Promise<Mision> {
    return await this._MisionRepository.save(user);
  }
  async update(id: number, user: Mision): Promise<void> {
    return await this._MisionRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._MisionRepository.softDelete(id);
    return 'Ok';
  }
}