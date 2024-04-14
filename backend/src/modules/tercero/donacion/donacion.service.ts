import { Injectable } from '@nestjs/common';
import { Donacion } from '../../../models/tercero/donacion.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DonacionService {
  _DonacionRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Donacion) private DonacionRepository: Repository<Donacion>
  ) {
    this._DonacionRepository = DonacionRepository;
  }
  async findAll():Promise<Donacion[]>{
    return await this._DonacionRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Donacion>{
    return await this._DonacionRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Donacion):Promise<Donacion> {
    return await this._DonacionRepository.save(user);
  }
  async update(id: number, user: Donacion): Promise<void> {
    return await this._DonacionRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._DonacionRepository.softDelete(id);
    return 'Ok';
  }
}