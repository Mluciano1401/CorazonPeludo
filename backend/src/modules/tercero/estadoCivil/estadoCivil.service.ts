import { Injectable } from '@nestjs/common';
import { EstadoCivil } from '../../../models/tercero/estadoCivil.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoCivilService {
  _EstadoCivilRepository: Repository<any> | any;
  constructor(
   @InjectRepository(EstadoCivil) private EstadoCivilRepository: Repository<EstadoCivil>
  ) {
    this._EstadoCivilRepository = EstadoCivilRepository;
  }
  async findAll():Promise<EstadoCivil[]>{
    return await this._EstadoCivilRepository.findBy({status: true});
  }
  async findById(id:number):Promise<EstadoCivil>{
    return await this._EstadoCivilRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: EstadoCivil):Promise<EstadoCivil> {
    return await this._EstadoCivilRepository.save(user);
  }
  async update(id: number, user: EstadoCivil): Promise<void> {
    return await this._EstadoCivilRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._EstadoCivilRepository.softDelete(id);
    return 'Ok';
  }
}