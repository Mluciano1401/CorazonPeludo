import { Injectable } from '@nestjs/common';
import { Solicitante } from '../../../models/adopcion/solicitante.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SolicitanteService {
  _SolicitanteRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Solicitante) private SolicitanteRepository: Repository<Solicitante>
  ) {
    this._SolicitanteRepository = SolicitanteRepository;
  }
  async findAll():Promise<Solicitante[]>{
    return await this._SolicitanteRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Solicitante>{
    return await this._SolicitanteRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Solicitante):Promise<Solicitante> {
    return await this._SolicitanteRepository.save(user);
  }
  async update(id: number, user: Solicitante): Promise<void> {
    return await this._SolicitanteRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._SolicitanteRepository.softDelete(id);
    return 'Ok';
  }
}