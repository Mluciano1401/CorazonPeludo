import { Injectable } from '@nestjs/common';
import { NivelUrgencia } from '../../../models/miscelaneo/nivelUrgencia.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NivelUrgenciaService {
  _NivelUrgenciaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(NivelUrgencia) private NivelUrgenciaRepository: Repository<NivelUrgencia>
  ) {
    this._NivelUrgenciaRepository = NivelUrgenciaRepository;
  }
  async findAll():Promise<NivelUrgencia[]>{
    return await this._NivelUrgenciaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<NivelUrgencia>{
    return await this._NivelUrgenciaRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: NivelUrgencia):Promise<NivelUrgencia> {
    return await this._NivelUrgenciaRepository.save(user);
  }
  async update(id: number, user: NivelUrgencia): Promise<void> {
    return await this._NivelUrgenciaRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._NivelUrgenciaRepository.softDelete(id);
    return 'Ok';
  }
}