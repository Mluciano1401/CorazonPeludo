import { Injectable } from '@nestjs/common';
import { Estado } from '../../../models/miscelaneo/estado.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoService {
  _EstadoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Estado) private EstadoRepository: Repository<Estado>
  ) {
    this._EstadoRepository = EstadoRepository;
  }
  async findAll():Promise<Estado[]>{
    return await this._EstadoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Estado>{
    return await this._EstadoRepository.findOneBy({id:id,status:true});
  }
  async create(user: Estado):Promise<Estado> {
    return await this._EstadoRepository.save(user);
  }
  async  update( user: Estado): Promise<void> {
    return await this._EstadoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._EstadoRepository.softDelete(id);
    return 'Ok';
  }
}