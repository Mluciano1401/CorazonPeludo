import { Injectable } from '@nestjs/common';
import { TipoEmpleado } from '../../../models/tercero/tipoEmpleado.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoEmpleadoService {
  _TipoEmpleadoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoEmpleado) private TipoEmpleadoRepository: Repository<TipoEmpleado>
  ) {
    this._TipoEmpleadoRepository = TipoEmpleadoRepository;
  }
  async findAll():Promise<TipoEmpleado[]>{
    return await this._TipoEmpleadoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoEmpleado>{
    return await this._TipoEmpleadoRepository.findOneBy({id:id,status:true});
  }
  async create(user: TipoEmpleado):Promise<TipoEmpleado> {
    return await this._TipoEmpleadoRepository.save(user);
  }
  async  update( user: TipoEmpleado): Promise<void> {
    return await this._TipoEmpleadoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoEmpleadoRepository.softDelete(id);
    return 'Ok';
  }
}