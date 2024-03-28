import { Injectable } from '@nestjs/common';
import { SolicitudR } from '../../../models/solicitudRescate.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SolicitudRService {
  _SolicitudRRepository: Repository<any> | any;
  constructor(
   @InjectRepository(SolicitudR) private SolicitudRRepository: Repository<SolicitudR>
  ) {
    this._SolicitudRRepository = SolicitudRRepository;
  }
  async findAll():Promise<SolicitudR[]>{
    return await this._SolicitudRRepository.findBy({status: true});
  }
  async findById(id:number):Promise<SolicitudR>{
    return await this._SolicitudRRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: SolicitudR):Promise<SolicitudR> {
    return await this._SolicitudRRepository.save(user);
  }
  async update(id: number, user: SolicitudR): Promise<void> {
    return await this._SolicitudRRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._SolicitudRRepository.softDelete(id);
    return 'Ok';
  }
}