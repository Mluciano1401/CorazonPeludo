import { Injectable } from '@nestjs/common';
import { PolizaSeguro } from '../../../models/salud/polizaSeguro.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PolizaSeguroService {
  _PolizaSeguroRepository: Repository<any> | any;
  constructor(
   @InjectRepository(PolizaSeguro) private PolizaSeguroRepository: Repository<PolizaSeguro>
  ) {
    this._PolizaSeguroRepository = PolizaSeguroRepository;
  }
  async findAll():Promise<PolizaSeguro[]>{
    return await this._PolizaSeguroRepository.findBy({status: true});
  }
  async findById(id:number):Promise<PolizaSeguro>{
    return await this._PolizaSeguroRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: PolizaSeguro):Promise<PolizaSeguro> {
    return await this._PolizaSeguroRepository.save(user);
  }
  async update(id: number, user: PolizaSeguro): Promise<void> {
    return await this._PolizaSeguroRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._PolizaSeguroRepository.softDelete(id);
    return 'Ok';
  }
}