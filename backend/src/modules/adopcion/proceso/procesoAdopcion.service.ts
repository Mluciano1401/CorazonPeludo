import { Injectable } from '@nestjs/common';
import { ProcesoAdopcion } from '../../../models/adopcion/proceso.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProcesoAdopcionService {
  _ProcesoAdopcionRepository: Repository<any> | any;
  constructor(
   @InjectRepository(ProcesoAdopcion) private ProcesoAdopcionRepository: Repository<ProcesoAdopcion>
  ) {
    this._ProcesoAdopcionRepository = ProcesoAdopcionRepository;
  }
  async findAll():Promise<ProcesoAdopcion[]>{
    return await this._ProcesoAdopcionRepository.findBy({status: true});
  }
  async findById(id:number):Promise<ProcesoAdopcion>{
    return await this._ProcesoAdopcionRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: ProcesoAdopcion):Promise<ProcesoAdopcion> {
    return await this._ProcesoAdopcionRepository.save(user);
  }
  async update(id: number, user: ProcesoAdopcion): Promise<void> {
    return await this._ProcesoAdopcionRepository.save(user);
  }
  async delete(id: number): Promise<string> {
    await this._ProcesoAdopcionRepository.softDelete(id);
    return 'Ok';
  }
}