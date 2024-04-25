import { Injectable } from '@nestjs/common';
import { Cirugia } from '../../../models/salud/cirugia.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CirugiaService {
  _CirugiaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Cirugia) private CirugiaRepository: Repository<Cirugia>
  ) {
    this._CirugiaRepository = CirugiaRepository;
  }
  async findAll():Promise<Cirugia[]>{
    return await this._CirugiaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Cirugia>{
    return await this._CirugiaRepository.findOneBy({id:id,status:true});
  }
  async create(user: Cirugia):Promise<Cirugia> {
    return await this._CirugiaRepository.save(user);
  }
  async  update( user: Cirugia): Promise<void> {
    return await this._CirugiaRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._CirugiaRepository.softDelete(id);
    return 'Ok';
  }
}