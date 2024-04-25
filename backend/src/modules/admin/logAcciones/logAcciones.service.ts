import { Injectable } from '@nestjs/common';
import { LogAcciones } from '../../../models/admin/logAcciones.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LogAccionesService {
  _LogAccionesRepository: Repository<any> | any;
  constructor(
   @InjectRepository(LogAcciones) private LogAccionesRepository: Repository<LogAcciones>
  ) {
    this._LogAccionesRepository = LogAccionesRepository;
  }
  async findAll():Promise<LogAcciones[]>{
    return await this._LogAccionesRepository.findBy({status: true});
  }
  async findById(id:number):Promise<LogAcciones>{
    return await this._LogAccionesRepository.findOneBy({id:id,status:true});
  }
  async create(user: LogAcciones):Promise<LogAcciones> {
    return await this._LogAccionesRepository.save(user);
  }
  async  update( user: LogAcciones): Promise<void> {
    return await this._LogAccionesRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._LogAccionesRepository.softDelete(id);
    return 'Ok';
  }
}