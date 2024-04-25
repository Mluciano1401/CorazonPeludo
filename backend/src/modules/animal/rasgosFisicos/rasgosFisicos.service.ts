import { Injectable } from '@nestjs/common';
import { RasgosFisicos } from '../../../models/animal/rasgosFisicos.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RasgosFisicosService {
  _RasgosFisicosRepository: Repository<any> | any;
  constructor(
   @InjectRepository(RasgosFisicos) private RasgosFisicosRepository: Repository<RasgosFisicos>
  ) {
    this._RasgosFisicosRepository = RasgosFisicosRepository;
  }
  async findAll():Promise<RasgosFisicos[]>{
    return await this._RasgosFisicosRepository.findBy({status: true});
  }
  async findById(id:number):Promise<RasgosFisicos>{
    return await this._RasgosFisicosRepository.findOneBy({id:id,status:true});
  }
  async create(user: RasgosFisicos):Promise<RasgosFisicos> {
    return await this._RasgosFisicosRepository.save(user);
  }
  async  update( user: RasgosFisicos): Promise<void> {
    return await this._RasgosFisicosRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._RasgosFisicosRepository.softDelete(id);
    return 'Ok';
  }
}