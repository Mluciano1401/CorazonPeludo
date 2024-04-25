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
    return await this._EstadoEmergenciaRepository.findOneBy({id:id,status:true});
  }
  async create(user: EstadoEmergencia):Promise<EstadoEmergencia> {
    return await this._EstadoEmergenciaRepository.save(user);
  }
  async  update( user: EstadoEmergencia): Promise<void> {
    return await this._EstadoEmergenciaRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._EstadoEmergenciaRepository.softDelete(id);
    return 'Ok';
  }
}