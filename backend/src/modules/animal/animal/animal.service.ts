import { Injectable } from '@nestjs/common';
import { Animal } from '../../../models/animal.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalService {
  _AnimalRepository: Repository<any> | any;
  constructor(
   @InjectRepository(Animal) private AnimalRepository: Repository<Animal>
  ) {
    this._AnimalRepository = AnimalRepository;
  }
  async findAll():Promise<Animal[]>{
    return await this._AnimalRepository.findBy({status: true});
  }
  async findById(id:number):Promise<Animal>{
    return await this._AnimalRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: Animal):Promise<Animal> {
    return await this._AnimalRepository.save(user);
  }
  async update(id: number, user: Animal): Promise<void> {
    return await this._AnimalRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._AnimalRepository.softDelete(id);
    return 'Ok';
  }
}