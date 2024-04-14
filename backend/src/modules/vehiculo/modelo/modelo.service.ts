import { Injectable } from '@nestjs/common';
import { Modelo } from '../../../models/vehiculo/modelo.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ModeloService {
  _ModeloRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Modelo) private ModeloRepository: Repository<Modelo>
  ) {
    this._ModeloRepository = ModeloRepository;
  }
  async findAll():Promise<Modelo[]>{
    return await this._ModeloRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Modelo>{
    return await this._ModeloRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Modelo):Promise<Modelo> {
    return await this._ModeloRepository.save(user);
  }
  async update(id: number, user: Modelo): Promise<void> {
    return await this._ModeloRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._ModeloRepository.softDelete(id);
    return 'Ok';
  }
}