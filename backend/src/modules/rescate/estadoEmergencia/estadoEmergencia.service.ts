import { Injectable } from '@nestjs/common';
import { EstadoEmergencia } from '../../../models/rescate/estadoEmergencia.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoEmergenciaService {
  _EstadoEmergenciaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(EstadoEmergencia) private EstadoEmergenciaRepository: Repository<EstadoEmergencia>
  ) {
    this._EstadoEmergenciaRepository = EstadoEmergenciaRepository;
  }
  async findAll():Promise<EstadoEmergencia[]>{
    return await this._EstadoEmergenciaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<EstadoEmergencia>{
    return await this._EstadoEmergenciaRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: EstadoEmergencia):Promise<EstadoEmergencia> {
    return await this._EstadoEmergenciaRepository.save(user);
  }
  async update(id: number, user: EstadoEmergencia): Promise<void> {
    return await this._EstadoEmergenciaRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._EstadoEmergenciaRepository.softDelete(id);
    return 'Ok';
  }
}