import { Injectable } from '@nestjs/common';
import { HistorialMedico } from '../../../models/animal/historialMedico.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HistorialMedicoService {
  _HistorialMedicoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(HistorialMedico) private HistorialMedicoRepository: Repository<HistorialMedico>
  ) {
    this._HistorialMedicoRepository = HistorialMedicoRepository;
  }
  async findAll():Promise<HistorialMedico[]>{
    return await this._HistorialMedicoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<HistorialMedico>{
    return await this._HistorialMedicoRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: HistorialMedico):Promise<HistorialMedico> {
    return await this._HistorialMedicoRepository.save(user);
  }
  async update(id: number, user: HistorialMedico): Promise<void> {
    return await this._HistorialMedicoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._HistorialMedicoRepository.softDelete(id);
    return 'Ok';
  }
}