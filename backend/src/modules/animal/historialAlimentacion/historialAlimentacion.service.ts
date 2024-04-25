import { Injectable } from '@nestjs/common';
import { HistorialAlimentacion } from '../../../models/animal/historialAlimentacion.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HistorialAlimentacionService {
  _HistorialAlimentacionRepository: Repository<any> | any;
  constructor(
   @InjectRepository(HistorialAlimentacion) private HistorialAlimentacionRepository: Repository<HistorialAlimentacion>
  ) {
    this._HistorialAlimentacionRepository = HistorialAlimentacionRepository;
  }
  async findAll():Promise<HistorialAlimentacion[]>{
    return await this._HistorialAlimentacionRepository.findBy({status: true});
  }
  async findById(id:number):Promise<HistorialAlimentacion>{
    return await this._HistorialAlimentacionRepository.findOneBy({id:id,status:true});
  }
  async create(user: HistorialAlimentacion):Promise<HistorialAlimentacion> {
    return await this._HistorialAlimentacionRepository.save(user);
  }
  async  update( user: HistorialAlimentacion): Promise<void> {
    return await this._HistorialAlimentacionRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._HistorialAlimentacionRepository.softDelete(id);
    return 'Ok';
  }
}