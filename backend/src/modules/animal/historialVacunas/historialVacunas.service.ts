import { Injectable } from '@nestjs/common';
import { HistorialVacunas } from '../../../models/animal/historialVacunas.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HistorialVacunasService {
  _HistorialVacunasRepository: Repository<any> | any;
  constructor(
   @InjectRepository(HistorialVacunas) private HistorialVacunasRepository: Repository<HistorialVacunas>
  ) {
    this._HistorialVacunasRepository = HistorialVacunasRepository;
  }
  async findAll():Promise<HistorialVacunas[]>{
    return await this._HistorialVacunasRepository.findBy({status: true});
  }
  async findById(id:number):Promise<HistorialVacunas>{
    return await this._HistorialVacunasRepository.findOneBy({id:id,status:true});
  }
  async create(user: HistorialVacunas):Promise<HistorialVacunas> {
    return await this._HistorialVacunasRepository.save(user);
  }
  async  update( user: HistorialVacunas): Promise<void> {
    return await this._HistorialVacunasRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._HistorialVacunasRepository.softDelete(id);
    return 'Ok';
  }
}