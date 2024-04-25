import { Injectable } from '@nestjs/common';
import { Diagnostico } from '../../../models/salud/diagnostico.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DiagnosticoService {
  _DiagnosticoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Diagnostico) private DiagnosticoRepository: Repository<Diagnostico>
  ) {
    this._DiagnosticoRepository = DiagnosticoRepository;
  }
  async findAll():Promise<Diagnostico[]>{
    return await this._DiagnosticoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Diagnostico>{
    return await this._DiagnosticoRepository.findOneBy({id:id,status:true});
  }
  async create(user: Diagnostico):Promise<Diagnostico> {
    return await this._DiagnosticoRepository.save(user);
  }
  async  update( user: Diagnostico): Promise<void> {
    return await this._DiagnosticoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._DiagnosticoRepository.softDelete(id);
    return 'Ok';
  }
}