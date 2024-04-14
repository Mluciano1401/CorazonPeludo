import { Injectable } from '@nestjs/common';
import { Origen } from '../../../models/miscelaneo/origen.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrigenService {
  _OrigenRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Origen) private OrigenRepository: Repository<Origen>
  ) {
    this._OrigenRepository = OrigenRepository;
  }
  async findAll():Promise<Origen[]>{
    return await this._OrigenRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Origen>{
    return await this._OrigenRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Origen):Promise<Origen> {
    return await this._OrigenRepository.save(user);
  }
  async update(id: number, user: Origen): Promise<void> {
    return await this._OrigenRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._OrigenRepository.softDelete(id);
    return 'Ok';
  }
}