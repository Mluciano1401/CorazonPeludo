import { Injectable } from '@nestjs/common';
import { Vacuna } from '../../../models/salud/vacuna.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VacunaService {
  _VacunaRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Vacuna) private VacunaRepository: Repository<Vacuna>
  ) {
    this._VacunaRepository = VacunaRepository;
  }
  async findAll():Promise<Vacuna[]>{
    return await this._VacunaRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Vacuna>{
    return await this._VacunaRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Vacuna):Promise<Vacuna> {
    return await this._VacunaRepository.save(user);
  }
  async update(id: number, user: Vacuna): Promise<void> {
    return await this._VacunaRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._VacunaRepository.softDelete(id);
    return 'Ok';
  }
}