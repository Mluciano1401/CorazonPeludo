import { Injectable } from '@nestjs/common';
import { TipoEnfermedad } from '../../../models/salud/tipoEnfermedad.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoEnfermedadService {
  _TipoEnfermedadRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoEnfermedad) private TipoEnfermedadRepository: Repository<TipoEnfermedad>
  ) {
    this._TipoEnfermedadRepository = TipoEnfermedadRepository;
  }
  async findAll():Promise<TipoEnfermedad[]>{
    return await this._TipoEnfermedadRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoEnfermedad>{
    return await this._TipoEnfermedadRepository.findOneBy({id:id,status:true});
  }
  async create(user: TipoEnfermedad):Promise<TipoEnfermedad> {
    return await this._TipoEnfermedadRepository.save(user);
  }
  async  update( user: TipoEnfermedad): Promise<void> {
    return await this._TipoEnfermedadRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoEnfermedadRepository.softDelete(id);
    return 'Ok';
  }
}