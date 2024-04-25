import { Injectable } from '@nestjs/common';
import { Medicamento } from '../../../models/salud/medicamento.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MedicamentoService {
  _MedicamentoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Medicamento) private MedicamentoRepository: Repository<Medicamento>
  ) {
    this._MedicamentoRepository = MedicamentoRepository;
  }
  async findAll():Promise<Medicamento[]>{
    return await this._MedicamentoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Medicamento>{
    return await this._MedicamentoRepository.findOneBy({id:id,status:true});
  }
  async create(user: Medicamento):Promise<Medicamento> {
    return await this._MedicamentoRepository.save(user);
  }
  async  update( user: Medicamento): Promise<void> {
    return await this._MedicamentoRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._MedicamentoRepository.softDelete(id);
    return 'Ok';
  }
}