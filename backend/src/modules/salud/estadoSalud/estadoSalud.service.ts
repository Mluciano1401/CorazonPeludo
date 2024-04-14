import { Injectable } from '@nestjs/common';
import { EstadoSalud } from '../../../models/salud/estadoSalud.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoSaludService {
  _EstadoSaludRepository: Repository<any> | any;
  constructor(
   @InjectRepository(EstadoSalud) private EstadoSaludRepository: Repository<EstadoSalud>
  ) {
    this._EstadoSaludRepository = EstadoSaludRepository;
  }
  async findAll():Promise<EstadoSalud[]>{
    return await this._EstadoSaludRepository.findBy({status: true});
  }
  async findById(id:number):Promise<EstadoSalud>{
    return await this._EstadoSaludRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: EstadoSalud):Promise<EstadoSalud> {
    return await this._EstadoSaludRepository.save(user);
  }
  async update(id: number, user: EstadoSalud): Promise<void> {
    return await this._EstadoSaludRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._EstadoSaludRepository.softDelete(id);
    return 'Ok';
  }
}