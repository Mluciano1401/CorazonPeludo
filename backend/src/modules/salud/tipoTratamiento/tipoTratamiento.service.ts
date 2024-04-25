import { Injectable } from '@nestjs/common';
import { TipoTratamiento } from '../../../models/salud/tipoTratamiento.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoTratamientoService {
  _TipoTratamientoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoTratamiento) private TipoTratamientoRepository: Repository<TipoTratamiento>
  ) {
    this._TipoTratamientoRepository = TipoTratamientoRepository;
  }
  async findAll():Promise<TipoTratamiento[]>{
    return await this._TipoTratamientoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoTratamiento>{
    return await this._TipoTratamientoRepository.findOneBy({id:id,status:true});
  }
  async create(user: TipoTratamiento):Promise<TipoTratamiento> {
    return await this._TipoTratamientoRepository.save(user);
  }
  async  update( user: TipoTratamiento): Promise<void> {
    return await this._TipoTratamientoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoTratamientoRepository.softDelete(id);
    return 'Ok';
  }
}