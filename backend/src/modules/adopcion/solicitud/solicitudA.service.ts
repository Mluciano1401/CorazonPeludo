import { Injectable } from '@nestjs/common';
import { Solicitud } from '../../../models/adopcion/solicitudAdopcion.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SolicitudAService {
  _SolicitudRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Solicitud) private SolicitudRepository: Repository<Solicitud>
  ) {
    this._SolicitudRepository = SolicitudRepository;
  }
  async findAll():Promise<Solicitud[]>{
    return await this._SolicitudRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Solicitud>{
    return await this._SolicitudRepository.findOneBy({id:id,status:true});
  }
  async create(user: Solicitud):Promise<Solicitud> {
    return await this._SolicitudRepository.save(user);
  }
  async  update( user: Solicitud): Promise<void> {
    return await this._SolicitudRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._SolicitudRepository.softDelete(id);
    return 'Ok';
  }
}