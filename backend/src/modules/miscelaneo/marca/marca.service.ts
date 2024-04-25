import { Injectable } from '@nestjs/common';
import { Marca } from '../../../models/miscelaneo/marca.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MarcaService {
  _MarcaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Marca) private MarcaRepository: Repository<Marca>
  ) {
    this._MarcaRepository = MarcaRepository;
  }
  async findAll():Promise<Marca[]>{
    return await this._MarcaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Marca>{
    return await this._MarcaRepository.findOneBy({id:id,status:true});
  }
  async create(user: Marca):Promise<Marca> {
    return await this._MarcaRepository.save(user);
  }
  async  update( user: Marca): Promise<void> {
    return await this._MarcaRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._MarcaRepository.softDelete(id);
    return 'Ok';
  }
}