import { Injectable } from '@nestjs/common';
import { Empleado } from '../../../models/tercero/empleado.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadoService {
  _EmpleadoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Empleado) private EmpleadoRepository: Repository<Empleado>
  ) {
    this._EmpleadoRepository = EmpleadoRepository;
  }
  async findAll():Promise<Empleado[]>{
    return await this._EmpleadoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Empleado>{
    return await this._EmpleadoRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Empleado):Promise<Empleado> {
    return await this._EmpleadoRepository.save(user);
  }
  async update(id: number, user: Empleado): Promise<void> {
    return await this._EmpleadoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._EmpleadoRepository.softDelete(id);
    return 'Ok';
  }
}