import { Injectable } from '@nestjs/common';
import { TipoAlimento } from '../../../models/almacen/tipoAlimento.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoAlimentoService {
  _TipoAlimentoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoAlimento) private TipoAlimentoRepository: Repository<TipoAlimento>
  ) {
    this._TipoAlimentoRepository = TipoAlimentoRepository;
  }
  async findAll():Promise<TipoAlimento[]>{
    return await this._TipoAlimentoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoAlimento>{
    return await this._TipoAlimentoRepository.findOneBy({id:id,status:true});
  }
  async create(user: TipoAlimento):Promise<TipoAlimento> {
    return await this._TipoAlimentoRepository.save(user);
  }
  async  update( user: TipoAlimento): Promise<void> {
    return await this._TipoAlimentoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoAlimentoRepository.softDelete(id);
    return 'Ok';
  }
}