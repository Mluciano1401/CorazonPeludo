import { Injectable } from '@nestjs/common';
import { TipoSintoma } from '../../../models/salud/tipoSintomas.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoSintomasService {
  _TipoSintomasRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoSintoma) private TipoSintomasRepository: Repository<TipoSintoma>
  ) {
    this._TipoSintomasRepository = TipoSintomasRepository;
  }
  async findAll():Promise<TipoSintoma[]>{
    return await this._TipoSintomasRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoSintoma>{
    return await this._TipoSintomasRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: TipoSintoma):Promise<TipoSintoma> {
    return await this._TipoSintomasRepository.save(user);
  }
  async update(id: number, user: TipoSintoma): Promise<void> {
    return await this._TipoSintomasRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoSintomasRepository.softDelete(id);
    return 'Ok';
  }
}