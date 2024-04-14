import { Injectable } from '@nestjs/common';
import { ViaAdministracion } from '../../../models/salud/viaAdministracion.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ViaAdministracionService {
  _ViaAministracionRepository: Repository<any> | any;
  constructor(
   @InjectRepository(ViaAdministracion) private ViaAministracionRepository: Repository<ViaAdministracion>
  ) {
    this._ViaAministracionRepository = ViaAministracionRepository;
  }
  async findAll():Promise<ViaAdministracion[]>{
    return await this._ViaAministracionRepository.findBy({status: true});
  }
  async findById(id:number):Promise<ViaAdministracion>{
    return await this._ViaAministracionRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: ViaAdministracion):Promise<ViaAdministracion> {
    return await this._ViaAministracionRepository.save(user);
  }
  async update(id: number, user: ViaAdministracion): Promise<void> {
    return await this._ViaAministracionRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._ViaAministracionRepository.softDelete(id);
    return 'Ok';
  }
}