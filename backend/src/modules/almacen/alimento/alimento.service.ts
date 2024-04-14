import { Injectable } from '@nestjs/common';
import { Alimento } from '../../../models/almacen/alimento.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AlimentoService {
  _AlimentoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Alimento) private AlimentoRepository: Repository<Alimento>
  ) {
    this._AlimentoRepository = AlimentoRepository;
  }
  async findAll():Promise<Alimento[]>{
    return await this._AlimentoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Alimento>{
    return await this._AlimentoRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Alimento):Promise<Alimento> {
    return await this._AlimentoRepository.save(user);
  }
  async update(id: number, user: Alimento): Promise<void> {
    return await this._AlimentoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._AlimentoRepository.softDelete(id);
    return 'Ok';
  }
}