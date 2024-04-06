import { Injectable } from '@nestjs/common';
import { TipoMedicamento } from '../../../models/salud/tipoMedicamento.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoMedicamentoService {
  _TipoMedicamentoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoMedicamento) private TipoMedicamentoRepository: Repository<TipoMedicamento>
  ) {
    this._TipoMedicamentoRepository = TipoMedicamentoRepository;
  }
  async findAll():Promise<TipoMedicamento[]>{
    return await this._TipoMedicamentoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoMedicamento>{
    return await this._TipoMedicamentoRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: TipoMedicamento):Promise<TipoMedicamento> {
    return await this._TipoMedicamentoRepository.save(user);
  }
  async update(id: number, user: TipoMedicamento): Promise<void> {
    return await this._TipoMedicamentoRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoMedicamentoRepository.softDelete(id);
    return 'Ok';
  }
}